import "./Header.css"

function Header() {
    return (
      <div className="header" id="navBar">
        <div className="menu">
          <a href="/index"><li>Welcome</li></a>
          <a href="/about"><li>About us</li></a>
          <a href="/contact"><li>Contact</li></a>      
          <a onClick="color" id="login" href="/login"><li><i class="fas fa-sign-in-alt"></i></li></a>    
        </div>

      </div>
    );
  }
  
  export default Header;