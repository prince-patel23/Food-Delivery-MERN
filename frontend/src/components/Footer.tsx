import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";

const Footer = () => {
  return (
    <div className="bg-orange-500 py-10">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center md:items-start">
        <span className="text-3xl text-white font-bold tracking-tight">
          <a
            href="https://www.linkedin.com/in/princeptl"
            className="no-underline"
          >
            MeranEats.com
          </a>
        </span>
        <div className="flex justify-center items-center  space-x-4  ">
          <a href="https://www.linkedin.com/in/princeptl">
            <FaLinkedin size={25} color="#fff" />
          </a>
          <a href="https://github.com/prince-patel23">
            <FaGithub size={25} color="#fff" />
          </a>
          <a href="https://www.instagram.com/_prince_2305/">
            <FaSquareInstagram size={25} color="#fff" />
          </a>
          <a href="https://twitter.com/PrincePate70134">
            <FaSquareXTwitter size={25} color="#fff" />
          </a>
        </div>
        <span className="text-white font-bold tracking-tight flex flex-col md:flex-row gap-4 md:gap-8">
          <span>Privacy Policy</span>
          <span>Terms of service</span>
        </span>
      </div>
    </div>
  );
};

export default Footer;
