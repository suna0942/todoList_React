import ShowCalendar from "./components/ShowCalendar";
import TodoList from "./components/TodoList";
import GlobalStyle from "./components/GlobalStyle";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <GlobalStyle />
      <Layout>
        <ShowCalendar />
        <TodoList />
      </Layout>
    </>
  );
}

export default App;
