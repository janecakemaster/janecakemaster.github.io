type LinkProps = {
  href: string;
  children: React.ReactNode;
};

export function Link({ href, children }: LinkProps) {
  return (
    <a href={href} className="decoration-blue-500 underline hover:overline">
      {children}
    </a>
  );
}
