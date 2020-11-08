import "./App.css";
import Header from "../../header/Header";
import $ from "jquery"


function App() {


  window.onload = function(){
    var button = document.getElementById("drop-down");
    var text_div = document.getElementById("text-div");
    var login_register_div = document.getElementById("login-register-div");
    var button_two = document.getElementById("drop-down-two");

    button.onclick = function () {
      window.scrollTo(0, window.innerHeight);
    };
  
    button_two.onclick = function () {
      window.scrollTo(0, window.innerHeight * 2);
    };
  
    document.onscroll = function () {
      var height = document.documentElement.scrollTop;
      var max_height = window.innerHeight;
  
      if (height === max_height) {
        text_div.style.opacity = 1;
      } else {
        text_div.style.opacity = 0.4 - (max_height - height * 1.4) / max_height;
      }
  
      if (height > max_height - 1 && height < max_height * 2) {
        $("li").css("color", "black");
      } else {
        $("li").css("color", "white");
      }
      if (height > max_height * 2) {
        $("li").css("color", "black");
      }
      if (height === max_height * 2) {
        login_register_div.style.opacity = 1;
      } else {
        login_register_div.style.opacity =
          0.1 - (max_height * 2 - height * 1.4) / (max_height * 2);
      }
    };
  }
  return (
    <div className="app-div">
      <div className="background-image">
        <div className="login-page">
          <Header />
          <div className="content">
            <div className="big-logo">
              <h1>PROGRESS</h1>
            </div>
            <div className="button-logo">
              <button id="drop-down">DISCOVER</button>
            </div>
          </div>
        </div>
      </div>
      <div className="who-we-are">
        <div className="text-container" id="text-div">
          <h1>What is Progress?</h1>
          <p>
            Progress is a school software that aims to motivate and organize
            students interactively. In order to make progress in your academic
            performance
          </p>
          <button id="drop-down-two">JOIN COMMUNITY</button>
        </div>
      </div>
      <div className="login-register">
        <div className="login-register-text" id="login-register-div">
          <h1>Join our community and start getting results today</h1>
          <a href="/register">REGISTER</a>
        </div>
      </div>
    </div>
  );
}

export default App;
