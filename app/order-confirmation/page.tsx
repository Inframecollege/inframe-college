export default function ThankYouPage() {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4 sm:px-6 text-center">
            {/* Success Icon */}
            <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
                <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
            </div>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
                Thank You for Your Purchase!
            </h1>

            {/* Description */}
            <div className="max-w-2xl mx-auto mb-10">
                <p className="text-lg text-gray-700 mb-4">
                    Your order has been successfully completed and you now have full access to the course.
                </p>
                <p className="text-gray-600">
                    Check your email for confirmation and login details.
                </p>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center sm:flex-row gap-4 w-full max-w-md">


                <a
                    href="/"
                    className="bg-white text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold border border-gray-300 hover:bg-gray-50 transition-colors duration-200 flex items-center justify-center space-x-2"
                >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    <span>Back to Home</span>
                </a>
            </div>

            {/* Support */}
            <div className="mt-12 pt-6 border-t border-gray-200 max-w-md">
                <p className="text-gray-600 text-sm">
                    Need help? <a href="/contact-us" className="text-blue-600 hover:text-blue-700 font-medium">Contact support</a>
                </p>
            </div>
        </section>
    );
}