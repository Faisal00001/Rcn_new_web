
import bannerImg from "../assets/images/banner/banner8.png"
import { motion } from "motion/react";
import variants from "../utils/variants";
import { useTheme } from "../hook/useTheme";


const Hero = () => {
    const { dark } = useTheme();
    return (
        <>

            <section className={`${dark ? 'bg-[#0C0C0C]' : 'bg-white'} pt-12`} id='about'>
                <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24'>
                    <div className='flex flex-col md:flex-row items-center gap-6'>
                        {/* Left side */}
                        <div className="md:w-1/2">
                            <div className="md:w-2/3">
                                <motion.h1
                                    initial="hidden"
                                    whileInView={"visible"}
                                    viewport={{ amount: 0.1 }}
                                    variants={variants('bottom', 0.2)}
                                    className={`text-2xl md:text-4xl font-bold ${dark ? 'text-gray-300' : 'text-secondary'}  mb-4`}>
                                    High-Speed Internet from RCN – Always Connected, Always Reliable
                                </motion.h1>
                                <motion.p
                                    initial="hidden"
                                    whileInView={"visible"}
                                    viewport={{ amount: 0.1 }}
                                    variants={variants('bottom', 0.5)}
                                    className={`${dark ? 'text-gray-400' : 'text-gray-600'} mb-6`}>

                                    At Romance Cable Network (RCN), we deliver blazing-fast, affordable, and reliable internet services for homes and businesses. Experience seamless streaming, smooth gaming, and uninterrupted browsing with our cutting-edge fiber network.
                                </motion.p>
                                <motion.a
                                    href="#contact"
                                    initial="hidden"
                                    whileInView={"visible"}
                                    viewport={{ amount: 0.1 }}
                                    variants={variants('bottom', 0.5)}
                                    className={`inline-block px-6 py-3 ${dark ? 'bg-white text-black' : 'bg-black text-white'}  font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300`}>
                                    Contact Us
                                </motion.a>
                            </div>
                        </div>

                        {/* Right side */}
                        <div className="md:w-1/2 order-first md:order-last">
                            <motion.img
                                initial="hidden"
                                whileInView={"visible"}
                                viewport={{ amount: 0.1 }}
                                variants={variants('bottom', 0.2)}
                                src={bannerImg}
                                draggable={false}
                                alt="Wireless connection"
                                className="rounded-md md:w-full md:h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>
            </section>
        </>


    );
};

export default Hero;