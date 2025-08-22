import "./style.css";
import Profile from "../../components/Profile";
import Carousel from "../../components/Carousel";

export default function Home() {
  return (
    <div className="grid-container">
      <Profile />
      <div className="section qualifications">
        <div className="content">
          <div className="title">
            <p>Welcome to my portfolio</p>
          </div>
          <div className="description">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla vitae orci egestas tempor. Integer nec est sed lorem
              faucibus posuere. Curabitur sit amet semper ligula. Morbi dictum,
              tortor nec dictum pulvinar, sapien ipsum aliquam eros, ut gravida
              lacus lorem ac massa.
            </p>
          </div>
        </div>
      </div>
      <Carousel />
    </div>
  );
}
