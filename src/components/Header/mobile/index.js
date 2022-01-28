import "./mobile.css";

function Mobile({ isOpen, setIsOpen }) {
  return (
    <div className="mobile">
      <div className="close-icon" onClick={() => setIsOpen(!isOpen)}>
        <i class="fi fi-rr-cross"></i>
      </div>
      <div className="mobile-links">
        <div className="mobile-link">
          <ul>
            <li>
              <i class="fi fi-rr-home link-icon"></i>
            </li>
            <li>
              <a href="#hero">Home</a>
            </li>
          </ul>
        </div>

        <div className="mobile-link">
          <ul>
            <li>
              <i class="fi fi-rr-info link-icon"></i>
            </li>
            <li>
              <a href="#about">About</a>
            </li>
          </ul>
        </div>

        <div className="mobile-link">
          <ul>
            <li>
              <i class="fi fi-rr-list-check link-icon"></i>
            </li>
            <li>
              <a href="#skills">Skills</a>
            </li>
          </ul>
        </div>

        <div className="mobile-link">
          <ul>
            <li>
              <i class="fi fi-rr-copy-alt link-icon"></i>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li>
          </ul>
        </div>

        <div className="mobile-link">
          <ul>
            <li>
              <i class="fi fi-rr-user link-icon"></i>
            </li>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Mobile;
