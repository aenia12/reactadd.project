import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <strong>Dictionary</strong>
        </header>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            This project is coded by{" "}
            <a
              href="https://www.shecodes.io/graduates/77665-aenia-amin"
              target="_blank"
              rel="noopener noreferrer"
            >
              Aenia Amin
            </a>{" "}
            and is hosted on{" "}
            <a
              href="https://github.com/aenia12/reactadd.project"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub{" "}
            </a>
            and{" "}
            <a
              href="https://fanciful-brigadeiros-5ccd44.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Netlify.
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
