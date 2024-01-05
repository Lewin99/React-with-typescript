import React from "react";
import "./Styles/footer.css";

const Footer: React.FC<{}> = () => {
  return (
    <div className="container-fluid footer">
      <p className="footerText text-light">
        &copy; 2023 Lewin99. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
