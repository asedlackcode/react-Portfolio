import React from "react";

function Projects() {
  return (
    <div
      className="container"
      style={{
        marginTop: "50px",
        border: "grey solid thin",
        borderRadius: "5px",
        padding: "10px",
      }}
    >
      <h3>My Projects</h3>
      <hr />
      <div className="card-group">
        <div className="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Weather App</h5>
            <p className="card-text">
              Wondering the weather in your city right now? Or the next five
              days? Use this app! Easy. Simple. Forcast.
            </p>
            <hr />
            <a
              className="card-text"
              href="https://asedlackcode.github.io/weatherapp/"
            >
              <small>View App </small>
            </a>
            <a
              className="card-text"
              href="https://github.com/asedlackcode/weatherapp"
            >
              <small>Github Repo</small>
            </a>
          </div>
        </div>
        <div className="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Daily Planner</h5>
            <p className="card-text">
              Need to keep track of the day hour by hour? This app is perfect
              for you. Easily save your daily tasks with a click of a button.
            </p>
            <hr />
            <a
              className="card-text"
              href="https://asedlackcode.github.io/dailyplanner/"
            >
              <small>View App </small>
            </a>
            <a
              className="card-text"
              href="https://github.com/asedlackcode/dailyplanner"
            >
              <small>Github Repo</small>
            </a>
          </div>
        </div>
        <div className="card">
          {/* <img src="..." class="card-img-top" alt="..."> */}
          <div className="card-body">
            <h5 className="card-title">Password Generator</h5>
            <p className="card-text">
              A cool little app if you need to come up with a complex password.
              Filter through different options for a stronger password.
            </p>
            <hr />
            <a
              className="card-text"
              href="https://asedlackcode.github.io/passwordGenerator/"
            >
              <small>View App </small>
            </a>
            <a
              className="card-text"
              href="https://github.com/asedlackcode/passwordGenerator"
            >
              <small>Github Repo</small>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
