import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 animate-slideInLeft">
                        <Image
                            src="/logistics.avif"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12 animate-slideInRight">
                        <h2 className="section-title">YOUR <span className="text-primary">TRUSTED</span> PARTNER IN <span className="text-primary">TRADE</span> AND <span className="text-primary">LOGISTICS</span></h2>
                        <p className="text-gray-600 mb-6">
                            At Carbon Holdings, we are dedicated to connecting businesses globally with innovative and reliable solutions. Backed by over 15 years of industry expertise, we deliver comprehensive services in trading, logistics, and supply chain management, ensuring efficiency, safety, and sustainability in every project.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Comprehensive Trade Solutions</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Experienced and Reliable</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Innovative and Efficient</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Global Reach, Local Impact</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Commitment to Safety and Sustainability</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;