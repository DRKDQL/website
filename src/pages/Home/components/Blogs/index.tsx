import Section from "../Section";

const styles = {
  heading: "text-h4 text-center text-white",
};

export interface IBlogsProps {}

const Blogs = (props: IBlogsProps) => {
  return (
    <Section>
      <br />
      <div className={styles.heading}>
        <div> Blog posts are currently being planned out. </div>
        <br />
        <div> Stay tuned :) </div>
      </div>
    </Section>
  );
};

export default Blogs;
