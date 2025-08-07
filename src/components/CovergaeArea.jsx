
import { motion } from "motion/react";
import variants from "../utils/variants";

const CovergaeArea = () => {
    return (
        <div>
            <section className="pt-24 pb-16 bg-white" id="coverageArea">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* headline and description */}
                    <motion.div
                        initial="hidden"
                        whileInView={"visible"}
                        variants={variants('right', 0.1)}
                        className="flex flex-col md:flex-row gap-4 mb-12">
                        <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md flex items-center justify-center">
                            <h2 className="text-2xl font-bold">Coverage area</h2>
                        </div>
                        <div className="md:w-2/3">
                            <p className="text-secondary md:w-2/3">
                                RCN delivers fast, reliable internet in select areas. Check online to see if we’re available near you—we’re growing every day!
                            </p>
                        </div>
                    </motion.div>
                    {/* Google Map Embed */}
                    <div className="w-full h-96 rounded-md overflow-hidden shadow-lg">
                        <iframe
                            title="RCN Coverage in Jashore"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.0025880836727!2d89.24641457508685!3d23.166697911256387!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ff106e68d1b24b%3A0xa2ed07c46543b0fa!2sJashore!5e0!3m2!1sen!2sbd!4v1720600000000!5m2!1sen!2sbd"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen=""
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CovergaeArea;