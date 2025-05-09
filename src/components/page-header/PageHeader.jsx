import React from "react";

import "./page-header.scss";

<<<<<<< HEAD
import bg from "../../assets/bg.jpg";
=======
<<<<<<< HEAD
import bg from "../../assets/footer-bg.jpg";
=======
import bg from "../../assets/bg.jpg";
>>>>>>> 50736c714a2c80c4d582ba08af8ef2207a35569a
>>>>>>> 93b04b535e836a6c9ad8fe4c097824d3a81126de

const PageHeader = (props) => {
  return (
    <div className="page-header" style={{ backgroundImage: `url(${bg})` }}>
      <h2>{props.children}</h2>
    </div>
  );
};

export default PageHeader;
