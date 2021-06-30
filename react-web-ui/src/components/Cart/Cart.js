import React from "react";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import Skeleton from "react-loading-skeleton";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const styles = makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
  },
  root: {
    flexGrow: 1,
  },
}));

const Cart = () => {
  const { items } = useSelector((state) => state.cart);
  const classes = styles();

  if (!items.length > 0) {
    return <Skeleton count="4" circle={true} width="600" height={"1000"} />;
  }

  return (
    <main className={classes.content}>
      <Grid container justify={"center"} spacing={4}>
        {items.map((item) => (
          <Grid item key={item._id} xs={12} sm={6} md={4} lg={3}>
            <CartItem item={item} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Cart;
