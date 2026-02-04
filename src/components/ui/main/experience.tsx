import Image from "next/image";
import { Button } from "../button";
import Link from "next/link";
import { homeExperienceData } from "@/components/data";

export function Experience() {
  return (
    <>
      <h1 className="text-xl mb-4 font-semibold">Experience</h1>

      {homeExperienceData.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-3">
          <div className="flex items-center gap-3">
            <div>
              <Image
                src={item.icon}
                alt={item.alt}
                height={40}
                width={40}
                className="border border-black/10 rounded-md"
              />
            </div>

            <div>
              <p className="font-semibold text-sm">{item.company}</p>
              <p className="font-semibold text-xs text-secondary">
                {item.role}
              </p>
            </div>
          </div>

          <div>
            <div className="text-xs text-right text-secondary space-y-[0.1px]">
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
        <Button variant="outline" size="sm" asChild className="cursor-default">
          <Link href="/work-experience" className="">
            Show all work experiences
          </Link>
        </Button>
      </div>
    </>
  );
}
