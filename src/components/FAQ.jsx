import { useState } from "react";
import { FAQs } from "../utils/FAQs";
import { FaMinus, FaPlus } from "react-icons/fa";
import { motion } from "motion/react";
import variants from "../utils/variants";
const FAQ = () => {
    const [openIndex, setOpenIndex] = useState(0);
    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? -1 : index)
    }
    return (
        <div>
            <section className="pt-24 pb-16 bg-white" id="FAQs">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* headline and description */}
                    <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={variants('right', 0.1)}
                        className="flex flex-col md:flex-row gap-4 mb-12">
                        <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md flex items-center justify-center">
                            <h2 className="text-2xl font-bold">FAQs</h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-secondary md:w-2/3">
                                Got questions? We’ve answered the most common ones about our service, setup, and support to help you get started easily.

                            </p>
                        </div>
                    </motion.div>
                    {/* accordian section*/}

                    <div>
                        {
                            FAQs.map((content, i) => (
                                <div key={i} className={`border rounded-md mb-4 overflow-hidden ${openIndex === i ? "border-primary" : "border-gray-300"}`}>
                                    <button onClick={() => handleToggle(i)} className={`w-full text-left p-4 flex justify-between items-center ${openIndex === i ? 'bg-primary' : 'bg-tartiary'}`}>
                                        <div className="flex items-center">
                                            <span className="text-secondary font-extrabold text-2xl mr-4">{content.number}</span>
                                            <h3 className="text-lg font-semibold">{content.question}</h3>
                                        </div>
                                        <div className="bg-white text-black border p-1.5 rounded-full">
                                            {
                                                openIndex === i ? (<FaMinus />) : (<FaPlus />)
                                            }
                                        </div>
                                    </button>
                                    {
                                        openIndex === i && (
                                            <div className="p-4 bg-primary text-secondary">
                                                <hr className="mt-0 mb-5 border-black" />
                                                <p>{content.answer}</p>
                                            </div>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQ;