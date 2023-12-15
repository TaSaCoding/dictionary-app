import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <Dictionary defaultKeyword="Sunshine" />
        </main>
        <footer className="text-center">
          Coded by Tanja Sauer, open soureced on{" "}
          <a
            href="https://github.com/TaSaCoding/dictionary-app.git"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          , hosted on{" "}
          <a
            href="https://tsd-dictionary-app.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
        </footer>
      </div>
    </div>
  );
}
