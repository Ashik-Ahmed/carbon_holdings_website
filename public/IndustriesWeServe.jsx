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
        <section className="py-16 bg-gray-100 text-center">
            <div
                className="mb-12"
            >
                <h2 className="text-3xl font-semibold mb-4">Diverse Industry Solutions – Meeting the Needs of Multiple Sectors</h2>
                <p className="text-lg text-gray-600">
                    Carbon Holdings delivers comprehensive solutions across a variety of industries, helping businesses overcome logistical challenges and optimize their operations.
                </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
                {industries.map((industry, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-md p-6 text-left hover:shadow-xl transform transition-all duration-300"
                    >
                        <div className="text-4xl text-blue-500 mb-4">{industry.icon}</div>
                        <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                        <p className="text-gray-600">{industry.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default IndustriesWeServe;
