import ReactGA from "react-ga";
import Routes from "Routes";

function App() {
  ReactGA.initialize("G-14MQ1M8WEK");
  ReactGA.pageview(window.location.pathname + window.location.search);

  return (
    <Routes />
  );
}

export default App;
