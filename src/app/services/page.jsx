import Image from 'next/image';
import React from 'react';

const Services = () => {
    return (
        <div className="container mx-auto py-16 px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
                <p className="text-primary">{`Home > Services`}</p>
            </div>

            {/* Page Header */}
            <div className="mb-12">
                <h1 className="text-2xl md:text-5xl font-bold text-primary">
                    Helping Businesses Everyday
                </h1>
                <p className="mt-4 text-gray-600">
                    Driving seamless operations through advanced process development and a committed team, we empower businesses to thrive daily with efficiency and precision.
                </p>
            </div>

            {/* Service Details Section */}
            <div className="space-y-16">
                {/* Business Advisory Section */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-gray-100 p-8">
                    <div className="md:w-1/2">
                        <Image
                            src="/services/business-advisory.jpg"
                            alt="Business Advisory"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-[600px] h-[400px] object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-primary">
                            Business Advisory
                        </h2>
                        <p className="mt-4 text-gray-600">
                            We deliver strategic insights and customized solutions that drive our clients&apos; operational efficiency and sustained growth. With a deep-rooted expertise in trade and shipping, we empower businesses to enter new markets confidently. Our advisory services offer tailored guidance, supporting informed decision-making and fostering resilience. Through comprehensive risk management, essential goods trading, and market analysis, we provide end-to-end support across diverse sectors, helping clients thrive in today’s competitive landscape.
                        </p>
                    </div>
                </div>

                {/* Shipping & Logistics Section */}
                <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse p-8">
                    <div className="md:w-1/2">
                        <Image
                            src="/services/shipping-logistics.jpg"
                            alt="Shipping & Logistics"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-[600px] h-[400px] object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-primary">
                            Shipping & Logistics
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Our team continuously monitors our domestic transport systems, using real-time data to track shipments and anticipate needs. We expertly manage the transportation and distribution of goods to ensure they arrive on time, every time. We adjust resources and services to maintain efficiency and minimize delays if additional support is required. Through real-time monitoring of our transport network, we provide seamless support tailored to your needs, adapting our services as required for maximum efficiency and responsiveness.
                        </p>
                    </div>
                </div>

                {/* Optimization of the Discharge Operation Section */}
                <div className="flex flex-col md:flex-row items-center md:space-x-8 bg-gray-100 p-8">
                    <div className="md:w-1/2 bg-white">
                        <Image
                            src="/services/discharge-operation.avif"
                            alt="Optimization of the Discharge Operation"
                            width={600}
                            height={400}
                            className="rounded-lg shadow-lg w-[600px] h-[400px] object-contain"
                        />
                    </div>
                    <div className="md:w-1/2 mt-8 md:mt-0">
                        <h2 className="text-3xl font-bold text-primary">
                            Optimization of the Discharge Operation
                        </h2>
                        <p className="mt-4 text-gray-600">
                            Our operation streamlines discharge processes to maximize efficiency and reduce turnaround times. We monitor and maintain the overall transfer of goods from large tankers anchored offshore to onshore storage. Our service enables entities like BPC to discharge larger volumes quickly, significantly reducing offloading times and boosting annual discharge capacity. This optimization helps our clients stay competitive while improving overall supply chain performance.
                        </p>
                    </div>
                </div>

                {/* Additional Services Section */}
                <div className="space-y-12">
                    <div className="flex flex-col md:flex-row items-center md:space-x-8 p-8">
                        <div className="md:w-1/2">
                            <Image
                                src="/fender.webp"
                                alt="Fender Service"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-[600px] h-[400px] object-contain"
                            />
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <h2 className="text-3xl font-bold text-primary">
                                Fender Service
                            </h2>
                            <p className="mt-4 text-gray-600">
                                With our expert wing, we offer a full suite of Fender Services designed to ensure vessels&apos; safe, efficient, and uninterrupted docking. This service includes the supply of durable and resilient rubber fenders suitable for various vessel types and docking conditions. Our wing provides professional installation with customized solutions tailored to your port requirements, ensuring optimal protection for ships and infrastructure. The Fender maintenance and repair programs are designed to keep systems in peak condition, minimizing downtime and enhancing safety. In the event of damage, emergency fender replacement to deploy replacement fenders is made sure to continue port operations quickly. With a comprehensive approach through our wing, we help streamline cargo operations, reduce offloading times, and safeguard your assets, supporting the overall efficiency of your supply chain.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row-reverse items-center md:space-x-8 md:space-x-reverse bg-gray-100 p-8">
                        <div className="md:w-1/2">
                            <Image
                                src="/services/freight-of-coaster.jpg"
                                alt="Freight of Coaster Hire"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-[600px] h-[400px] object-contain"
                            />
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <h2 className="text-3xl font-bold text-primary">
                                Freight of Coaster Hire
                            </h2>
                            <p className="mt-4 text-gray-600">
                                We also have another expert wing that facilitates the hiring of coaster vessels for short-distance freight transport. Freight of Coaster Hire service focuses on efficiently transporting goods along coastal routes, providing a flexible and cost-effective solution for businesses. With customized rental options and tailored scheduling through this wing, we ensure timely and secure deliveries, helping our clients maintain a seamless supply chain while optimizing operational costs in coastal and logistics.
                            </p>
                        </div>
                    </div>

                    <div className="flex flex-col md:flex-row items-center md:space-x-8 p-8">
                        <div className="md:w-1/2">
                            <Image
                                src="/services/tug-boat.jpg"
                                alt="Tug Boat Hire"
                                width={600}
                                height={400}
                                className="rounded-lg shadow-lg w-[600px] h-[400px] object-contain"
                            />
                        </div>
                        <div className="md:w-1/2 mt-8 md:mt-0">
                            <h2 className="text-3xl font-bold text-primary">
                                Tug Boat Hire
                            </h2>
                            <p className="mt-4 text-gray-600">
                                Our expert wing provides tugboat services to maneuver vessels in ports and harbors safely. The powerful, highly maneuverable tugboats assist with docking, undocking, and navigating through narrow or congested waterways, providing the precision and support needed for large ships. With flexible rental options and emergency services, this expert wing helps clients maintain smooth and secure shipping operations while reducing costs associated with vessel ownership.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
