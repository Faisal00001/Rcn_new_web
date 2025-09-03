
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { useTheme } from "../hook/useTheme";
const Navbar = () => {
    const { dark, setDark } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('');
    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }
    const handleMenuClick = (name) => {
        setActiveItem(name)
        setIsOpen(false)
    }

    const menuItems = [
        {
            name: 'About us',
            href: '#about'
        },
        {
            name: 'Services',
            href: '#services'
        },
        {
            name: 'Coverage area',
            href: '#coverageArea'
        },
        {
            name: 'News and Blogs',
            href: '#News&Blogs'
        },
        {
            name: 'FAQs',
            href: '#FAQs'
        },
        {
            name: 'Testimonials',
            href: '#testimonial'
        }

    ]

    return (
        <nav className={`fixed top-0 w-full left-0 right-0 ${dark ? 'bg-[#0C0C0C]' : 'bg-white'} shadow-md z-50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20"> {/* Adjusted height */}
                    {/* Logo */}
                    {
                        dark ? <div>
                            <a className="flex gap-2 items-center" href="">
                                <img
                                    draggable={false}
                                    className="md:w-auto object-cover w-[150px]"
                                    src="LogoDarkNN.png"
                                    alt="Logo"
                                />
                            </a>
                        </div> : <div>
                            <a className="flex gap-2 items-center" href="">
                                <img
                                    draggable={false}
                                    className="md:w-auto object-cover w-[150px]"
                                    src="LogoNewNNN.png"
                                    alt="Logo"
                                />
                            </a>
                        </div>

                    }


                    {/* Nav items for larger devices */}
                    <div className="space-x-6 hidden lg:flex items-center">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                onClick={() => handleMenuClick(item.name)}
                                href={item.href}
                                className={` ${dark ? 'text-gray-300' : 'text-black'} px-2 ${dark && 'hover:text-black'} hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name ? 'bg-primary underline' : ''
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className={`border px-4 py-2 ${dark && 'bg-white'} border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300`}
                        >
                            Contact Us
                        </a>
                        <button onClick={() => setDark(!dark)}>
                            {
                                dark ? <MdDarkMode className={`text-4xl ${dark && 'text-lime-500'}`} /> : <CiLight className="text-4xl" />
                            }

                        </button>

                    </div>

                    {/* Hamburger for mobile */}
                    <div className="lg:hidden flex items-center">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-700 hover:text-primary focus:outline-none"
                        >
                            {isOpen ? (
                                <MdOutlineClose className="w-6 h-6" />
                            ) : (
                                <HiOutlineMenuAlt3 className="w-6 h-6" />
                            )}
                        </button>
                    </div>
                </div>
            </div>
            {/* Mobile menu */}
            {isOpen && (
                <div className="lg:hidden bg-white shadow-md">
                    <div className="px-4 pt-4 pb-4 space-y-3">
                        {menuItems.map((item, index) => (
                            <a
                                key={index}
                                onClick={() => handleMenuClick(item.name)}
                                href={item.href}
                                className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name ? 'text-primary' : ''
                                    }`}
                            >
                                {item.name}
                            </a>
                        ))}
                        <a
                            href="#contact"
                            className="block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300"
                        >
                            Contact Us
                        </a>
                    </div>
                </div>
            )}
        </nav>


    );
};

export default Navbar;