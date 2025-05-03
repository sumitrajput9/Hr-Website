function Footer() {
    return (
      <footer style={{ backgroundColor: '#1f2937', color: 'white', padding: '24px', borderTop: '4px solid #2563eb' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ margin: 0 }}>© 2025 HR Cloud. All rights reserved.</p>
          <p style={{ margin: '8px 0' }}>Address: 123 HR Street, Business City, BC 12345</p>
          <p style={{ margin: '8px 0' }}>Phone: (+91) 6299443750</p>
          <p style={{ margin: '8px 0' }}>Email: SumitRajput@hrcloud.com</p>
          <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'center', gap: '16px' }}>
            <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>Facebook</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>Twitter</a>
            <a href="#" style={{ color: 'white', textDecoration: 'none', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color = '#93c5fd'} onMouseOut={(e) => e.target.style.color = 'white'}>LinkedIn</a>
          </div>
        </div>
      </footer>
    );
  }

  export default Footer;