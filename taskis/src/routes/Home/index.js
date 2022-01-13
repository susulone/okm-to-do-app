import { useContext } from "react";
import { DataContext } from "../../context/DataContext";
import { Outlet } from "react-router-dom";
import { CurrentTasks } from "../../components/CurrentTasks";
import "./Home.css";

export const Home = () => {
  const { tasks, isLoading, fetchError } = useContext(DataContext);
  return (
    <>
      <Outlet />
      <header className="Main__Header">
        <h1 className="Main__Header__Title">Current Tasks</h1>
      </header>
      {isLoading && <p className="StatusMessage">Loading tasks...</p>}
      {!isLoading && fetchError && (
        <p className="StatusMessage Error">{fetchError}</p>
      )}
      {!isLoading &&
        !fetchError &&
        (tasks.length ? (
          <CurrentTasks />
        ) : (
          <p className="StatusMessage">All done!</p>
        ))}
    </>
  );
};
