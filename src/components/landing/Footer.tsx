import { Aperture } from "lucide-react";

export function Footer() {
  return (
    <div>
      {/* Faded FIRM text */}
      <div className="relative w-full overflow-hidden">
        <h1
          className="text-[120px] md:text-[180px] lg:text-[240px] font-bold text-center tracking-widest bg-clip-text text-slate-500/20"
          style={{ fontFamily: '"Poppins", sans-serif' }}
        >
          FIRM
        </h1>
      </div>

          <footer className="bg-black px-6 sm:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content goes here */}
          
          {/* Copyright section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-2">
                <Aperture className="w-6 h-6 text-red-500" />
                <h1 className="text-xl font-semibold text-white">Firm</h1>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} Firm. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}