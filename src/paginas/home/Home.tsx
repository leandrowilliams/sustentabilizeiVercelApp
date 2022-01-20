import React, { useEffect } from "react";
import { Typography, Box, Grid, Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import "./Home.css";
import Container from '@mui/material/Container';
import CarouselComponent from "../../components/carousel/CarouselComponent";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import { TokenState } from "../../store/tokens/tokensReducer";
import { toast } from "react-toastify";


function Home() {
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    

    return (
        <div className="page">
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid1, page">
                <Grid item xs={12} >
                    <Box className="carousel" paddingX="0%">
                        <CarouselComponent />
                    </Box>
                </Grid>
                
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box className = "sus-titulo">
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/5zLLtkX.png" alt="SUSTENTABILIZE" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box className = "sus-titulo">
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/MA0TFeY.png" alt="MISSAO-VISAO-VALORES" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box className = "sus-titulo">
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/SZ2clE3.png" alt="SUSTENTABILIZEI-ALIMENTO" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box>
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/AvvWdh0.png" alt="SUSTENTABILIZEI-IAMGREEN" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid3, page3">
                <Box>
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/H7Fq0hI.png" alt="SUSTENTABILIZEI-COLETOR-MESTRUAL" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Box className="fontes">
                    <Typography variant="h2" align="center" className="textos">Parceiros e Patrocinadores</Typography>
                    <Box display="flex" justifyContent="center" padding={2}>
                        <img className="parceirosepatrocinadores" src="https://i.imgur.com/fYYvNQS.png" alt="LOGO GENERATION" />
                        <img className="parceirosepatrocinadores" src="https://i.imgur.com/9RVcvJO.png" alt="LOGO BRASSCOM" />
                    </Box>
                </Box>

            </Grid>
        </div>
    );
}

export default Home;