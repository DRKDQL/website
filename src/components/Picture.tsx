import {
  useState,
  useEffect,
  forwardRef,
  useRef,
  MutableRefObject,
} from "react";

import Image from "next/image";

const styles = {};

export interface IPictureProps {
  height?: number;
  src: string;
  alt: string;
  containerStyle?: any;
  containerClass?: any;
  imageStyle?: any;
  imageClass?: any;
  aspectRatio: number;
  onClick?: any;
  priority?: boolean;
}

const Picture = (props: IPictureProps) => {
  const {
    height,
    src,
    alt,
    aspectRatio,
    containerStyle,
    containerClass,
    imageStyle,
    imageClass,
    onClick,
    priority,
  } = props;

  const ref = useRef() as MutableRefObject<HTMLDivElement>;

  const [parentWidth, setParentWidth] = useState(0);

  useEffect(() => {
    setParentWidth(ref.current.offsetWidth);
  }, []);

  const calculateScaledHeight = (
    width: number,
    aspectRatio: number
  ): number => {
    return width / aspectRatio;
  };

  const calculateScaledWidth = (
    height: number,
    aspectRatio: number
  ): number => {
    return aspectRatio * height;
  };

  const getHeight = () => {
    if (!height) {
      const newHeight = calculateScaledHeight(parentWidth, aspectRatio);
      return `${newHeight}px`;
    } else {
      return `${height}px`;
    }
  };

  const getWidth = () => {
    if (!height) {
      return `100%`;
    } else {
      return `${calculateScaledWidth(height, aspectRatio)}px`;
    }
  };

  return (
    <div
      className={`relative ${containerClass ? containerClass : ""}`}
      style={{
        width: getWidth(),
        height: getHeight(),
        ...containerStyle,
      }}
      ref={ref}
    >
      <Image
        className={imageClass}
        src={src}
        alt={alt}
        layout="fill"
        priority={priority}
        objectFit="contain"
        style={imageStyle}
        onClick={onClick}
      />
    </div>
  );
};

export default Picture;
