import { CheckCircle } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const GlobalReach = () => {
    return (
        <section id="global-reach" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className='section-title text-center uppercase'>Connecting <span className="text-primary">Businesses Worldwide</span></h2>
                <div className="flex flex-col md:flex-row items-center">
                    <div className="md:w-1/2 md:pl-12 animate-slideInLeft">
                        {/* <h2 className="section-title text-center"> REACH</h2> */}
                        <p className='text-gray-600'>Our operations extend beyond borders, enabling us to connect businesses to global markets and foster international partnerships. Through our robust import and export services, we facilitate the movement of goods across continents, helping clients tap into new opportunities and achieve their growth goals.</p>

                        <ul className="space-y-2 my-6 text-gray-600">
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-2" />
                                <p><span className='font-bold'>Extensive Trade Network:</span> We have built a vast network of partners and clients worldwide, allowing us to streamline international trade processes and ensure timely deliveries.</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-2" />
                                <p><span className='font-bold'>Strategic Market Access:</span> Our expertise in navigating different regulations and customs requirements helps businesses expand into new markets with confidence.</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-2" />
                                <p><span className='font-bold'>Domestic and International Logistics:</span> We handle logistics both locally and globally, providing end-to-end solutions that cover everything from sourcing to delivery.</p>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="text-primary mr-2" />
                                <p><span className='font-bold'>Support for Growing Businesses:</span> Whether you are looking to import raw materials or export finished goods, we offer flexible solutions to support your growth and drive market expansion.</p>
                            </li>
                        </ul>
                    </div>
                    <div className="md:w-1/2 mb-8 md:mb-0 animate-slideInRight">
                        <Image
                            src="/world.jpg"
                            alt="About Us"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </section >
    );
};

export default GlobalReach;