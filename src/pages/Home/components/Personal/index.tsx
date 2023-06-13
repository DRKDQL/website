import ProjectCard from "src/pages/Home/components/ProjectCard";
import Section from "../Section";
import ReleaseCategory from "../ReleaseCategory";
import ProjectGrid from "../ProjectGrid";

const styles = {
  text: "text-white text-center",
};

export interface IPersonalProps {}

const Personal = (props: IPersonalProps) => {
  return (
    <Section>
      <br />
      <div className={styles.text}>Click on the cards to view the project </div>
      <ReleaseCategory type="Live" />
      <ProjectGrid>
        <ProjectCard
          title="Personal Website"
          link="derekdaquel.com"
          caption="A very simple personal website for Work Experience, Projects (not restricted to tech) and Socials."
          tools={[
            "NextJS",
            "Tailwind CSS",
            "Cloudflare Pages",
            "Namecheap Domains",
          ]}
          category="Website"
          linkType="Website"
        />
        <ProjectCard
          title="Retired Allstars - Social Media Management"
          link="www.instagram.com/retiredallstars"
          caption="Management + Photo / Video editing of weekly scores, stats, highlights and leaderboards."
          tools={["Figma", "Davinci Resolve", "Adobe Photoshop"]}
          category="Editing"
          linkType="Instagram"
        />
      </ProjectGrid>
      <ReleaseCategory type="Upcoming" />
      <ProjectGrid>
        <ProjectCard
          title="A Guitar App"
          link="T.B.A."
          caption="Details to come..."
          tools={[]}
          category="Mobile App"
          linkType=""
          disabled
        />
        <ProjectCard
          title="An Events App"
          link="T.B.A."
          caption="Details to come..."
          tools={[]}
          category="Mobile App"
          linkType=""
          disabled
        />
      </ProjectGrid>
      <ReleaseCategory type="Archived" />
      <ProjectGrid>
        <ProjectCard
          title="Spoons Online Multiplayer Game"
          link="spoons.drkdql.com"
          caption="A web / desktop version of the card game Spoons. Spoons is a card game I have played several times with my friends and family. Development is currently paused."
          tools={[
            "NextJS",
            "Tailwind CSS",
            "Firebase",
            "Cloudflare Pages",
            "Figma",
            "OBS",
            "TikTok",
            "Davinci Resolve",
          ]}
          category="Game"
          linkType="Website"
          archived
        />
      </ProjectGrid>
    </Section>
  );
};

export default Personal;
