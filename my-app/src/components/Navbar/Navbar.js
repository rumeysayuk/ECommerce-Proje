import React, {useState} from 'react';
import {AppBar, Avatar, Button, Toolbar, Typography} from "@material-ui/core";
import styles from "./styles";
import "../../style.css"
import {Link} from "react-router-dom";

const Navbar = () => {
    const classes = styles();
    const [user, setUser] = useState(null)

    return (
        <AppBar className={classes.appBar} color={"inherit"}>
            <Link classname={classes.brandContainer} to="/">
                <Typography className={classes.heading} variant={"h4"} align={"center"}>ECommerce</Typography>
                <img height={"60"} className={classes.image}
                     src={"https://productmanagementfestival.com/wp-content/uploads/2017/01/sell-your-product-online.jpg"}
                     alt=""/>
            </Link>
            <Toolbar className={classes.toolbar}>
                {
                    user?.result ? (
                        <div className={classes.profile}>
                            <Avatar className={classes.purple} alt={user?.result.name} src={user?.result.imageUrl}>
                                {user?.result.name.charAt(0)}
                                <Typography className={classes.userName} variant={"h6"}>
                                    {user?.result.name}
                                    <Button variant={"contained"} className={classes.logout} color={"primary"}>
                                        Çıkış yap
                                    </Button>
                                </Typography>
                            </Avatar>
                        </div>
                    ) : (
                        <Button component={Link} to={"/auth"} variant={"contained"} color={"primary"}>
                            Giriş yap
                        </Button>
                    )

                }
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;
