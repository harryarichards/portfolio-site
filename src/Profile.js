import React from "react";
const Profile = () => {
  return (
    <header style={{ "text-align": "center", position: "relative" }}>
      <div style={{ height: "800px", width: "100%" }}></div>
      <div
        style={{
          position: "absolute",
          "max-width": "700px",
          top: "50%",
          right: "50%",
          transform: "translate(50%, -50%)",
        }}
      >
        <img
          src="images/profile.jpeg"
          height="200"
          style={{ "border-radius": "25%" }}
          alt=""
        />
        <h1 style={{'font-weight':'500'}}>HARRY ALEXANDER RICHARDS</h1>
        <ul
          id="profile-buttons"
          class="flex center"
          style={{ "margin-top": "20px", "padding-left": "0" }}
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
        <p style={{ "margin-top": "30px", "line-height": "1.5" }}>
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
