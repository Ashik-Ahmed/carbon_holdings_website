
import { Globe, TrendingUp, Ship, Package, ShieldCheck } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
    {
        title: 'Trading & Indenting',
        description: 'Facilitating seamless trading operations with expertise in domestic and international markets.',
        icon: TrendingUp,
    },
    {
        title: 'Shipping & Logistics',
        description: 'Comprehensive logistics solutions to ensure efficient and safe transportation of goods.',
        icon: Ship,
    },
    {
        title: 'Import & Export',
        description: 'Connecting businesses to global markets by managing the complexities of cross-border trade.',
        icon: Globe,
    },
    {
        title: 'Supply Chain Management',
        description: 'Optimizing the flow of goods and information to enhance efficiency and reduce costs.',
        icon: Package,
    },
    {
        title: 'Fender Service',
        description: 'Providing specialized fendering solutions to ensure the safety and security of vessels.',
        icon: ShieldCheck,
    },
];


const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">Our Services</h2>
                <p className="section-subtitle text-center">We offer a wide range of creative services to help your business grow</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.map((service, index) => (
                        <Card key={index} className="animate-fadeIn group">
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