import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import copy from "copy-to-clipboard";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from "@fortawesome/free-solid-svg-icons";

const root = ReactDOM.createRoot(document.getElementById("root"));
function Pass() {
  const [pass, setpass] = React.useState("");
  const [length, setl] = React.useState(8);
  const [cap, setcap] = React.useState(false);
  const [small, sets] = React.useState(false);
  const [spec, setspec] = React.useState(false);
  const [no, setno] = React.useState(false);
  // const [copyp, setcopy] = React.useState("");
  console.log(length);
  // function handleclick(e) {
  //   setcopy(e.target.value);
  // }
  function GeneratePassword() {
    let set = "",
      random = "";
    if (!cap && !small && !no && !spec) {
      alert("Check");
    }
    if (cap) {
      set += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (small) {
      set += "abcdefghijklmnopqrstuvwxyz";
    }
    if (no) {
      set += "0123456789";
    }
    if (spec) {
      set += "!@#$%^&*";
    }
    if (length > 30) {
      alert("Max length is 32!");
    } else {
      for (let i = 0; i < length; i++) {
        random += set.charAt(Math.floor(Math.random() * set.length));
      }
    }

    setpass(random);
  }
  return (
    <div className="container">
      <div className="box">
        <br />
        <h2>Password Generator</h2>
        <input
          type="text"
          className="pass-gen"
          // onClick={handleclick}
          value={pass}
          readOnly
        />
        <button className="copypass" onClick={()=>copy(pass)}>
          <FontAwesomeIcon icon={faCopy} />
        </button>
        <br />
        <br />
        <div className="conditions">
          <div className="len-cond">
            <span className="length">Length</span> &emsp; &emsp;{" "}
            <input
              type="number"
              min="8"
              max="30"
              className="length-no"
              value={length}
              onChange={(e) => setl(e.target.value)}
            />
          </div>
          <br />
          <div className="cap-cond">
            <label>
              <span className="capital">A-Z</span> &emsp;&emsp;&emsp;&emsp;
              <input
                type="checkbox"
                className="cap-check"
                id="cap"
                onChange={() => setcap((prev) => !prev)}
              />
            </label>
          </div>
          <br />
          <div className="small-cond">
            <label>
              <span className="small">a-z</span> &emsp;&emsp;&emsp;&emsp;&ensp;{" "}
              <input
                type="checkbox"
                className="small-check"
                onChange={() => sets((prev) => !prev)}
              />
            </label>
          </div>
          <br />
          <div className="nos-cond">
            <label>
              <span className="nos">0-9</span> &emsp;&emsp;&emsp;&emsp;&ensp;{" "}
              <input
                type="checkbox"
                className="no-check"
                onChange={() => setno((prev) => !prev)}
              />
            </label>
          </div>
          <br />
          <div className="spec-cond">
            <label>
              <span className="spec">!@#$%^&*</span> &emsp;{" "}
              <input
                type="checkbox"
                className="spec-check"
                onChange={() => setspec((prev) => !prev)}
              />
            </label>
          </div>
          <br />
        </div>
        <br />
        <button className="gen" onClick={GeneratePassword}>
          Generate Password
        </button>
      </div>
    </div>
  );
}
root.render(<Pass />);
