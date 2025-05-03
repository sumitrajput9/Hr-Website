import { Container } from '@mui/material';
import React from 'react';

function About() {
  return (
    <Container maxWidth="lg" className="bg-white">
       <section className="bg-gray-50 py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16">
          About <span className="text-blue-600">HR Cloud</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Mission */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              We empower organizations with seamless HR solutions that drive productivity,
              ensure compliance, and elevate employee experiences.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Vision</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              To become the most trusted HRMS platform globally, enabling businesses to build
              better workplaces through digital transformation.
            </p>
          </div>

          {/* Why HR Cloud */}
          <div className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">Why HR Cloud?</h3>
            <p className="text-gray-600 text-base leading-relaxed">
              With a focus on innovation, reliability, and intuitive design, HR Cloud simplifies
              complex HR operations — so your teams can focus on growth, culture, and performance.
            </p>
          </div>
        </div>
      </div>
    </section>
    </Container>
  );
}

export default About;
