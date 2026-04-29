export const linkClassName = "decoration-blue-500 underline hover:overline";

type LinkProps = {
  href: string;
  children: React.ReactNode;
  target?: string;
};

export function Link({ href, children, target }: LinkProps) {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={linkClassName}
    >
      {children}
    </a>
  );
}
