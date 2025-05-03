import service1 from '../assets/service1.png';

function ServiceCard({ title, description, image = service1 }) {
    return (
      <div className="fade-in" style={{ backgroundColor: 'white', padding: '24px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth: '350px', margin: '16px auto', transition: 'box-shadow 0.3s' }} onMouseOver={(e) => e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.2)'} onMouseOut={(e) => e.target.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)'}>
        <img src={image} alt={title} style={{ height: '128px', width: '100%', objectFit: 'cover', borderRadius: '8px 8px 0 0', marginBottom: '16px' }} />
        <h3 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '8px' }}>{title}</h3>
        <p style={{ color: '#4b5563' }}>{description}</p>
      </div>
    );
  }

  export default ServiceCard;