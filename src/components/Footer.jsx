import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1468] text-white text-center text-sm py-4">
      <p>© {currentYear} El Poblado S.A.S. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
