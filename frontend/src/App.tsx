import NavBar from "components/Navbar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChart";
import DonutChart from "components/DonutChart";
import ReactGA from "react-ga";

function App() {
  ReactGA.initialize("G-14MQ1M8WEK");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dashbord de Vendas!</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de Sucesso Vendas(%)
            </h5>
            <BarChart />
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de Sucesso Vendas
            </h5>
            <DonutChart />
          </div>
        </div>
        <div className="py-3">
          <h2 className="text-primary"> Todas as vendas</h2>
        </div>

        <DataTable />
      </div>
      <Footer />
    </>
  );
}

export default App;
