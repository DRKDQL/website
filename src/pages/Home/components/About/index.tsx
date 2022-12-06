import Decoration from "src/components/Decoration";
import Picture from "src/components/Picture";
import { ASPECT_RATIO_LOGO, ASPECT_RATIO_PORTRAIT } from "src/helpers/picture";
import Section from "../Section";
import { FaTiktok } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { motion } from "framer-motion";

const styles = {
  heading: "text-center text-white p-[20px]",
  images: "flex-col-center space-y-10 p-[20px]",
  content: "text-center text-white p-[20px] space-y-6",
  contentHeading: "w-[300px] mb-[20px] font-bold",
  contentText: "text-center tablet:text-left",
  image: "flex-center",
  decoration: "w-full bg-white h-[1px] mx-[20px]",
  list: "space-y-1 mt-[10px] text-left",
  socials: "flex-center tablet:justify-start space-x-10 py-[20px]",
  social: "flex-col-center cursor-pointer",
};

export interface IAboutProps {}

const About = (props: IAboutProps) => {
  return (
    <Section>
      <div className={styles.images}>
        <div className={styles.image}>
          <Picture
            src="/assets/sections/home/about/portrait.jpg"
            alt="Photo of Derek Daquel"
            aspectRatio={ASPECT_RATIO_PORTRAIT}
            height={250}
            imageClass="rounded-[20px]"
            priority
          />
        </div>
        <div className={styles.image}>
          <Picture
            src="/assets/sections/home/Logo.svg"
            alt="DRKDQL Logo"
            aspectRatio={ASPECT_RATIO_LOGO}
            height={50}
          />
        </div>
      </div>
      <div className={styles.content}>
        <div>
          <Decoration>
            <h3 className={styles.contentHeading}>About the Brand</h3>
          </Decoration>
          <div className={styles.contentText}>
            During June of 2022, I created a personal brand (DRKDQL) to attach
            to any projects and online content I create throughout my career.
            With most of my current experience as a Software Engineer being in
            frontend web development, I am interested in working on fun and
            hands-on projects in a wide range of areas. I will be taking an
            unstructured, agile approach to my project development where I will
            quickly develop plans but will learn mostly from pushing out content
            or code as quick as I can and will adapt to new goals and mistakes.
          </div>
        </div>
        <div>
          <Decoration>
            <h3 className={styles.contentHeading}>Socials / Contact</h3>
          </Decoration>
          <div className={styles.contentText}>
            <div className={styles.contentText}>
              You can find me on the following platforms. Feel free to give me a
              follow!
            </div>
            <div className={styles.socials}>
              <motion.a
                className={styles.social}
                href="https://www.instagram.com/drkdql"
                whileHover={{ scale: 1.1 }}
              >
                <AiFillInstagram className="text-h1" />
                <div> @drkdql </div>
              </motion.a>
              <motion.a
                className={styles.social}
                href="https://www.tiktok.com/@drkdql"
                whileHover={{ scale: 1.1 }}
              >
                <FaTiktok className="text-h1" />
                <div> @drkdql </div>
              </motion.a>
            </div>
          </div>
        </div>
        <div>
          <Decoration>
            <h3 className={styles.contentHeading}>What will I create?</h3>
          </Decoration>
          <div className={styles.contentText}>
            As of right now, I plan to create the following projects and online
            content:
            <div className={styles.list}>
              <li> Websites </li>
              <li> Mobile Apps </li>
              <li> Games </li>
              <li> Designs </li>
              <li> Photo / video editing </li>
              <li> Blogs </li>
              <li> Tutorials </li>
            </div>
          </div>
        </div>
        <div>
          <Decoration>
            <h3 className={styles.contentHeading}>
              What does DRKDQL stand for?
            </h3>
          </Decoration>
          <div className={styles.contentText}>
            It is my full name without the vowels.
          </div>
          <div className={styles.contentText}>
            <span className="text-light-blue font-bold">D</span>e
            <span className="text-light-pink font-bold">R</span>e
            <span className="text-light-blue font-bold">K</span>{" "}
            <span className="text-light-pink font-bold">D</span>a
            <span className="text-light-blue font-bold">Q</span>ue
            <span className="text-light-pink font-bold">L</span>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default About;
