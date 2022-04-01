import { Navbar, Footer } from './components'
import { ScrollToTop } from "utilities";
import { routes } from "config";
import { useRoutes } from "react-router-dom"

function App() {
  const routeElement = useRoutes(routes)
  return (
    <div className="App">
      <ScrollToTop />
      <Navbar />
      {routeElement}
      <Footer />
    </div>
  );
}

export default App;
