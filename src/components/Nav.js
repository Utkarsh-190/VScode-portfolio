import "./Nav.css";
import logo from "../images/vscode_icon.svg";

function Nav(props) {
  return (
    <>
      <div className="nav">
        <div>
          {/* <span>
            <img className="vs-code-icon" src={logo} alt="vscode logo" />
          </span> */}
          <ul className="tool-box">
            <li className="first-li">
              <img className="vs-code-icon" src={logo} alt="vscode logo" />
            </li>
            <li>File</li>
            <li>Edit</li>
            <li>Selection</li>
            <li>View</li>
            <li>Go</li>
            <li>Run</li>
            <li>Terminal</li>
            <li>Help</li>
          </ul>
        </div>
        <div className="header-text">Utkarsh Tyagi - Visual Studio Code</div>
        <div className="control-buttons">
          <a className="yellow-button" href="#"></a>
          <a className="green-button" href="#"></a>
          <a className="red-button" href="#"></a>
        </div>
      </div>
    </>
  );
}

export default Nav;
