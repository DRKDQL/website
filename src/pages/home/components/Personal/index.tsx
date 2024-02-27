import ProjectCard from "src/pages/home/components/ProjectCard";
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
          title="reChord"
          linkText="Google Play Store"
          link="play.google.com/store/apps/details?id=com.drkdql.rechord&pcampaignid=web_share"
          caption="My first personal app released to the Google Play Store to keep track of my favourite guitar songs / chords that I've learnt or want to learn."
          tools={[
            "Flutter",
            "Android Studio",
            "XCode",
            "Google Play Console",
          ]}
          category="Mobile App"
          linkType="Mobile App"
        />
        <ProjectCard
          title="Personal Website"
          linkText="derekdaquel.com"
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
          linkText="@retiredallstars"
          link="www.instagram.com/retiredallstars"
          caption="Management + Photo / Video editing of weekly scores, stats, highlights and leaderboards."
          tools={["Figma", "Davinci Resolve", "Adobe Photoshop"]}
          category="Editing"
          linkType="Instagram"
        />
        
      </ProjectGrid>
      {/* <ReleaseCategory type="Upcoming" />
      <ProjectGrid>
      </ProjectGrid> */}
      <ReleaseCategory type="Archived" />
      <ProjectGrid>
        <ProjectCard
          title="Spoons Online Multiplayer Game"
          link="spoons.drkdql.com"
          linkText="spoons.drkdql.com"
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
