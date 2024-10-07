import { Check } from 'lucide-react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const pricingPlans = [
    {
        name: 'Basic',
        price: 199,
        features: ['5 Projects', '200K API Access', '500MB Storage', 'Custom Cloud Services', 'Weekly Reports'],
    },
    {
        name: 'Standard',
        price: 399,
        features: ['10 Projects', '300K API Access', '1GB Storage', 'Custom Cloud Services', 'Weekly Reports'],
    },
    {
        name: 'Premium',
        price: 599,
        features: ['15 Projects', 'Unlimited API Access', '5GB Storage', 'Custom Cloud Services', 'Weekly Reports'],
    },
];

const Pricing = () => {
    return (
        <section id="pricing" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">Our Pricing Plans</h2>
                <p className="section-subtitle text-center">Choose the plan that fits your needs</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {pricingPlans.map((plan, index) => (
                        <Card key={index} className="animate-fadeIn">
                            <CardHeader>
                                <h3 className="text-2xl font-bold text-center">{plan.name}</h3>
                                <p className="text-4xl font-bold text-center text-primary">${plan.price}<span className="text-base font-normal text-gray-600">/month</span></p>
                            </CardHeader>
                            <CardContent>
                                <ul className="space-y-2">
                                    {plan.features.map((feature, featureIndex) => (
                                        <li key={featureIndex} className="flex items-center">
                                            <Check className="text-primary mr-2" size={16} />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <button className="btn-primary w-full">Choose Plan</button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;