import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Link } from "react-router-dom";
import { IconContext } from "react-icons";
import {
  FiGrid,
  FiInfo,
  FiPlusCircle,
  FiSearch,
  FiSettings,
} from "react-icons/fi";
import { TaskModal } from "../TaskModal";
import Logo from "../../assets/Logo";
import "./Nav.css";

export const Nav = () => {
  const { handleOpenModal } = useContext(DataContext);
  return (
    <IconContext.Provider value={{ className: "Nav__Icons" }}>
      <nav className="Nav">
        <div className="Nav__Wrapper">
          <ul className="Nav__List">
            <Logo className="Nav__Logo" size={56} />
            <Link to="/" className="Nav__Link" tabIndex="0">
              <li className="Nav__Item">
                <FiGrid title="Home" /> <span>Home</span>
              </li>
            </Link>
            <Link
              to="/"
              className="Nav__Link"
              tabIndex="0"
              onClick={handleOpenModal}
            >
              <li className="Nav__Item">
                <FiPlusCircle title="Add Task" /> <span>Add Task</span>
              </li>
            </Link>
            <Link to="/search" className="Nav__Link" tabIndex="0">
              <li className="Nav__Item">
                <FiSearch title="Search" /> <span>Search</span>
              </li>
            </Link>
            <Link to="/info" className="Nav__Link" tabIndex="0">
              <li className="Nav__Item">
                <FiInfo title="Info" /> <span>Info</span>
              </li>
            </Link>
            <Link to="/settings" className="Nav__Link" tabIndex="0">
              <li className="Nav__Item">
                <FiSettings title="Settings" /> <span>Settings</span>
              </li>
            </Link>
          </ul>
        </div>
        <TaskModal />
      </nav>
    </IconContext.Provider>
  );
};
