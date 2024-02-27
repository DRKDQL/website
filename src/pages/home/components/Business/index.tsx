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
          linkText="littlelearnerstherapy.com.au"
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
       {/* <ReleaseCategory type="Upcoming" />
      <ProjectGrid>
        <ProjectCard
          title="A Coaching Hub App"
          link="T.B.A."
          caption="Details to come..."
          tools={[]}
          category="Mobile App"
          linkType=""
          disabled
        />
      </ProjectGrid> */}
    </Section>
  );
};

export default Business;
