import BottomNavBar from "./components/BottomNavBar/BottomNavBar";
import TopNavBar from "./components/TopNavBar/TopNavBar";
import HomePage from "./components/Body/HomePage/HomePage";
import LeaderBoard from "./components/Body/LeaderBoard/LeaderBoard";
import Task from "./components/Body/Task/Task";
import TaskDetails from "./components/Body/Task Details/TaskDetails";
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>
      <TopNavBar/>
      <HomePage/>
      <BottomNavBar/>
    </div>,
  },
  {
    path: "/leader-board",
    element: <div>
      <TopNavBar/>
      <LeaderBoard/>
      <BottomNavBar/>
    </div>,
  },
  {
    path: "/task",
    element: <div>
      <TopNavBar/>
      <Task/>
      <BottomNavBar/>
    </div>,
  },
  {
    path: "/task-details",
    element: <div>
      <TopNavBar/>
      <TaskDetails/>
      <BottomNavBar/>
    </div>,
  },
]);
function App() {
  return (
    <div className="App">
       <RouterProvider router={router} />
    </div>
  );
}

export default App;
