const Footer = () => (
  <footer
    style={{
      background: '#4a148c',
      color: 'white',
      padding: '20px',
      marginTop: '40px',
      textAlign: 'center',
    }}
  >
    <p>© {new Date().getFullYear()} CybComp Todos los derechos reservados.</p>
  </footer>
);
export default Footer;
