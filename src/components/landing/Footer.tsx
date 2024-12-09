import { Aperture } from "lucide-react";
import { AspectRatio } from "../ui/aspect-ratio";

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

      <footer className="bg-black px-20 py-12 w-full">
        <div className="flex flex-col">
          {/* Existing footer content */}
          <div className="flex flex-col lg:flex-row justify-between items-start w-full">
            <div className="flex items-center gap-2 mb-8 lg:mb-0">
              <Aperture className="w-6 h-6 text-red-500" />
              <h1 className="text-xl font-semibold text-white">Firm</h1>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-4 gap-16">
              <div className="text-white">
                <h3 className="font-medium mb-2 text-sm uppercase tracking-wider">
                  Company
                </h3>
                <ul className="space-y-1.5 text-gray-400 text-sm">
                  <li>About</li>
                  <li>Careers</li>
                  <li>Contact</li>
                </ul>
              </div>

              <div className="text-white">
                <h3 className="font-medium mb-2 text-sm uppercase tracking-wider">
                  Services
                </h3>
                <ul className="space-y-1.5 text-gray-400 text-sm">
                  <li>Consulting</li>
                  <li>Development</li>
                  <li>Design</li>
                </ul>
              </div>
            </div>
          </div>

        

          {/* Copyright */}
          <div className="w-full border-t border-white/10 mt-12 pt-8">
            <p className="text-gray-400 text-sm text-center">
              © {new Date().getFullYear()} Firm. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}