function Badge(props) {
  const { children } = props;

  let badgeClass = "badge";

  if (children === "Publish" || children === "User") {
    badgeClass += " bg-success";
  } else if (children === "Pending Review") {
    badgeClass += " bg-warning";
  } else if (children === "Editor") {
    badgeClass += " bg-info";
  } else if (children === "Admin") {
    badgeClass += " bg-primary";
  }

  return <span className={badgeClass}>{children}</span>;
}

export default Badge;
