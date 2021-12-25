import Todo from "./compan/Todo";
import "./App.css";
import axios from "axios";

function App() {
  const getData = () => {
    axios
      .get("localhost:3000/f5rcbh/complete?isCompleted=true")
      .then((Response) => {
        console.log("Data", Response.data);
      })
      .catch((err) => {
        console.log("error", err);
      });
  };
  return (
    <div className="App">
      <h1>app</h1>
      <button onClick={getData}>get Tasks</button>
    </div>
  );
}

export default App;
