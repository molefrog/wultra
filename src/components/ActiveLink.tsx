import { useRoute, Link } from "wouter";

type ActiveLinkProps = {
  // specify path segment to match, can be useful for subnavigation
  // for example, if you want the "Users" link to be active on "/users/:anything*"
  activePath?: string;

  // wraps link content in <b> when active
  boldWhenActive?: boolean;
} & React.ComponentProps<typeof Link>;

export const ActiveLink = (props: ActiveLinkProps) => {
  const pattern = props.activePath || props.href;
  const [isActive] = useRoute(pattern);

  return (
    <Link {...props}>
      <a href={props.href} className={isActive ? "active" : ""}>
        {props.boldWhenActive && isActive ? <b>{props.children}</b> : props.children}
      </a>
    </Link>
  );
};
