import "./App.css";
import { CreateJobFormOne } from "./pages/CreateJobFormOne";
import { CreateJobFormTwo } from "./pages/CreateJobFormTwo";
import { JobDescList } from "./pages/JobDescList";

function App() {
  return (
    <>
      <div className="flex flex-col items-center gap-10 p-2.5">
        <CreateJobFormOne />
        <CreateJobFormTwo />
        <JobDescList />
      </div>
    </>
  );
}

export default App;
