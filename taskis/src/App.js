import { Nav } from "./components/Nav";
import { Search } from "./components/Search";
import { Home } from "./routes/Home";
import { Info } from "./routes/Info";
import { Settings } from "./routes/Settings";
import { Missing } from "./routes/Missing";
import { EditTask } from "./components/EditTask";
import "./styles/App.css";
import DataProvider from "./context/DataContext";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DataProvider>
      <Router>
        <div className="App__Container">
          <Nav />
          <main className="Dashboard__Wrapper">
            <Routes>
              <Route path="/" element={<Home />}>
                <Route path="/:id" element={<EditTask />} />
                <Route path="search" element={<Search />} />
              </Route>
              <Route path="info" element={<Info />} />
              <Route path="settings" element={<Settings />} />
              <Route path="*" element={<Missing />} />
            </Routes>
          </main>
        </div>
      </Router>
    </DataProvider>
  );
}

export default App;
