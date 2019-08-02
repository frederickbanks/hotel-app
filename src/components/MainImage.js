import React from "react";

function MainImage({ children, main }) {
  return <header className={main}>{children}</header>;
}

MainImage.defaultProps = {
  main: "defaultMain"
};

export default MainImage;
