import React, { useEffect } from "react";
import { Box, Grid, Typography } from "@material-ui/core";
import "./SobreNos.css";

function SobreNos() {
  return (
    <>
      <Grid item xs={12} className="corpo">
        <Box padding={5}className="corpo1">
          <Typography variant="h3" align="center" className="sus-titulo">
            Sobre Nossa Historia
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={12}className="corpo">
        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/VXyHi9e.png"
              alt="Dan"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou o Danillo! Atualmente em processo de migração de carreira, da Arquitetura e Urbanismo para a área da tecnologia. Possuo perfil mediador, disposto a ouvir diferentes perspectivas afim de otimizar o trabalho em equipe.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/p4yGRO4.png"
              alt="leandro"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou o Leandro! Quando ainda pequeno, tive contato com a língua PERL através de um jogo que eu passava horas jogando, gostava de ver as letras verdes no fundo preto, foi uma experiência diferente! Tive contato com muitas coisas, sempre procurando algo que pudesse me encaixar, mas sempre fazia algum curso na área de informática e fiz estágio na área. Vejo que com a persistência conseguirei seguir em frente para mais desafios!
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/G6CUKAb.png"
              alt="Leo"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou o Leonardo! Tenho 22 anos e nasci e cresci na Zona Leste de Sp, sou apaixonado por jogos e por descobrir coisas novas. Sou formado em Gestão de T.I, mas fiz um tempo de engenharia de produção. Vivi muitas situações que fizeram eu perder a vontade de crescer, mas depois de conhecer a Generation e me dar um novo motivo para seguir me formando em Desenvolvedor Java Full Stack Jr, sei que posso agregar muito aonde for alocado e trazer profissionalismo e alegria para a equipe.
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/GU1SrSX.png"
              alt="Lin"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou a Linghel! Adoro aprender coisas novas, quer nas aulas, quer sozinha. Sempre adorei a escola, ler e visitar museus. Considero que em todo lugar existe uma oportunidade para aprender. Trato todos com justiça, é um dos meus princípios básicos. Não permito que os meus sentimentos influenciem nas minhas decisões acerca de outras pessoas. Dou oportunidade a todos. Sobressaio-me nas tarefas de liderança: encorajo o grupo para fazer as coisas e mantenho a harmonia entre os integrantes do grupo ao fazer com que todos se sintam incluídos. Realizo um bom trabalho organizando atividades e vendo que elas se concretizam.
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/a0H6g4z.png"
              alt="Matheus"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou o Matheus! Tenho 25 anos e desde pequeno sempre fui muito fã da tecnologia, sempre auxiliando a todos que necessitavam de ajuda. Minha formação em administração e o contato com a música e o esporte foram três pilares muito importantes nesse desenvolvimento com a tecnologia porque nos exige habilidades técnicas e comportamentais que são fundamentais nesta área e posso aplicar de forma contínua como desenvolvedor.
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/nXSOt82.png"
              alt="Safira"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou a Safira! Interessada por aprendizagens infindáveis e num momento de muita fragilidade pessoal, me aproximei intensamente da tecnologia. Em 2021 iniciei o processo de mudança de área profissional e aqui estou: desenvolvedora web java junior formada! Comunicativa, persistente e com muita orientação ao futuro, estou com grandes expectativas nesse mais novo e importante passo da minha vida.
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default SobreNos;
