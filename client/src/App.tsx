import { Switch, Route } from "wouter";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { Navbar } from "./components/layout/navbar";
import Home from "./pages/home";
import Product from "./pages/product";
import Category from "./pages/category";
import About from "./pages/about";
import Team from "./pages/team";
import Contact from "./pages/contact";
import Order from "./pages/order";
import SignatureCollection from "./pages/signature-collection";
import NotFound from "./pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/product/:id" component={Product} />
      <Route path="/category/:name" component={Category} />
      <Route path="/about" component={About} />
      <Route path="/team" component={Team} />
      <Route path="/contact" component={Contact} />
      <Route path="/order/:id" component={Order} />
      <Route path="/signature-collection" component={SignatureCollection} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-[#1B1B1B]">
        <Navbar />
        <Router />
      </div>
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;