import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MessageCircle, Send, CheckCircle2, Star, Users, Award, Briefcase } from "lucide-react";

const services = [
  { value: "seo", label: "🔍 SEO (Search Engine Optimization)" },
  { value: "smm", label: "📱 Social Media Marketing" },
  { value: "web", label: "🌐 Website Designing" },
  { value: "content", label: "✍️ Content Marketing" },
  { value: "ppc", label: "📈 PPC Advertising" },
  { value: "graphic", label: "🎨 Graphic Designing" },
];

const trustStats = [
  { icon: Users, label: "350+ Happy Customers" },
  { icon: Award, label: "5+ Years Experience" },
  { icon: Briefcase, label: "15+ Professionals" },
];

const testimonials = [
  {
    quote: "NxtEra Media transformed our online presence completely. Our leads doubled within 3 months!",
    author: "Rajesh K.",
    role: "Restaurant Owner",
  },
  {
    quote: "Professional, transparent, and result-driven. Best digital marketing team in Vizag!",
    author: "Priya S.",
    role: "E-commerce Founder",
  },
];

interface ConsultationDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ConsultationDialog = ({ open, onOpenChange }: ConsultationDialogProps) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi NxtEra Media! I'm ${formData.name}${formData.company ? ` from ${formData.company}` : ""}. I'm interested in ${formData.service || "your services"}. ${formData.message}`
    );
    window.open(`https://wa.me/918019987774?text=${msg}`, "_blank");
  };

  const handleClose = (val: boolean) => {
    onOpenChange(val);
    if (!val) {
      setTimeout(() => {
        setSubmitted(false);
        setFormData({ name: "", email: "", phone: "", company: "", service: "", message: "" });
      }, 300);
    }
  };

  const inputClass =
    "w-full bg-muted/50 border border-border rounded-lg px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-coral/50 transition-colors text-sm";

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-card border-border p-0">
        <AnimatePresence mode="wait">
          {submitted ? (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="p-8 text-center space-y-6"
            >
              <div className="w-20 h-20 mx-auto rounded-full bg-teal/10 flex items-center justify-center">
                <CheckCircle2 size={40} className="text-teal" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-foreground mb-2">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-muted-foreground">
                  Your consultation request has been received. Our team will reach out within 24 hours.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button
                  onClick={handleWhatsApp}
                  className="glass-card px-6 py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-foreground hover:border-teal/40 transition-colors"
                >
                  <MessageCircle size={18} className="text-teal" />
                  Chat on WhatsApp Now
                </button>
                <button
                  onClick={() => handleClose(false)}
                  className="px-6 py-3 rounded-xl font-semibold text-muted-foreground hover:text-foreground transition-colors"
                >
                  Close
                </button>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="form"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="grid md:grid-cols-5"
            >
              {/* Left: Trust signals */}
              <div className="md:col-span-2 bg-muted/30 p-6 md:p-8 space-y-6 border-b md:border-b-0 md:border-r border-border">
                <div>
                  <h4 className="font-display font-semibold text-foreground text-lg mb-1">
                    Why NxtEra?
                  </h4>
                  <p className="text-xs text-muted-foreground">
                    No hidden fees, no obligations — just expert advice.
                  </p>
                </div>

                <div className="space-y-3">
                  {trustStats.map(({ icon: Icon, label }) => (
                    <div key={label} className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-coral/10 flex items-center justify-center shrink-0">
                        <Icon size={16} className="text-coral" />
                      </div>
                      <span className="text-sm text-foreground font-medium">{label}</span>
                    </div>
                  ))}
                </div>

                <div className="space-y-3 pt-2">
                  {testimonials.map((t) => (
                    <div key={t.author} className="glass-card p-3 space-y-2">
                      <div className="flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star key={i} size={12} className="fill-coral text-coral" />
                        ))}
                      </div>
                      <p className="text-xs text-muted-foreground italic">"{t.quote}"</p>
                      <p className="text-xs font-medium text-foreground">
                        {t.author} <span className="text-muted-foreground">· {t.role}</span>
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: Form */}
              <div className="md:col-span-3 p-6 md:p-8">
                <DialogHeader className="mb-6">
                  <DialogTitle className="text-xl font-display font-bold text-foreground">
                    Book Your Free Consultation
                  </DialogTitle>
                  <DialogDescription className="text-sm text-muted-foreground">
                    Fill in your details and we'll craft a custom growth strategy for you.
                  </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Name *</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={inputClass}
                      placeholder="Your full name"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">Email *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className={inputClass}
                        placeholder="you@email.com"
                      />
                    </div>
                    <div>
                      <label className="text-xs font-medium text-foreground mb-1 block">Phone</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className={inputClass}
                        placeholder="+91 XXXXX XXXXX"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Company</label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className={inputClass}
                      placeholder="Your business name"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Service Interest</label>
                    <Select
                      value={formData.service}
                      onValueChange={(val) => setFormData({ ...formData, service: val })}
                    >
                      <SelectTrigger className="w-full bg-muted/50 border-border h-12 text-sm">
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent>
                        {services.map((s) => (
                          <SelectItem key={s.value} value={s.value}>
                            {s.label}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-xs font-medium text-foreground mb-1 block">Message</label>
                    <textarea
                      rows={3}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className={`${inputClass} resize-none`}
                      placeholder="Tell us about your project or requirements..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full gradient-bg text-primary-foreground py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 hover:opacity-90 transition-opacity glow-coral"
                  >
                    <Send size={16} /> Get My Free Consultation
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsApp}
                    className="w-full glass-card py-3 rounded-xl font-semibold flex items-center justify-center gap-2 text-foreground hover:border-teal/40 transition-colors"
                  >
                    <MessageCircle size={16} className="text-teal" /> Chat with us on WhatsApp
                  </button>
                </form>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </DialogContent>
    </Dialog>
  );
};

export default ConsultationDialog;
