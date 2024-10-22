import Image from 'next/image';

export default function OurShip() {
    return (
        <section id="ship" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="section-title text-center">OUR <span className='text-primary'>SHIP</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image
                            src="/mt_shah_ali.jpg"
                            alt="MT Pride of Shah Ali"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">MT Pride of Shah Ali</h3>
                        <p className="mb-4 text-gray-600">
                            Our vessel, the MT Pride of Shah Ali, is currently transporting refined oil
                            nominated by the Bangladesh Petroleum Corporation.
                        </p>
                        <ul className="space-y-2">
                            <li className='text-gray-600'><strong>Length:</strong> 63.80 M</li>
                            <li className='text-gray-600'><strong>Breadth:</strong> 10.10 M</li>
                            <li className='text-gray-600'><strong>Draft:</strong> 4.5 M</li>
                            <li className='text-gray-600'><strong>Gross Tonnage:</strong> 492</li>
                            <li className='text-gray-600'><strong>Type of Ship:</strong> Oil Tanker</li>
                            <li className='text-gray-600'><strong>Engine:</strong> China Diesel (2Nos)</li>
                            <li className='text-gray-600'><strong>Horse Power:</strong> 720X2=1440 BHP</li>
                            <li className='text-gray-600'><strong>Capacity:</strong> 1250 MT</li>
                            <li className='text-gray-600'><strong>Features:</strong> Steel Body, Double Hull, Double Bottom</li>
                            <li className='text-gray-600'><strong>Classification:</strong> RINA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}