import Sample from "./Components/Pages/sample";
import Navbar from "./Components/Partials/Navbar";
import RouterOutlet from "./Components/RouterOutlet";

function App() {
  return (
    <div>
    {/* <Sample/> */}
      <RouterOutlet>
        <Navbar />
      </RouterOutlet>
    </div>
  );
}

export default App;
