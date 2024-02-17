import { Link } from 'react-router-dom'
import './categories.css'
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';

const Categorie = ({type}) =>{

    let data;

    switch(type){

        case "woman":
            data={
                title: "Mujeres",
                img: "https://images.pexels.com/photos/8387124/pexels-photo-8387124.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                to:"/woman",
            }
        break;

        case "offer":
            data={
                title: "Ofertas",
                img: "https://images.pexels.com/photos/9594946/pexels-photo-9594946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                to:"/offer",
            }
        break;
        
        case "man":
            data={
                title: "Hombres",
                img: "https://images.pexels.com/photos/5865196/pexels-photo-5865196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
                to:"/man",
            }
        break;
        
        default:
        
        break;
    }

    const ImageButton = styled(ButtonBase)(({ theme }) => ({
        position: 'relative',
        height: 200,
        [theme.breakpoints.down('sm')]: {
          width: '100% !important', // Overrides inline-style
          height: 100,
        },
        '&:hover, &.Mui-focusVisible': {
          zIndex: 1,
          '& .MuiImageBackdrop-root': {
            opacity: 0.20,
          },
          '& .MuiImageMarked-root': {
            opacity: 0,
          },
          '& .MuiTypography-root': {
            border: '4px solid currentColor',
          },
        },
    }));
      
    const ImageSrc = styled('span')({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundSize: 'cover',
        backgroundPosition: 'center 40%',
    });
      
    const Image = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: theme.palette.common.white,
    }));
      
    const ImageBackdrop = styled('span')(({ theme }) => ({
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        backgroundColor: theme.palette.common.black,
        opacity: 0.4,
        transition: theme.transitions.create('opacity'),
    }));
      
    const ImageMarked = styled('span')(({ theme }) => ({
        height: 3,
        width: 18,
        backgroundColor: theme.palette.common.white,
        position: 'absolute',
        bottom: -2,
        left: 'calc(50% - 9px)',
        transition: theme.transitions.create('opacity'),
    }));


    return(
        <Link to={data.to} className="categorie" style={{textDecoration:"none"}}>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', minWidth: 350, width: '100%', margin: "1rem" }}>
                <ImageButton
                focusRipple
                key={data.img}
                style={{
                    width: "350px",
                    height: "350px"
                }}
                >
                <ImageSrc style={{ backgroundImage: `url(${data.img})` }} />
                <ImageBackdrop className="MuiImageBackdrop-root" />
                    <Image>
                        <Typography
                        component="span"
                        variant="subtitle1"
                        color="inherit"
                        sx={{
                            position: 'relative',
                            p: 4,
                            pt: 2,
                            pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                        }}
                        >
                        {data.title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                </ImageButton>
            </Box>
        </Link>
    )
}

export default Categorie;