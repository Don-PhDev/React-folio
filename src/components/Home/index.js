import Header from "../Header/index";
import Body from "../Body/index";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <div>
        <Header />
      </div>

      <div>
        <Body />
      </div>
    </div>
  );
}

export default Home;
