import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
  return (
    <div className="w-screen bg-web-black m-auto flex h-[100px]  justify-evenly items-center">
      <div className="flex justify-center items-center gap-4">
        <a className="text-web-white font-DM font-bold underline" href="#">
          Privacy Policy
        </a>
        <a className="text-web-white font-DM font-bold underline" href="#">
          Terms and Conditions
        </a>
      </div>
      <h1 className="text-web-white font-DM font-bold underline"> 
        2024 Lazor Sports. All Rights Reserved.
      </h1>
      <FontAwesomeIcon icon="fa-brands fa-linkedin" />
    </div>
  );
};

export default Footer;
