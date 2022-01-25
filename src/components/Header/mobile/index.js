import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-links">
        <div className="mobile-link">
          <a href="#about">
            <i class="fi fi-rr-info link-icon"></i>About
          </a>
        </div>

        <div className="mobile-link">
          <a href="#skills">
            <i class="fi fi-rr-list-check link-icon"></i>Skills
          </a>
        </div>

        <div className="mobile-link">
          <a href="#projects">
            <i class="fi fi-rr-copy-alt link-icon"></i>Projects
          </a>
        </div>

        <div className="mobile-link">
          <a href="#contact">
            <i class="fi fi-rr-user link-icon"></i>Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
