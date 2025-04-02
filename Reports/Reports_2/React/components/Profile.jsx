import React from "react";
import ProfileIMG from '../assets/KakaoTalk_20250331_143319920_03.jpg'
const Profile = () => (
  <div>
      <img className="profile" src={ProfileIMG} alt="Profile" />
      <h1>Jeong Jae Hun</h1>
      <p className="title">
        경성대학교<br />
        소프트웨어학과
      </p>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
  </div>
);

export default Profile;