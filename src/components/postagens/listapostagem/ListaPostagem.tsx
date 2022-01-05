import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Postagem from '../../../models/Postagem';
import { busca } from '../../../services/Service'
import { Box, Button, Typography, Grid } from '@material-ui/core';
import './ListaPostagem.css';
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { TokenState } from '../../../store/tokens/tokensReducer';
import { toast } from 'react-toastify';
import EditOutlinedIcon from '@mui/icons-material/EditOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ModalPostagem from '../modalPostagem/ModalPostagem';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import FavoriteIcon from '@mui/icons-material/Favorite';

function ListaPostagem() {
    const [posts, setPosts] = useState<Postagem[]>([])
    let history = useHistory();
    const token = useSelector<TokenState, TokenState["tokens"]>(
        (state) => state.tokens
    );

    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const ITEM_HEIGHT = 48;

    useEffect(() => {
        if (token == "") {
            toast.error("VocÃª precisa estar logado", {
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
    }, [token])

    async function getPost() {
        await busca("/postagens", setPosts, {
            headers: {
                'Authorization': token
            }
        })
    }

    useEffect(() => {

        getPost()

    }, [posts.length])


    return (
        <Box display="flex" justifyContent="center" flexWrap="wrap" className="back-lista-post">
            {
                posts.map(post => (
                    <Grid container direction="row" justifyContent="center" alignItems="center" >
                        <Grid item xs={12} alignItems="center" >
                            <Box marginX="auto" marginY={2} borderRadius={5} className="card-postagem">
                                <Grid item xs={6} >
                                    <Box marginY={-2} marginBottom={2} display="flex" marginLeft={53}>
                                        <IconButton
                                            aria-label="more"
                                            aria-controls="long-menu"
                                            aria-haspopup="true"
                                            onClick={handleClick}

                                        >
                                            <MoreVertIcon className="dot-icon" />
                                        </IconButton>
                                        <Menu
                                            id="long-menu"
                                            anchorEl={anchorEl}
                                            keepMounted
                                            open={open}
                                            onClose={handleClose}
                                            PaperProps={{
                                                style: {
                                                    maxHeight: ITEM_HEIGHT * 4.5,
                                                    width: '20ch',
                                                    marginTop: "1ch",
                                                    backgroundColor: "#88c636"
                                                },
                                            }}
                                        >
                                            <MenuItem onClick={handleClose}>
                                                <Link to={`/formularioPostagem/${post.id}`} className="text-decorator-none" >
                                                    <Box mx={1} marginLeft={0}>
                                                        <Button className="marginLeft, option-icon" size='small' >
                                                            <EditOutlinedIcon />
                                                        </Button>
                                                    </Box>
                                                </Link>
                                                <Link to={`/deletarPostagem/${post.id}`} className="text-decorator-none">
                                                    <Box mx={1} >
                                                        <Button className="option-icon" size='small' >
                                                            <DeleteOutlineOutlinedIcon />
                                                        </Button>
                                                    </Box>
                                                </Link>
                                            </MenuItem>
                                        </Menu>
                                    </Box>
                                </Grid>
                                <Grid item xs={6} direction='row'>
                                    <Box marginY={-5} marginBottom={2} display="flex">
                                        <AccountCircleIcon className='perfil-icon' />
                                        <Typography variant="body1" component="h6" className='font-feed-user'>
                                            {post.usuario?.nome}
                                        </Typography>
                                    </Box>
                                </Grid>

                                <Box marginY={2}>
                                    <Typography variant="h5" component="h2" className='font-feed'>
                                        {post.titulo}
                                    </Typography>
                                    <Typography variant="body2" component="p" className='font-feed-tema'>
                                        {post.tema?.tema}
                                    </Typography>
                                </Box>
                                <Typography variant="body2" component="p" className='font-feed'>
                                    {post.conteudo}
                                </Typography>  
                                
                            </Box>

                        </Grid>

                    </Grid>
                ))
            }
            <Box>
                <ModalPostagem />
            </Box>
        </Box>
    )
}


export default ListaPostagem;