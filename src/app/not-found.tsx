import Link from "next/link";
import { Home, FileQuestion, BookOpen } from "lucide-react";

export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 bg-gray-50 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-5">
                <span className="text-[20rem] font-bold text-gray-900 select-none">404</span>
            </div>

            <div className="relative z-10 flex flex-col items-center">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Page Not Found</h2>
                <p className="text-lg text-gray-600 mb-10 text-center max-w-md">
                    The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
                    <Link href="/" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center">
                        <div className="h-12 w-12 bg-blue-50 text-primary rounded-full flex items-center justify-center mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                            <Home className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Home</h3>
                        <p className="text-sm text-gray-500">Return to homepage</p>
                    </Link>

                    <Link href="/courses" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center">
                        <div className="h-12 w-12 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-green-600 group-hover:text-white transition-colors">
                            <BookOpen className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Find Courses</h3>
                        <p className="text-sm text-gray-500">Browse universities</p>
                    </Link>

                    <Link href="/contact" className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-all border border-gray-100 group text-center">
                        <div className="h-12 w-12 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center mb-4 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <FileQuestion className="h-6 w-6" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-1">Contact Us</h3>
                        <p className="text-sm text-gray-500">Get in touch</p>
                    </Link>
                </div>
            </div>
        </div>
    );
}
