import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import { FaFacebookF, FaYoutube, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>&copy; All Rights Reserved By DRON,BRAHMJOT AND SATKIRAT.</div>
      <div>
        
        <Link to={"https://www.youtube.com/@dronaagnihotri621"} target="_blank">
          <FaYoutube />
        </Link>
       
        <Link to={"https://www.instagram.com/drona_agnihotri/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
