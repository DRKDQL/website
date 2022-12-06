import { ReactNode } from "react";

const styles = {};

export interface INewTabLinkProps {
  href: string;
  children?: ReactNode;
}

const NewTabLink = (props: INewTabLinkProps) => {
  const { href, children } = props;
  return (
    <a target="_blank" rel="noopener noreferrer" href={href}>
      {children}
    </a>
  );
};

export default NewTabLink;
