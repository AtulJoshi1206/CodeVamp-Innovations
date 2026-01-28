export const Footer = () => {
  return (
    <footer className="py-12 border-t border-white/5 bg-background">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-accent-cyan flex gap-[1px] items-center justify-center">
              <div className="w-[2px] h-2 bg-background rounded-full" />
              <div className="w-[2px] h-3 bg-background rounded-full" />
              <div className="w-[2px] h-2 bg-background rounded-full" />
            </div>
            <span className="text-white font-bold tracking-tighter">ATUL</span>
          </div>

          <p className="text-gray-500 text-[10px] uppercase tracking-widest font-medium">
            &copy; {new Date().getFullYear()} Designed & Engineered by Atul Joshi
          </p>

          <div className="flex items-center gap-6">
            <a
              href="https://www.linkedin.com/in/atul-joshi-54928018a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-accent-cyan transition-colors"
            >
              <span className="text-[10px] uppercase tracking-widest font-bold">LinkedIn</span>
            </a>
            <div className="text-gray-500 text-[10px] uppercase tracking-widest font-bold">
              Production Ready · Research Backed
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

