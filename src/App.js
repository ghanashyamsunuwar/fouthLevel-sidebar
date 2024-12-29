import "./App.css";
// import Sidebar from "./ui/module/components/Sidebar";
// import { BrowserRouter as Router } from "react-router-dom";


// function App() {
//   return (
//     <Router>
//       <div className="main">
//         <Sidebar />
//       </div>
//     </Router>
//   );
// }

// export default App;
import { RouterProvider } from "react-router-dom";
import { router } from "./common/routing/Router";
// import Sidebar from "./ui/module/components/Sidebar";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      {/* <Sidebar/> */}
    </div>
  );
}

export default App;
