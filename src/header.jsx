import React, { useState } from "react";

export const Header = () => {
  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  const [responseMessage, setResponseMessage] = useState("");

  setInterval(() => {
    // const sam  = 'jim';
    try {
    fetch("http://localhost:8080/name.php", {
        method: "POST",
        headers: {
          "Content-Type ": "application/json",
        }, 
        body: JSON.stringify(),
    })
    .then((response) => response.json())
    .then((data) => {
    //   alert(data.app)
        setResponseMessage(data.app);
    })
    .catch((error) => {
        console.log("Error: ", error);
        // alert(error);
    })
   } catch(error) {
    console.log("Error: ", error);
}

      
  }, 500);
    return (
        <div>
            <header>
                <div className="logo"><h2>{ responseMessage }</h2></div>
                <div className="pc-nav">
                <nav>
                    <ul>
                      <li><a href="/">home</a></li>
                      <li><a href="/development">development</a></li>
                      <li><a href="/electrical">Electrician</a></li>
                    </ul>
                  </nav>
                {/* <Router > */}
                  {/* <nav>
                    <ul>
                      <li><Link to="/">home</Link></li>
                      <li><Link to="/development">development</Link></li>
                      <li><Link to="/electrical">Electrician</Link></li>
                    </ul>
                  </nav> */}
                  {/* <Routes>
                    <Route path="/" element={App} />
                    <Route path="/development" element={ "a"} />
                    <Route path="/electrical" element={Webshow} />
                  </Routes>
                </Router> */}
                </div>
                <div className="nav-btn">
                  <a href="/" download="simon_cv.pdf">
                    <button>Download CV</button>
                  </a>
                </div>
            </header>
        </div>
    );
};
export default Header;