import Main from "./component/main";


import "./index.css";

function App() {
  return (
    <div>
     
      <div className="grid grid-cols-3 gap-2 gap-x-2 gap-y-3 ">
        
        <div className="border-slate-400 rounded-lg shadow-xl  col-span-3 md:col-span-2 ">
          <Main />
        </div>
      </div>
      
    </div>
  );
}

export default App;
