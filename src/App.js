import { Home } from "./pages";

import Aos from "aos";
import 'aos/dist/aos.css';

function App() {
  // Initial Aos animation scroll
  Aos.init({
    duration: 300,
  });

  return (
    <Home />
  );
}

export default App;
