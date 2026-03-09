import { Facebook, Twitter, Linkedin, Instagram, Youtube, MessageCircle } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-card/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <a href="#home">
              <img src={logo} alt="NextEra Media" className="h-20 w-auto" />
            </a>
            <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
              The Best Digital Marketing Company in Vizag. Transforming businesses into brands.
            </p>
            <div className="flex gap-3 mt-6">
              {[
                { icon: Facebook, href: "#" },
                { icon: Twitter, href: "#" },
                { icon: Linkedin, href: "#" },
                { icon: Instagram, href: "https://www.instagram.com/nxtera__media/" },
                { icon: Youtube, href: "#" },
                { icon: MessageCircle, href: "https://wa.me/08019987774" },
              ].map(({ icon: Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-muted-foreground hover:text-coral hover:border-coral/50 transition-colors"
                >
                  <Icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Services</h4>
            <ul className="space-y-2.5">
              {["SEO", "Social Media Marketing", "Website Designing", "Content Marketing", "PPC Advertising", "Graphic Designing"].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-muted-foreground hover:text-coral transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {[
                { label: "About Us", href: "https://nxteramedia.com/about/" },
                { label: "Digital Academy", href: "https://nxteramedia.com/academy/" },
                { label: "Blog", href: "https://nxteramedia.com/blog/" },
                { label: "Contact", href: "https://nxteramedia.com/contact/" },
                { label: "Privacy Policy", href: "https://nxteramedia.com/Privacy Policy" },
                { label: "Terms & Conditions", href: "https://nxteramedia.com/Terms & Conditions/" },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-muted-foreground hover:text-coral transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-foreground mb-4">Newsletter</h4>
            <p className="text-sm text-muted-foreground mb-4">Get the latest marketing tips delivered to your inbox.</p>
            <form
              onSubmit={(e) => e.preventDefault()}
              className="flex gap-2"
            >
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-muted/50 border border-border rounded-lg px-3 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/50 transition-colors"
              />
              <button className="gradient-bg text-primary-foreground px-4 py-2.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity whitespace-nowrap">
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-border/50 mt-12 pt-8 text-center text-sm text-muted-foreground">
          © {new Date().getFullYear()} NxtEra Media. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
