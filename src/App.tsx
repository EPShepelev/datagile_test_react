import { Title } from "./components/Title/Title";
import { List } from "./components/List/List";
import "./index.css";

const App = () => {
  return (
    <div className="container">
      <Title />
      <List />
    </div>
  );
};

export default App;
