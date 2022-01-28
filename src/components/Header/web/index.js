import "./web.css";

function Web() {
  return (
    <div className="web">
      <div className="web-link">
        <a href="#hero">
          <i class="fi fi-rr-home link-icon"></i>Home
        </a>
      </div>

      <div className="web-link">
        <a href="#about">
          <i class="fi fi-rr-info link-icon"></i>About
        </a>
      </div>

      <div className="web-link">
        <a href="#skills">
          <i class="fi fi-rr-list-check link-icon"></i>Skills
        </a>
      </div>

      <div className="web-link">
        <a href="#projects">
          <i class="fi fi-rr-copy-alt link-icon"></i>Projects
        </a>
      </div>

      <div className="web-link">
        <a href="#contact">
          <i class="fi fi-rr-user link-icon"></i>Contact
        </a>
      </div>
    </div>
  );
}

export default Web;
