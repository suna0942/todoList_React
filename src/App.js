import Calendar from "./components/Calendar";
import TodoList from "./components/TodoList";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <Calendar />
        <TodoList />
      </Layout>
    </>
  );
}

export default App;
