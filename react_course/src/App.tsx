import "./App.css"
import "./components/Header"
import Header from "./components/Header";
import Posts from "./components/Posts";


function App() {
  return ( 
    <div className="app">
      <Header/>
      <main className=  "main block">
        <Posts/>
      </main>
    </div>
  );
}

export default App;