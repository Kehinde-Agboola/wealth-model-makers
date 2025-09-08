import { Link } from "react-router-dom";
import { Mail, Phone } from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Faculty", href: "/faculty" },
    { name: "Resources", href: "/resources" },
    { name: "News", href: "/news" },
  ];

  return (
    <footer className="bg-hero-bg text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-accent rounded-lg flex items-center justify-center">
                <span className="text-hero-bg font-bold text-lg">W</span>
              </div>
              <div>
                <div className="font-bold text-lg">WEALTH</div>
                <div className="text-sm text-white/80">Women Derive Mathematical Models</div>
              </div>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Building capacity in mathematical modelling to address depression and related 
              conditions affecting adolescent girls and young women in Sub-Saharan Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="space-y-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className="block text-white/80 hover:text-white transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-white/60" />
                <a 
                  href="mailto:wealth4womeninafrica@gmail.com"
                  className="text-white/80 hover:text-white transition-colors text-sm"
                >
                  wealth4womeninafrica@gmail.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-white/60" />
                <span className="text-white/80 text-sm">+2348130817815</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/60 text-sm">
            © {new Date().getFullYear()} WEALTH Project. All rights reserved. 
            Funded by the Gates Foundation.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;