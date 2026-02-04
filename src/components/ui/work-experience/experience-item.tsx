import { experienceData } from "@/components/data";
import Image from "next/image";
import {
  Facebook,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  Youtube,
} from "lucide-react";
import { SocialButton } from "./social-btns";
import { BodyBtn } from "../main/body-btn";

export function ExperienceItem() {
  const totalExperiences = experienceData.length;

  return (
    <>
      <div className="flex gap-1.5 mt-2 mb-6">
        <h1 className="text-xl font-semibold">All Experiences</h1>
        <p className="text-sm text-secondary pt-1.5">
          ({totalExperiences} experiences)
        </p>
      </div>

      {experienceData.map((item) => (
        <div key={item.id} className="mb-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              <Image
                src={item.icon}
                alt={item.alt}
                height={46}
                width={46}
                className="border border-black/10 rounded-md select-none"
              />

              <div>
                <div className="flex items-center">
                  <b className="mr-1">{item.company}</b>

                  <SocialButton
                    icon={
                      <Globe
                        color="currentColor"
                        style={{ height: 14, width: 14 }}
                      />
                    }
                    url={item.website}
                    label="Visit Website"
                  />

                  <SocialButton
                    icon={
                      <Linkedin
                        color="currentColor"
                        style={{ height: 14, width: 14 }}
                      />
                    }
                    url={item.linkedin}
                    label="LinkedIn"
                  />

                  {item.twitter && (
                    <SocialButton
                      icon={
                        <Twitter
                          color="currentColor"
                          style={{ height: 14, width: 14 }}
                        />
                      }
                      url={item.twitter}
                      label="Twitter"
                    />
                  )}

                  {item.instagram && (
                    <SocialButton
                      icon={
                        <Instagram
                          color="currentColor"
                          style={{ height: 14, width: 14 }}
                        />
                      }
                      url={item.instagram}
                      label="Instagram"
                    />
                  )}

                  {item.facebook && (
                    <SocialButton
                      icon={
                        <Facebook
                          color="currentColor"
                          style={{ height: 14, width: 14 }}
                        />
                      }
                      url={item.facebook}
                      label="Facebook"
                    />
                  )}

                  {item.youtube && (
                    <SocialButton
                      icon={
                        <Youtube
                          color="currentColor"
                          style={{ height: 14, width: 14 }}
                        />
                      }
                      url={item.youtube}
                      label="Youtube"
                    />
                  )}
                </div>

                <p className="text-sm text-secondary">{item.role}</p>
              </div>
            </div>

            <div>
              <div className="text-sm text-right text-secondary space-y-[0.1px]">
                <p>
                  {item.startDate} - {item.endDate}
                </p>
                <p>
                  {item.location} ({item.jobType})
                </p>
              </div>
            </div>
          </div>

          <div className="mt-3 space-y-3">
            <h1 className="font-medium text-[15px] mb-2">
              Technologies & Tools
            </h1>

            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <BodyBtn key={tech} tech={tech} />
              ))}
            </div>
          </div>

          <div className="mt-4 px-3 sm:px-4 transition-all">
            <ul className="list-disc list-outside space-y-1 text-sm text-secondary tracking-wide">
              {item.responsibilities.map((resp, index) => (
                <li key={index}>{resp}</li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </>
  );
}
