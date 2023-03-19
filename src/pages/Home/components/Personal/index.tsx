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
      <ReleaseCategory type="Upcoming" />
      <ProjectGrid>
        <ProjectCard
          title="Spoons Online Multiplayer Game"
          link="spoons.drkdql.com"
          caption="A web / desktop version of the card game Spoons. Spoons is a card game I have played several times with my friends and family."
          tools={[]}
          category="Game"
          linkType="Website"
        />
      </ProjectGrid>
      <ReleaseCategory type="Live" />
      <ProjectGrid>
        <ProjectCard
          title="Personal Website"
          link="derekdaquel.com"
          caption="A more personal website for my career experience and endeavours I pursue (not restricted to online content and technology)."
          tools={[
            "NextJS",
            "Tailwind CSS",
            "Github Pages",
            "Namecheap Domains",
          ]}
          category="Website"
          linkType="Website"
        />
        <ProjectCard
          title="Retired Allstars Social Media"
          link="www.instagram.com/retiredallstars"
          caption="I have been managing my basketball team's social media account and posting weekly scores, stats, highlights and leaderboard."
          tools={["Figma", "Davinci Resolve", "Adobe Photoshop"]}
          category="Editing"
          linkType="Instagram"
        />
        <ProjectCard
          title="DRKDQL"
          link="drkdql.com"
          caption="This very website you are looking at was built by myself to showcase projects and online content I create."
          tools={[
            "NextJS",
            "Redux",
            "Tailwind CSS",
            "Netlify",
            "Namecheap Domains",
          ]}
          category="Website"
          linkType="Website"
          disabled
        />
      </ProjectGrid>
    </Section>
  );
};

export default Personal;
