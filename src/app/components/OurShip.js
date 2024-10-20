import Image from 'next/image';

export default function OurShip() {
    return (
        <section id="ship" className="py-16 bg-gray-100">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-8">Our Ship</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <div>
                        <Image
                            src="https://images.unsplash.com/photo-1577416412292-747c6607f055?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80"
                            alt="MT Pride of Shah Ali"
                            width={800}
                            height={600}
                            className="rounded-lg shadow-md"
                        />
                    </div>
                    <div>
                        <h3 className="text-2xl font-semibold mb-4">MT Pride of Shah Ali</h3>
                        <p className="mb-4">
                            Our vessel, the MT Pride of Shah Ali, is currently transporting refined oil
                            nominated by the Bangladesh Petroleum Corporation.
                        </p>
                        <ul className="space-y-2">
                            <li><strong>Length:</strong> 63.80 M</li>
                            <li><strong>Breadth:</strong> 10.10 M</li>
                            <li><strong>Draft:</strong> 4.5 M</li>
                            <li><strong>Gross Tonnage:</strong> 492</li>
                            <li><strong>Type of Ship:</strong> Oil Tanker</li>
                            <li><strong>Engine:</strong> China Diesel (2Nos)</li>
                            <li><strong>Horse Power:</strong> 720X2=1440 BHP</li>
                            <li><strong>Capacity:</strong> 1250 MT</li>
                            <li><strong>Features:</strong> Steel Body, Double Hull, Double Bottom</li>
                            <li><strong>Classification:</strong> RINA</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}