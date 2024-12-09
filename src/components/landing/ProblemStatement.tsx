import { Globe } from "lucide-react";
import { SectionLabel } from "../ui/section-label";

export function ProblemStatement() {
    return(
      <section className="flex flex-col space-y-8 md:space-y-20 w-full h-full relative bg-black text-white p-6 md:p-20 rounded-b-3xl">
        <SectionLabel
          icon={<Globe className="w-3 h-3 text-red-500" />}
          label="Challenges"
          sublabel="We solve"
        />
        <p className="text-xl md:text-3xl leading-relaxed">
          In today&apos;s rapidly evolving digital landscape, businesses face complex
          challenges in modernizing their infrastructure while maintaining
          security and scalability. Legacy systems and technical debt often
          hinder innovation and growth.
        </p>
        <p className="text-xl md:text-3xl leading-relaxed">
          Organizations struggle to navigate digital transformation, lacking the
          expertise to implement cutting-edge solutions that drive efficiency
          and competitive advantage. The pace of technological change demands a
          strategic partner who understands both business objectives and
          technical possibilities.
        </p>
      </section>
    );
}