import React from "react";
import "./Page.css";

const Page = ({
  children,
  backgroundImage,
  padding = "4rem 1rem",
  minHeight = "300px",
  centerVertically = false,
  centerHorizontally = false
}) => {

  const classes = ["page-section"];

  if (centerVertically) classes.push("center-vertical");
  if (centerHorizontally) classes.push("center-horizontal");

  return (
    <section
      className={classes.join(" ")}
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : "none",
        padding,
        minHeight
      }}
    >
      <div className="page-content">
        {children}
      </div>
    </section>
  );
};

export default Page;
