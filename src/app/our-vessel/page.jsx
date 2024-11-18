import { Anchor, ArrowBigDown, Box, Cpu, DollarSign, Gauge, PanelBottom, Scale } from 'lucide-react';
import { LayoutGrid, Ruler, Ship } from 'lucide-react';
import Image from 'next/image';
import React from 'react';

const metadata = {
    title: 'Our Vessel',
    description: 'MT Pride of Shah Ali',
}

const Vessel = () => {

    const shipData = [
        { year: "2012", totalVoyage: 35, totalQuantity: 44015.86 },
        { year: "2013", totalVoyage: 84, totalQuantity: 103928.08 },
        { year: "2014", totalVoyage: 81, totalQuantity: 98983.05 },
        { year: "2015", totalVoyage: 83, totalQuantity: 99462.72 },
        { year: "2016", totalVoyage: 78, totalQuantity: 96826.78 },
        { year: "2017", totalVoyage: 79, totalQuantity: 97249.95 },
        { year: "2018", totalVoyage: 82, totalQuantity: 104734.42 },
        { year: "2019", totalVoyage: 75, totalQuantity: 96843.45 },
        { year: "2020", totalVoyage: 72, totalQuantity: 92969.86 },
        { year: "2021", totalVoyage: 79, totalQuantity: 98285.80 },
        { year: "2022", totalVoyage: 75, totalQuantity: 89118.60 },
        { year: "2023", totalVoyage: 72, totalQuantity: 89446.68 },
        { year: "2024 (up to September 2024)", totalVoyage: 65, totalQuantity: 83545.28 }
    ];


    return (
        <div className="container mx-auto py-16 px-8">
            {/* Breadcrumb */}
            <div className="mb-8">
                <p className="text-primary">{`Home > Our Vessel`}</p>
            </div>

            {/* Page Header */}
            <div className="mb-12">
                <h1 className="text-2xl md:text-5xl font-bold text-primary">
                    Our Vessel
                </h1>
                <p className="mt-4 text-gray-600">
                    The MT Pride of Shah Ali (Registration No. C-1790) is a proud asset dedicated to transporting refined oil on behalf of the Bangladesh Petroleum Corporation. Constructed in 2012, this vessel has navigated the waters of Bangladesh, making vital journeys to key depots in Godnail, Fotulla, Khulna, Chandpur, Jhalokathi, Barisal, Baghabari, and Bhoirob. Each voyage reflects our commitment to reliable service and the seamless delivery of essential resources.
                </p>
            </div>

            <div className="max-w-6xl mx-auto py-16 px-4">
                <div className='mb-8'>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                        Key Features of MT Pride of Shah Ali
                    </h2>
                </div>
                <div className="">
                    <div className="mx-auto max-w-7xl bg-white">
                        <div className="grid gap-8 md:grid-cols-2">
                            {/* Image Section */}
                            <div className="relative min-h-[300px] overflow-hidden ">
                                <Image
                                    src="/mt_shah_ali.jpg"
                                    alt="Oil Tanker Ship"
                                    className="object-cover"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    priority
                                />
                            </div>

                            {/* Content Section */}
                            <div className="">
                                <div className="mb-6">
                                    <h1 className="mb-2 text-3xl font-bold text-gray-900">Oil Tanker Vessel</h1>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Ship className="h-5 w-5" />
                                        <span>Commercial Oil Transport Vessel</span>
                                    </div>
                                </div>

                                <div className="grid gap-6 md:grid-cols-2">
                                    {/* Dimensions */}
                                    <div className="rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 p-4">
                                        <h2 className="mb-3 font-semibold text-blue-900">Dimensions</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <Ruler className="h-4 w-4" />
                                                <span>Length: 63.80 M</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <LayoutGrid className="h-4 w-4" />
                                                <span>Breadth: 10.10 M</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-blue-700">
                                                <ArrowBigDown className="h-4 w-4" />
                                                <span>Draft: 4.50 M</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Technical Specs */}
                                    <div className="rounded-xl bg-gradient-to-br from-emerald-50 to-emerald-100 p-4">
                                        <h2 className="mb-3 font-semibold text-emerald-900">Technical Specs</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-emerald-700">
                                                <Cpu className="h-4 w-4" />
                                                <span>Engine: China Diesel (2Nos)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-emerald-700">
                                                <Gauge className="h-4 w-4" />
                                                <span>Horse Power: 720X2=1440 BHP</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-emerald-700">
                                                <Box className="h-4 w-4" />
                                                <span>Steel Body</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Capacity */}
                                    <div className="rounded-xl bg-gradient-to-br from-amber-50 to-amber-100 p-4">
                                        <h2 className="mb-3 font-semibold text-amber-900">Capacity & Structure</h2>
                                        <div className="space-y-2">
                                            <div className="flex items-center gap-2 text-amber-700">
                                                <Scale className="h-4 w-4" />
                                                <span>Capacity: 1250 MT</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-amber-700">
                                                <PanelBottom className="h-4 w-4" />
                                                <span>Double Bottom</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-amber-700">
                                                <Anchor className="h-4 w-4" />
                                                <span>Gross Ton: 492</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Value */}
                                    <div className="rounded-xl bg-gradient-to-br from-purple-50 to-purple-100 p-4">
                                        <h2 className="mb-3 font-semibold text-purple-900">Value</h2>
                                        <div className="flex items-center gap-2 text-purple-700">
                                            <DollarSign className="h-4 w-4" />
                                            <span>12 Crore</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container max-w-6xl mx-auto py-8 md:py-16">
                <div className='mb-8'>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-700">
                        History of MT Pride of Shah Ali Throughout the Years
                    </h2>
                </div>

                <div className="max-w-5xl mx-auto overflow-x-auto">
                    <table className="min-w-full border-collapse border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100">
                                <th className="border border-gray-300 p-2 text-center font-medium">Year</th>
                                <th className="border border-gray-300 p-2 text-center font-medium">Total Voyage</th>
                                <th className="border border-gray-300 p-2 text-center font-medium">Total Quantity Carried (MT)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {shipData.map((data, index) => (
                                <tr key={index}>
                                    <td className="border border-gray-300 text-center p-2">{data.year}</td>
                                    <td className="border border-gray-300 text-center p-2">{data.totalVoyage}</td>
                                    <td className="border border-gray-300 text-center p-2">{data.totalQuantity.toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default Vessel;