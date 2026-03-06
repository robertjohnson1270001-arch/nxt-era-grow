import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { MapPin, Phone, Mail, Send, MessageCircle } from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = encodeURIComponent(`Hi NxtEra Media! I'm ${formData.name}. ${formData.message}`);
    window.open(`https://wa.me/918019987774?text=${msg}`, "_blank");
  };

  return (
    <section id="contact" className="section-padding bg-muted/30">
      <div className="container mx-auto" ref={ref}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-coral text-sm font-semibold uppercase tracking-widest">Contact Us</span>
          <h2 className="text-3xl md:text-5xl font-display font-bold mt-3">
            Let's Grow{" "}
            <span className="gradient-text">Together</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >
            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                <MapPin size={22} className="text-coral" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Our Office</h3>
                <p className="text-sm text-muted-foreground">52-9-4, Resapuvanipalem Rd, behind CMR CENTRAL, Resapuvanipalem, Dwaraka Nagar, Visakhapatnam, Andhra Pradesh 530013</p>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                <Phone size={22} className="text-coral" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Phone</h3>
                <a href="tel:+918019987774" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  +91 80199 87774
                </a>
              </div>
            </div>

            <div className="glass-card p-6 flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                <Mail size={22} className="text-coral" />
              </div>
              <div>
                <h3 className="font-display font-semibold text-foreground mb-1">Email</h3>
                <a href="mailto:nxteramedia06@gmail.com" className="text-sm text-muted-foreground hover:text-coral transition-colors">
                  nxteramedia06@gmail.com
                </a>
              </div>
            </div>

            {/* Map */}
            <div className="glass-card overflow-hidden rounded-xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3800.6!2d83.318!3d17.72!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTfCsDQzJzEyLjAiTiA4M8KwMTknMDQuOCJF!5e0!3m2!1sen!2sin!4v1600000000000"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="NxtEra Media Location"
              />
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 space-y-5">
              <h3 className="font-display text-xl font-semibold text-foreground mb-2">Free Consultation</h3>
              <p className="text-sm text-muted-foreground mb-6">Fill the form below and we'll get back to you within 24 hours.</p>

              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/50 transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Email</label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/50 transition-colors"
                    placeholder="Email"
                  />
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1 block">Phone</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/50 transition-colors"
                    placeholder="Phone"
                  />
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/50 transition-colors resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>

              <button
                type="submit"
                className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-coral"
              >
                <Send size={18} /> Send Message
              </button>
            </form>

            <a
              href="https://wa.me/918019987774"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 w-full glass-card py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 text-foreground hover:border-coral/40 transition-colors"
            >
              <MessageCircle size={18} className="text-teal" /> Chat on WhatsApp
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
