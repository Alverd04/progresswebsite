import "./About.css";
import Header from "../../header/Header";
import $ from "jquery";

function About() {
  window.onload = function () {
    var button = document.getElementById("drop-down");

    button.onclick = function () {
      window.scrollTo(0, window.innerHeight);
    };
  };

  return (
    <div className="about">
      <Header />
      <div className="content">
        <div className="progress">
          <div className="progress-content">
            <h1>WHO WE ARE?</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Exercitationem magnam ex consequatur eligendi, temporibus iure
              itaque odit? Harum, enim. Error optio praesentium nostrum eius
              architecto atque iusto dicta iure a?
            </p>
            <button id="drop-down">DISCOVER US</button>
          </div>
        </div>
        <div className="founders">
          <div className="founders-div">
            <div className="albert-g">
              <div className="albert-g-no-hover">
                <h1>ALBERT GONZALEZ</h1>
              </div>
              <div className="albert-g-hover">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, atque. Mollitia illum ea vero aperiam excepturi
                  temporibus debitis voluptatibus, repudiandae odit qui quod
                  nulla molestias doloribus assumenda, tempora soluta vitae?
                </p>
              </div>
            </div>
            <div className="albert-f">
              <div className="albert-f-no-hover">
                <h1>ALBERT FONT</h1>
              </div>
              <div className="albert-f-hover">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, atque. Mollitia illum ea vero aperiam excepturi
                  temporibus debitis voluptatibus, repudiandae odit qui quod
                  nulla molestias doloribus assumenda, tempora soluta vitae?
                </p>
              </div>
            </div>
            <div className="pol-r">
              <div className="pol-r-no-hover">
                <h1>POL RODRIGUEZ</h1>
              </div>
              <div className="pol-r-hover">
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corrupti, atque. Mollitia illum ea vero aperiam excepturi
                  temporibus debitis voluptatibus, repudiandae odit qui quod
                  nulla molestias doloribus assumenda, tempora soluta vitae?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
