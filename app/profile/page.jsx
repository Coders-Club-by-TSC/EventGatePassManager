"use client";
import React, { useState } from "react";
import "../profile/profile.scss";
import Navbar from "@/Components/Navbar";
// import { Button } from "@nextui-org/react";
const ProfilePage = () => {
  const [isActive, setIsActive] = useState(false);

  function handleClick() {
    setIsActive(!isActive);
  }
  return (
    <>
      <Navbar />
      <div class="contact-area">
        <div class="contact">
          <main>
            <section>
              <div class="content">
                <img
                  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/256492/_mLIxaKY_400x400.jpg"
                  alt="Profile Image"
                />

                <aside>
                  <h1>Mohammad Shakir</h1>
                  <p>Hi, I'm Shakir and I'm a Final Year Student.</p>
                </aside>

                {/* <a href="/create" className="arrow-1">
                  <i class="EventAdd">Create Event</i>
                </a> */}
                <Button color="primary" variant="shadow">
                  Create 
                </Button>
              </div>
              <button onClick={handleClick}>
                <span>View Events</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 48 48"
                >
                  {" "}
                  <g class="nc-icon-wrapper" fill="#444444">
                    {" "}
                    <path d="M14.83 30.83L24 21.66l9.17 9.17L36 28 24 16 12 28z"></path>{" "}
                  </g>{" "}
                </svg>
              </button>

              <div className={isActive ? "title active" : "title"}>
                <p></p>
              </div>
            </section>
          </main>

          <nav className={isActive ? "nav active" : "nav"}>
            <a href="/create">
              <i class="EventAdd">Event 1</i>
            </a>

            <a href="/collab">
              <i class="Collaborator">Event 2</i>
            </a>

            <a href="/ViewEvent">
              <i class="AllEvent"> Event 3</i>
            </a>
          </nav>
        </div>
      </div>
    </>
  );
};

export default ProfilePage;
