import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Switch, Redirect } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";

// Pages
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductDetail from "./pages/ProductDetail";
import Science from "./pages/Science";
import Calculator from "./pages/Calculator";
import Install from "./pages/Install";
import SizingGuide from "./pages/SizingGuide";
import WhereToApply from "./pages/WhereToApply";
import About from "./pages/About";
import Contact from "./pages/Contact";
import WhereToBuy from "./pages/WhereToBuy";
import Guarantee from "./pages/Guarantee";
import NotFound from "./pages/NotFound";

function Router() {
  return (
    <Switch>
      {/* ── Primary v2 routes ── */}
      <Route path="/" component={Home} />

      {/* Product — single product, 5 sizes */}
      <Route path="/product" component={Products} />
      <Route path="/product/:slug" component={ProductDetail} />

      {/* Where to apply */}
      <Route path="/where-to-apply" component={WhereToApply} />

      {/* Science */}
      <Route path="/science" component={Science} />

      {/* Savings calculator (renamed from /calculator) */}
      <Route path="/savings" component={Calculator} />

      {/* Install & sizing guide */}
      <Route path="/install" component={Install} />
      <Route path="/install/sizing-guide" component={SizingGuide} />

      {/* About & support */}
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/where-to-buy" component={WhereToBuy} />
      <Route path="/guarantee" component={Guarantee} />

      {/* ── Legacy redirect stubs (v1 routes) ── */}
      <Route path="/products">
        {() => <Redirect to="/product" />}
      </Route>
      <Route path="/products/:sku">
        {(params) => <Redirect to={`/product/${params.sku}`} />}
      </Route>
      <Route path="/calculator">
        {() => <Redirect to="/savings" />}
      </Route>
      <Route path="/by-application">
        {() => <Redirect to="/where-to-apply" />}
      </Route>
      <Route path="/by-application/:type">
        {() => <Redirect to="/where-to-apply" />}
      </Route>
      <Route path="/pro">
        {() => <Redirect to="/about" />}
      </Route>
      {/* 404 */}
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
