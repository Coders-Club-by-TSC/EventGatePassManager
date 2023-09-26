"use client";
import React, { useState } from "react";
import Image from "next/image";
import { useEffect } from "react";
import axios from "axios";
import Link from "next/link";
const ProfilePage = () => {
  const [profileData, setProfileData] = useState();
  const getProfileData = async () => {
    const { data } = await axios.get(`/api/event`);
    setProfileData(data?.data);
  };
  console.log(profileData);
  useEffect(() => {
    getProfileData();
  });
  const [userData, setUserData] = useState();
  const getUserData = async () => {
    const { data } = await axios.get(`/api/admin`);
    setUserData(data?.data);
  };
  console.log(userData);
  useEffect(() => {
    getUserData();
  });
  return (
    <>
      {/* <!-- component -->
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/styles/tailwind.css">
<link rel="stylesheet" href="https://demos.creative-tim.com/notus-js/assets/vendor/@fortawesome/fontawesome-free/css/all.min.css"> */}

      <section className=" bg-blueGray-50">
        <div className="w-full lg:w-4/12 px-4 mx-auto">
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
            <div className="px-6">
              <div className="flex flex-wrap justify-center">
                <div className="w-full px-4 flex justify-center mt-10">
                  <div className="relative">
                    <Image
                      className="shadow-xl rounded-full -mt-24 align-middle  border-none"
                      src={userData?.picture}
                      alt="Rounded avatar"
                      width={100}
                      height={100}
                    />
                    {/* <Image
                      alt="..."
                      src={HeroGif}
                      className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                    /> */}
                  </div>
                </div>
                <div className="w-full px-4 text-center">
                  <div className="flex justify-center py-4 lg:pt-4 pt-8">
                    {/* <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        15
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Event create
                      </span>
                    </div>
                    <div className="mr-4 p-3 text-center">
                      <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                        10
                      </span>
                      <span className="text-sm text-blueGray-400">
                        Event collabe
                      </span>
                    </div> */}
                  </div>
                </div>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                  {userData?.name}
                </h3>
              </div>
              <div className="text-center mb-10">
                <h3 className="text-xl font-semibold leading-normal text-gray-500 mb-2">
                  {userData?.email}
                </h3>
              </div>
              <Link href="/create">
                <div className="text-center mb-10">
                  <button
                    type="button"
                    class="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-800  font-medium rounded-lg text-sm px-5 py-4 text-center mr-2 mb-2"
                  >
                    Add Event
                  </button>
                </div>
              </Link>
              {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center"></div> */}
            </div>
          </div>
        </div>
      </section>

      <div className="sm:px-5 md:px-5 lg:px-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 sm:gap-4 md:gap-4 lg:gap-2 mb-10">
        {profileData?.map((data) => {
          return (
            <div
              key={data.id}
              className="w-full p-6 bg-white border border-gray-200 rounded-lg shadow"
            >
              <h3 className="mb-5 text-3xl">{data?.name}</h3>

              {data?.creator?.email == userData?.email ? (
                <span class="bg-green-900 text-gray-50 text-sm font-medium mr-2 px-2.5 py-0.5 rounded  ">
                  Creator
                </span>
              ) : (
                <span class="bg-purple-900 text-gray-50 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                  Collaborator
                </span>
              )}

              <p className="mt-5 mb-3 text-xs font-thing text-gray-700">
                {data?.creator?.name}
              </p>

              <p className="mb-3 font-normal text-gray-400 ">
                {data?.collaborators?.map((collaborator) => {
                  return <h4 key={collaborator}>{collaborator}</h4>;
                })}
              </p>
              <Link
                href={"/" + data?.name}
                className="inline-flex items-center text-blue-600 hover:underline"
              >
                Check details
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ProfilePage;
