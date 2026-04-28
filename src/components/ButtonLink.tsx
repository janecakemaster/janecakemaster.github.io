import { linkClassName } from "./Link";

type ButtonLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonLink(props: ButtonLinkProps) {
  return <button className={linkClassName} {...props} />;
}
