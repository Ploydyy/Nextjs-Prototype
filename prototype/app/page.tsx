"use client";

import React from "react";
import type { RootState } from "./GlobalRedux/store";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "./GlobalRedux/Features/counter/counterSlice";

const Dashboard = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      Dashboard
      <div>
        {count}
        <br />
        <button
          className="border p-2 hover:bg-slate-400"
          onClick={() => {
            dispatch(increment());
          }}
        >
          increment by 1
        </button>
        <br />
        <button
          className="border p-2 hover:bg-slate-400"
          onClick={() => {
            dispatch(decrement());
          }}
        >
          decrement by 1
        </button>
        <br />
        <button
          className="border p-2 hover:bg-slate-400"
          onClick={() => {
            dispatch(incrementByAmount(2));
          }}
        >
          increment by amount of 2
        </button>
      </div>
    </div>
  );
};

export default Dashboard;
