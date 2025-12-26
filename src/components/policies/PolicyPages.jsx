import { Link } from 'react-router-dom';

export default function PolicyPage({ title, children }) {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        {title}
                    </h1>
                    <p className="text-gray-600">
                        Last updated: December 2024
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-purple max-w-none">
                    {children}
                </div>

                {/* Back Link */}
                <div className="mt-8 text-center">
                    <Link
                        to="/products"
                        className="text-velvet-purple hover:text-velvet-purple/80 font-medium inline-flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Back to Products
                    </Link>
                </div>
            </div>
        </div>
    );
}

// Privacy Policy Component
export function PrivacyPolicy() {
    return (
        <PolicyPage title="Privacy Policy">
            <section className="mb-8">
                <p className="text-gray-700 text-center py-8">
                    Privacy Policy content coming soon. Please check back later or contact us at{' '}
                    <a href="mailto:support@thevelvettails.com" className="text-velvet-purple hover:underline">
                        support@thevelvettails.com
                    </a>
                    {' '}for any privacy-related inquiries.
                </p>
            </section>
        </PolicyPage>
    );
}

// Terms & Conditions Component
export function TermsConditions() {
    return (
        <PolicyPage title="Terms & Conditions">
            <section className="mb-8">
                <p className="text-gray-700 text-center py-8">
                    Terms & Conditions content coming soon. Please check back later or contact us at{' '}
                    <a href="mailto:support@thevelvettails.com" className="text-velvet-purple hover:underline">
                        support@thevelvettails.com
                    </a>
                    {' '}for any inquiries.
                </p>
            </section>
        </PolicyPage>
    );
}

// Shipping Policy Component
export function ShippingPolicy() {
    return (
        <PolicyPage title="Shipping Policy">
            <section className="mb-8">
                <p className="text-gray-700 text-center py-8">
                    Shipping Policy content coming soon. Please check back later or contact us at{' '}
                    <a href="mailto:support@thevelvettails.com" className="text-velvet-purple hover:underline">
                        support@thevelvettails.com
                    </a>
                    {' '}for any shipping-related inquiries.
                </p>
            </section>
        </PolicyPage>
    );
}
