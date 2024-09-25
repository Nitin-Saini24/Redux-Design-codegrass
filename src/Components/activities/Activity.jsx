import React from "react";
import { useSelector } from "react-redux";

export default function Activity() {
  const posts = useSelector((state) => state.posts.posts);
  return (
    <div>
      <>{posts.map((post) => console.log(post))}</>
    </div>
  );
}
