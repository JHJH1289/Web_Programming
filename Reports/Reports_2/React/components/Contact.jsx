import React from "react";
import instagramIMG from '../assets/instagram.png'
import gitnubIMG from '../assets/github.png'
const Contact = () => (
    <section>
      <h2>Contact</h2>
      <div className="sns">
        <p>TEL : 010-8763-1289</p>
        <p>E-mail : wogns4631298@gmail.com</p>
        <a href="https://github.com/JHJH1289">
          <img className="sns-img" src={gitnubIMG} alt="GitHub" />
        </a>
        <a href="https://www.instagram.com/jhjh_0406">
          <img className="sns-img" src={instagramIMG} alt="Instagram" />
        </a>
      </div>
    </section>
  );

  export default Contact;