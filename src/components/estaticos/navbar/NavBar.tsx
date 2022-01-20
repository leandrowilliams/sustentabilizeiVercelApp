import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box} from '@material-ui/core';
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
            <Toolbar variant="dense" style={{ position: 'relative', display:"flex", justifyContent: "space-between" }} >
                <Link to="/home" className="text-decorator-none">
                    <img className="imglogo9" src="https://i.imgur.com/fmYFcHr.png" alt="" />
                </Link>

                <Box display="flex" justifyContent="center">
                    <Link to="/feed" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" className="texto">
                                Feed
                            </Typography>
                        </Box>
                    </Link> 

                    <Link to="/temas" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" className="texto">
                                Tema
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/posts" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" className="texto">
                                Postagens
                            </Typography>
                        </Box>
                    </Link>

                    <Box style={{ cursor: "pointer" }} className="dropdown-btn">
                        <Typography variant="h6" className="texto" >
                            Cadastrar
                        </Typography>

                        <Box className={`menu-dropdown`} >
                            <Link to="/formularioTema" className="text-decorator-none">
                                <Box mx={1} style={{ cursor: "pointer" }} >
                                    <Typography variant="h6" className="texto">
                                        Cadastrar Tema
                                    </Typography>
                                </Box>
                            </Link>

                            <Link to="/formularioPostagem" className="text-decorator-none">
                                <Box mx={1} style={{ cursor: "pointer" }} >
                                    <Typography variant="h6" className="texto">
                                        Cadastrar Postagens
                                    </Typography>
                                </Box>
                            </Link>
                        </Box>      
                    </Box>

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
            <Toolbar variant="dense" style={{ display: 'flex', justifyContent: 'space-between'}} >
                <Box style={{ cursor: "pointer" }} >
                    <Link to="/home" className="text-decorator-none">
                        <img className="imglogo8" src="https://i.imgur.com/fmYFcHr.png" alt="" />
                    </Link>
                </Box>

                <Box style={{ display: 'flex' }}>
                    <Link to="/home" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" className="texto">
                                Home
                            </Typography>
                        </Box>
                    </Link>

                    <Link to="/sobrenos" className="text-decorator-none">
                        <Box mx={1} style={{ cursor: "pointer" }} >
                            <Typography variant="h6" className="texto">
                                Sobre NÃ³s
                            </Typography>
                        </Box>
                    </Link>
                </Box>

                <Box mx={1} style={{ cursor: "pointer" }} >
                    <Link to="/login" className="text-decorator-none">
                        <Typography variant="h6" className="texto">
                            Login
                        </Typography>
                    </Link>
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