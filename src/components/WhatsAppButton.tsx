import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/918019987774"
    target="_blank"
    rel="noopener noreferrer"
    initial={{ scale: 0 }}
    animate={{ scale: 1 }}
    transition={{ delay: 2, type: "spring" }}
    className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-teal flex items-center justify-center shadow-lg hover:scale-110 transition-transform"
    title="Chat on WhatsApp"
  >
    <MessageCircle size={26} className="text-primary-foreground" />
  </motion.a>
);

export default WhatsAppButton;
