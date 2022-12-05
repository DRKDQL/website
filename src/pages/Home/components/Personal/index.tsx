import ProjectCard from "src/pages/Home/components/ProjectCard";
import Section from "../Section";
import ReleaseCategory from "../ReleaseCategory";
import ProjectGrid from "../ProjectGrid";
import { PROJECT_COVER_FOLDER } from "src/helpers/picture";

const styles = {};

export interface IPersonalProps {}

const Personal = (props: IPersonalProps) => {
  return (
    <Section>
      <ReleaseCategory type="Upcoming" />
      <ProjectGrid>
        <ProjectCard
          title="Spoons Online Multiplayer Game"
          link="spoons.drkdql.com"
          caption="A web / desktop version of the card game Spoons. Spoons is a card game I have played several times with my friends and cousins"
          tools={[]}
          category="Games"
          linkType="Website"
          imgSrc={`${PROJECT_COVER_FOLDER}/spoons.jpg`}
        />
      </ProjectGrid>
      <ReleaseCategory type="Live" />
      <ProjectGrid>
        <ProjectCard
          title="Personal Website"
          link="www.derekdaquel.com"
          caption="A more personal website for my career experience and endeavours I pursue (not restricted to online content and technology)."
          tools={["NextJS", "Tailwind CSS", "Github Pages"]}
          category="Websites"
          linkType="Website"
          imgSrc={`${PROJECT_COVER_FOLDER}/personal.jpg`}
        />
        <ProjectCard
          title="Brand Website"
          link="www.drkdql.com"
          caption="This very website you are looking at was built by myself to showcase projects and online content I create."
          tools={["NextJS", "Tailwind CSS", "Netlify"]}
          category="Websites"
          linkType="Website"
          imgSrc={`${PROJECT_COVER_FOLDER}/brand.jpg`}
        />
      </ProjectGrid>
    </Section>
  );
};

export default Personal;
