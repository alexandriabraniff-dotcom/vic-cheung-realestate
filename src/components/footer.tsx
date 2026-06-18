export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-[#F7F5F1] border-t border-[#E0DDD8]">

      <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-10 md:py-12">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 sm:gap-8 mb-8 md:mb-10">
          <p className="tracking-[0.3em] text-sm font-light text-[#2A5240] uppercase">[STUDIO NAME]</p>

          <nav className="flex flex-wrap gap-5 sm:gap-8">
            {["About", "Classes", "Pricing", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#2A5240] transition-colors">
                {item}
              </a>
            ))}
          </nav>

          <div className="flex gap-5 sm:gap-6">
            <a href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#2A5240] transition-colors">Instagram</a>
            <a href="#"
              className="text-[10px] uppercase tracking-[0.2em] text-[#6B7A7A] hover:text-[#2A5240] transition-colors">Facebook</a>
          </div>
        </div>

        <div className="pt-7 md:pt-8 border-t border-[#E0DDD8] text-[10px] text-[#B0B8B8] flex flex-col sm:flex-row justify-between gap-2 uppercase tracking-widest">
          <p>&copy; {year} [Studio Name]</p>
          <p>Yoga Studio · All Levels Welcome</p>
        </div>
      </div>
    </footer>
  );
}
