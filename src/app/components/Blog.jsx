import Image from 'next/image';
import { Card, CardContent } from './ui/card';

const blogPosts = [
    {
        title: 'The Future of Web Design',
        excerpt: 'Explore the latest trends and technologies shaping the future of web design.',
        image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1472&q=80',
        date: 'May 15, 2023',
    },
    {
        title: 'Mastering Digital Marketing',
        excerpt: 'Learn the essential strategies to excel in the world of digital marketing.',
        image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1415&q=80',
        date: 'May 10, 2023',
    },
];

const Blog = () => {
    return (
        <section id="blog" className="py-20">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">Our Latest Blog</h2>
                <p className="section-subtitle text-center">Stay updated with our latest insights and news</p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {blogPosts.map((post, index) => (
                        <Card key={index} className="animate-fadeIn">
                            <CardContent className="p-0">
                                <Image
                                    src={post.image}
                                    alt={post.title}
                                    width={600}
                                    height={300}
                                    className="w-full h-48 object-cover"
                                />
                                <div className="p-6">
                                    <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                                    <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                                    <a href="#" className="text-primary font-semibold hover:underline">Read More</a>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Blog;