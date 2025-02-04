import { teamMembers, socials } from "../constants";
import Section from "./Section";
import Heading from "./Heading";
import { GradientLight } from "./design/Benefits";

const Team = () => {
  // Get social icons from the socials array
  const socialIcons = {
    facebook: socials.find(s => s.title === "Facebook")?.iconUrl,
    instagram: socials.find(s => s.title === "Instagram")?.iconUrl,
    linkedin: socials.find(s => s.title === "Discord")?.iconUrl, // Using Discord icon for LinkedIn since LinkedIn isn't in the socials
  };

  return (
    <Section id="team">
      <div className="container">
        <Heading
          className="md:max-w-md lg:max-w-2xl"
          title="Notre Équipe"
          text="Une équipe passionnée par la création de contenu visuel exceptionnel."
        />

        <div className="flex flex-wrap justify-center gap-10">
          {teamMembers.map((member) => (
            <div
              key={member.id}
              className="relative w-full max-w-[30rem]"
            >
              <div className="relative z-1 p-0.5 bg-n-6 rounded-3xl overflow-hidden">
                <div className="relative p-8 bg-n-8 rounded-[1.4375rem] overflow-hidden xl:p-15">
                  <div className="relative z-1">
                    {/* Member Image */}
                    <div className="relative mb-8 h-[22rem] rounded-xl overflow-hidden">
                      <img
                        src={member.image}
                        className="w-full h-full object-cover"
                        width={380}
                        height={352}
                        alt={member.name}
                      />
                    </div>

                    {/* Member Info */}
                    <h4 className="h4 mb-4">{member.name}</h4>
                    <p className="body-2 text-n-4 mb-4">{member.role}</p>
                    <p className="mb-6">{member.description}</p>

                    {/* Expertise */}
                    <h6 className="tagline text-n-4 mb-4">Expertise</h6>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {member.expertise.map((skill, index) => (
                        <div
                          key={index}
                          className="px-4 py-1 bg-n-7 rounded-lg"
                        >
                          <p className="text-n-1/75">{skill}</p>
                        </div>
                      ))}
                    </div>

                    {/* Social Links */}
                    <div className="flex gap-4">
                      <a
                        href={member.social.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                      >
                        <img src={socialIcons.linkedin} width={16} height={16} alt="LinkedIn" />
                      </a>
                      <a
                        href={member.social.instagram}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                      >
                        <img src={socialIcons.instagram} width={16} height={16} alt="Instagram" />
                      </a>
                      <a
                        href={member.social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center w-10 h-10 bg-n-7 rounded-full transition-colors hover:bg-n-6"
                      >
                        <img src={socialIcons.facebook} width={16} height={16} alt="Facebook" />
                      </a>
                    </div>
                  </div>

                  {/* Background Gradient */}
                  <GradientLight />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Team;
