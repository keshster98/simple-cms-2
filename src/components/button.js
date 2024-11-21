function Button(props) {
  const { color, size, className, onClick, children } = props;

  let btnClass = "btn";

  if (color === "red") {
    btnClass += " btn-danger"; // btn btn-danger
  } else if (color === "green") {
    btnClass += " btn-success"; // btn btn-success
  } else if (color === "blue") {
    btnClass += " btn-primary"; // btn btn-info
  } else if (color === "yellow") {
    btnClass += " btn-warning"; // btn btn-dark
  } else if (color === "grey") {
    btnClass += " btn-secondary"; // btn btn-dark
  }

  if (size === "small") {
    btnClass += " btn-sm"; // btn btn-danger btn-sm
  } else if (size === "large") {
    btnClass += " btn-lg"; // btn btn-danger btn-lg
  }

  if (className) {
    btnClass += className;
  }

  return (
    <button className={btnClass} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
