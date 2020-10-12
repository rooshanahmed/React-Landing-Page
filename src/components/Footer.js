import React from "react";
import { makeStyles } from "@material-ui/core";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "2rem",
    // marginBottom: "16px",
  },
  root: {
    display: "flex",
    maxWidth: "1000px",
    justifyContent: "space-between",
    margin: "40px auto 0 auto",
    alignItems: "center",
  },
  social: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    width: "240px",
    marginBottom: "16px",
  },
  link: {
    color: "#fff",
    justifySelf: "start",
    cursor: "pointer",
    textDecoration: "none",
    fontSize: "2rem",
    alignItems: "center",
  },
  colorText: {
    color: "#5aff3d",
  },
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.text}>
        My<span className={classes.colorText}>Island</span>&copy;
      </h4>
      <div className={classes.social}>
        <Link to="/" className={classes.link}>
          <FaFacebook />
        </Link>
        <Link to="/" className={classes.link}>
          <FaInstagram />
        </Link>
        <Link to="/" className={classes.link}>
          <FaGithub />
        </Link>
        <Link to="/" className={classes.link}>
          <FaLinkedin />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
