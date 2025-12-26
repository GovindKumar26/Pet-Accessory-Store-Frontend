import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

export default function HeroBanner({ onShopNow }) {
    const [currentSlide, setCurrentSlide] = useState(0);

    // Safely access discounts from Redux store (fetched by DiscountShowcase)
    const discountsState = useSelector((state) => state.discounts);
    const discounts = discountsState?.discounts || [];

    // Get active discount - use endsAt (correct field name)
    const activeDiscount = discounts.find(d =>
        d.active && new Date(d.endsAt) > new Date()
    );

    const slides = [
        {
            id: 1,
            title: "Accessories that move with them",
            subtitle: "Practical, comfortable accessories for pets",
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1200&h=600&fit=crop",
            cta: "Shop now"
        },
        {
            id: 2,
            title: "Where Paws Meet Plush",
            subtitle: "Premium quality for your furry friends",
            image: "https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?w=1200&h=600&fit=crop",
            cta: "Explore Collection"
        }
    ];

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % slides.length);
        }, 5000);
        return () => clearInterval(timer);
    }, [slides.length]);

    return (
        <div className="relative w-full overflow-hidden">
            {/* Discount Banner */}
            {activeDiscount && (
                <div className="bg-gradient-to-r from-orange-100 to-orange-50 py-3 px-4 text-center">
                    <p className="text-sm md:text-base">
                        <span className="font-semibold">Use code:</span>
                        <span className="mx-2 px-3 py-1 bg-white rounded font-bold text-velvet-purple">{activeDiscount.code}</span>
                        <span className="font-bold text-orange-600">for {activeDiscount.type === 'percentage' ? `${activeDiscount.value}%` : `₹${activeDiscount.value}`} OFF</span>
                    </p>
                </div>
            )}

            {/* Hero Carousel */}
            <div className="relative h-[400px] md:h-[500px]">
                {slides.map((slide, index) => (
                    <div
                        key={slide.id}
                        className={`absolute inset-0 transition-opacity duration-1000 ${index === currentSlide ? 'opacity-100' : 'opacity-0'
                            }`}
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center"
                            style={{ backgroundImage: `url(${slide.image})` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/30" />
                        </div>

                        {/* Content */}
                        <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center">
                            <div className="max-w-2xl text-white">
                                {activeDiscount && index === 0 && (
                                    <div className="inline-block px-4 py-2 bg-velvet-golden rounded-full mb-4 animate-fade-in">
                                        <span className="text-sm font-semibold">Up to {activeDiscount.type === 'percentage' ? `${activeDiscount.value}%` : `₹${activeDiscount.value}`} OFF</span>
                                    </div>
                                )}
                                <h1 className="text-4xl md:text-6xl font-bold mb-4 leading-tight">
                                    {slide.title}
                                </h1>
                                <p className="text-xl md:text-2xl mb-8 text-gray-200">
                                    {slide.subtitle}
                                </p>
                                <button
                                    onClick={onShopNow}
                                    className="inline-block px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-semibold rounded-lg transition-all transform hover:scale-105 shadow-lg cursor-pointer"
                                >
                                    {slide.cta}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}

                {/* Slide Indicators */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
                    {slides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlide(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentSlide
                                ? 'bg-white w-8'
                                : 'bg-white/50 hover:bg-white/75'
                                }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
