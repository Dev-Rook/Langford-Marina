import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";
import Styles from "../Styles/Component-Styles/Navbar.module.scss";

// import ClubFlag from "../../Assets/Images/ClubFlag.jpeg";

import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import BrightnessMediumIcon from "@mui/icons-material/BrightnessMedium";

import Hamburger from "hamburger-react";
import ListGroup from 'react-bootstrap/ListGroup';

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const [isOpen, setOpen] = useState(false);
  const { scrollUp } = useScrollUp();

  const showMenu = () => {
    setMenu((prev) => !prev);
    console.log("Working menu");
  };

  // const scrollUp = () => {
  //   window.scrollTo({
  //     top: 0,
  //     behavior: "smooth",
  //   });
  // };

  function handleClick(event) {
    event.preventDefault();
    console.info("You clicked a breadcrumb.");
  }

  const doubleFunction = () => {
    showMenu();
    scrollUp();
    handleClick();
  };

  return (
    <nav className={Styles.Navbar}>
      <div className={Styles.Left_Side}>
        <img src={""} alt="" className={Styles.Logo} />

        <div className={Styles.Navlink_Container}>
          <Link to={"/"} onClick={scrollUp} className={Styles.Navlink}>
            Home
          </Link>
          <Link to={"About"} onClick={scrollUp} className={Styles.Navlink}>
            About
          </Link>
          <Link to={"Projects"} onClick={scrollUp} className={Styles.Navlink}>
            Projects
          </Link>
          <Link to={"captains license"} onClick={scrollUp} className={Styles.Navlink}>
          Captain's License
          </Link>
          <Link to={"Contact"} onClick={scrollUp} className={Styles.Navlink}>
            Contact
          </Link>
        </div>
      </div>

      <div className={Styles.Right_Side}>
        <div className={Styles.Social_Icon_Tray}>
          <TwitterIcon sx={{ color: "white" }} />
          <YouTubeIcon sx={{ color: "white" }} />
          <InstagramIcon sx={{ color: "white" }} />
        </div>
        |
        <BrightnessMediumIcon sx={{ color: "white" }} />
        <span className={Styles.Span}>
          <Hamburger
            className={Styles.HamburgerMenu}
            onToggle={setMenu}
            direction="right"
            color="white"
            duration={0.5}
            size={35}
          />
        </span>
      </div>

      {/* Mobile Menu Start  */}
      <div className={`${Styles.Mobile_Menu} ${menu ? Styles.Reveal : ""}`}>
        <ListGroup className={Styles.ListGroup}>
          <Link onClick={doubleFunction} className={Styles.Navlink} to={"/"}>
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <HomeIcon sx={{ color: "White", fontSize: 25 }} /> */}
              Home
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"about"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              About
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"projects"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>

              projects
            </ListGroup.Item>
          </Link>

          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"captains license"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              Captain's License
            </ListGroup.Item>
          </Link>
          <Link
            onClick={doubleFunction}
            className={Styles.Navlink}
            to={"contact"}
          >
            <ListGroup.Item className={Styles.ListGroupItem}>
              {/* <CallIcon sx={{ color: "white", fontSize: 25 }} /> */}
              Contact
            </ListGroup.Item>
          </Link>
        </ListGroup>
      </div>
      {/* Mobile Menu End */}
    </nav>
  );
};

export default Navbar;
