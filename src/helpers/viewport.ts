import { useEffect, useState } from "react";

export const useIntersection = (element: any, rootMargin?: any) => {
  const [isVisible, setState] = useState(false);

  useEffect(() => {
    if (!element.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        setState(entry.isIntersecting);
      },
      { rootMargin }
    );

    element.current && observer.observe(element.current);

    return () => {
      if (element.current) observer.unobserve(element.current);
    };
  }, []);

  return isVisible;
};

export const scrollTo = (pos: number, extraSpacing?: boolean) => {
  window.scroll({
    top: pos,
    left: 0,
    behavior: "smooth",
  });
};
