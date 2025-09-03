import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import logo from "../assets/images/footer/logo.png"
import FooterContact from "./FooterContact";
import { useTheme } from "../hook/useTheme";

const Footer = () => {
    const { dark } = useTheme()
    return (
        <footer className={`max-w-7xl mx-auto sm:px-6 lg:px-8 ${dark ? 'bg-[#0C0C0C]' : 'bg-white'}`}>
            <div className='bg-secondary rounded-t-2xl'>
                {/* first section */}
                <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-6 px-4 sm:px-6  lg:px-8 py-12">
                    {/* logo */}
                    <div>
                        <img src={logo} alt="logo" className="h-16" />
                        {/* <h3 className="text-5xl text-white font-bold">RCN</h3> */}
                    </div>
                    {/* menu items */}
                    <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-8">
                        <a href="#about" className="text-white hover:text-gray-400">Home</a>
                        <a href="#services" className="text-white hover:text-gray-400">Services</a>
                        <a href="#coverageArea" className="text-white hover:text-gray-400">Coverage area</a>
                        <a href="#News&Blogs" className="text-white hover:text-gray-400">News & Blogse</a>
                        <a href="#FAQs" className="text-white hover:text-gray-400">FAQs</a>
                        <a href="#testimonial" className="text-white hover:text-gray-400">Testimonials</a>
                    </div>
                    {/* social Icons */}
                    <div className="flex justify-end space-x-4">
                        <a target="blank" href="https://www.facebook.com/profile.php?id=61578136241392" className="text-black bg-white p-1.5 rounded-full">
                            <FaFacebookF className=" hover:text-gray-400" />
                        </a>
                        <a href="#" className="text-black bg-white p-1.5 rounded-full">
                            <FaTwitter className=" hover:text-gray-400" />
                        </a>
                        <a href="#" className="text-black bg-white p-1.5 rounded-full">
                            <FaLinkedinIn className=" hover:text-gray-400" />
                        </a>
                    </div>
                </div>
                {/* contact */}
                <FooterContact />
                <hr className="my-4 border-white mx-4 sm:px-6 lg:px-8" />
                <div className="flex flex-wrap md:gap-8 text-white px-4 sm:px-6 lg:px-8 py-5 pb-10">
                    <p>© 2025 RCN. All Rights Reserved.</p>
                    <p className="underline underline-offset-4"> <a href="">Privacy Policy</a></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;