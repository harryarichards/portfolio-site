import React from "react";
import "./profile.css"

const Profile = () => {
  return (
    <header>
      <div id="profile">
        <img
          src="images/profile.jpeg"
          height="400"
          alt=""
        />
        <h1>HARRY ALEXANDER RICHARDS</h1>
        <ul
          id="profile-buttons"
          class="flex center"
        >
          <li>
            <a href="https://www.linkedin.com/in/harry-richards-aa80b8136/">
              <i class="fa-brands fa-linkedin-in"></i>
            </a>
          </li>
          <li>
            <a href="https://github.com/harryarichards">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>
        </ul>
        <p>
          I'm Harry Richards, a <b>Software Developer</b> and <b>Data Scientist</b>. I have experience programming in multiple
          languages, across a number of technology stacks. The purpose of this
          site is to showcase projects I've worked on, and different
          technologies I've used.
        </p>
      </div>
    </header>
  );
};

export default Profile;
