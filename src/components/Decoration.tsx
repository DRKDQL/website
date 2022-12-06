import {
  ReactNode,
  useRef,
  MutableRefObject,
  useState,
  useEffect,
} from "react";

const styles = {
  container: "flex-center",
  decorationLeft: " bg-white h-[1px] mr-[20px]",
  decorationRight: " bg-white h-[1px] ml-[20px]",
};

export interface IDecorationProps {
  children: ReactNode;
}

const Decoration = (props: IDecorationProps) => {
  const { children } = props;

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const [childWidth, setChildWidth] = useState(0);

  useEffect(() => {
    setChildWidth(ref.current.offsetWidth);
  }, [ref]);

  console.log(childWidth);

  return (
    <div className={styles.container}>
      <div
        className={styles.decorationLeft}
        style={{ width: `calc(100% - ${childWidth}px)` }}
      />
      <div ref={ref}>{children}</div>
      <div
        className={styles.decorationRight}
        style={{ width: `calc(100% - ${childWidth}px)` }}
      />
    </div>
  );
};

export default Decoration;
