import { experienceData } from "@/components/data";
import { SocialButton } from "./social-btns";
import { BodyBtn } from "../main/body-btn";
import { Separator } from "@/components/ui/separator";
import { FacebookLogoIcon, GlobeSimpleIcon, InstagramLogoIcon, LinkedinLogoIcon, XLogoIcon, YoutubeLogoIcon } from "@phosphor-icons/react";

export function ExperienceItem() {
  // const totalExperiences = experienceData.length;

  return (
    <>
      {/* <div className="flex gap-1.5 mt-2 mb-6">
        <h2 className="text-xl font-semibold">All Experiences</h2>

        <p className="text-sm text-secondary pt-1.5">
          ({totalExperiences} experiences)
        </p>
      </div> */}

      {experienceData.map((item) => (
        <div key={item.id} className="mb-8">
          {/* Title */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2.5">
              {/* Uncomment if want to see logo of the company */}
              {/* <Image
                src={item.icon}
                alt={item.alt}
                height={46}
                width={46}
                className="border border-black/10 rounded-md select-none"
              /> */}

              <div>
                <div className="flex items-center">
                  <span className="mr-2 text-lg font-bold">{item.company}</span>

                  <div className="flex gap-0.5">
                    <SocialButton
                      icon={
                        <GlobeSimpleIcon
                          style={{ height: 18, width: 18 }}
                        />
                      }
                      url={item.website}
                      label="Website"
                    />

                    <SocialButton
                      icon={
                        <LinkedinLogoIcon
                          style={{ height: 18, width: 18 }}
                        />
                      }
                      url={item.linkedin}
                      label="LinkedIn"
                    />

                    {item.twitter && (
                      <SocialButton
                        icon={
                          <XLogoIcon
                            style={{ height: 18, width: 18 }}
                          />
                        }
                        url={item.twitter}
                        label="Twitter"
                      />
                    )}

                    {item.instagram && (
                      <SocialButton
                        icon={
                          <InstagramLogoIcon
                            style={{ height: 18, width: 18 }}
                          />
                        }
                        url={item.instagram}
                        label="Instagram"
                      />
                    )}

                    {item.facebook && (
                      <SocialButton
                        icon={
                          <FacebookLogoIcon
                            style={{ height: 18, width: 18 }}
                          />
                        }
                        url={item.facebook}
                        label="Facebook"
                      />
                    )}

                    {item.youtube && (
                      <SocialButton
                        icon={
                          <YoutubeLogoIcon
                            style={{ height: 18, width: 18 }}
                          />
                        }
                        url={item.youtube}
                        label="Youtube"
                      />
                    )}
                  </div>
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

          <Separator orientation="horizontal" className="my-3" />

          {/* Technologies & Tools section */}
          <div className="space-y-3">
            <h3 className="font-medium text-[15px] mb-2">
              Technologies & Tools
            </h3>

            <div className="flex flex-wrap gap-2">
              {item.technologies.map((tech) => (
                <BodyBtn key={tech} tech={tech} />
              ))}
            </div>
          </div>

          {/* What I've done section */}
          <div className="mt-4 transition-all">
            <b className="text-[15px]">What I&apos;ve done</b>

            <ul className="list-disc list-outside space-y-1.5 text-sm text-secondary tracking-wide px-3 sm:px-4 mt-1.5">
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
