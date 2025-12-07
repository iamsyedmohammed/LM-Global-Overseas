"use client";

import React, { useState, useMemo, useEffect } from "react";
import { medicalRotations, RotationCity, Rotation } from "@/data/medical-rotations";
import { Card } from "@/components/ui/Card";
import { Download, Search, ChevronLeft, ChevronRight, X, Eye, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/Button";
import jsPDF from "jspdf";
import {
    FaHeartbeat, FaBrain, FaStethoscope, FaUserMd, FaSyringe,
    FaAmbulance, FaChild, FaCut, FaProcedures, FaRadiation,
    FaBabyCarriage, FaNotesMedical, FaDna, FaMicroscope,
    FaWhatsapp
} from "react-icons/fa";

const ITEMS_PER_PAGE = 12;

// --- ICON MAPPING ---
const getRotationIcon = (title: string) => {
    const lower = title.toLowerCase();
    if (lower.includes("cardio")) return <FaHeartbeat className="h-6 w-6 text-red-500" />;
    if (lower.includes("neuro")) return <FaBrain className="h-6 w-6 text-pink-500" />;
    if (lower.includes("pedia")) return <FaChild className="h-6 w-6 text-blue-400" />;
    if (lower.includes("surg")) return <FaCut className="h-6 w-6 text-gray-600" />;
    if (lower.includes("anest")) return <FaSyringe className="h-6 w-6 text-emerald-500" />;
    if (lower.includes("er") || lower.includes("emerg")) return <FaAmbulance className="h-6 w-6 text-red-600" />;
    if (lower.includes("radio")) return <FaRadiation className="h-6 w-6 text-yellow-500" />;
    if (lower.includes("obgyn") || lower.includes("women")) return <FaBabyCarriage className="h-6 w-6 text-pink-400" />;
    if (lower.includes("nephro")) return <FaProcedures className="h-6 w-6 text-orange-500" />;
    if (lower.includes("pathology") || lower.includes("hema")) return <FaMicroscope className="h-6 w-6 text-indigo-500" />;
    if (lower.includes("family")) return <FaUserMd className="h-6 w-6 text-green-600" />;
    return <FaStethoscope className="h-6 w-6 text-primary" />;
};

export function MedicalRotationsContent() {
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCity, setSelectedCity] = useState<RotationCity | "All">("All");
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>("All");
    const [currentPage, setCurrentPage] = useState(1);

    // Modal State
    const [viewingRotation, setViewingRotation] = useState<(Rotation & { city: RotationCity }) | null>(null);
    const [rotationDetails, setRotationDetails] = useState<{ kvPairs: { label: string, value: string }[], sections: { title?: string, content: string }[] } | null>(null);
    const [isLoadingDetails, setIsLoadingDetails] = useState(false);

    // Flatten all rotations
    const allRotations = useMemo(() => {
        const flatList: (Rotation & { city: RotationCity })[] = [];
        (Object.keys(medicalRotations) as RotationCity[]).forEach((city) => {
            medicalRotations[city].forEach((rotation) => {
                flatList.push({ ...rotation, city });
            });
        });
        return flatList;
    }, []);

    // Extract Specialties
    const specialties = useMemo(() => {
        const specs = new Set<string>();
        allRotations.forEach(r => {
            // Simple heuristic to extract main specialty word
            const title = r.title.replace(/\d+/g, '').trim();
            specs.add(title);
        });
        return Array.from(specs).sort();
    }, [allRotations]);

    // Filter Logic
    const filteredRotations = useMemo(() => {
        return allRotations.filter((rotation) => {
            const matchesCity = selectedCity === "All" || rotation.city === selectedCity;

            // Loose specialty matching
            const matchesSpecialty = selectedSpecialty === "All" ||
                rotation.title.toLowerCase().includes(selectedSpecialty.toLowerCase().replace(/\d+/, '').trim());

            const matchesSearch = rotation.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                rotation.description.toLowerCase().includes(searchQuery.toLowerCase());

            return matchesCity && matchesSpecialty && matchesSearch;
        });
    }, [selectedCity, selectedSpecialty, searchQuery, allRotations]);

    // Pagination
    const totalPages = Math.ceil(filteredRotations.length / ITEMS_PER_PAGE);
    const paginatedRotations = filteredRotations.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    useEffect(() => { setCurrentPage(1); }, [selectedCity, selectedSpecialty, searchQuery]);

    // --- FETCH & PARSE DETAILS FOR MODAL ---
    useEffect(() => {
        if (!viewingRotation) {
            setRotationDetails(null);
            return;
        }

        const fetchDetails = async () => {
            setIsLoadingDetails(true);
            try {
                const response = await fetch(viewingRotation.path);
                const text = await response.text();

                // Parsing Logic (Mirroring PDF Logic largely)
                const rawLines = text.split('\n').map(l => l.trim()).filter(l => l);
                const knownHeaders = ["city", "state", "duration", "specialty", "physician", "rotation fee", "application fee", "malpractice", "hipaa", "residency", "fmg", "accommodation", "description", "document", "payment", "schedule", "timings", "zip", "hospital", "clinic", "address", "lor type", "rotation type", "rotation setting", "availability", "hands-on training", "refund policy", "learning experience", "daily schedule", "responsibilities", "outpatient clinics"];
                const shortValueFields = ["city", "state", "zip", "specialty", "rotation fee", "application fee", "duration", "availability", "rotation type", "rotation setting", "lor type"];

                const kvPairs: { label: string, value: string }[] = [];
                const sections: { title?: string, content: string }[] = [];

                let currentSectionTitle = "";
                let currentSectionContent: string[] = [];

                for (let i = 0; i < rawLines.length; i++) {
                    let line = rawLines[i];
                    const lowerLine = line.toLowerCase();

                    if (lowerLine.startsWith("source:") || lowerLine.replace(/\s+/g, '').includes("applynow") || lowerLine.startsWith("copyright")) continue;

                    // Header Detection
                    const isKnownHeader = knownHeaders.some(h =>
                        lowerLine === h || lowerLine.startsWith(h + ":") || (lowerLine.startsWith(h + " ") && line.length < 60)
                    );
                    const isAllCaps = line.length > 2 && line.length < 60 && line === line.toUpperCase() && !line.includes("http");

                    let isLabelValuePair = false;
                    let valueLine = "";

                    if (isKnownHeader && i + 1 < rawLines.length) {
                        const nextLine = rawLines[i + 1];
                        const nextIsHeader = knownHeaders.some(h => nextLine.toLowerCase().startsWith(h));
                        const isShortField = shortValueFields.some(f => lowerLine.includes(f));

                        if (isShortField && !nextIsHeader && nextLine.length < 100) {
                            isLabelValuePair = true;
                            valueLine = nextLine;
                        }
                    }

                    if (isLabelValuePair) {
                        // Flush previous section if any
                        if (currentSectionContent.length > 0) {
                            sections.push({ title: currentSectionTitle, content: currentSectionContent.join("\n") });
                            currentSectionContent = [];
                            currentSectionTitle = "";
                        }

                        const labelText = line.replace(/:$/, "").trim();
                        kvPairs.push({ label: labelText, value: valueLine });
                        i++; // Skip value line
                    } else if (isKnownHeader || isAllCaps) {
                        // Flush previous
                        if (currentSectionContent.length > 0) {
                            sections.push({ title: currentSectionTitle, content: currentSectionContent.join("\n") });
                            currentSectionContent = [];
                        }
                        currentSectionTitle = line;
                    } else {
                        currentSectionContent.push(line);
                    }
                }
                // Flush last
                if (currentSectionContent.length > 0) {
                    sections.push({ title: currentSectionTitle, content: currentSectionContent.join("\n") });
                }

                setRotationDetails({ kvPairs, sections });

            } catch (error) {
                console.error("Failed to fetch details", error);
            } finally {
                setIsLoadingDetails(false);
            }
        };

        fetchDetails();
    }, [viewingRotation]);


    const handleDownload = async (rotation: Rotation) => {
        try {
            const response = await fetch(rotation.path);
            const text = await response.text();

            const doc = new jsPDF();
            const pageWidth = doc.internal.pageSize.getWidth();
            const pageHeight = doc.internal.pageSize.getHeight();
            const margin = 20;
            const primaryColor = [9, 77, 152]; // #094D98
            let cursorY = 0;

            const drawWatermark = () => {
                doc.saveGraphicsState();
                doc.setTextColor(245, 245, 245);
                doc.setFontSize(60);
                doc.setFont("helvetica", "bold");
                doc.text("LM Rotators", pageWidth / 2, pageHeight / 2, { align: "center", angle: 45, baseline: "middle" });
                doc.restoreGraphicsState();
            };

            const drawHeader = () => {
                doc.setFillColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                doc.rect(0, 0, pageWidth, 35, 'F');
                doc.setTextColor(255, 255, 255);
                doc.setFont("helvetica", "bold");
                doc.setFontSize(20);
                doc.text("LM Global Overseas", margin, 18);
                doc.setFontSize(10);
                doc.setFont("helvetica", "normal");
                doc.text("Medical Rotation Details", margin, 26);
            };

            const addFooter = (pageNumber: number) => {
                doc.setPage(pageNumber);
                doc.setFont("helvetica", "italic");
                doc.setFontSize(8);
                doc.setTextColor(150, 150, 150);
                doc.text("www.lmglobaloverseas.com | info@lmglobaloverseas.com", pageWidth / 2, pageHeight - 10, { align: "center" });
            };

            drawWatermark();
            drawHeader();
            cursorY = 55;

            // Title
            doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
            doc.setFont("helvetica", "bold");
            doc.setFontSize(18);
            const titleLines = doc.splitTextToSize(rotation.title.toUpperCase(), pageWidth - (2 * margin));
            doc.text(titleLines, margin, cursorY);
            cursorY += (titleLines.length * 8) + 5;

            doc.setDrawColor(200, 200, 200);
            doc.setLineWidth(0.5);
            doc.line(margin, cursorY, pageWidth - margin, cursorY);
            cursorY += 15;

            // Content
            const rawLines = text.split('\n').map(l => l.trim()).filter(l => l);
            const knownHeaders = ["city", "state", "duration", "specialty", "physician", "rotation fee", "application fee", "malpractice", "hipaa", "residency", "fmg", "accommodation", "description", "document", "payment", "schedule", "timings", "zip", "hospital", "clinic", "address", "lor type", "rotation type", "rotation setting", "availability", "hands-on training", "refund policy", "learning experience", "daily schedule", "responsibilities", "outpatient clinics"];
            const shortValueFields = ["city", "state", "zip", "specialty", "rotation fee", "application fee", "duration", "availability", "rotation type", "rotation setting", "lor type"];

            doc.setFontSize(11);

            for (let i = 0; i < rawLines.length; i++) {
                let line = rawLines[i];
                const lowerLine = line.toLowerCase();
                if (lowerLine.startsWith("source:") || lowerLine.replace(/\s+/g, '').includes("applynow") || lowerLine.startsWith("copyright")) continue;

                if (cursorY > pageHeight - 40) {
                    doc.addPage();
                    drawWatermark();
                    cursorY = 25;
                }

                const isKnownHeader = knownHeaders.some(h => lowerLine === h || lowerLine.startsWith(h + ":") || (lowerLine.startsWith(h + " ") && line.length < 60));
                const isAllCaps = line.length > 2 && line.length < 60 && line === line.toUpperCase() && !line.includes("http");
                let isLabelValuePair = false;
                let valueLine = "";

                if (isKnownHeader && i + 1 < rawLines.length) {
                    const nextLine = rawLines[i + 1];
                    const nextIsHeader = knownHeaders.some(h => nextLine.toLowerCase().startsWith(h));
                    const isShortField = shortValueFields.some(f => lowerLine.includes(f));
                    if (isShortField && !nextIsHeader && nextLine.length < 100) {
                        isLabelValuePair = true;
                        valueLine = nextLine;
                    }
                }

                if (isLabelValuePair) {
                    const labelText = line.replace(/:$/, "").trim();
                    const valueX = margin + doc.getTextWidth(labelText + ": ") + 2;
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.text(labelText + ":", margin, cursorY);
                    doc.setFont("helvetica", "normal");
                    doc.setTextColor(60, 60, 60);
                    if (valueX + doc.getTextWidth(valueLine) < pageWidth - margin) {
                        doc.text(valueLine, valueX, cursorY);
                        cursorY += 8;
                    } else {
                        cursorY += 6;
                        const splitValue = doc.splitTextToSize(valueLine, pageWidth - (margin + 10));
                        doc.text(splitValue, margin + 5, cursorY);
                        cursorY += (splitValue.length * 6) + 4;
                    }
                    i++;
                } else if (isKnownHeader || isAllCaps) {
                    doc.setFont("helvetica", "bold");
                    doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                    doc.text(line, margin, cursorY);
                    cursorY += 8;
                } else {
                    doc.setFont("helvetica", "normal");
                    doc.setTextColor(60, 60, 60);
                    const splitLines = doc.splitTextToSize(line, pageWidth - (2 * margin));
                    doc.text(splitLines, margin, cursorY);
                    cursorY += (splitLines.length * 6) + 4;
                }
            }

            if (cursorY < pageHeight - 50) {
                cursorY += 10;
                doc.setFillColor(240, 248, 255);
                doc.setDrawColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                doc.rect(margin, cursorY, pageWidth - (2 * margin), 35, 'FD');
                doc.setFont("helvetica", "bold");
                doc.setFontSize(12);
                doc.setTextColor(primaryColor[0], primaryColor[1], primaryColor[2]);
                doc.text("Ready to Apply?", margin + 10, cursorY + 12);
                doc.setFont("helvetica", "normal");
                doc.setFontSize(10);
                doc.setTextColor(80, 80, 80);
                doc.text("Contact us today to secure your rotation.", margin + 10, cursorY + 20);
                const phoneLabel = "Tel: ";
                const phoneNum = "+91 79970 51424";
                const emailText = "  |  Email: info@lmglobaloverseas.com";
                doc.text(phoneLabel + phoneNum + emailText, margin + 10, cursorY + 28);
                const labelWidth = doc.getTextWidth(phoneLabel);
                const numWidth = doc.getTextWidth(phoneNum);
                doc.link(margin + 10 + labelWidth, cursorY + 28 - 3, numWidth, 4, { url: 'tel:+917997051424' });
            }

            const totalPages = doc.internal.pages.length - 1;
            for (let i = 1; i <= totalPages; i++) {
                addFooter(i);
            }
            doc.save(`${rotation.title.replace(/ /g, "_")}_Details.pdf`);
        } catch (error) {
            console.error("Failed to generate PDF:", error);
            alert("Sorry, there was an error generating the PDF document.");
        }
    };

    return (
        <div className="space-y-8">
            {/* Filters */}
            <div className="flex flex-col lg:flex-row gap-4 bg-white p-6 rounded-xl shadow-sm border border-neutral-light">
                <div className="flex-1 relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search rotations, keywords..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 border border-brand-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-neutral-dark"
                    />
                </div>
                <div className="flex flex-col sm:flex-row gap-4 w-full lg:w-auto">
                    <div className="relative w-full sm:w-auto">
                        <select
                            value={selectedCity}
                            onChange={(e) => setSelectedCity(e.target.value as RotationCity | "All")}
                            className="appearance-none w-full p-2 pr-10 border border-brand-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-neutral-dark min-w-[200px] cursor-pointer"
                        >
                            <option value="All">All Cities</option>
                            {(Object.keys(medicalRotations) as RotationCity[]).map((city) => (
                                <option key={city} value={city}>{city}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                    </div>

                    <div className="relative w-full sm:w-auto">
                        <select
                            value={selectedSpecialty}
                            onChange={(e) => setSelectedSpecialty(e.target.value)}
                            className="appearance-none w-full p-2 pr-10 border border-brand-neutral-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 text-neutral-dark min-w-[200px] cursor-pointer"
                        >
                            <option value="All">All Specialties</option>
                            {specialties.map((spec) => (
                                <option key={spec} value={spec}>{spec}</option>
                            ))}
                        </select>
                        <ChevronDown className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-500 pointer-events-none" />
                    </div>
                </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {paginatedRotations.map((rotation) => (
                    <Card key={`${rotation.city}-${rotation.fileName}`} className="flex flex-col h-full hover:shadow-xl transition-all duration-300">
                        <div className="flex-1 p-6">
                            <div className="flex justify-between items-start mb-4">
                                <div className="p-3 bg-blue-50 rounded-full">
                                    {getRotationIcon(rotation.title)}
                                </div>
                                <span className="inline-block px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-600 rounded-full border border-gray-200">
                                    {rotation.city}
                                </span>
                            </div>

                            <h3 className="text-xl font-bold text-primary mb-2 line-clamp-1" title={rotation.title}>{rotation.title}</h3>
                            <p className="text-neutral-cool text-sm leading-relaxed mb-6 line-clamp-3">
                                {rotation.description}
                            </p>
                        </div>

                        <div className="p-6 pt-0 mt-auto grid gap-3">
                            <Button
                                onClick={() => setViewingRotation(rotation)}
                                variant="secondary"
                                className="w-full bg-blue-50 text-primary hover:bg-blue-100 border-none"
                            >
                                <Eye className="h-4 w-4 mr-2" />
                                Quick View
                            </Button>

                            <div className="flex gap-3">
                                <Button
                                    onClick={() => handleDownload(rotation)}
                                    variant="outline"
                                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50"
                                >
                                    <Download className="h-4 w-4 mr-2" />
                                    PDF
                                </Button>
                                <Button
                                    onClick={() => window.open(`https://wa.me/917997051424?text=Hi, I am interested in the ${rotation.title} rotation in ${rotation.city}.`, '_blank')}
                                    className="flex-1 bg-green-600 text-white hover:bg-green-700"
                                >
                                    <FaWhatsapp className="h-4 w-4 mr-2" />
                                    Inquire
                                </Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Empty State */}
            {filteredRotations.length === 0 && (
                <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200">
                    <p className="text-xl font-medium text-gray-600">No rotations found.</p>
                    <p className="text-gray-400 mt-2">Try adjusting your filters or search terms.</p>
                    <Button
                        onClick={() => { setSearchQuery(""); setSelectedCity("All"); setSelectedSpecialty("All"); }}
                        variant="link"
                        className="mt-4 text-primary"
                    >
                        Clear all filters
                    </Button>
                </div>
            )}

            {/* Pagination Controls */}
            {totalPages > 1 && (
                <div className="flex justify-center items-center gap-4 mt-8">
                    <Button
                        variant="outline"
                        onClick={() => setCurrentPage((p) => Math.max(1, p - 1))}
                        disabled={currentPage === 1}
                        className="w-10 h-10 p-0"
                    >
                        <ChevronLeft className="h-5 w-5" />
                    </Button>

                    <span className="text-neutral-dark font-medium">
                        Page {currentPage} of {totalPages}
                    </span>

                    <Button
                        variant="outline"
                        onClick={() => setCurrentPage((p) => Math.min(totalPages, p + 1))}
                        disabled={currentPage === totalPages}
                        className="w-10 h-10 p-0"
                    >
                        <ChevronRight className="h-5 w-5" />
                    </Button>
                </div>
            )}

            {/* Quick View Modal */}
            {viewingRotation && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
                    <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[90vh] shadow-2xl flex flex-col overflow-hidden animate-in zoom-in-95 duration-200">
                        {/* Header */}
                        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50/50">
                            <div>
                                <h2 className="text-2xl font-bold text-gray-900">{viewingRotation.title}</h2>
                                <p className="text-primary font-medium">{viewingRotation.city}</p>
                            </div>
                            <button
                                onClick={() => setViewingRotation(null)}
                                className="p-2 hover:bg-gray-200 rounded-full transition-colors text-gray-500"
                            >
                                <X className="h-6 w-6" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="p-6 overflow-y-auto custom-scrollbar">
                            {isLoadingDetails ? (
                                <div className="flex flex-col items-center justify-center py-20 space-y-4">
                                    <div className="w-8 h-8 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
                                    <p className="text-gray-400">Loading details...</p>
                                </div>
                            ) : rotationDetails ? (
                                <div className="space-y-6">
                                    {/* Key Details Grid */}
                                    {rotationDetails.kvPairs.length > 0 && (
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 bg-blue-50/50 p-4 rounded-xl">
                                            {rotationDetails.kvPairs.map((kv, i) => (
                                                <div key={i} className="flex flex-col">
                                                    <span className="text-xs font-bold text-gray-500 uppercase tracking-wider">{kv.label}</span>
                                                    <span className="text-base font-semibold text-gray-800">{kv.value}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}

                                    {/* Description / Sections */}
                                    <div className="space-y-6">
                                        {rotationDetails.sections.map((sec, i) => (
                                            <div key={i}>
                                                {sec.title && <h3 className="text-lg font-bold text-primary mb-2 border-l-4 border-primary pl-3">{sec.title}</h3>}
                                                <p className="text-gray-600 leading-relaxed whitespace-pre-wrap">{sec.content}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            ) : (
                                <p className="text-center text-gray-500">Details unavailable.</p>
                            )}
                        </div>

                        {/* Footer */}
                        <div className="p-4 border-t border-gray-100 bg-gray-50 flex gap-4">
                            <Button
                                onClick={() => handleDownload(viewingRotation)}
                                className="flex-1 bg-white border border-gray-300 text-gray-700 hover:bg-gray-50 shadow-sm"
                            >
                                <Download className="h-4 w-4 mr-2" />
                                Download PDF
                            </Button>
                            <Button
                                onClick={() => window.open(`https://wa.me/917997051424?text=Hi, I am interested in the ${viewingRotation.title} rotation in ${viewingRotation.city}.`, '_blank')}
                                className="flex-1 bg-green-600 text-white hover:bg-green-700 shadow-md"
                            >
                                <FaWhatsapp className="h-4 w-4 mr-2" />
                                Inquire Now
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
