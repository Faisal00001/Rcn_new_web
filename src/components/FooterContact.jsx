
const FooterContact = () => {

    return (
        <>
            <div className="flex flex-col md:flex-row py-8 px-4 lg:px-8 sm:px-6 gap-8">
                <div className="flex-1 space-y-4">
                    <button className="bg-primary text-black px-6 py-2 rounded-md font-medium">Contact</button>
                    <div className="text-white space-y-2">
                        <p>
                            <span>
                                <strong>Email:</strong> info@rcnbd.net
                            </span>
                        </p>
                        <p>
                            <a href={`tel:${'+8809645900119'}`}>
                                <span>
                                    <strong>Hotline:</strong> +8809645900119
                                </span>
                            </a>
                        </p>
                        <p className="flex gap-2">
                            <a href={`tel:${'+8801901460701'}`}>
                                <span>
                                    <strong>Phone:</strong> +8801901-460701,
                                </span>
                            </a>
                            <a href={`tel:${'+8801901460702 '}`}>
                                <span>
                                    +8801901-460702
                                </span>
                            </a>

                        </p>

                        <p>
                            <span>
                                <strong>Address:</strong> Level-08, Section-D, MTB, Software Technology Park, Nazir Shankarpur, Jashore Sadar, Jashore-7400, Bangladesh
                            </span>
                        </p>
                    </div>
                </div>
                <div className="flex-1 bg-[#292A32] justify-center items-center p-8 rounded-md">
                    <form className="flex flex-col md:flex-row justify-center items-center h-20 gap-4">
                        <input type="email" placeholder="info@rcnbd.net" className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:rin focus:ring-2 focus:ring-primary" />
                        <a href="#contact" className="bg-primary text-black px-6 py-2.5 rounded-md font-medium">Contact</a>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FooterContact;