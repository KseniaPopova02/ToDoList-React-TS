import { TodoListApp } from "./TodoListApp";
import { GlobalStyle } from "./styles";
import { Provider } from "react-redux";
import { store } from "./store";

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <TodoListApp />
    </Provider>
  );
}

export default App;
