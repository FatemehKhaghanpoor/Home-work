import Main from "./component/main";
import Header from "./component/header";
import Footer from "./component/footer";
import SideBar from "./component/sideBar";
import "./index.css";

function App() {
  return (
    <div>
      <div className="bg-slate-500 border-slate-400 rounded-lg shadow-xl h-32 w-full mb-4">
        <Header />
      </div>
      <div className=" ">
        
        <div className=" bg-slate-500 border-slate-400 rounded-lg shadow-xl   ">
          <Main />
        </div>
      </div>
      <div className="bg-slate-500 rounded-lg shadow-xl h-2 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
