import { SocialData } from "../../data/social";
import "./socials.css";

function Socials() {
  const data = SocialData;

  return (
    <div className="socials">
      {data.map((item) => {
        return (
          <a
            href={item.link}
            alt={item.platform}
            target="_blank"
            rel="noreferrer noopener"
            className="social-link"
          >
            <div className="social-icon-div">
              <img src={item.icon} className="social-icon" alt={item.title} />
            </div>
          </a>
        );
      })}
    </div>
  );
}

export default Socials;
