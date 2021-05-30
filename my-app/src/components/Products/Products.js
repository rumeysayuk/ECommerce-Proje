import React from 'react';
import Product from "./Product/Product";
import {CircularProgress, Grid} from "@material-ui/core";
import useStyles from "./styles";
import {useSelector} from "react-redux";

const Products = () => {
   const classes = useStyles();
   const products=useSelector((state => state.products));

   return !products.length ? <CircularProgress /> : (
      <main className={classes.content}>
         <div className={classes.toolbar}/>
         <Grid container justify={"center"} spacing={3}>
            {
               products.map((product) => (
                  <Grid key={product._id} item xs={12} sm={6} md={4} lg={3} >
                     <Product product={product} key={product._id}/>
                  </Grid>
               ))
            }
         </Grid>
      </main>
   )
}

export default Products;
