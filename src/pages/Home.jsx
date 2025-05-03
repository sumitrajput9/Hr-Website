import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import service1 from '../assets/service1.png';

import service2 from '../assets/service2.png';
import service3 from '../assets/service3.png';  
import service4 from '../assets/service4.png';
import About from './About';

function Home() {
  const features = [
    { title: 'Employee Onboarding', description: 'Streamline new hire processes with ease.', icon: service1 },
    { title: 'Attendance Tracking', description: 'Monitor employee attendance in real-time.', icon: service2 },
    { title: 'Payroll Management', description: 'Simplify payroll with automated tools.', icon: service3 },
    { title: 'Performance Reviews', description: 'Conduct reviews with structured feedback.', icon: service4 },
  ];

  return (
    <div>
      <HeroSection />
      <section style={{ padding: '48px 0', backgroundColor: '#f3f4f6' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '30px', fontWeight: 'bold', textAlign: 'center', marginBottom: '32px' }}>Key Features</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '24px' }}>
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
          <About/>
        </div>
      </section>
    </div>
  );
}

export default Home;