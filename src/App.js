import { Navbar, Footer, Toast } from './components'
import { ScrollToTop } from "utilities";
import { routes } from "config";
import { useRoutes } from "react-router-dom"
import "./App.css";
function App() {
  const routeElement = useRoutes(routes)
  return (
    <>
      <ScrollToTop />
      <Toast />
      <div className="App">
        <Navbar />
        {routeElement}
      </div>
      <Footer />
    </>
  );
}

export default App;
