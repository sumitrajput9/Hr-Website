function FeatureCard({ title, description, icon }) {
    return (
      <div className="fade-in" style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth: '300px', margin: '16px auto', transition: 'box-shadow 0.3s' }} onMouseOver={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'} onMouseOut={(e) => e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'}>
        <img src={icon} alt={title} style={{ height: '64px', margin: '0 auto 16px', display: 'block' }} />
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{title}</h3>
        <p style={{ color: '#4b5563' }}>{description}</p>
      </div>
    );
  }
  
  export default FeatureCard;