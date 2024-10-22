import { Oil, Briefcase, Truck, Factory, Anchor } from 'lucide-react';

const industries = [
    // {
    //     title: 'Oil and Energy',
    //     description: 'We provide specialized logistics and transportation services for the oil and energy sector, including the delivery of refined oil using our dedicated tanker.',
    //     icon: <Oil />,
    // },
    {
        title: 'Trade and Commerce',
        description: 'By facilitating seamless import and export operations, we support businesses in expanding their market reach and navigating the complexities of international trade.',
        icon: <Briefcase />,
    },
    {
        title: 'Shipping and Logistics',
        description: 'Our services are tailored to meet the needs of companies in the logistics sector, offering reliable shipping and supply chain management to ensure goods are transported efficiently.',
        icon: <Truck />,
    },
    {
        title: 'Manufacturing and Distribution',
        description: 'With a focus on optimizing supply chain processes, we help manufacturers and distributors reduce costs and improve the flow of goods from production to market.',
        icon: <Factory />,
    },
    {
        title: 'Maritime Services',
        description: 'Our fendering services and vessel support ensure safe operations for ships, catering to the unique demands of the maritime industry.',
        icon: <Anchor />,
    },
];

const IndustriesWeServe = () => {
    return (
        <section id='#industriesweserve' className="py-16">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center"><span className="text-primary">INDUSTRIES</span> WE SERVE</h2>
                <p className="section-subtitle text-center">
                    Carbon Holdings delivers comprehensive solutions across a variety of industries, helping businesses overcome logistical challenges and optimize their operations.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {industries.map((industry, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transform transition-all duration-300"
                        >
                            <div className="w-12 h-12 bg-primary group-hover:bg-[#1e3056] fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mb-4">
                                <span className='text-white'>{industry.icon}</span>
                            </div>
                            {/* <div className="text-4xl text-primary mb-4">{industry.icon}</div> */}
                            <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                            <p className="text-gray-600">{industry.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default IndustriesWeServe;
