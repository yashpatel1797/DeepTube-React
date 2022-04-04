import { Navbar, Footer } from './components'
import { ScrollToTop } from "utilities";
import { routes } from "config";
import { useRoutes } from "react-router-dom"
import "./App.css";
function App() {
  const routeElement = useRoutes(routes)
  return (
    <>
      <ScrollToTop />
      <div className="App">
        <Navbar />
        {routeElement}
      </div>
      <Footer />
    </>
  );
}

export default App;
