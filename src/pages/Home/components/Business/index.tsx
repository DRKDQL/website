import ReleaseCategory from "../ReleaseCategory";
import Section from "../Section";
import ProjectGrid from "../ProjectGrid";
import ProjectCard from "../ProjectCard";
import { PROJECT_COVER_FOLDER } from "src/helpers/picture";

const styles = {};

export interface IBusinessProps {}

const Business = (props: IBusinessProps) => {
  return (
    <Section>
      <ReleaseCategory type="Live" />
      <ProjectGrid>
        <ProjectCard
          title="Speak & Shine Speech Pathology"
          link="www.speakandshinespeechpathology.com.au"
          caption="I built a website for my cousin's Mobile Speech pathology business that diagnoses and treats communication difficulties in children 1 - 18 years in the area of Marrickville and surrounding Suburbs."
          tools={["NextJS", "Tailwind CSS", "Netlify", "Google Workspace"]}
          category="Games"
          linkType="Website"
          imgSrc={`${PROJECT_COVER_FOLDER}/speak-and-shine.jpg`}
        />
      </ProjectGrid>
    </Section>
  );
};

export default Business;
