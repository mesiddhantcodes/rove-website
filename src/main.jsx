import { useEffect, useState } from "preact/hooks";
import { render } from "preact";
import { Route, Router, route, useRouter } from "preact-router";
import App from "./app";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./index.css";
import Sidebar from "./components/sidebar";
import Travellar from "./pages/users";
import { Toaster } from "react-hot-toast";
import Routes from "./pages/route";
import DashboardLayout from "./DashboardLayout";
import BusForm from "./pages/bus";

const Main = () => {
  const [router, setRouter] = useRouter();

  const [isAuthPages, setIsAuthPages] = useState(
    router.path === "/login" ||
      router.path === "/forgot-password" ||
      router.path === "/"
  );
  useEffect(() => {
    if (
      router.path === "/login" ||
      router.path === "/forgot-password" ||
      router.path === "/"
    ) {
      setIsAuthPages(true);
    } else {
      setIsAuthPages(false);
    }
  }, [router.path,localStorage.getItem("token")]);
  return (
    <div
      className={`flex flex-row w-[100%] ${
        isAuthPages ? "justify-center" : ""
      }`}
    >
      {isAuthPages ? null : <Sidebar />}
      {localStorage.getItem("token") ? (
        <DashboardLayout>
          <Toaster />
          <Router>
            <Route path="/" component={App} />

            <Route path="/dashboard" component={Dashboard} />

            <Route path="/travellers" component={Travellar} />
            <Route path="/driver" component={Travellar} />
            <Route path="/routes" component={Routes} />
            <Route path="/bus" component={BusForm} />
          </Router>
        </DashboardLayout>
      ) : (
        <Router>
          <Route path="/" component={LoginPage} />
          <Route path="/forgot-password" component={LoginPage} />
        </Router>
      )}
    </div>
  );
};

render(<Main />, document.getElementById("app"));
