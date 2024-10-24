import React from 'react';
import { CheckCircle, Package, Wrench, AlertCircle, Shield } from 'lucide-react';
import Image from 'next/image';

const FenderService = () => {
    return (
        <section id='fenderservice' className="pt-20 pb-12 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="text-center" >
                    <h2 className="section-title">
                        COMPREHENSIVE <span className='text-primary'>FENDER</span> SERVICE <span className="text-primary">SOLUTIONS</span>
                    </h2>
                    <p className="section-subtitle text-gray-600 mb-6">
                        We take pride in pioneering fender services in Bangladesh, setting the industry standard for quality and efficiency. With over 15 years of experience in shipping and logistics, our fender services are designed to support port operations and maritime activities with the utmost reliability.
                    </p>
                </div>

                <div className="my-16" >
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
                        <div>
                            <Image
                                src="/fender.webp"
                                alt="Fender Service"
                                width={600}
                                height={600}
                                className="rounded-lg shadow-lg"
                            />
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
                                Why Choose Our Fender Service?
                            </h3>
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <CheckCircle className="text-orange-600 w-6 h-6 mr-3" />
                                    <span>
                                        <strong>Expert Installation & Maintenance:</strong> Our team of specialists ensures that every fender is installed with precision and maintained to guarantee long-lasting performance, providing essential protection for ships and docks.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Shield className="text-orange-600 w-6 h-6 mr-3" />
                                    <span>
                                        <strong>Advanced Safety Standards:</strong> We prioritize safety by using only high-quality materials and following the latest industry practices to reduce impact damage during docking and berthing.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Package className="text-orange-600 w-6 h-6 mr-3" />
                                    <span>
                                        <strong>Tailored Solutions for Any Port Size:</strong> Whether you operate a small harbor or a major port, our fender services are customizable to meet your unique needs.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <AlertCircle className="text-orange-600 w-6 h-6 mr-3" />
                                    <span>
                                        <strong>Rapid Response & Support:</strong> We offer 24/7 support to address any emergency requirements, ensuring that your operations continue smoothly without disruptions.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <Wrench className="text-orange-600 w-6 h-6 mr-3" />
                                    <span>
                                        <strong>Sustainable Practices:</strong> Our fender solutions are not just about protecting your assets, but also the environment, using eco-friendly materials wherever possible.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                <div>
                    <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                        Our Fender Solutions Include:
                    </h3>
                    <ul className="space-y-4">
                        <li>
                            <strong>Rubber Fender Supply:</strong> Durable and resilient fenders suitable for various vessel types and docking conditions.
                        </li>
                        <li>
                            <strong>Marine Fender Installation:</strong> Professional installation services with customized solutions to fit your specific port requirements.
                        </li>
                        <li>
                            <strong>Fender Maintenance & Repair:</strong> Regular maintenance programs and repair services to ensure optimal performance and safety.
                        </li>
                        <li>
                            <strong>Emergency Fender Replacement:</strong> Rapid deployment of replacement fenders to minimize downtime and maintain continuous port operations.
                        </li>
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default FenderService;
