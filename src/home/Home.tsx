import { Container, CardActionArea,CardActions, CardContent, CardMedia, Typography, Button, Card, Stack } from "@mui/material";

const Home = () => {
  return (
    <>
      <Container maxWidth={false}>

<Stack
  direction="column"
  justifyContent="center"
  margin-left="1000px"
  spacing={2}
>

        <Card sx={{ maxWidth: 345 }}>
        

      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiLpcKn1t0jadN7ygT2eWzmCnnrKiJRZYiLQ&s"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" variant= "contained" color="primary">
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
