import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box } from '@material-ui/core';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom"
import "./NavBar.css";
import { useDispatch, useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { addToken } from '../../../store/tokens/actions';
import { toast } from "react-toastify";


function Navbar() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );
    const dispatch = useDispatch();

    function goLogout() {
        dispatch(addToken(""));
        toast.info("Usuario deslogado", {
            position: "top-right",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: false,
            theme: "colored",
            progress: undefined,
        });
        history.push("/login")
    }

    var navbarComponent;
    var navbarhomeComponent;

    if (token !== "") {
        navbarComponent = <AppBar position="relative" style={{ backgroundColor: "#263165" }}>
            <Toolbar variant="dense" >
                    <div>
                    <img className="imglogo9" src="https://i.imgur.com/fmYFcHr.png" alt="" />
                    </div>
                    <Box 
                   display = "flex"
                   justifyContent = "center"
                   alignItems = "center"
                   marginLeft = "200px" ></Box>

                <Box display="flex" justifyContent="center"> 
                    <Link to = "/feed" className = "text-decorator-none">
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            Feed
                        </Typography>
                    </Box>
                    </Link>

                    <Link to = "/temas" className = "text-decorator-none">
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            Tema
                        </Typography>
                    </Box>
                    </Link>

                    <Link to = "/formularioTema" className = "text-decorator-none" >
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            Cadastrar Tema
                        </Typography>
                    </Box>
                    </Link>

                    <Link to = "/posts" className = "text-decorator-none">
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            Postagens
                        </Typography>
                    </Box>
                    </Link>

                    <Link to = "/formularioPostagem" className = "text-decorator-none">
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            Cadastrar Postagens
                        </Typography>
                    </Box>
                    </Link>

                </Box>
                <Box mx={1} style={{ cursor: "pointer" }} onClick={goLogout}>
                        <Typography variant="h6" className="texto">
                            Logout
                        </Typography>
                    </Box>

            </Toolbar>
        </AppBar>
    }

    if (token == "") {
        navbarhomeComponent = <AppBar position="relative" style={{ backgroundColor: "#263165" }}>
            <Toolbar variant="dense" >
                <Box style={{ cursor: "pointer" }} >
                    <Typography variant="h5" className="titulo">
                    <div>
                    <img className="imglogo8" src="https://i.imgur.com/fmYFcHr.png" alt="" />
                    </div>
                    </Typography>
                </Box>

                <Link to = "/home" className = "text-decorator-none">
                <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            Home
                        </Typography>
                    </Box>
                    </Link>

                    <Link to = "/sobrenos" className = "text-decorator-none">
                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto" id="texto1">
                            Sobre Nós
                        </Typography>
                    </Box>
                    </Link>

                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto" id="texto2">
                            Contatos
                        </Typography>
                    </Box>
                   <Box 
                   display = "flex"
                   justifyContent = "center"
                   alignItems = "center"
                   marginLeft = "450px" ></Box>
                   

                    <Box mx={1} style={{ cursor: "pointer" }} >
                        <Typography variant="h6" className="texto">
                            <Link to = "/login">
                            Login
                            </Link>
                        </Typography>
                    </Box>
            </Toolbar>
        </AppBar>
    }
    return (
        <>
            {navbarComponent}
            {navbarhomeComponent}
        </>
    )
}



export default Navbar;