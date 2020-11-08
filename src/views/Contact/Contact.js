import "./Contact.css";
import Header from "../../header/Header";
import $ from "jquery"

function Contact(){

    window.onload = function(){
        $("#submit").click(function () { 
            alert("done")
            
        });
    }
    return(
        <div className="contact">
            <Header />
            <div className="form">
                <h1>Contact us</h1>
                <form>
                    <label>Name</label><br/>
                    <input></input><br/>
                    <label>Email</label><br/>
                    <input></input><br/>
                    <label>Subject</label><br/>
                    <input id="text-input"></input><br/>
                    <input id="submit" type="submit" value="Submit"></input>
                </form>
            </div>
        </div>
    )
}


export default Contact;