import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  decrement,
  increment,
  incrementByAmount,
} from "../redux/Slices/countSlice";
import Login from "./Login";
import Table from "./table/Table";
import Activity from "./activities/Activity";

export default function Home() {
  const { count } = useSelector((state) => state.counter);

  return (
    <>
      <section className="lg:pb-2 md:pb-8 pb-8 product" id="products">
        <div className="container mx-auto sm:px-7 px-4 relative">
          <div className="inner-box flex flex-col items-center justify-center mt-20 md:pb-[50px] sm:pb-[25px] pb-[15px]    text-red font-bold">
            <h1 className="text-3xl mb-5 pb-5">Codegrass</h1>
            <Activity />
            <Table />
          </div>
        </div>
      </section>
    </>
  );
}
