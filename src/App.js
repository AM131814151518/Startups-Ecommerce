import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { BrowserRouter, useRoutes } from "react-router-dom";
import routes from "./routes";
import { CartProvider, useCart } from "react-use-cart";

const client = new ApolloClient({
  uri: "http://localhost:1337/graphql",
  cache: new InMemoryCache(),
});

const Routes = () => {
  const element =  useRoutes(routes)
  return (
    <>
      <Header />
      {element}
    </>
  );
};

function App() {
  return (
    <>
    <CartProvider>
      <BrowserRouter>
        <ApolloProvider client={client}>
          <Routes/>
          <Footer />
        </ApolloProvider>
      </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
