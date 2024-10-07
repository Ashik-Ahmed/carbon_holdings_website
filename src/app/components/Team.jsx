import Image from 'next/image';
import { Facebook, Twitter, Linkedin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const teamMembers = [
    {
        name: 'John Doe',
        role: 'CEO & Founder',
        image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
    },
    {
        name: 'Jane Smith',
        role: 'Creative Director',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80',
    },
    {
        name: 'Mike Johnson',
        role: 'Lead Developer',
        image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
];

const Team = () => {
    return (
        <section id="team" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">Our Team Members</h2>
                <p className="section-subtitle text-center">Meet the talented individuals behind our success</p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {teamMembers.map((member, index) => (
                        <Card key={index} className="animate-fadeIn">
                            <CardContent className="p-6">
                                <Image
                                    src={member.image}
                                    alt={member.name}
                                    width={300}
                                    height={300}
                                    className="rounded-full mx-auto mb-4"
                                />
                                <h3 className="text-xl font-semibold text-center mb-2">{member.name}</h3>
                                <p className="text-gray-600 text-center mb-4">{member.role}</p>
                                <div className="flex justify-center space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-primary">
                                        <Facebook size={20} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-primary">
                                        <Twitter size={20} />
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-primary">
                                        <Linkedin size={20} />
                                    </a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Team;