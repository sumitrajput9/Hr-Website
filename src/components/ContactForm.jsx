function ContactForm() {
    return (
      <form className="fade-in" style={{ backgroundColor: 'white', padding: '20px 40px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)', maxWidth: '448px', margin: '0 auto', border: '1px solid #e5e7eb' }}>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="name" style={{ display: 'block', color: '#374151', marginBottom: '8px' }}>Name</label>
          <input type="text" id="name" style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }} required />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="email" style={{ display: 'block', color: '#374151', marginBottom: '8px' }}>Email</label>
          <input type="email" id="email" style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px' }} required />
        </div>
        <div style={{ marginBottom: '16px' }}>
          <label htmlFor="message" style={{ display: 'block', color: '#374151', marginBottom: '8px' }}>Message</label>
          <textarea id="message" style={{ width: '100%', padding: '8px', border: '1px solid #d1d5db', borderRadius: '4px', minHeight: '100px' }} required></textarea>
        </div>
        <button type="submit" style={{ backgroundColor: '#2563eb', color: 'white', fontWeight: '600', padding: '8px 16px', borderRadius: '4px', width: '100%', border: 'none', cursor: 'pointer', transition: 'background-color 0.3s', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} onMouseOver={(e) => e.target.style.backgroundColor = '#1d4ed8'} onMouseOut={(e) => e.target.style.backgroundColor = '#2563eb'}>
          Send Message
        </button>
      </form>
    );
  }
  
  export default ContactForm;