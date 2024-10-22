import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section className="pt-20 pb-12 bg-gray-100">
            <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
                <div className="md:w-1/2 mb-8 md:mb-0 animate-slideInLeft">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        DREAM IN <span className="text-primary">CREATIVE</span> WAY
                    </h1>
                    <p className="text-xl mb-8">Leading global trade and logistics solutions</p>
                    <Link href="#about" className="btn-primary">Learn More</Link>
                </div>
                <div className="md:w-1/2 animate-slideInRight">
                    <Image
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
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