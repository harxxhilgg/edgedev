import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { homeExperienceData } from "@/components/data";

export function Experience() {
  return (
    <>
      {homeExperienceData.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-4">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={item.icon}
                alt={item.alt}
                height={40}
                width={40}
                className="border border-black/10 rounded-sm"
              />
            </div>

            <div>
              <p className="font-bold text-[15px]">{item.company}</p>
              <p className="font-normal text-sm text-secondary">
                {item.role}
              </p>
            </div>
          </div>

          <div>
            <div className="text-sm text-right text-secondary tracking-wide space-y-[0.1px]">
              <p>
                {item.startDate} - {item.endDate}
              </p>
              <p>
                {item.location} ({item.jobType})
              </p>
            </div>
          </div>
        </div>
      ))}

      <div className="flex mt-8 justify-center">
        <Button variant="outline" size="default" asChild className="cursor-pointer rounded-xl">
          <Link href="/work-experience">
            Show all work experiences
          </Link>
        </Button>
      </div>
    </>
  );
}
