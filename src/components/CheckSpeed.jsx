
import speedCheck from "../assets/images/speedChecker/speedCheck.png"
import { useTheme } from "../hook/useTheme";

const CheckSpeed = () => {
    const { dark } = useTheme()
    return (
        <section className={`relative py-12 px-5 ${dark ? 'bg-[#0C0C0C]' : 'bg-white'}`}>
            <div className={`max-w-7xl mx-auto ${dark ? 'bg-[#141414]' : 'bg-[#F3F3F3]'} rounded-md sm:pt-24 pt-8 pb-12 flex flex-col md:flex-row items-center justify-between px-4 sm:px-6 lg:px-8`}>
                {/* Left side  */}
                <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
                    <h1 className={`text-2xl md:text-3xl font-bold ${dark ? 'text-gray-300' : 'text-secondary '} mb-4`}>
                        Test Your Internet Speed – Fast, Accurate, and Real-Time
                    </h1>
                    <p className={`${dark ? 'text-gray-400' : 'text-gray-600'} mb-6 md:w-2/3`}>
                        Curious about your current internet performance? Use real-time speed test tool to instantly check your download, upload, and latency speeds. Know exactly how your connection stacks up—no guesswork, just results.
                    </p>
                    <a href="https://www.speedtest.net/" target="blank" className={`inline-block px-6 py-3 bg-black  font-semibold rounded-md hover:bg-primary hover:text-black transition-all duration-300 ${dark ? 'bg-white text-black' : 'bg-black text-white'}`}>
                        Check Your Speed
                    </a>

                </div>
                {/* right side */}
                <div className="md:w-1/2 flex justify-center items-center relative">
                    <img draggable={false} src={speedCheck} alt="Speed Check" className="md:absolute md:-top-64 md:bottom-0"
                        style={
                            { transform: 'scale(1.20)' }
                        } />
                </div>
            </div>
        </section>

    );
};

export default CheckSpeed;