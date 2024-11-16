
import { Globe, TrendingUp, Ship, Package, ShieldCheck, Sailboat, Warehouse } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
    {
        title: 'Fender Service',
        description: 'Specialized fendering solutions to ensure vessel safety and secure docking.',
        icon: ShieldCheck,
    },
    {
        title: 'Business Advisory',
        description: 'Strategic insights and tailored solutions for operational growth and resilience.',
        icon: TrendingUp,
    },
    {
        title: 'Shipping & Logistics',
        description: 'Efficient goods transport with real-time tracking and adaptive support.',
        icon: Warehouse,
    },
    {
        title: 'Optimization of the Discharge Operation',
        description: 'Streamlined discharge processes to reduce turnaround times and enhance efficiency.',
        icon: Globe,
    },
    {
        title: 'Freight of Coaster Hire',
        description: 'Flexible, cost-effective coastal freight transport with tailored scheduling.',
        icon: Ship,
    },
    {
        title: 'Tug Boat Hire',
        description: 'Safe vessel maneuvering with flexible rentals and emergency tugboat support.',
        icon: Sailboat,
    },
];



const Services = () => {
    return (
        <section id="services" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">OUR <span className='text-primary'>SERVICES</span></h2>
                <p className="section-subtitle text-center">We offer a wide range of creative services to help your business grow</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="animate-fadeIn group bg-gray-100">
                            <CardHeader>
                                <div className="w-12 h-12 bg-primary group-hover:bg-[#1e3056] fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mb-4">
                                    <service.icon className="text-white" size={24} />
                                </div>
                                <CardTitle>{service.title}</CardTitle>
                                <CardDescription>{service.description}</CardDescription>
                            </CardHeader>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;