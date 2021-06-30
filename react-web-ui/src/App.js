import React, {useEffect} from 'react';
import Products from "./components/Products/Products";
import {Container} from "@material-ui/core";
import {useDispatch} from "react-redux";
import {getAllProducts} from "./actions/products";
import Navbar from "./components/Navbar/Navbar";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Auth from "./components/Auth/Auth";
import Cart from "./components/Cart/Cart";

const App = () => {
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(getAllProducts())
   }, [dispatch])

   return (
      <BrowserRouter>
         <Container maxWidth={"lg"}>
            <Navbar/>
            <Switch>
               <Route path={"/"} exact component={Products} />
               <Route path={"/auth"} component={Auth} />
               <Route path={"/cart"} component={Cart} />
            </Switch>
         </Container>
      </BrowserRouter>
   )
}

export default App;
