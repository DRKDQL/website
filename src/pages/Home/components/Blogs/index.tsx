import Section from "../Section";

const styles = {
  heading: "text-h2 text-center text-white",
};

export interface IBlogsProps {}

const Blogs = (props: IBlogsProps) => {
  return (
    <Section>
      <div className={styles.heading}> No blog posts yet. Stay tuned! </div>
    </Section>
  );
};

export default Blogs;
