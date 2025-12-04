export default function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[60vh] px-4">
            <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page Not Found</h2>
            <p className="text-gray-600 mb-8 text-center max-w-md">
                Sorry, the page you are looking for doesn't exist or has been moved.
            </p>
            <a
                href="/"
                className="inline-flex items-center justify-center h-11 px-6 rounded-lg bg-primary text-white font-medium hover:bg-primary-dark transition-colors"
            >
                Go Back Home
            </a>
        </div>
    );
}
