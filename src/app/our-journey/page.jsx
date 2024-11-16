import { CheckCircle, Eye, HeartHandshake } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const OurJourney = () => {
    return (
        <div className='container mx-auto py-16 px-8'>
            <div className='mt-16 mb-4'>
                <p className='text-primary'>{`Home > Our Journey`}</p>
            </div>

            <div className='mt-16 mb-4'>
                <h1 className='text-primary text-4xl font-bold'>The Journey</h1>
            </div>
            <div className='md:flex md:gap-8 items-center'>
                <div className='md:w-1/2'>
                    <p className='mt-2'>
                        Founded in 2008, we embarked on our journey as a dedicated domestic trading company. Fast forward to today, and you will find a dynamic organization that has evolved far beyond its beginnings, strategically diversifying into sectors that power regional and international commerce. Through thoughtful planning and a constant drive to adapt, we have become a trusted force in Shipping & Logistics, Import & Export, and Supply Chain Management.
                    </p>
                    <p className='mt-2'>
                        The path we took for the shipping and logistics sector was not just about moving goods; it was about creating an integrated, efficient approach to domestic transport that makes sense for businesses of all sizes. This expansion allowed us to offer cutting-edge solutions that streamline operations, save time, and deliver value every step of the way.
                    </p>
                    <p className="mt-2">
                        As we extended into import and export, Carbon Holdings became a bridge to global markets, facilitating the movement of goods across borders and providing businesses with the tools they need to grow. Each partnership, shipment, and transaction represents our commitment.
                    </p>
                    <p className="mt-2">
                        Our approach to supply chain management focuses on optimizing every link in the chain—enhancing the flow of goods and information to elevate our client&apos;s business efficiency and strengthen their competitive edge. We understand that a resilient, responsive supply chain is the backbone of modern commerce.
                    </p>
                    <p className="mt-2">
                        From our roots as a trading company to multi-sector expansion, Carbon Holdings is all about adapting, evolving, and embracing every opportunity that comes our way. We are here to drive success in every industry we serve. We are committed to reliable, innovative solutions that make us a leading player in today’s fast-paced trading industry.
                    </p>
                </div>
                <div className='md:w-1/2 mt-8 md:mt-0'>
                    <Image src="/our-journey.jpg" alt="our-journey" width={1000} height={1000} />
                </div>
            </div>

            <div className="md:flex justify-center md:gap-8 mt-16">
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-8 md:mt-0 flex flex-col items-center text-center group">
                    <div className='bg-primary group-hover:bg-[#1e3056] p-2 w-12 h-12 fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mb-4'>
                        <CheckCircle size={24} className="text-white" />
                    </div>
                    <h1 className="text-primary text-2xl font-bold mt-4">
                        Commitment
                    </h1>
                    <p className="mt-4 text-gray-600">
                        Smarter, faster, and more efficient are our core commitments to reshaping global trade by connecting businesses across borders. Our mission is to add exceptional value, make supply chains smoother, optimize resources, and strengthen every partnership through our dedication to innovation and expertise. Our aim for excellence fuels our drive to be a trusted ally in global trade, transforming logistics into a powerful force for growth and opportunity worldwide.
                    </p>
                </div>
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-8 md:mt-0 flex flex-col items-center text-center group">
                    <div className='bg-primary group-hover:bg-[#1e3056] p-2 w-12 h-12 fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mb-4'>
                        <Eye size={24} className="text-white" />
                    </div>
                    <h1 className="text-primary text-2xl font-bold mt-4">
                        Clarity
                    </h1>
                    <p className="mt-4 text-gray-600">
                        We see us creating a legacy where the benchmark for exceptional service, groundbreaking innovation, and unwavering commitment reflects Carbon Holdings from generation to generation. We are building a future where reliability and efficiency go hand-in-hand with a meaningful impact, making Carbon Holdings a trusted name synonymous with excellence across the globe.
                    </p>
                </div>
                <div className="w-full md:w-1/3 bg-white shadow-lg rounded-lg p-6 mt-8 md:mt-0 flex flex-col items-center text-center group">
                    <div className='bg-primary group-hover:bg-[#1e3056] p-2 w-12 h-12 fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mb-4'>
                        <HeartHandshake size={24} className="text-white" />
                    </div>
                    <h1 className="text-primary text-2xl font-bold mt-4">
                        Covenant
                    </h1>
                    <p className="mt-4 text-gray-600">
                        At Carbon Holdings, our values are the foundation of everything we do. We uphold integrity through honesty and transparency in all partnerships. With a global perspective and local impact, we prioritize sustainability to uplift communities. We strive for excellence, embracing collaboration as our strength and believe teamwork that fuels our success. These values guide us as we elevate the world of trade and logistics.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OurJourney;