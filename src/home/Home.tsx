import { Container, CardActionArea,CardActions, CardContent, CardMedia, Typography, Button, Card, Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>

<Stack
  direction="row"
  justifyContent="center"
  margin-left="1000px"
  spacing={2}
  sx={{alignItems: "center"}}
>

        <Card sx={{ maxWidth: 345, marginTop:20 }}>
        

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154831.jpg?w=740&t=st=1720122765~exp=1720123365~hmac=abdb65677228d8d312c314614059e9dc2e4fe94ef5792e96422ea550e4a60965https://img.freepik.com/foto-gratis/vista-edificio-arquitectura-estilo-dibujos-animados_23-2151154831.jpg?w=740&t=st=1720122765~exp=1720123365~hmac=abdb65677228d8d312c314614059e9dc2e4fe94ef5792e96422ea550e4a60965"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Bienvenido!
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant= "contained" color="primary" sx={{marginLeft:"35%"}}>
          Siguiente
        </Button>
      </CardActions>
    </Card>
        </Stack>  
      </Container>
    </> 
  );
};

export default Home;
