import React, { useState, useRef } from "react";
import { Overlay} from "react-bootstrap";
require("./script.css");

const Contact = () => {
    const [phone, setPhone] = useState(false);
    const [email, setEmail] = useState(false);

    const target = useRef(null);
    const newTarget = useRef(null);
  return (
    <div>
      <h1> Get in Touch! </h1>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
        <i class="fas fa-mobile-alt contactIcon"  ref={target} onClick={() => setPhone(!phone)}>
      </i>
      <Overlay target={target.current} show={phone} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div className = "phoneNumber"
            {...props}
            style={{
              backgroundColor: 'red',
                padding: '2px 10px',
                color: 'white',
              marginLeft: '40px',
              borderRadius: 6,
                ...props.style,
            }}
          >
            Cell: (678)-799-5090
          </div>
        )}
      </Overlay>
                  </div>
          <div className="col-md-6">
                      <i class="fas fa-envelope-open-text contactIcon"  ref={newTarget} onClick={() => setEmail(!email)}>
      </i>
      <Overlay target={newTarget.current} show={email} placement="right">
        {({ placement, arrowProps, show: _show, popper, ...props }) => (
          <div className = "email"
            {...props}
            style={{
              backgroundColor: 'red',
                padding: '2px 10px',
                color: 'white',
              marginLeft: '40px',
              borderRadius: 6,
                ...props.style,
            }}
          >
            Email: Longhuynh741@yahoo.com
          </div>
        )}
      </Overlay>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
