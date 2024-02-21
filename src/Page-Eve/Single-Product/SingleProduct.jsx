import './singleProduct.css';
import Header from '../../Components-Eve/header/Header';
//import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
//import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import * as React from 'react';


/*const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '',
    ...theme.typography.body2,
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));*/

const SingleProduct = () =>{

    const [value, setValue] = React.useState(2);

    return(
        <div className="singleProduct">
            <Header/>
            <div className="singleProduct-left">
                <Box sx={{ flexGrow: 1}} className='contenedor-singleProduct'>
                    <Grid container spacing={2} >
                        <Grid item xs={12} >
                            <img src="https://images.pexels.com/photos/5617671/pexels-photo-5617671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='singleProduct-img' />
                        </Grid>
                        <Grid item xs={4}>
                            <img src="https://images.pexels.com/photos/5617671/pexels-photo-5617671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='singleProduct-imgConjunto' />
                        </Grid>
                        <Grid item xs={4}>
                            <img src="https://images.pexels.com/photos/5617671/pexels-photo-5617671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='singleProduct-imgConjunto' />
                        </Grid>
                        <Grid item xs={4}>
                            <img src="https://images.pexels.com/photos/5617671/pexels-photo-5617671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className='singleProduct-imgConjunto' />
                        </Grid>
                    </Grid>
                </Box>
            </div>
            <div className="singleProduct-right">
                <div className="contener-titlePrincipal">
                    <h3 className="title-title">Titulo:</h3>
                    <h1 className="title-Principal">Vestido Verde</h1>
                </div>
                <div className="contenedor-puntuacion">
                    <Rating name="read-only" value={value} readOnly />
                </div>
            </div>

        </div>
    )
}

export default SingleProduct

