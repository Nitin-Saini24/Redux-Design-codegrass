import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../redux/Slices/postSlice";

const Page6 = () => {
  const [loading, setLoading] = useState(null);

  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchPosts());
    }
  }, [dispatch, status]);

  return (
    <div className="col-span-12">
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-6 lg:col-span-7">
          <div className="rounded-md border border-stroke bg-white  shadow-default dark:border-strokedark dark:bg-boxdark  w-full">
            <div className="max-w-full overflow-x-auto">
              <div className="border-b border-stroke py-2 px-2 flex justify-between">
                <h1 className="text-lg font-semibold">Overview</h1>
                <button className="mr-5 border-stroke border px-2 py-1 rounded">
                  View All
                </button>
              </div>
              <div className="flex flex-col  max-h-[11.5rem] overflow-auto no-scrollbar-w">
                {status === "loading" && <h1>Loading...</h1>}
                {status === "failed" && <h1>{error}</h1>}
                {status === "succeeded" &&
                  posts?.slice(0, 10).map((post) => (
                    <div
                      key={post.id}
                      className="border border-stroke bg-gray-2 dark:bg-boxdark dark:text-white pl-2 py-2 my-1 mx-2 rounded-sm shadow-md"
                    >
                      <h1 className="text-sm font-semibold">{post.title}</h1>
                      {/* <p className="text-xs">{post.body}</p> */}
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-6 lg:col-span-5">
          <div className=" bg-gray-100 dark:bg-boxdark dark:text-white rounded-md border border-stroke">
            <h1 className="text-lg font-semibold p-2.5 border-b border-stroke">
              New Request
            </h1>
            <div className="flex flex-col max-h-[11.5rem] overflow-auto no-scrollbar-w">
              {status === "loading" && <h1>Loading...</h1>}
              {status === "failed" && <h1>{error}</h1>}
              {status === "succeeded" &&
                posts?.slice(0, 10).map((post) => (
                  <div
                    key={post.id}
                    className="border border-stroke  rounded-sm shadow-md bg-gray-2 dark:bg-boxdark dark:text-white pl-2 py-2 mx-2 my-1"
                  >
                    <h1 className="text-sm font-semibold">{post.title}</h1>
                    {/* <p className="text-xs">{post.body}</p> */}
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page6;
