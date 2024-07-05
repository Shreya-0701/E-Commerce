import React from "react";

const Home = () => {
  return (
    <>
      <div className="hero border-1 pb-3">
        <div className="card bg-dark text-white border-0 mx-3">
          <img
            className="card-img img-fluid"
            src="./assets/kudi.jpeg"
            alt="Card"
            height={500}
          />
          <div className="card-img-overlay d-flex align-items-center">
            <div className="container">
              <h3 className="card-title fs-1 text" style={{ color: "black", fontWeight: "400"}}>DROPPING SOON</h3>
              <p className="card-text fs-3 d-none d-sm-block " style= {{ color: "black" }}>
              "BOHO BLISS" 🪞🧵🍃 Collection coming this week!
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
