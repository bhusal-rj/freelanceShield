import {Navbar, Footer, Loader, Transactions} from "./components";
function App() {

  return (
      <div className="min-h-screen">
        <div className="gradient-bg-welcome">
            <Navbar/>
        </div>
            <Footer />
            <Transactions />
      </div>
  );
}

export default App
