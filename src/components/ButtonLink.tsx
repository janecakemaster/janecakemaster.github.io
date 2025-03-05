type ButtonLinkProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export function ButtonLink(props: ButtonLinkProps) {
  return (
    <button className="decoration-blue-500 underline hover:overline" {...props}>
      {props.children}
    </button>
  );
}
