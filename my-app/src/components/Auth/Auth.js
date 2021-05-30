import React, {useState} from 'react';
import {Avatar, Button, Container, Grid, Paper, Typography} from "@material-ui/core";
import styles from "./styles";
import {LockOutlined} from "@material-ui/icons";
import Input from "../Toolbox/Input";
import GoogleLogin from "react-google-login";
import GoogleIcon from "../Toolbox/GoogleIcon";
import {useDispatch} from "react-redux";
import {useHistory} from "react-router-dom";
import alertify from "alertifyjs";
import * as actionTypes from "../../constants/actionTypes"
import {signIn, signUp} from "../../actions/auths";


const initialState = {firstName: "", lastName: "", password: "", email: "", confirmPassword: ""}
const Auth = () => {
    const classes = styles();
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const [form, setForm] = useState(initialState)
    const history = useHistory();
    const dispatch = useDispatch();

    const handleChange = (e) => setForm({...form, [e.target.name]: e.target.value})

    const switchMode = () => {
        setForm(initialState)
        setIsSignUp((prevIsSignUp) => !prevIsSignUp)
        setShowPassword(false)
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            dispatch(signUp(form, history))
        } else {
            dispatch(signIn(form, history))
        }
    }
    const googleSucces = async (res) => {

        const result = res?.profileObj;
        const token = res?.tokenId;

        dispatch({type: actionTypes.AUTH, data: {result, token}})
        history.push("/");
    }
    const googleFailure = () => (alertify.error("Google ile giriş yaparken bir hata oluştu", "Google hatası"))


    return (
        <Container component={"main"} maxWidth={"xs"}>
            <Paper className={classes.paper} elevation={6}>
                <Avatar className={classes.avatar}>
                    <LockOutlined/>
                </Avatar>
                <Typography component={"h1"} variant={"h5"}>{isSignUp ? "Kayıt Ol" : "Giriş Yap"}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {isSignUp && (
                            <>
                                <Input name={"firstName"} label={"İsminiz"} handleChange={handleChange} autoFocus half/>
                                <Input name={"lastName"} label={"Soyisminiz"} handleChange={handleChange} half/>
                            </>
                        )}
                        <Input name={"email"} label={"Email Adresiniz"} handleChange={handleChange} type={"email"}/>
                        <Input name={"password"} label={"Şifre"} handleChange={handleChange}
                               type={showPassword ? "text" : "password"}
                               handleShowPassword={() => setShowPassword(!showPassword)}/>
                        {isSignUp && (
                            <Input name={"confirmPassword"} label={"Şifre tekrarı"} handleChange={handleChange}
                                   type={"password"}/>
                        )}
                    </Grid>
                    <Button type={"submit"} fullWidth variant={"contained"} color={"primary"}
                            className={classes.submit}>
                        {isSignUp ? "Kayıt Ol" : "Giriş Yap"}
                    </Button>
                    <GoogleLogin clientId={"330061730723-v8n63csn687m4s1nuap664brvgn7u4ij.apps.googleusercontent.com"}
                                 render={(renderProps) => (
                                     <Button className={classes.googleButton} color={"primary"} fullWidth
                                             onClick={renderProps.onClick} disabled={renderProps.disabled}
                                             startIcon={<GoogleIcon/>} variant={"contained"}>
                                         Google ile Giriş yap</Button>
                                 )}
                                 onSuccess={googleSucces}
                                 onFailure={googleFailure}
                                 cookiePolicy={"single_host_origin"}
                    />
                    <Grid container justify={"flex-end"}>
                        <Grid item>
                            <Button onClick={switchMode}>
                                {isSignUp ? "Zaten hesabın mevcut mu? Giriş yap" : "Hesabın yok mu ?Kayıt ol"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )
}

export default Auth;
