import { BsChatQuote } from "react-icons/bs";
import testimonialsData from "../utils/Testimonials";
import { IoArrowBack, IoArrowForward } from "react-icons/io5";
import { useEffect, useState } from "react";
import { motion } from "motion/react";
import variants from "../utils/variants";
const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [itemToShow, setItemToShow] = useState(1)
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext()
        }, 2000)
        return () => clearInterval(interval)
    }, [])
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setItemToShow(3)
            } else {
                setItemToShow(1)
            }
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
    }
    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonialsData.length) % testimonialsData.length)
    }
    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }
    return (
        <section className="pt-24 pb-8 bg-white" id="testimonial">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                {/* headline and description */}
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={variants('right', 0.1)}
                    className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md flex items-center justify-center">
                        <h2 className="text-2xl font-bold">Testimonials</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">
                            RCN provides fast, reliable internet for streaming, gaming, and remote work—backed by expert support you can count on.
                        </p>
                    </div>
                </motion.div>
                {/* Testimonials Slider */}
                <div className="relative mb-12">
                    <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-3 overflow-hidden">
                        {
                            testimonialsData.slice(currentIndex, currentIndex + itemToShow).map((content, index) => (
                                <motion.div
                                    initial={{ opacity: 0, x: 50 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -50 }}
                                    transition={{ duration: 0.5 }}
                                    key={index} className="w-full relative py-5 md:max-w-md px-2">
                                    <div>
                                        <BsChatQuote className="size-8" />
                                    </div>
                                    <div className="md:h-48 h-54 bg-white hover:bg-primary rounded-lg border hover:border-primary shadow-lg p-6 cursor-pointer transition-all duration-300">
                                        <p className="text-base md:text-lg font-medium mb-4">{content.text}</p>
                                        <p className="text-sm font-semibold text-gray-700">{content.author}</p>
                                    </div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
                {/* dot navigation */}

                <div className="absolute mt-5 left-1/2 transform -translate-x-1/2 flex items-center space-x-5 z-10">
                    <button className="text-black">
                        <IoArrowBack onClick={handlePrevious} />
                    </button>
                    {/* dots */}
                    <div className="flex space-x-2">
                        {
                            testimonialsData.map((_, index) => (
                                <button onClick={() => handleDotClick(index)}
                                    key={index} className=
                                    {`w-3 h-3 rounded-full ${index >= currentIndex && index < currentIndex + itemToShow ? "bg-primary" : "bg-gray-400"}`} />
                            ))
                        }
                    </div>
                    <button className="text-black">
                        <IoArrowForward onClick={handleNext} />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;