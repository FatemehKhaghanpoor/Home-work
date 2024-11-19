import Main from "./component/main";
import Header from "./component/header";
import Footer from "./component/footer";
import SideBar from "./component/sideBar";
import "./index.css";

function App() {
  return (
    <div>
      <div className="bg-orange-900 border-slate-400 rounded-lg shadow-xl h-32 w-full mb-4">
        <Header />
      </div>
      <div className="grid grid-cols-3 gap-2 gap-x-2 gap-y-3 ">
        <div className=" order-last border-slate-400 rounded-lg shadow-xl min-h-screen col-span-3 md:order-first lg:order-first md:col-span-1">
          <SideBar />
        </div>
        <div className="border-slate-400 rounded-lg shadow-xl  col-span-3 md:col-span-2 ">
          <Main />
        </div>
      </div>
      <div className="bg-orange-900 rounded-lg shadow-xl h-2 w-full">
        <Footer />
      </div>
    </div>
  );
}

export default App;
