
import { useState } from "react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
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
            name: 'News & Blogs',
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
        <nav className="fixed top-0 w-full left-0 right-0 bg-white shadow-md z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center mt-5 pb-5">
                    {/* Logo */}
                    <div >
                        <a className="flex gap-2 items-center" href="">
                            <img
                                draggable={false}
                                className="h-12 md:h-16 w-auto object-contain"
                                src="RcnLogo.png"
                                // srcSet="RcnLogo.png 1x, RcnLogo@2x.png 2x"
                                alt="Logo"
                            />

                        </a>
                    </div>
                    {/* nav items for larger device */}
                    <div className="space-x-8 hidden lg:flex items-center">
                        {
                            menuItems.map((item, index) => (
                                <a onClick={() => handleMenuClick(item.name)} key={index} className={`text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name ? ' bg-primary text-black underline underline-offset-4' : ''}`} href={item.href}>{item.name}</a>
                            ))
                        }
                        <a href="#contact" className="border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300">Contact us</a>
                    </div>
                    {/* mobile menu */}
                    <div className="lg:hidden flex items-center">
                        <button onClick={toggleMenu} className="text-gray-700 hover:text-primary focus:outline-none">
                            {
                                isOpen ? <MdOutlineClose className="size-6" /> : <HiOutlineMenuAlt3 className="size-6" />
                            }

                        </button>
                    </div>
                </div>
            </div>
            {/* mobile menu */}
            {
                isOpen && (
                    <div className="lg:hidden bg-white shadow-md">
                        <div className="px-4 pt-2 pb-3 space-y-2 sm:px-3">
                            {
                                menuItems.map((item, index) => (
                                    <a onClick={() => handleMenuClick(item.name)} key={index} className={`block text-black px-2 hover:bg-primary rounded-sm hover:underline underline-offset-4 transition-all duration-300 ${activeItem === item.name ? 'text-primary' : ''}`} href={item.href}>{item.name}</a>
                                ))
                            }
                            <a href="#contact" className="block border px-4 py-2 border-black hover:bg-primary hover:border-primary rounded-md transition-all duration-300">Contact us</a>
                        </div>
                    </div>
                )
            }
        </nav>
    );
};

export default Navbar;