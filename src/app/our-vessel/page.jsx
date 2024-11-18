import React from 'react';

const metadata = {
    title: 'Vessel',
    description: 'MT Pride of Shah Ali',
}

const Vessel = () => {
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

        </div>
    );
};

export default Vessel;