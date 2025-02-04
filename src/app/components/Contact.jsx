"use client";

import { useState } from 'react';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

const Contact = () => {
    const [formStatus, setFormStatus] = useState(null)
    const [emailLoading, setEmailLoading] = useState(false)
    const [formData, setFormData] = useState({  // Initialize state for formData
        name: '',
        email: '',
        subject: '',
        message: ''
    })

    async function sendEmail(formData) {
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const data = await response.json();
            // console.log('data:', data);
            return data;

        } catch (error) {
            // console.error('Error:', error.message);
            return { error: error.message };
        }
    }

    const handleSubmit = async (e) => {
        setFormStatus(null)
        setEmailLoading(true)
        e.preventDefault()

        const email = await sendEmail(formData)

        if (email.success) {
            setFormStatus('success')
            setFormData({ name: '', email: '', subject: '', message: '' }) // Reset form state
        } else {
            setFormStatus('error')
        }
        setEmailLoading(false)
    }

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    return (
        <section id="contact" className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">LET&apos;S <span className='text-primary'>CONNECT</span></h2>
                <p className="section-subtitle text-center">Get in touch with us for any inquiries</p>
                <div className="max-w-2xl mx-auto">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <Input
                                type="text"
                                name="name"
                                placeholder="Your Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                            />
                            <Input
                                type="email"
                                name="email"
                                placeholder="Your Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                            />
                        </div>
                        <Input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={formData.subject}
                            onChange={handleChange}
                            required
                        />
                        <Textarea
                            name="message"
                            placeholder="Your Message"
                            value={formData.message}
                            onChange={handleChange}
                            required
                            rows={6}
                        />
                        <button type="submit" className={`btn-primary w-full ${emailLoading ? 'opacity-50 cursor-not-allowed' : ''}`}>Send Message</button>
                    </form>
                    {formStatus === 'success' &&
                        (
                            <p className="text-primary mt-4">We have received your message. We will get back to you soon!</p>
                        )
                    }
                    {
                        formStatus === 'error' &&
                        (
                            <p className="text-white bg-red-500 mt-4">Something went wrong. Please try again later.</p>
                        )
                    }
                </div>
            </div>
        </section>
    );
};

export default Contact;