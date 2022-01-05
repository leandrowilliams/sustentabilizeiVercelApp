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
              src="https://i.imgur.com/2NPUk9V.jpg"
              alt="Dan"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá, eu sou o Danillo, e eu não fui sempre apaixonado por tecnologia, mas eu vi nela um caminho pra fazer aquilo que eu quero, e que venho querendo já a um tempo…
               que é criar, ajudar pessoas, e com o perdão da piada, me desenvolver.  Aconteceu durante minha formação acadêmica, e aconteceu novamente aqui, na Gen. 
               O padrão se repete, bastou que eu me adaptasse. E eu tô pronto, tô pronto pra ajudar pessoas, dessa vez no mercado da tecnologia. Uma vez mais, eu sou o Danillo, e muito obrigado pela sua atenção.
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/tMvk613.jpg"
              alt="leandro"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Olá a todes, eu me chamo LEANDRO WILLIAMS, quando ainda pequeno, tive contato com a língua PERL através de um jogo que eu passava horas jogando, 
              gostava de ver as letras verdes no fundo preto, foi uma experiencia diferente! tive contato com tantas coisas, sempre procurando algo que pude-se me encaixar;
               mais sempre fazia algum curso na área de informática, estagiei na área, dei muito suporte nessa vida, vejo que com a persistência conseguirei seguir a frente
                para futuros desafios!
            </Typography>
          </Box>
        </Box>
        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/fGh6bO2.jpg"
              alt="Leo"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Meu nome é Leonardo, tenho 22 anos e nasci e cresci na Zona Leste de Sp, sou apaixonado por jogos, e por descobrir coisas novas. Sou formado em Gestão de T.i na Uninove,
              mas já fiz engenharia de produção, só faltou terminar. Tive muitas perdas que fizeram eu perder a vontade de crescer, mas depois de conhecer a Generation e me dar um novo 
              motivo para seguir me formando em Desenvolvedor Java Full Stack Jr, sei que posso agregar muito aonde for alocado e trazer profissionalismo e alegria a sua equipe.
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/EuzHjCE.png"
              alt="Lin"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Adoro aprender coisas novas, quer nas aulas, quer sozinha. Sempre adorei a escola, ler e visitar museus.
                 Considero que em qualquer lugar existe uma oportunidade para aprender. Trato os outros com justiça é um dos meus princípios básicos. Não permito que os meus sentimentos influenciem nas minhas decisões acerca dos outros. Dou uma oportunidade a todos. Sobressaio-me nas tarefas de liderança: encorajo o grupo para fazer as coisas e manténs a harmonia entre os integrantes do grupo ao fazer com que todos se sintam incluídos. Realizo um bom trabalho organizando
                atividades e vendo que elas se concretizam.
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/eNjDct9.jpg"
              alt="Matheus"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
              Sou Matheus, tenho 25 anos e desde pequeno sempre fui muito fã da tecnologia, sempre auxiliando a todos que necessitavam de ajuda.
            Minha formação em administração e o contato com a música e o esporte foram três pilares muito importantes nesse desenvolvimento com a tecnologia porque nos exige habilidades
             técnicas e comportamentais que são fundamentais nesta área e pude aplicar de forma continua como desenvolvedor.
            </Typography>
          </Box>
        </Box>

        <Box display="flex" justifyContent="center" padding={2}>
          <Box className="holder"></Box>
          <Box className="fontes">
            <img
              src="https://i.imgur.com/wK62Lmb.jpg"
              alt="Safira"
              className="fotos"
            />
          </Box>
          <Box className="fontes.a">
            <Typography variant="h6" className="sus-titulo">
              {" "}
                     Eu sou a Safira, tenho 21 anos e me descobri ainda mais apaixonada no mundo da tecnologia neste ano de 2021, descobri que é nele que
                    quero atuar profissionalmente. Antes, o que mais fazia meus olhos brilharem era a área da saúde, prova disso é o curso que 
                    escolhi fazer: nutrição. Atualmente está trancado, mas em breve voltarei para finalizá-lo. Além de comunicativa e adaptável, 
                    descobri que eu também sou muito persistente- só precisava desenvolver esse lado que eu não conhecia em mim. Amo viajar, cozinhar, 
                    dormir e ter diferentes experiências e novidades!
            </Typography>
          </Box>
        </Box>
      </Grid>
    </>
  );
}

export default SobreNos;