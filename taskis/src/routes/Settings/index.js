import "./Settings.css";

// Things to implement here
// Darkmode
// Adding a second language option (Finnish)

export const Settings = () => {
  return (
    <main className="Settings__Wrapper">
      <h1 className="Settings__Header">Settings</h1>
      <section className="Settings__Body">
        <h4>Note from the developer:</h4>
        <p>In the future I have plans to keed developing Taskis.</p>
        <p>
          Current plans are to modify the application to support secondary
          language option (Finnish) for the application and also include dark
          mode.
        </p>
      </section>
    </main>
  );
};
