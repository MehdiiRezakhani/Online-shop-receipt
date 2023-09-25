import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";

// Components
import Receipt from './components/Receipt';
import ProductDetails from './components/ProductDetails';
import Navbar from './components/shared/Navbar';

// Context
import ProductContextProvider from './context/ProductContextProvider';

function App() {
  return (
    <>
      <ProductContextProvider>
          <Navbar />
          <Switch>
            <Route path="/receipt/:id" component={ProductDetails} />
            <Route path="/receipt" component={Receipt} />
            <Redirect to="/receipt" />
          </Switch>
      </ProductContextProvider>
      <h4>Developed by <a href='https://mehdirezakhani.ir' target="_blank" rel="noreferrer">Mehdi Rezakhani</a></h4>
    </>
  );
}

export default App;
