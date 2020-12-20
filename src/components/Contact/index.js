import React, { useState, useRef } from "react";
import { Overlay } from "react-bootstrap";
require("./script.css");

const Contact = () => {
  const [phone, setPhone] = useState(false);
  const [email, setEmail] = useState(false);

  const target = useRef(null);
  const newTarget = useRef(null);
  return (
    <div className="contact-section">
      <div className="container">
      <h1 className="section-head"> Get in Touch! </h1>
        <div className="row">
          <div className="col-md-4">
            <i
              class="fas fa-mobile-alt contactIcon"
              ref={target}
              onClick={() => setPhone(!phone)}
            ></i>
            <Overlay target={target.current} show={phone} placement="right">
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  className="phoneNumber"
                  {...props}
                  style={{
                    backgroundColor: "#45a29e",
                    padding: "2px 10px",
                    color: "white",
                    marginLeft: "40px",
                    borderRadius: 6,
                    ...props.style,
                  }}
                >
                  Cell: (678)-799-5090
                </div>
              )}
            </Overlay>
          </div>
          <div className="col-md-4">
            <i
              class="fas fa-envelope-open-text contactIcon"
              ref={newTarget}
              onClick={() => setEmail(!email)}
            ></i>
            <Overlay target={newTarget.current} show={email} placement="right">
              {({ placement, arrowProps, show: _show, popper, ...props }) => (
                <div
                  className="email"
                  {...props}
                  style={{
                    backgroundColor: "#45a29e",
                    padding: "2px 10px",
                    color: "white",
                    marginLeft: "10px",
                    borderRadius: 6,
                    ...props.style,
                  }}
                >
                  Email: Longhuynh741@yahoo.com
                </div>
              )}
            </Overlay>
          </div>
          <div className="col-md-4">
            <a
              href="https://drive.google.com/file/d/1rSD9Hkdxe-AjXItgXfxeYAQWBca-2z4r/view?usp=sharing"
              target="blank"
            >
              <i class="fas fa-file-pdf contactIcon">
                <h4>Resume </h4>
              </i>
            </a>
          </div>
        </div>
        <div className="row">
          <div className="col-md-4">
            <a href="https://www.linkedin.com/in/long-huynh-299498193/" target="blank">
              <i class="fab fa-linkedin social"></i>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://github.com/Longhuynh741" target="blank">
              <i class="fab fa-github social"></i>
            </a>
          </div>
          <div className="col-md-4">
            <a href="https://www.facebook.com/long.huynh.56" target="blank">
              <i class="fab fa-facebook social"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
