import { useEffect, useState } from "preact/hooks";
import { render } from "preact";
import { Route, Router, route, useRouter } from "preact-router";
import App from "./app";
import LoginPage from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./index.css";
import Sidebar from "./components/sidebar";
import Travellar from "./pages/travellar";
import { Toaster } from "react-hot-toast";
import Driver from "./pages/driver";

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
  }, [router.path]);
  return (
    <div
      className={`flex flex-row w-[100%] ${
        isAuthPages ? "justify-center" : ""
      }`}
    >
      {isAuthPages ? null : <Sidebar />}
      <div
        className={
           "flex items-center justify-center p-5 w-full bg-gray-100 dark:bg-gray-500 h-screen" 
        }
      >
        <Toaster/>
        <Router>
          <Route path="/" component={App} />
          <Route path="/login" component={LoginPage} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/forgot-password" component={LoginPage} />
          <Route path="/travellars" component={Travellar} />
          <Route path="/driver" component={Driver} />
        </Router>
      </div>
    </div>
  );
};

render(<Main />, document.getElementById("app"));
