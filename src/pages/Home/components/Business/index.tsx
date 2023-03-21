import ReleaseCategory from "../ReleaseCategory";
import Section from "../Section";
import ProjectGrid from "../ProjectGrid";
import ProjectCard from "../ProjectCard";

const styles = {
  text: "text-white text-center",
};

export interface IBusinessProps {}

const Business = (props: IBusinessProps) => {
  return (
    <Section>
      <br />
      <div className={styles.text}>Click on the cards to view the project </div>
      <ReleaseCategory type="Upcoming" />
      <ProjectGrid>
        <ProjectCard
          title="Little Learners Speech Therapy"
          link="littlelearnerstherapy.com.au"
          caption="Details to come..."
          tools={[]}
          category="Website"
          linkType="Website"
        />
      </ProjectGrid>
      <ReleaseCategory type="Archived" />
      <ProjectGrid>
        <ProjectCard
          title="Speak & Shine Speech Pathology"
          link="speakandshine.netlify.app"
          caption="The website I initially built / tested for a Mobile Speech pathology business. The founders have rebranded and will continue as Little Learners Speech Therapy. Previously available at: speakandshinespeechpathology.com.au."
          tools={[
            "NextJS",
            "Tailwind CSS",
            "Netlify",
            "Google Workspace",
            "Namecheap Domains",
            "YouTube Streaming",
            "OBS",
          ]}
          category="Website"
          linkType="Website"
        />
      </ProjectGrid>
    </Section>
  );
};

export default Business;
