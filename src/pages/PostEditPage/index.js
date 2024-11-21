import { Link } from "react-router-dom";
import Button from "../../components/button";

function PostEditPage() {
  return (
    <div className="container mx-auto my-5" style={{ maxWidth: "700px" }}>
      <div className="d-flex justify-content-between align-items-center mb-2">
        <h1 className="h1">Edit Post</h1>
      </div>
      <div className="card mb-2 p-4">
        <form>
          <div className="mb-3">
            <label for="post-title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="post-title"
              value="Post 1"
            />
          </div>
          <div className="mb-3">
            <label for="post-content" className="form-label">
              Content
            </label>
            <textarea className="form-control" id="post-content" rows="10">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              purus risus, euismod ac tristique in, suscipit quis quam.
              Vestibulum ante ipsum primis in faucibus orci luctus et ultrices
              posuere cubilia curae; Vestibulum eget dapibus nibh. Pellentesque
              nec maximus odio. In pretium diam metus, sed suscipit neque
              porttitor vitae. Vestibulum a mattis eros. Integer fermentum arcu
              dolor, nec interdum sem tincidunt in. Cras malesuada a neque ut
              sodales. Nulla facilisi. Phasellus sodales arcu quis felis
              sollicitudin vehicula. Aliquam viverra sem ac bibendum tincidunt.
              Donec pulvinar id purus sagittis laoreet. Sed aliquet ac nisi
              vehicula rutrum. Proin non risus et erat rhoncus aliquet. Nam
              sollicitudin facilisis elit, a consequat arcu placerat eu.
              Pellentesque euismod et est quis faucibus. Curabitur sit amet nisl
              feugiat, efficitur nibh et, efficitur ex. Morbi nec fringilla
              nisl. Praesent blandit pellentesque urna, a tristique nunc lacinia
              quis. Integer semper cursus lectus, ac hendrerit mi volutpat sit
              amet. Etiam iaculis arcu eget augue sollicitudin, vel luctus lorem
              vulputate. Donec euismod eu dolor interdum efficitur. Vestibulum
              finibus, lectus sed condimentum ornare, velit nisi malesuada
              ligula, eget posuere augue metus et dolor. Nunc purus eros,
              ultricies in sapien quis, sagittis posuere risus.
            </textarea>
          </div>
          <div className="mb-3">
            <label for="post-content" className="form-label">
              Status
            </label>
            <select className="form-control" id="post-status" name="status">
              <option value="review">Pending for Review</option>
              <option value="publish">Publish</option>
            </select>
          </div>
          <div className="text-end">
            <Button color="blue" size="small" />
          </div>
        </form>
      </div>
      <div className="text-center">
        <Link to="/manage-posts" className="btn btn-link btn-sm">
          <i className="bi bi-arrow-left"></i> Back to Posts
        </Link>
      </div>
    </div>
  );
}

export default PostEditPage;
