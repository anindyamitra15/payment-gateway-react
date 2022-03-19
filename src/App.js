import Navbar from "./Components/Partials/Navbar";
import RouterOutlet from "./Components/RouterOutlet";

function App() {
  return (
    <div>
      <RouterOutlet>
        <Navbar />
      </RouterOutlet>
    </div>
  );
}

export default App;
