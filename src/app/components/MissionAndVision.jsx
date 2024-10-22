import { Target, Eye } from 'lucide-react';

const MissionAndVision = () => {
    return (
        <section id='mission' className="py-16 bg-gray-100 text-center">
            <div className="container mx-auto px-4">
                <div className="mb-12">
                    <h2 className="section-title text-center">OUR <span className='text-primary'>MISSION</span> & <span className='text-primary'>VISION</span></h2>
                    <p className="section-subtitle text-center">
                        At Carbon Holdings, we are driven by a clear mission and vision that guide our efforts in the global trade and logistics landscape.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-lg shadow-md p-6 text-left group">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary group-hover:bg-[#1e3056] fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mr-3">

                                <Target className="text-white" />
                            </div>
                            <h3 className="text-2xl font-bold">Mission</h3>
                        </div>
                        <p className="text-gray-600">
                            Carbon Holdings is committed to providing innovative and efficient trade and logistics solutions that connect businesses worldwide. We strive to deliver exceptional value by offering comprehensive services that optimize supply chains, reduce costs, and foster global partnerships through our expertise in international trade and logistics. Through our dedication to excellence and innovation, we aim to be a trusted partner in the global trade landscape.
                        </p>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6 text-left group">
                        <div className="flex items-center mb-4">
                            <div className="w-12 h-12 bg-primary group-hover:bg-[#1e3056] fade-in-10 transition-all duration-300 rounded-full flex items-center justify-center mr-3">
                                <Eye className="text-white" />
                            </div>
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
