/* eslint-disable react-refresh/only-export-components */
import { Outlet } from "react-router-dom";
import PostList from "../Components/PostList";

function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostList />
      </main>
    </>
  );
}

export default Posts;

export async function loader() {
  const response = await fetch("http://localhost:5050/posts");
  const resData = await response.json();
  return resData.posts;
}
