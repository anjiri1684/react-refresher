/* eslint-disable react-refresh/only-export-components */
import { Link, Form, redirect } from "react-router-dom";
import Modal from "../Components/Modal";
import classes from "./NewPost.module.css";

function NewPost() {
  return (
    <Modal>
      <Form className={classes.form} method="post">
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" required rows={3} />
        </p>
        <p>
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" required name="author" />
        </p>
        <p className={classes.actions}>
          <Link to=".." type="button">
            Cancel
          </Link>
          <button type="submit">Add Post</button>
        </p>
      </Form>
    </Modal>
  );
}

export default NewPost;

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch("http://localhost:5050/posts", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(postData),
  });

  return redirect("/");
}
