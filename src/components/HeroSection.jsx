import heroBg from '../assets/hero-bg.jpg';

function HeroSection() {
    return (
      <section style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '384px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white', textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}>
        <div className="fade-in" style={{ textAlign: 'center' }}>
          <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '16px' }}>Streamline HR with HR Cloud</h1>
          <p style={{ fontSize: '18px', marginBottom: '24px' }}>Manage employees, payroll, and more with ease.</p>
          <a href="/contact" style={{ backgroundColor: '#2563eb', color: 'white', fontWeight: '600', padding: '8px 16px', borderRadius: '4px', textDecoration: 'none', transition: 'background-color 0.3s', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'} onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}>
            Get Started
          </a>
        </div>
      </section>
    );
  }
  
  export default HeroSection;