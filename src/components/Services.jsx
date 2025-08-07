import { servicesData } from "../utils/servicesData";
import { motion } from "motion/react";
import variants from "../utils/variants";



const Services = () => {


    return (
        <>
            <section className="pt-24 pb-16 bg-white" id="services">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* headline and description */}
                    <motion.div
                        initial="hidden"
                        whileInView={"visible"}

                        variants={variants('right', 0.3)}
                        className="flex flex-col md:flex-row gap-4 mb-12">
                        <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md flex items-center justify-center">
                            <h2 className="text-2xl font-bold">
                                Services
                            </h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-secondary md:w-2/3">
                                RCN delivers fast and reliable internet backed by expert support—ideal for smooth streaming, gaming, remote work, and more.

                            </p>
                        </div>
                    </motion.div>
                    {/* services card */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {
                            servicesData.map((service, index) => (
                                <div key={index} className={`flex flex-col sm:flex-row md:justify-between md:items-center gap-6 p-6 rounded-lg border border-[#191A23] ${service.backgroundColor} cursor-pointer`}>

                                    <div className="md:w-1/2 flex flex-col h-full justify-between">
                                        <p className="mt-4 flex items-baseline gap-x-2">
                                            <span className="text-5xl font-semibold ">{service.speed}</span>
                                        </p>
                                        <p className="mt-6 text-base/7 font-bold">{service.traffic}</p>
                                        <ul role="list" className="mt-5 space-y-3 text-sm/6 text-gray-300  pl-10">
                                            {
                                                service.features.map((feature, index) => (
                                                    <li key={index} className="flex gap-x-3">
                                                        <svg className="h-6 w-5 flex-none text-black" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
                                                            <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 0 1 .143 1.052l-8 10.5a.75.75 0 0 1-1.127.075l-4.5-4.5a.75.75 0 0 1 1.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 0 1 1.05-.143Z" clipRule="evenodd" />
                                                        </svg>
                                                        <span className="text-black font-semibold text-base/5">{feature}</span>
                                                    </li>
                                                ))
                                            }
                                        </ul>
                                        <p className="mt-4 flex items-baseline gap-x-2">
                                            <span className="text-3xl font-semibold tracking-tight text-black">{service.price}</span>
                                            <span className="text-xl font-bold">Tk/month</span>
                                        </p>
                                        <p className="mt-1 flex items-baseline ">
                                            <span className="text-base font-bold">{service.vatIncluded === true ? "* VAT Included" : ''}</span>
                                        </p>
                                        <a href="#contact" className={`text-xl px-5 rounded-md mt-8 py-1.5 font-semibold mb-2 sm:w-60 ${service.foregroundColor}`}>Buy Now</a>
                                    </div>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </section>
        </>

    );
};

export default Services;