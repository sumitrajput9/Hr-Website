import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

function Navbar() {
  return (
    <nav style={{ backgroundColor: '#2563eb', color: 'white', padding: '16px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', position: 'sticky', top: 0, zIndex: 1000 }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <img src={logo} alt="HR Cloud Logo" style={{ height: '40px' }} />
          <div>
            <NavLink to="/" style={{ color: 'white', textDecoration: 'none', fontSize: '24px', fontWeight: 'bold' }}>HR Cloud</NavLink>
            <p style={{ margin: 0, fontSize: '12px', color: '#bfdbfe' }}>Powered by Sumit Rajput</p>
          </div>
        </div>
        <div style={{ display: 'flex', gap: '16px' }}>
          <NavLink to="/" style={{ color: 'white', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'} onMouseOut={(e) => e.target.style.color = 'white'}>Home</NavLink>
          <NavLink to="/services" style={{ color: 'white', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'} onMouseOut={(e) => e.target.style.color = 'white'}>Services</NavLink>
          <NavLink to="/about" style={{ color: 'white', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'} onMouseOut={(e) => e.target.style.color = 'white'}>About</NavLink>
          <NavLink to="/contact" style={{ color: 'white', textDecoration: 'none', padding: '8px 16px', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#bfdbfe'} onMouseOut={(e) => e.target.style.color = 'white'}>Contact</NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;