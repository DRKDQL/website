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
      <ReleaseCategory type="Live" />
      <ProjectGrid>
        <ProjectCard
          title="Little Learners Speech Therapy"
          link="littlelearnerstherapy.com.au"
          caption="A website for my friend's business. 
Little Learners Speech Therapy offers mobile speech pathology services across Sydney's Eastern Suburbs. Services can be delivered within your child's preschool, school, home or via telehealth."
          tools={[
            "NextJS",
            "Tailwind CSS",
            "Google Workspace",
            "Cloudflare Pages",
            "Namecheap Domains",
            "Figma",
            "FormSubmit.co",
          ]}
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
          archived
        />
      </ProjectGrid>
    </Section>
  );
};

export default Business;
