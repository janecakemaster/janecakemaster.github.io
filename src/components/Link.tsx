export const linkClassName = "decoration-blue-500 underline hover:overline";

type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children }: LinkProps) {
  return (
    <a href={href} className={linkClassName}>
      {children}
    </a>
  );
}
