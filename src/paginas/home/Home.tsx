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
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid1, page">
                <Grid alignItems="center" item xs={12}>
                    <Box paddingTop={1}>
                        <img className="parceirosepatrocinadores imglogo2" src="https://i.imgur.com/fmYFcHr.png" alt="LOGO SUSTENTABILIZEI" />
                    </Box>
                </Grid>


                <Grid item xs={12} >
                    <Box className="carousel" paddingX="0%">
                        <CarouselComponent />
                    </Box>
                </Grid>
                <Grid item xs={12}>
                    <Box padding={2}>
                        <Typography variant="h1" align="center" className="sus-titulo">SUSTENTABILIZE</Typography>
                    </Box>

                    <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="data:image/jpeg;base64,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"
              alt="Dan"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              A SE INTERESSAR PELA SUSTENTABILIDADE Por meio de parcerias , a
              SUSTENTABILIZEI Quer fazer parte dessa próxima geração e
              influenciar a conhecer o que há de mais moderno na área de
              sustentabilidade. Nossas parcerias alcançam e educam ao redor do
              mundo Trabalhar com Redes-Sociais para tornar a sustentabilidade
              parte de nosso futuro coletivo é uma iniciativa que promove a
              prosperidade e assegura nosso futuro.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://horario.com.br/wp-content/uploads/2020/04/Geha_blog_Abr_05-min.png"
              alt="Missao Visao e valores"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
          <Box padding={2}>
                        <Typography variant="h1" align="center" className="sus-titulo">Missao Visao e Valores</Typography>
                    </Box>
            <Typography variant="h6" className="sus-titulo">
              {" "}<p>
              Missão : Tornar Visível e acessível ações socioambientais , incluindo e informando constantemente usuários pelo mundo todo.</p>
              <p>
              Visão : Tornar o mundo mais consciente e conectado , através de redes sociais conectando por celulares, computadores e boca a boca.</p>
              <p>Valores : Liberdade de informação , Respeito e Inclusão, Responsabilidade e transparência.</p>  
            </Typography>
          </Box>
        </Box>
                </Grid>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box>
                   
                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid2, page2">
                <Box className = "sus-titulo">
                    <div>
                        <img className="imglogo3" src="https://i.imgur.com/jcbi0LA.jpg" alt="SUSTENTABILIZEI-COLETOR-MESTRUAL" />
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
                        <img className="imglogo3" src="https://i.imgur.com/SZ2clE3.png" alt="SUSTENTABILIZEI-ALIMENTO" />
                    </div>

                </Box>
            </Grid>
            <Grid container direction="row" justifyContent="center" alignItems="center" className="grid4, page4">
                <Box className="fontes">
                    <Typography variant="h2" align="center" className="textos">Parceiros e Patrocinadores</Typography>
                    <Box display="flex" justifyContent="center" padding={2}>
                        <img className="parceirosepatrocinadores" src="https://i.imgur.com/fYYvNQS.png" alt="LOGO GENERATION" />
                        <img className="parceirosepatrocinadores" src="https://i.imgur.com/EZd8APl.png" alt="LOGO BRASSCOM" />
                    </Box>
                </Box>

            </Grid>
        </>
    );
}

export default Home;