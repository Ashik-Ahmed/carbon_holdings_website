"use client";

import { useEffect, useState } from 'react';

const stats = [
    { label: 'Projects Completed', value: 96, color: '#ff5e14' },
    { label: 'Happy Clients', value: 85, color: '#1e3056' },
    { label: 'Business Growth', value: 90, color: '#ff5e14' },
    { label: 'Company Progress', value: 75, color: '#1e3056' },
];

const Stats = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section id='stats' className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center animate-fadeIn">
                            <div className="w-32 h-32 mx-auto mb-4 relative">
                                <svg viewBox="0 0 36 36" className="w-full h-full">
                                    <path
                                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke="#eee"
                                        strokeWidth="2"
                                    />
                                    <path
                                        d="M18 2.0845
                      a 15.9155 15.9155 0 0 1 0 31.831
                      a 15.9155 15.9155 0 0 1 0 -31.831"
                                        fill="none"
                                        stroke={stat.color}
                                        strokeWidth="2"
                                        strokeDasharray={`${stat.value}, 100`}
                                    />
                                </svg>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-2xl font-bold" style={{ color: stat.color }}>{stat.value}%</span>
                                </div>
                            </div>
                            <p className="text-lg font-semibold">{stat.label}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Stats;