import React from "react";
import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  IconButton,
  Typography,
} from "@material-ui/core";
import { AddShoppingCart, Euro } from "@material-ui/icons";
import useStyles from "./styles";
import { useDispatch } from "react-redux";
import * as actions from "../../../actions/cart";
import { useHistory } from "react-router-dom";

const Product = ({ product }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const history = useHistory();

  const addToCart = () => {
    dispatch(actions.addToCart(product));
    history.push("/cart");
  };

  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={
          "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MLA22LL?wid=1144&hei=1144&fmt=jpeg&qlt=95&.v=1496944005839"
        }
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography variant={"h5"} gutterBottom>
            {product.name}
          </Typography>
          <Typography variant={"h5"} gutterBottom>
            {product.unitPrice}
            <Euro />{" "}
          </Typography>
        </div>
        <Typography
          noWrap
          component="p"
          variant="body2"
          color="textSecondary"
          dangerouslySetInnerHTML={{ __html: product.description }}
        />
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton onClick={addToCart} aria-label={"Sepete Ekle"}>
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
