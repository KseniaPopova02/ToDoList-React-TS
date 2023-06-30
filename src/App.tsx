import { tasks } from "./mockedData";
import { TodoList } from "./modules";

function App() {
  return <TodoList title={"What to learn"} tasks={tasks} />;
}

export default App;
