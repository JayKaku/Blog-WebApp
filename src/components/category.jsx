import React, { Component } from "react";
import { Link } from "react-router-dom";

import "../category.css";

import pic1 from "../station.jpg";
import pic2 from "../music.jpg";
import pic3 from "../photography.jpg";
import pic4 from "../travel.jpg";
import pic5 from "../fitness.jpg";
import pic6 from "../events.jpg";

class Category extends Component {
  state = {};
  render() {
    return (
      <div className="page">
        <p>CATEGORY</p>
        <div className="b-container">
          <div className="container">
            <div className="polaroid">
              <div className="responsive">
                <Link
                  to={{
                    pathname: "/history",
                    aboutProps: { name: "History" },
                  }}
                >
                  <img src={pic1} alt="history" />
                  <div className="desc">History</div>
                </Link>
              </div>
            </div>
            <div className="polaroid">
              <div className="responsive">
                <Link
                  to={{
                    pathname: "/music",
                    aboutProps: { name: "Music" },
                  }}
                >
                  <img src={pic2} alt="music" />
                  <div className="desc">Music</div>
                </Link>
              </div>
            </div>
            <div className="polaroid">
              <div className="responsive">
                <Link
                  to={{
                    pathname: "/photography",
                    aboutProps: { name: "Photography" },
                  }}
                >
                  <img src={pic3} alt="photography" />
                  <div className="desc">Photography</div>
                </Link>
              </div>
            </div>
            <div className="polaroid">
              <div className="responsive">
                <Link
                  to={{
                    pathname: "/travel",
                    aboutProps: { name: "Travel" },
                  }}
                >
                  <img src={pic4} alt="travel" />
                  <div className="desc">Travel</div>
                </Link>
              </div>
            </div>
            <div className="polaroid">
              <div className="responsive">
                <Link
                  to={{
                    pathname: "/fitness",
                    aboutProps: { name: "Fitness" },
                  }}
                >
                  <img src={pic5} alt="fitness" />
                  <div className="desc">Fitness</div>
                </Link>
              </div>
            </div>
            <div className="polaroid">
              <div className="responsive">
                <Link
                  to={{
                    pathname: "/events",
                    aboutProps: { name: "Events" },
                  }}
                >
                  <img src={pic6} alt="events" />
                  <div className="desc">Events</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Category;
