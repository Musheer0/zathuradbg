import React from "react";
import { Button } from "../ui/moving-border";
import { CanvasRevealEffectCard } from "../ui/canvas-revel-card";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import { FAQs } from "@/cms";

  
const FAQSection = () => (
  <div id="faq" className="p-8 px-0 bg-black text-white">
    <h2 className="text-3xl font-semibold text-center mb-8">FAQs</h2>
 <InfiniteSlider className="w-full h-full flex items-center justify-center gap-4" speedOnHover={10}>
     {FAQs.map((faq, index) => (
       <Button key={index}  duration={(index+3)*1000}  className="h-full shrink-0" containerClassName="shrink-0"    as={'div'}>
         <div
     
     className="border h-full max-w-md border-zinc-900  p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out"
   >
     <div className="font-semibold text-xl max-w-xl  mb-4">
       {faq.question}
     </div>
     <div className="max-w-xl z-10 text-zinc-100">
       {faq.answer}
     </div>
   </div>

       </Button>
      ))}
     </InfiniteSlider>
  </div>
);

export default FAQSection;
