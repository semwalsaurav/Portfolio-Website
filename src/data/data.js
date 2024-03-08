
import NetflixGPT from '../assets/projects/NetflixGPT.png'
import Video from '../assets/projects/Video.png'
import Razorpay from '../assets/projects/Razorpay.png'
import Password from '../assets/projects/Password.png'
import Top from '../assets/projects/Top.png'
import Random from '../assets/projects/Random.png'
import Sketch from '../assets/projects/Sketch.png'
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaLinkedinIn,
  } from "react-icons/fa";
export const data=[
    {
        id:1,
        name:"Sketch Board",
        image:Sketch,
        github:"https://github.com/semwalsaurav/SketchBoard",
        live:"https://sketch-board-silk.vercel.app/",
    },
    {
        id:1,
        name:"Video Streaming App",
        image:Video,
        github:"",
        live:"https://video-streaming-app-beryl.vercel.app/",
    },
    {
        id:2,
        name:"NetflixGPT",
        image:NetflixGPT,
        github:"",
        live:"https://netflixgpt-seven.vercel.app/",
    },
    {
        id:3,
        name:"Razorpay",
        image:Razorpay,
        github:"",
        live:"https://merry-crepe-8b2b85.netlify.app/",
    },
    {
        id:4,
        name:"Random gif",
        image:Random,
        github:"",
        live:"https://random-gif-starter-rho.vercel.app/",
    },
    // {
    //     id:5,
    //     name:"Top Course",
    //     image:Top,
    //     github:"",
    //     live:"https://top-course-project-sigma.vercel.app/",
    // },
    {
        id:6,
        name:"Password Generator",
        image:Password,
        github:"",
        live:"https://meek-florentine-09d3b7.netlify.app/",
    },



]
export const SIDE_NAV_DATA=[
    {
        title: "LinkedIn",
        link: "https://www.linkedin.com/in/saurav-semwal-10a3b9184/",
        icon: <FaLinkedin size={30}/>,
        color: "#0077B5"
    },
    {
        title: "Github",
        link: "https://github.com/semwalsaurav",
        icon: <FaGithub size={30}/>,
        color: "#0d1116",
    },
    {
        title: "Email",
        link: "mailto:sauravsemwal8171@gmail.com",
        icon: <HiOutlineMail size={30} />,
        color: "#4285F4"
    },
    {
        title: "Resume",
        link: "https://drive.google.com/file/d/1bhZnRemhDX2n_TJmItvb6BjDxUevjD2f/view?usp=sharing",
        icon: <BsFillPersonLinesFill size={30} />,
        color: "#00b8f5"
    }
]
