import React from 'react';
import { motion } from 'framer-motion';
import { LuAward, LuDatabase } from 'react-icons/lu';

const certs = [
  {
    title: "Web and App Development",
    issuer: "Saylani Mass IT Training",
    date: "2025",
    description: "Comprehensive training covering modern web development, frontend frameworks, and full-stack concepts.",
    Icon: LuAward
  },
  {
    title: "Frontend Fundamentals",
    issuer: "Coursera / Meta",
    date: "2025",
    description: "Foundational concepts in HTML, CSS, JavaScript, and responsive web design.",
    Icon: LuAward
  },
  {
    title: "Data Science",
    issuer: "NED Academy",
    date: "2026",
    description: "Advanced training focusing on data analytics, machine learning algorithms, and data-driven problem solving.",
    Icon: LuDatabase
  }
];

const CertificationsMain = () => {
  return (
    <div id="certifications" className="py-32 bg-black/40 relative overflow-hidden">
      {/* Premium Spotlight Background */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-20 left-1/4 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(21,209,233,0.15)_0%,transparent_70%)] animate-spotlight-pan mix-blend-screen opacity-70"></div>
        <div className="absolute bottom-0 right-1/4 w-[60%] h-[60%] bg-[radial-gradient(ellipse_at_center,rgba(251,151,24,0.15)_0%,transparent_70%)] animate-spotlight-pan mix-blend-screen opacity-70" style={{ animationDelay: '3s', animationDirection: 'reverse' }}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold text-orange uppercase tracking-[0.2em] mb-4"
          >
            Achievements
          </motion.h2>
          <motion.h3 
            initial={{ opacity: 1, y: 0 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ }}
            className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight"
          >
            Licenses & <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange to-cyan font-elsie font-black pr-2">Certifications</span>
          </motion.h3>
        </div>

        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-6 max-w-7xl mx-auto">
          {certs.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 1, y: 0 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ }}
              className="p-8 rounded-3xl bg-white/[0.03]  border border-white/5 hover:border-cyan/30 hover:shadow-[0_0_30px_rgba(21,209,233,0.15)] hover:-translate-y-2 transition duration-150 group relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-0 pointer-events-none"></div>
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 rounded-full bg-cyan/10 flex items-center justify-center text-cyan group-hover:scale-110 group-hover:bg-cyan group-hover:text-black transition duration-150 shadow-[0_0_15px_rgba(21,209,233,0.2)] group-hover:shadow-[0_0_20px_rgba(21,209,233,0.5)]">
                    <cert.Icon size={24} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-white group-hover:text-cyan transition-colors duration-150">{cert.title}</h4>
                    <p className="text-sm text-lightGrey">{cert.issuer}</p>
                  </div>
                </div>
                <p className="text-lightGrey text-sm leading-relaxed mb-4">
                  {cert.description}
                </p>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  Issued: {cert.date}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CertificationsMain;
