import React from "react";
import { TailSpin } from "react-loader-spinner";

const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      <TailSpin
        type="Circles"
        color="#00BFFF"
        height={100}
        width={400}
        className="m-5"
      />
      <p className="text-lg text-center px-2 mt-10">{message}</p>
    </div>
  );
};

export default Spinner;
