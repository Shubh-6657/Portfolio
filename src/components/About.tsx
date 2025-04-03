import React from "react";

const About: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 mt-16">
            <div className="bg-blue-500 text-white p-6 rounded-lg">
                <h2 className="text-xl font-bold">About Us</h2>
                <p className="mt-2">
                    We are a company dedicated to providing the best services to our
                    customers. Our mission is to deliver high-quality solutions tailored
                    to your needs.
                </p>
            </div>
            <div className="bg-green-500 text-white p-6 rounded-lg">
                <h2 className="text-xl font-bold">Our Vision</h2>
                <p className="mt-2">
                    Our vision is to create innovative and user-friendly experiences,
                    ensuring customer satisfaction and growth.
                </p>
            </div>
        </div>
    );
};

export default About;
