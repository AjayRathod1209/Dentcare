const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white">

      <div className="container-custom py-20">

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo */}
          <div>

            <h2 className="text-3xl font-bold">
              DentaCare
            </h2>

            <p className="mt-5 text-slate-400 leading-7">
              Providing advanced dental care with
              compassion, innovation and excellence.
            </p>

          </div>

          {/* Quick Links */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
            </ul>

          </div>

          {/* Services */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Services
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>Dental Implants</li>
              <li>Root Canal</li>
              <li>Teeth Whitening</li>
              <li>Braces & Aligners</li>
            </ul>

          </div>

          {/* Contact */}
          <div>

            <h3 className="text-xl font-semibold mb-5">
              Contact
            </h3>

            <ul className="space-y-3 text-slate-400">
              <li>+1 (555) 123-4567</li>
              <li>info@dentacare.com</li>
              <li>Mon - Sat: 9AM - 8PM</li>
            </ul>

          </div>

        </div>

        <div className="border-t border-slate-800 mt-16 pt-8 text-center text-slate-500">
          © 2026 DentaCare. All Rights Reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;