import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/home";
import Pricing from "@/pages/pricing";
import Contact from "@/pages/contact";
import DiminishedValue from "@/pages/services/diminished-value";
import LossOfUse from "@/pages/services/loss-of-use";
import Bundle from "@/pages/services/bundle";
import PrePurchase from "@/pages/services/pre-purchase";
import SampleReport from "@/pages/sample-report";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/contact" component={Contact} />
      <Route path="/services/diminished-value" component={DiminishedValue} />
      <Route path="/services/loss-of-use" component={LossOfUse} />
      <Route path="/services/bundle" component={Bundle} />
      <Route path="/services/pre-purchase" component={PrePurchase} />
      <Route path="/sample-report" component={SampleReport} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
