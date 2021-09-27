import React, { useEffect } from "react";
import { publicApiFunction, abc } from "@medium/api";
const page1 = ({ match, location }) => {
  let search = window.location.search;
  let params = new URLSearchParams(search);
  let foo = params.get("status");

  console.log(foo);

  useEffect(() => {
    publicApiFunction();
    abc();

    if (foo === "300") {
      console.log("yes");
    }
  }, []);
  return (
    <div className=" text-yellow-500  bg-gray-500">
      <p onClick={() => alert("yash")}>Page one App</p>
    </div>
  );
};

export default page1;
