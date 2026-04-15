import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import DoctorTutorial from "./pages/DoctorTutorial";
import StaffTutorial from "./pages/StaffTutorial";
import TutorialHub from "./pages/TutorialHub";
import FullFlowTutorial from "./pages/FullFlowTutorial";
import Consultation from "./pages/Consultation";
function Router() {
  // make sure to consider if you need authentication for certain routes
  return (
    <Switch>
      <Route path={"/"} component={Home} />
      <Route path={"/tutorial"} component={TutorialHub} />
      <Route path={"/tutorial/flow"} component={FullFlowTutorial} />
      <Route path={"/tutorial/doctor"} component={DoctorTutorial} />
      <Route path={"/tutorial/staff"} component={StaffTutorial} />
      <Route path={"/consultation"} component={Consultation} />
      <Route path={"/404"} component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />
          <Router />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
