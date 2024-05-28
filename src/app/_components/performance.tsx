import { Text } from "@/interfaces/text";
import { TextPreview } from "./text-preview";
import { performances } from "@/app/_components/performances"



export function Performance() {
  return (
    <section>
      <h2 className="mb-8 text-5xl md:text-7xl leading-tight">
        Performance
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-10 md:gap-y-10 mb-32 ml-2 ">
        {performances.map((performance: any, index: any) => (
          <div key={index} className="flex flex-col gap-y-4">
            <h3 className="mt-10 text-2xl md:text-3xl leading-snug">
              {performance.date}
            </h3>
            <div className="grid grid-cols-1 gap-y-4">
              {performance.performance.map((item: any, index: any) => (
                <div key={index} className="grid grid-cols-1 gap-y-1">
                  <h4 className="text-l md:text-l leading-snug">
                    {item.time}
                  </h4>
                  <h3 className="text-3xl leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-lg md:text-xl leading-snug">
                    {item.author}
                    <br /> —
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
