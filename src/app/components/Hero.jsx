import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section id='hero' className="pt-20 pb-12 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 animate-slideInLeft">
                    {/* <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        PIONEER IN <span className="text-primary">FENDER SERVICES</span>
                    </h1> */}
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        DREAM IN <span className="text-primary">CREATIVE</span> WAY
                    </h1>
                    <p className="text-xl mb-8">Pioneer in <span className="font-bold border-b-4 border-[#ff5e14]">Fender Services</span></p>
                    <div className='pt-8'>
                        <Link href="#about" className="btn-primary">Learn More</Link>
                    </div>
                </div>
                <div className="md:w-1/2 animate-slideInRight">
                    <Image
                        src="/hero_image.avif"
                        alt="Team working together"
                        width={600}
                        height={400}
                        className="rounded-lg shadow-lg"
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;