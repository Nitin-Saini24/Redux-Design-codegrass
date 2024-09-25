import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/Slices/countSlice";
import TextEditor from "../Components/TextEditor";

export default function Page1() {
  const { count } = useSelector((state) => state.counter);
  const dispatch = useDispatch();

  return (
    <>
      <section className="lg:pb-24 md:pb-8 pb-8 product" id="products">
        <div className="container mx-auto sm:px-7 px-4 relative">
          <div className="inner-box flex flex-col items-center justify-center  md:pb-[50px] sm:pb-[25px] pb-[15px] sm:pl-[36px] pl-[50px]   text-red font-bold">
            <h1 className="text-3xl">nitin count :{count}</h1>
            <div className="mt-20 flex">
              <button
                onClick={() => dispatch(increment())}
                className="text-red-400  w-10 h-10 flex justify-center items-center rounded-full  bg-blue-50"
              >
                +
              </button>
              <button
                className="text-red-400  w-10 h-10 flex justify-center items-center rounded-full  bg-blue-50"
                onClick={() => dispatch(decrement())}
              >
                -
              </button>
              <Link to={"/page1"}>Page1</Link>
              <Link to={"/page2"}>Page2</Link>
              <TextEditor />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
