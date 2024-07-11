// Footer.jsx
import React from "react";
import './Footer.css';

function Footer() {
  return (
    <div className="footer">
      <div className="user">
        <h3>Developer 1</h3>
        <p>
          <strong>Name:</strong> Md Zohaib Haque<br />
          <strong>USN:</strong> 21BCAR0041<br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/zohaibmallick150600/">LinkedIn</a><br />
          <strong>Email:</strong> zohaibmallick62@gmail.com<br />
          <strong>Phone Number:</strong> +91-9903596473<br />
          <strong>GitHub:</strong> <a href="https://github.com/ZohaibMallick">GitHub</a>
        </p>
      </div>
      <div className="user">
        <h3>Guid/Mentor</h3>
        <p>
          <strong>Name:</strong> Mrs. Adlin Jebakumari S<br />
          <strong>Assistant Professor</strong> <br /> Department Of Computer Science and IT
          JAIN deemed to be University
          Bangalore,India
          <br />
          <strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/adlin-jebakumari-540359207/">LinkedIn</a><br />
          <strong>Email:</strong> j.adlin@jainuniversity.ac.in<br />
          <strong>Phone Number:</strong> +91-9686850654<br />
          <strong>Website:</strong> <a href="https://orcid.org/0000-0003-0392-4367">Website</a>
        </p>
      </div>
      <div className="user">
        <h3>References</h3>
        <p>
          <ul>
            <li><a href="https://www.youtube.com/watch?v=1KwaUyjLa4Q">DApp Uviversity</a></li><br />
            <li><a href="https://www.youtube.com/watch?v=KkjAktAA4M4">DApp Uviversity</a></li><br />
            <li><a href="https://www.youtube.com/@CodeEater21">CodeEater21</a></li><br />
            <li><a href="https://ethereum.stackexchange.com/">Ethereum Stack Exchange</a></li><br />
            <li><a href="https://stackoverflow.com/">Stack Overflow</a></li>
          </ul>
        </p>
      </div>
    </div>
  );
}

export default Footer;
