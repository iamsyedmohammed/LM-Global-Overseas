export type RotationCity = "Chicago" | "Houston" | "Indiana" | "New York";

export interface Rotation {
    title: string;
    fileName: string;
    path: string;
    description: string;
}

export const medicalRotations: Record<RotationCity, Rotation[]> = {
    Chicago: [
        { title: "Anesthesia", fileName: "ANESTHESIA__1_.txt", path: "/rotations/Chicago/ANESTHESIA__1_.txt", description: "Hands-on anesthesia rotation focusing on perioperative care, airway management, and anesthesia administration protocols." },
        { title: "Cardiology", fileName: "CARDIOLOGY.txt", path: "/rotations/Chicago/CARDIOLOGY.txt", description: "Comprehensive cardiology rotation covering inpatient rounds, ICU/CCU management, and outpatient clinic experience." },
        { title: "ER", fileName: "ER.txt", path: "/rotations/Chicago/ER.txt", description: "Fast-paced Emergency Room rotation providing exposure to acute care, trauma management, and emergency procedures." },
        { title: "Family Practice 1", fileName: "FAMILY_PRACTICE__1_.txt", path: "/rotations/Chicago/FAMILY_PRACTICE__1_.txt", description: "Primary care rotation emphasizing preventive medicine, chronic disease management, and community health." },
        { title: "Family Practice 2", fileName: "FAMILY_PRACTICE__2_.txt", path: "/rotations/Chicago/FAMILY_PRACTICE__2_.txt", description: "Outpatient family medicine experience focusing on patient communication, diagnosis, and long-term care plans." },
        { title: "General Surgery", fileName: "GENERAL_SURGERY__1_.txt", path: "/rotations/Chicago/GENERAL_SURGERY__1_.txt", description: "Surgical rotation offering opportunities to observe and assist in operating room procedures and pre/post-op care." },
        { title: "Hematology Oncology", fileName: "HEMATOLOGY_ONC__1_.txt", path: "/rotations/Chicago/HEMATOLOGY_ONC__1_.txt", description: "Specialized rotation in blood disorders and cancer treatment, including chemotherapy protocols and palliative care." },
        { title: "Internal Medicine 2", fileName: "INTERNAL_MEDICINE__2_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__2_.txt", description: "Inpatient Internal Medicine rotation focusing on ward rounds, differential diagnosis, and patient management." },
        { title: "Internal Medicine 3", fileName: "INTERNAL_MEDICINE__3_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__3_.txt", description: "Advanced internal medicine experience with potential exposure to subspecialties and complex case management." },
        { title: "Internal Medicine 4", fileName: "INTERNAL_MEDICINE__4_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__4_.txt", description: "Clinical rotation in Internal Medicine emphasizing evidence-based practice and hospital-based patient care." },
        { title: "Internal Medicine 10", fileName: "INTERNAL_MEDICINE__IM_10_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__IM_10_.txt", description: "Comprehensive IM rotation combining inpatient duties with educational rounds and case discussions." },
        { title: "Internal Medicine 1", fileName: "INTERNAL_MEDICINE__IM_1_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__IM_1_.txt", description: "Foundational Internal Medicine rotation providing broad exposure to adult medical conditions and hospitalist medicine." },
        { title: "Internal Medicine 6", fileName: "INTERNAL_MEDICINE__IM_6_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__IM_6_.txt", description: "Hospital-based IM rotation focusing on acute medical admissions and multidisciplinary team collaboration." },
        { title: "Internal Medicine 7", fileName: "INTERNAL_MEDICINE__IM_7_.txt", path: "/rotations/Chicago/INTERNAL_MEDICINE__IM_7_.txt", description: "Internal Medicine clinical elective with opportunities for history taking, physical exams, and treatment planning." },
        { title: "Neurology 2", fileName: "NUEROLOGY__2_.txt", path: "/rotations/Chicago/NUEROLOGY__2_.txt", description: "Clinical neurology rotation covering the diagnosis and management of nervous system disorders and stroke care." },
        { title: "Nephrology 1", fileName: "Nephrology__1_.txt", path: "/rotations/Chicago/Nephrology__1_.txt", description: "Specialized rotation in kidney diseases, including dialysis management, electrolyte disorders, and hypertension." },
        { title: "Nephrology 2", fileName: "Nephrology__2_.txt", path: "/rotations/Chicago/Nephrology__2_.txt", description: "Advanced nephrology experience focusing on renal failure, transplant workup, and consultative nephrology." },
        { title: "Psychiatry 1", fileName: "PSYCHIATRY__1_.txt", path: "/rotations/Chicago/PSYCHIATRY__1_.txt", description: "Inpatient and outpatient psychiatry rotation involving patient interviews, medication management, and therapy sessions." },
        { title: "Pulmonary Critical Care", fileName: "PULMONARY___CRITICAL_CARE_IM___1_.txt", path: "/rotations/Chicago/PULMONARY___CRITICAL_CARE_IM___1_.txt", description: "Intensive care rotation combining pulmonary medicine with critical care management of respiratory failure and shock." },
        { title: "Paediatrics 1", fileName: "Paediatrics__1_.txt", path: "/rotations/Chicago/Paediatrics__1_.txt", description: "General pediatrics rotation covering well-child checks, immunizations, and management of common childhood illnesses." },
        { title: "Paediatrics 2", fileName: "Paediatrics__2_.txt", path: "/rotations/Chicago/Paediatrics__2_.txt", description: "Advanced pediatric experience involving inpatient care and specialized pediatric conditions." },
        { title: "Psychiatry 2", fileName: "Psychiatry__2_.txt", path: "/rotations/Chicago/Psychiatry__2_.txt", description: "Psychiatric rotation focusing on acute mental health crises, behavioral health assessments, and treatment strategies." },
        { title: "Radiology 1", fileName: "RADIOLOGY__1_.txt", path: "/rotations/Chicago/RADIOLOGY__1_.txt", description: "Diagnostic radiology rotation offering exposure to X-ray, CT, MRI interpretation and imaging modalities." },
        { title: "Radiology 2", fileName: "Radiology__2_.txt", path: "/rotations/Chicago/Radiology__2_.txt", description: "Advanced imaging rotation focusing on detailed radiological anatomy and pathology identification." },
        { title: "Radiology 3", fileName: "Radiology__3_.txt", path: "/rotations/Chicago/Radiology__3_.txt", description: "Radiology elective with opportunities to observe interventional procedures and discuss findings with attending radiologists." },
        { title: "Radiology 4", fileName: "Radiology__4_.txt", path: "/rotations/Chicago/Radiology__4_.txt", description: "Comprehensive radiology experience covering various imaging techniques and their role in clinical diagnosis." },
        { title: "Neurology 1", fileName: "neurology__1_.txt", path: "/rotations/Chicago/neurology__1_.txt", description: "Introduction to clinical neurology, focusing on the neurological exam and localization of lesions." },
        { title: "Neurology 3", fileName: "neurology__3_.txt", path: "/rotations/Chicago/neurology__3_.txt", description: "General neurology rotation with exposure to common neurological conditions like migraines, epilepsy, and neuropathy." },
        { title: "OBGYN", fileName: "obgyn.txt", path: "/rotations/Chicago/obgyn.txt", description: "Obstetrics and Gynecology rotation covering prenatal care, labor and delivery, and women's health issues." },
    ],
    Houston: [
        { title: "Emergency Medicine", fileName: "EMERGENCY_MEDICINE__EM_.txt", path: "/rotations/Houston/EMERGENCY_MEDICINE__EM_.txt", description: "High-volume ER rotation focusing on rapid assessment, stabilization, and management of medical emergencies." },
        { title: "Family Medicine", fileName: "FAMILY_MEDICINE__FM_.txt", path: "/rotations/Houston/FAMILY_MEDICINE__FM_.txt", description: "Comprehensive family medicine rotation involving primary care for patients of all ages in a clinic setting." },
        { title: "Internal Medicine", fileName: "INTERNAL_MEDICINE.txt", path: "/rotations/Houston/INTERNAL_MEDICINE.txt", description: "Core Internal Medicine rotation with opportunities for patient management, note documentation, and team rounds." },
        { title: "Cardiology", fileName: "INTERNAL_MEDICINE__CARDIOLOGY.txt", path: "/rotations/Houston/INTERNAL_MEDICINE__CARDIOLOGY.txt", description: "Cardiovascular medicine rotation focusing on heart disease management, ECG interpretation, and cardiac pharmacology." },
        { title: "Internal Medicine Richmond", fileName: "INTERNAL_MEDICINE__Richmond.txt", path: "/rotations/Houston/INTERNAL_MEDICINE__Richmond.txt", description: "Community-based Internal Medicine rotation providing exposure to a diverse patient population and chronic care." },
        { title: "Internal Medicine EA", fileName: "INTERNAL_MEDICINE___EA.txt", path: "/rotations/Houston/INTERNAL_MEDICINE___EA.txt", description: "Outpatient Internal Medicine elective focusing on ambulatory care and preventive health strategies." },
        { title: "Internal Medicine Pediatrics", fileName: "INTERNAL_MEDICINE___PEDIATRICS.txt", path: "/rotations/Houston/INTERNAL_MEDICINE___PEDIATRICS.txt", description: "Combined Med-Peds rotation covering both adult and pediatric patient populations in a clinical setting." },
        { title: "Surgery 2", fileName: "SURGERY__2_.txt", path: "/rotations/Houston/SURGERY__2_.txt", description: "General surgery rotation with exposure to pre-operative evaluation, surgical techniques, and post-operative care." },
        { title: "Pathology", fileName: "pathology.txt", path: "/rotations/Houston/pathology.txt", description: "Pathology rotation focusing on laboratory medicine, histology, and the microscopic diagnosis of diseases." },
    ],
    Indiana: [
        { title: "Family Practice 3", fileName: "FAMILY_PRACTICE__3_.txt", path: "/rotations/Indiana/FAMILY_PRACTICE__3_.txt", description: "Rural family medicine experience emphasizing diverse clinical presentations and community-oriented primary care." },
        { title: "Internal Medicine 8", fileName: "INTERNAL_MEDICINE__IM_8_.txt", path: "/rotations/Indiana/INTERNAL_MEDICINE__IM_8_.txt", description: "Inpatient Internal Medicine rotation focusing on comprehensive patient care and hospital medicine workflows." },
    ],
    "New York": [
        { title: "Internal Medicine 11", fileName: "INTERNAL_MEDICINE__IM_11____NY.txt", path: "/rotations/New York/INTERNAL_MEDICINE__IM_11____NY.txt", description: "Urban Internal Medicine rotation providing exposure to a high-acuity patient mix and academic rounds." },
    ],
};
