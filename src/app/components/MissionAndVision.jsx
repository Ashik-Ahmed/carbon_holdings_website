import { Target, Eye } from 'lucide-react';

const MissionAndVision = () => {
    return (
        <section className="py-16 bg-white text-center">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="section-title text-center">Our Mission & Vision</h2>
                    <p className="text-lg text-gray-600">
                        At Carbon Holdings, we are driven by a clear mission and vision that guide our efforts in the global trade and logistics landscape.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-gray-100 rounded-lg shadow-md p-6 text-left">
                        <div className="flex items-center mb-4">
                            <Target size={40} className="text-blue-500 mr-3" />
                            <h3 className="text-2xl font-bold">Mission</h3>
                        </div>
                        <p className="text-gray-600">
                            Carbon Holdings is committed to providing innovative and efficient trade and logistics solutions that connect businesses worldwide. We strive to deliver exceptional value by offering comprehensive services that optimize supply chains, reduce costs, and foster global partnerships through our expertise in international trade and logistics. Through our dedication to excellence and innovation, we aim to be a trusted partner in the global trade landscape.
                        </p>
                    </div>
                    <div className="bg-gray-100 rounded-lg shadow-md p-6 text-left">
                        <div className="flex items-center mb-4">
                            <Eye size={40} className="text-blue-500 mr-3" />
                            <h3 className="text-2xl font-bold">Vision</h3>
                        </div>
                        <p className="text-gray-600">
                            To become a leading global trade and logistics company, renowned for our exceptional service, innovation, and commitment to sustainable practices. We envision a future where Carbon Holdings is synonymous with reliability, efficiency, and a positive impact on the world.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MissionAndVision;
