import React from "react";
import { makeStyles } from "@material-ui/core";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  text: {
    marginBottom: "16px",
    color: "#fff",
    fontFamily: "Nunito",
    fontSize: "2rem",
  },
  root: {
    Height: "100vh",
    display: "flex",
    maxWidth: "1000px",
    justifyContent: "space-between",
    margin: "40px auto 0 auto",
    alignItems: "center",
  },
  social:{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      width: "240px",
  },
  link:{
      color: "#fff",
      justifySelf: "start",
      cursor: "pointer",
      textDecoration: "none",
      fontSize: "2rem",
      alignItems: "center",
      marginBottom: "16px",
  }
}));

const Footer = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h4 className={classes.text}>MyIsland&copy;</h4>
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
