
import { Lightbulb, Palette, Rocket, Globe } from 'lucide-react';
import { Card, CardDescription, CardHeader, CardTitle } from './ui/card';

const services = [
    {
        title: 'Creative Design',
        description: 'Innovative designs that capture attention and convey your message effectively.',
        icon: Palette,
    },
    {
        title: 'Digital Marketing',
        description: 'Comprehensive digital marketing strategies to boost your online presence.',
        icon: Globe,
    },
    {
        title: 'Brand Strategy',
        description: 'Develop a strong brand identity that resonates with your target audience.',
        icon: Lightbulb,
    },
    {
        title: 'Product Launch',
        description: 'Successfully launch your products with our expert guidance and support.',
        icon: Rocket,
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