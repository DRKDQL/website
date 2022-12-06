import { motion } from "framer-motion";

const styles = {};

export interface IFadeProps {
  children?: React.ReactNode;
}

const FadeInContainer = (props: IFadeProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {props.children}
    </motion.div>
  );
};

export default FadeInContainer;
