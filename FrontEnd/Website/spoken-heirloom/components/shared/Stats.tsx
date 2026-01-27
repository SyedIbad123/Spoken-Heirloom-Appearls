import Image from "next/image";
import { images } from "@/utils/constant";

interface Stat {
  value: string;
  label: string;
}

interface StatsProps {
  stats?: Stat[];
  backgroundColor?: string;
  textColor?: string;
}

const defaultStats: Stat[] = [
  { value: "250+", label: "BOOKS COMPLETED" },
  { value: "04+", label: "TEAM MEMBERS" },
  { value: "10+", label: "ACTIVE MEMORY KEEPERS" },
  { value: "200+", label: "TOTAL SUBSCRIPTIONS" },
];

export default function Stats({
  stats = defaultStats,
  backgroundColor = "bg-primary",
  textColor = "text-primary-foreground",
}: StatsProps) {
  return (
    <section className={`py-16 mb-14 md:py-8 ${backgroundColor}`}>
      <div className="section-container">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="flex flex-row items-center text-center gap-4"
            >
              {/* Flower icon */}
              <div className="w-16 h-16 md:w-22 md:h-22 mb-4 relative">
                <Image
                  src={images.CommonFlower}
                  alt=""
                  fill
                  className="object-contain"
                />
              </div>

              <div className="font-serif flex flex-col text-left w-full">
                <p
                  className={`text-4xl md:text-4xl ${textColor} mb-2 font-bold `}
                >
                  {stat.value}
                </p>

                <p
                  className={`${textColor} text-body-xs md:text-body-sm uppercase tracking-wider`}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
