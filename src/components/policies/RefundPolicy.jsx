import { Link } from 'react-router-dom';

export default function RefundPolicy() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-10">
                    <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                        Refund Policy
                    </h1>
                    <p className="text-gray-600">
                        Last updated: December 2024
                    </p>
                </div>

                {/* Content */}
                <div className="bg-white rounded-2xl shadow-lg p-8 prose prose-purple max-w-none">

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Return Eligibility</h2>
                        <p className="text-gray-700 mb-4">
                            While most of the products available on the website www.thevelvettails.com ("Platform") can be returned, subject to the terms of this cancellation, return, exchange, and refund policy ("Policy"), please check the details of the product, before placing an order, to check if the product is eligible for a return or not.
                        </p>
                        <p className="text-gray-700 mb-4">
                            To be eligible for a return, your item must be in the same condition that you received it, unworn or unused, with tags, and in its original packaging. You will also need the receipt or proof of purchase (digital or physical).
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Non-Returnable Items</h2>
                        <p className="text-gray-700 mb-4">
                            Returns or exchanges of products in the following categories will not be accepted (unless received damaged or spoilt):
                        </p>
                        <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
                            <li>Food and treats</li>
                            <li>Bedding, Mats & Travel Supplies</li>
                            <li>Cat litter</li>
                            <li>Health and wellness products</li>
                            <li>Grooming & grooming supplies</li>
                            <li>Bowls & Feeders</li>
                            <li>Toys</li>
                            <li>Unopened units in a combo product (e.g., If a product comprises 12 packets and out of it, 11 packets are unopened, then a return or refund or exchange request for such 11 packets will not be accepted)</li>
                        </ul>
                        <p className="text-gray-700">
                            Product pages outline whether that product is returnable or not.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">How to Initiate a Return</h2>
                        <p className="text-gray-700">
                            To initiate a return request, you can contact us at{' '}
                            <a href="mailto:support@thevelvettails.com" className="text-velvet-purple hover:underline">
                                support@thevelvettails.com
                            </a>
                            {' '}or call us at{' '}
                            <a href="tel:+919429694910" className="text-velvet-purple hover:underline">
                                +91-9429694910
                            </a>.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Order Cancellation</h2>
                        <p className="text-gray-700 mb-4">
                            You may cancel any order before the dispatch of the item has taken place. Otherwise, you may call us at +91-9429694910 or email us at support@thevelvettails.com to initiate cancellation.
                        </p>
                        <p className="text-gray-700">
                            The Platform retains the right to cancel any order placed by you, at its sole discretion and shall intimate you of the same by way of an email/SMS. Further, the Platform may cancel an order wherein the quantities exceed the standard for individual consumption or the Platform has reason to believe or suspect that such an order is not placed by a consumer for personal use.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Damages and Issues</h2>
                        <p className="text-gray-700">
                            Please inspect your order upon receipt. Contact us immediately but no later than <strong>10 (ten) days</strong> if the item is defective, damaged or if you receive the wrong item, or if your item is lost in transit, so that we can evaluate the issue and make it right.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Refunds</h2>
                        <p className="text-gray-700 mb-4">
                            In the event you place a return request for any product purchased by you, we will notify you once we've received and inspected the product returned by you, and let you know if the refund has been approved or not. If approved, you will automatically be refunded the relevant amount to your original payment method.
                        </p>
                        <p className="text-gray-700 mb-4">
                            In the event of cancellation of an order, any amount paid by you with respect to such a transaction shall be refunded on your original payment method.
                        </p>
                        <p className="text-gray-700">
                            All eligible refunds will be processed within <strong>7 working days</strong> from the date of approval of the return or cancellation request. Refund timelines may vary slightly depending on the customer's bank or payment provider.
                        </p>
                    </section>

                    <section className="mb-8">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Shipping Cost Refunds</h2>
                        <p className="text-gray-700">
                            The Company shall bear the cost of return shipping. Customers who incur return-shipping expenses may reach out to us to submit a reimbursement claim.
                        </p>
                    </section>

                    <section className="bg-purple-50 rounded-lg p-6">
                        <h2 className="text-xl font-bold text-gray-900 mb-4">Questions?</h2>
                        <p className="text-gray-700 mb-4">
                            For any question relating to return or cancellation of any products, you can always contact us:
                        </p>
                        <div className="space-y-2 text-gray-700">
                            <p>
                                <strong>Email:</strong>{' '}
                                <a href="mailto:support@thevelvettails.com" className="text-velvet-purple hover:underline">
                                    support@thevelvettails.com
                                </a>
                            </p>
                            <p>
                                <strong>Phone:</strong>{' '}
                                <a href="tel:+919429694910" className="text-velvet-purple hover:underline">
                                    +91-9429694910
                                </a>
                            </p>
                            <p>
                                <strong>WhatsApp:</strong>{' '}
                                <a href="https://wa.me/918802282801" className="text-velvet-purple hover:underline" target="_blank" rel="noopener noreferrer">
                                    +91-8802282801
                                </a>
                            </p>
                        </div>
                    </section>
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
