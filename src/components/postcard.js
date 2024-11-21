import { useNavigate } from "react-router-dom";

import Button from "./button";

function PostCard(props) {
  const navigate = useNavigate();
  const { title, text } = props;

  return (
    <div className="card mb-2">
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{text}</p>
        <div className="text-end">
          <Button
            color="blue"
            size="small"
            onClick={(event) => {
              event.preventDefault();
              navigate("/post");
            }}
          >
            Read More
          </Button>
        </div>
      </div>
    </div>
  );
}

export default PostCard;
