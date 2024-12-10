import Image from "next/image";
import { Footer } from "../landing/Footer";
import { ContactForm } from "./ContactForm";
import { Mail, Phone, MapPin } from "lucide-react";

export function Contact() {
  return (
    <div className="bg-black min-h-screen flex flex-col">
         <div className="grid grid-cols-1 lg:grid-cols-7 gap-2 flex-1 pt-40 p-4  w-full max-w-7xl mb-20 mx-auto place-items-center">
        <div className="w-full lg:col-span-4">
          <ContactForm />
        </div>

        <div className="relative w-full h-full min-h-[600px] lg:col-span-3 rounded-3xl bg-zinc-900 overflow-hidden">
        <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-zinc-900 to-zinc-900/10 z-10" />

          <div className="relative z-20 p-8">
            <span className="text-zinc-400 text-sm tracking-wider uppercase">
              Your Point of Contact
            </span>
            <h2 className="text-4xl font-bold text-white mt-2">
              Sarah Mitchell
            </h2>
            <p className="text-xl text-purple-400 mt-2">
              Senior Account Manager
            </p>
          </div>

          <div className="absolute bottom-8 left-8 z-20 space-y-4 text-zinc-300">
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>sarah.mitchell@company.com</span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>
                123 Business Ave, Suite 456
                <br />
                New York, NY 10001
              </span>
            </div>
          </div>

      
          <div className="absolute bottom-0 -right-24 h-[550px] w-[400px] sm:h-[700px] sm:w-[500px] lg:w-full lg:h-full">
            <Image
              className="object-contain transform scale-x-[-1]"
              src="/images/woman-smiling.png"
              alt="Sarah Mitchell - Senior Account Manager"
              fill
              style={{ objectPosition: 'bottom right' }}
              priority
            />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
