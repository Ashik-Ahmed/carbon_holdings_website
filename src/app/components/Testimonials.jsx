import { Avatar, AvatarFallback } from "./ui/avatar";
import { Card, CardContent, CardHeader } from "./ui/card";


const testimonials = [
    {
        name: 'John Doe',
        role: 'CEO, Tech Innovators',
        content: 'Working with this team has been a game-changer for our business. Their insights and strategies have helped us grow exponentially.',
        avatar: 'JD',
    },
    {
        name: 'Jane Smith',
        role: 'CFO, Global Solutions',
        content: 'The level of professionalism and expertise they bring to the table is unmatched. I highly recommend their services to any business looking to scale.',
        avatar: 'JS',
    },
    {
        name: 'Mike Johnson',
        role: 'Director, StartUp Ventures',
        content: 'From day one, they understood our vision and helped us turn it into reality. Their support has been invaluable to our success.',
        avatar: 'MJ',
    },
];

const Testimonials = () => {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <Card key={index}>
                            <CardHeader>
                                <div className="flex items-center space-x-4">
                                    <Avatar>
                                        <AvatarFallback>{testimonial.avatar}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <p className="font-semibold">{testimonial.name}</p>
                                        <p className="text-sm text-gray-600">{testimonial.role}</p>
                                    </div>
                                </div>
                            </CardHeader>
                            <CardContent>
                                <p className="text-gray-600">&ldquo;{testimonial.content}&rdquo;</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;