import Image from 'next/image';

export function Footer() {
  return (
    <div>
      {/* Faded FIRM text */}
      <div className="relative w-full overflow-hidden whitespace-nowrap">
        <div className="flex">
          <div className="inline-block animate-continuous_scroll">
            <h1
              className="text-[80px] md:text-[120px] lg:text-[180px] font-bold tracking-normal bg-clip-text text-slate-500/30 px-4"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              REDWOOD DIGITAL PARTNERS
            </h1>
          </div>
          <div className="inline-block animate-continuous_scroll">
            <h1
              className="text-[80px] md:text-[120px] lg:text-[180px] font-bold tracking-normal bg-clip-text text-slate-500/30 px-4"
              style={{ fontFamily: '"Poppins", sans-serif' }}
            >
              REDWOOD DIGITAL PARTNERS
            </h1>
          </div>
        </div>
      </div>
   

          <footer className="bg-black px-6 sm:px-20 py-12">
        <div className="max-w-7xl mx-auto">
          {/* Main footer content goes here */}
          
          {/* Copyright section */}
          <div className="border-t border-white/10 mt-12 pt-8">
            <div className="flex justify-center items-center gap-4">
              <div className="flex items-center gap-2">
               <Image src="/images/logo.png" alt="Firm" width={40} height={40} priority />
                <h1 className="text-xl font-semibold text-white">Redwood Digital Partners</h1>
              </div>
              <p className="text-gray-400 text-sm">
                © {new Date().getFullYear()} All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}