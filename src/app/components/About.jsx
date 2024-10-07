import Image from 'next/image';
import { CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <section id="about" className="py-20">
            <div className="container mx-auto px-4">
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 mb-8 md:mb-0 animate-slideInLeft">
                        <Image
                            src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1474&q=80"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                    <div className="md:w-1/2 md:pl-12 animate-slideInRight">
                        <h2 className="section-title">WE ARE THE BEST <span className="text-primary">CREATIVE COMPANY</span> EVER</h2>
                        <p className="text-gray-600 mb-6">
                            We are a team of passionate individuals dedicated to bringing your creative visions to life. With years of experience and a commitment to excellence, we strive to deliver outstanding results for every project.
                        </p>
                        <ul className="space-y-2 mb-6">
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Innovative and creative solutions</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Dedicated team of professionals</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>On-time project delivery</span>
                            </li>
                            <li className="flex items-center">
                                <CheckCircle className="text-primary mr-2" />
                                <span>Customer satisfaction guaranteed</span>
                            </li>
                        </ul>
                        <button className="btn-primary">Learn More</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;