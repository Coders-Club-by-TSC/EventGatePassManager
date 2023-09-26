"use client";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Link from "next/link";

function Event({ params }) {
  const [val, setVal] = useState([]);
  const [eventData, setEventData] = useState();
  const getEventData = async () => {
    const { data } = await axios.get(`/api/event/${params.event}`);
    setEventData(data?.data);
    // for(auto i: data?.data?.collaborators){

    // }
    // setVal(data?.data?.collaborators);
  };
  // console.log(eventData);
  useEffect(() => {
    getEventData();
  });

  const handleAdd = () => {
    const abc = [...val, []];
    setVal(abc);
  };
  const handleChange = (e, i) => {
    const inputdata = [...val];
    inputdata[i] = e.target.value;
    setVal(inputdata);
  };

  const handleDelete = (i) => {
    const deleteVal = [...val];
    deleteVal.splice(i, 1);
    setVal(deleteVal);
  };

  const handleSubmit = async () => {
    if (!val) return;
    try {
      // val(eventData?.collaborators);
      await axios.put(`/api/event/${params.event}`, { collaborators: val });
    } catch (err) {
      alert(err.response.data.message);
    }
  };
  return (
    <>
      <div className="flex justify-center items-center flex-col ">
        <div>
          <Link href={"/" + params.event + "/scanner"}>
            <button
              type="button"
              className="mt-3 text-3xl text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg px-5 py-2.5 text-center mr-2 mb-2"
              // onClick={() => handleAdd()}
            >
              <div className="flex gap-2 items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                  />
                </svg>
                <span>Scanner</span>
              </div>
            </button>
          </Link>
        </div>
        <div className="mt-10 w-9/12 mb-8">
          <h1 className="text-3xl font-bold">{params.event}</h1>
          <h3 className="text-2xl font-light text-gray-600 mt-2">
            Creator: {eventData?.creator?.name}
          </h3>
          {/* <h3 className="text-2xl font-light text-gray-600 mt-2">
            Registered member: 173
          </h3> */}
        </div>

        <h1 className="text-2xl font-bold my-4">Event Collaborators</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {eventData &&
            eventData?.collaborators?.map((email, i) => (
              <p
                key={i}
                className="block max-w-sm p-6  border  rounded-lg shadow  bg-gray-800 border-gray-700 hover:bg-gray-700"
              >
                <span className="mb-2 text-sm font-thing tracking-tight text-white">
                  {email}
                </span>
              </p>
            ))}
        </div>
      </div>
      <div className="flex mx-auto items-center w-full">
        <button
          type="button"
          className="mt-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
          onClick={() => handleAdd()}
        >
          Add Collaborators
        </button>
      </div>
      <div>
        <div className="flex justify-center items-center flex-col-reverse ">
          <div className="flex flex-col items-center sm:w-10/12 lg:w-1/3">
            {val.map((data, i) => {
              return (
                <div key={i} className="flex">
                  <input
                    type="email"
                    //   name="email"
                    id="email"
                    value={data}
                    className="bg-gray-50 mt-2 border-dashed border-2   text-gray-900 sm:text-sm rounded-lg p-2.5  border-gray-600 placeholder-gray-400  focus:ring-blue-500 focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                    onChange={(e) => handleChange(e, i)}
                  />
                  <button
                    className="rounded p-2 bg-gray-50 hover:bg-gray-300 ms-2"
                    onClick={() => handleDelete(i)}
                  >
                    ❌
                  </button>
                </div>
              );
            })}
          </div>
        </div>
        <button
          onClick={handleSubmit}
          type="button"
          className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none  focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
        >
          Save changes
        </button>
      </div>
    </>
  );
}

export default Event;
