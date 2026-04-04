import { motion } from 'framer-motion';


const footerLinks = {
  Services: ['Plushie Drops', 'Revenue Sharing', 'Fulfillment'],
};


export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-black pt-24 pb-12 overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="text-2xl font-bold text-white tracking-tight">
                Visionary<span className="text-cyan-400"> Studios</span>
              </span>
            </motion.div>
            <p className="text-white/50 mb-8 max-w-sm leading-relaxed">
              Bringing real world sales to Roblox games
            </p>
            <div className="flex gap-4">
          
            </div>
          </div>

          <div className="lg:col-start-4">
            <h3 className="text-white font-semibold mb-6">Services</h3>
            <ul className="space-y-4">
              {footerLinks.Services.map((link) => (
                <li key={link}>
                  <a href="#services" className="text-white/40 hover:text-cyan-300 transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-500/20 group-hover:bg-cyan-400 transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-white/30 text-sm">
            © {new Date().getFullYear()} Visionary Studios. All rights reserved.
          </p>
          <div className="flex items-center gap-8 text-sm">
            <a href="#contact" className="text-white/40 hover:text-cyan-300 transition-colors">
              Contact Us
            </a>
            <a href="#contact" className="text-white/40 hover:text-cyan-300 transition-colors flex items-center gap-1">
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
