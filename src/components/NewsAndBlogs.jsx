import { MdOutlineArrowOutward } from "react-icons/md";
import { newsAndBlogs } from "../utils/NewsAndBlogs";
import { motion } from "motion/react";
import variants from "../utils/variants";
const NewsAndBlogs = () => {
    return (
        <section className="pt-24 pb-16 bg-white" id="News&Blogs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* headline and description */}
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={variants('right', 0.1)}
                    className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md flex items-center justify-center">
                        <h2 className="text-2xl font-bold">News & Blogs</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">
                            Get the latest tips, trends, and insights on tech, connectivity, and digital life from our curated blogs and news.
                        </p>
                    </div>
                </motion.div>
                {/* News and Blogs card */}
                <div className="bg-black text-white p-8 rounded-md">
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {
                            newsAndBlogs.map((content, index) => (
                                <div key={index} className="p-4 border border-gray-700 rounded-md flex flex-col">
                                    <h3 className="text-xl font-semibold mb-2">{content?.title}</h3>
                                    <p className="mb-4 flex-grow">{content?.description}</p>
                                    <a href="#" className="text-primary flex items-center mt-auto hover:underline">
                                        Learn More <MdOutlineArrowOutward className="ml-2" />
                                    </a>
                                </div>
                            ))
                        }

                    </div>
                </div>
            </div>
        </section>
    );
};

export default NewsAndBlogs;