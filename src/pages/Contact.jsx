import serviceImage from '../assets/service1.png';

function Contact() {
  return (
    <section style={{ padding: '60px 0', backgroundColor: '#f3f4f6' }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        alignItems: 'stretch', // Make both sides stretch to the same height
        gap: '0px',
        flexWrap: 'wrap',
        justifyContent: 'space-between'
      }}>
        {/* Left Side: Image */}
        <div style={{ flex: '1 1 45%', minWidth: '300px' }}>
          <img
            src={serviceImage}
            alt="Contact Illustration"
            style={{
              width: '100%',
              height: '100%', // Make image stretch to the full height of the container
              objectFit: 'cover', // Ensure the image covers the space without distortion
              // borderRadius: '16px',
              // boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)'
            }}
          />
        </div>

        {/* Right Side: Form */}
        <div style={{
          flex: '1 1 45%',
          backgroundColor: '#ffffff',
          padding: '40px',
          borderRadius: '16px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.05)',
          minWidth: '300px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between', // Make form stretch and align elements
        }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            color: '#111827',
            marginBottom: '24px'
          }}>
            Get in Touch
          </h2>
          <form>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Name</label>
              <input
                type="text"
                id="name"
                placeholder="Your name"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Email</label>
              <input
                type="email"
                id="email"
                placeholder="you@example.com"
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px'
                }}
              />
            </div>
            <div style={{ marginBottom: '24px' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '8px', fontWeight: 500, color: '#374151' }}>Message</label>
              <textarea
                id="message"
                placeholder="Your message here..."
                required
                style={{
                  width: '100%',
                  padding: '12px',
                  borderRadius: '8px',
                  border: '1px solid #d1d5db',
                  fontSize: '16px',
                  minHeight: '120px'
                }}
              />
            </div>
            <button
              type="submit"
              style={{
                backgroundColor: '#2563eb',
                color: '#ffffff',
                padding: '14px 20px',
                fontSize: '16px',
                fontWeight: '600',
                borderRadius: '8px',
                border: 'none',
                width: '100%',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
