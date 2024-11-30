import ToDoWrapper from "./component/todoWrapper";
import "./index.css";
import ThemeProvider from "./context/theme-provider";
import Header from "./component/header";

function App() {
  return (
    <div >
      
     
      <ThemeProvider>
        <Header/>
        <ToDoWrapper />
      </ThemeProvider>
    </div>
  );
}

export default App;
