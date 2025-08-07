
import contact from "../assets/images/contact/contact.png"
import { motion } from "motion/react";
import variants from "../utils/variants";
import toast from "react-hot-toast";


const Contact = () => {


    const handleForm = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);

        toast.promise(
            fetch("https://rcn-new-web.vercel.app/contact.php", {
                method: "POST",
                body: formData,
                headers: {
                    "Accept": "application/json", // Ensure the server returns JSON
                },
            })
                .then(res => {
                    if (!res.ok) {
                        // Handle errors if status is not OK (like 403 Forbidden)
                        return res.text().then(text => {
                            throw new Error(text || 'Unknown error');
                        });
                    }
                    return res.json(); // Expect JSON response from server
                })
                .then(data => {
                    if (!data.success) {
                        throw new Error(data.message || "Unknown error");
                    }
                    form.reset();
                    return data;
                })
                .catch(err => {
                    // Handle fetch errors
                    console.error('Fetch error:', err);
                    throw new Error('Network or server error');
                }),
            {
                loading: "Sending message...",
                success: "Email sent successfully!",
                error: (err) => `Failed: ${err.message}`,
            }
        );
    };
    return (
        <section className="pt-24 pb-12 bg-white" id="contact">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* headline and description */}
                <motion.div
                    initial="hidden"
                    whileInView={"visible"}
                    variants={variants('right', 0.1)}
                    className="flex flex-col md:flex-row gap-4 mb-12">
                    <div className="flex-shrink-0 bg-primary text-black py-2 px-16 rounded-md flex items-center justify-center">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                    </div>
                    <div className="md:w-2/3">
                        <p className="text-secondary md:w-2/3">
                            Have questions or need support? We're here to help—reach out anytime for assistance with setup, service, and more.
                        </p>
                    </div>
                </motion.div>
                {/* Contact form */}
                <div className="flex flex-col md:flex-row justify-between bg-tartiary rounded-lg md:p-8 p-4">
                    <div className="w-full md:w-1/2 p-4">
                        <form onSubmit={handleForm} className="space-y-4">
                            {/* radio input */}
                            <div className="flex flex-col md:flex-row md:space-x-4 items-start justify-start">
                                <label className="flex items-center" htmlFor="hi">
                                    <input type="radio" name="contact-type" className="mr-2" id="" value={'hi'} />
                                    Say Hi
                                </label>
                                <label className="flex items-center mt-2 md:mt-0" htmlFor="quote">
                                    <input type="radio" name="contact-type" className="mr-2" id="" value={'quote'} />
                                    Get a Quote
                                </label>
                            </div>
                            {/* Name input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="name">Name</label>
                                <input type="text" name="name" id="name" className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary" placeholder="Mr. X" />
                            </div>
                            {/* Email input */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary" placeholder="Enter your email address" />
                            </div>
                            {/* Text area */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700" htmlFor="email">Message</label>
                                <textarea rows={'6'} name="message" id="message" className="mt-2 py-2.5 px-4 block w-full rounded-md shadow-sm focus:outline-none focus:ring focus:ring-primary resize-none" placeholder="Enter your message"></textarea>


                            </div>
                            <button type="submit" className="inline-block px-6 py-3 bg-black text-white font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300">
                                Send a message
                            </button>
                        </form>
                    </div>
                    {/* image  */}
                    <div className="relative md:flex justify-end items-center md:w-1/2 md:-m-8 overflow-hidden">
                        <img src={contact} alt="contact" draggable={false} className="md:absolute md:block hidden top-0 bottom-0 -right-8 h-full" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;