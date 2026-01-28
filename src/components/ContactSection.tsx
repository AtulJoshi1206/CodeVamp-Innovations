import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ArrowRight } from 'lucide-react';

export const ContactSection = () => {
  return (
    <section className="py-32 border-t border-white/5" id="contact">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex flex-col items-center mb-6">
              <div className="h-px w-12 bg-accent-cyan mb-4" />
              <span className="text-accent-cyan font-bold tracking-[0.3em] text-xs uppercase text-center">Get in Touch</span>
            </div>
            <h3 className="text-4xl md:text-6xl font-bold text-white mb-12 leading-[0.85] tracking-tighter">
              Let's build something <br /> <span className="text-gray-600">exceptional</span>
            </h3>

            <a
              href="mailto:atul.joshi1206@gmail.com"
              className="inline-flex items-center gap-4 text-2xl md:text-4xl font-bold text-white hover:text-accent-cyan transition-colors group mb-20"
            >
              atul.joshi1206@gmail.com
              <ArrowRight className="w-8 h-8 group-hover:translate-x-2 transition-transform" />
            </a>

            <div className="flex justify-center flex-wrap gap-8 md:gap-12">
              {[
                { icon: Github, href: 'https://github.com/AtulJoshi1206', label: 'Github' },
                { icon: Linkedin, href: 'https://www.linkedin.com/in/atul-joshi-54928018a/', label: 'Linkedin' },
                { icon: Mail, href: 'mailto:atul.joshi1206@gmail.com', label: 'Email' }
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex flex-col items-center gap-2 group"
                >
                  <div className="p-4 rounded-full bg-white/5 group-hover:bg-accent-cyan/10 group-hover:text-accent-cyan transition-all border border-white/5">
                    <social.icon className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] uppercase tracking-widest text-gray-500 font-bold group-hover:text-white transition-colors">
                    {social.label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};