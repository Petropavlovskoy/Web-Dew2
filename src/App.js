import React from 'react';
import logo from './logo.svg';
import Button from '@material-ui/core/Button';
import {
  Paper, Grid, AppBar, Container,
  Toolbar, IconButton, Typography, Box, Card, CardMedia,
  CardContent, CardActions, BottomNavigation,
  BottomNavigationAction, DialogTitle,
  DialogContent, DialogContentText
} from '@material-ui/core';

// import BottomNavigation from '@material-ui/core/BottomNavigation';
//import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import FolderIcon from '@material-ui/icons/Folder';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';

import MenuIcon from '@material-ui/icons/Menu';
import LayerIcon from '@material-ui/icons/Layers';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';



const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(1)
  },
  title: {
    flexGrow: 1
  },
  mainFeaturesPost: {
    position: "relative",
    color: theme.palette.common.white,
    backgroundSize: "cover",
    backgraundReapeat: "no-repeat",
    backgroundPosition: "center"
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgraundOverlay: "rgba(0,0,0,.3)"
  },
  mainFeaturesPostContent: {
    position: "relative",
    padding: theme.spacing(6),
    marginTop: theme.spacing(8),
  },
  CardMedia: {
    paddingTop: "56.25%"
  },
  cartContent: {
    flexGrow: 1
  },
  cardGrid: {
    marginTop: theme.spacing(4)
  }
}))

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function App() {
  const classes = useStyles();
  const [value, setValue] = React.useState("recents")

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  }
  const handleClose = () => {
    setOpen(false);
  }


  return (
    <>
      <AppBar position="fixed">
        <Container fixed>
          <Toolbar>
            <IconButton adge="start"
              color="inherit" aria-laabel="menu" className={classes.menuButton}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" className={classes.title}>Frontend developer (React)</Typography>
            <Box mr={3}>
              <Button color="inherit" variant="outlined" onClick={handleClickOpen}>Log in</Button>

              <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Log in</DialogTitle>
                <DialogContent>
                  <DialogContentText>  Log in to see videos </DialogContentText>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="name"
                    label="Email Adress"
                    type="email"
                    fullWidth
                  />
                  <TextField
                    autoFocus
                    margin="dense"
                    id="pass"
                    label="Password"
                    type="password"
                    fullWidth
                  />
                </DialogContent>

                <DialogActions>
                  <Button onClick={handleClose} color="primary">Cancel</Button>
                  <Button onClick={handleClose} color="primary">Log in</Button>

                </DialogActions>

              </Dialog>

            </Box>
            <Button color="secondary" variant="contained">Sing Up</Button>
          </Toolbar>
        </Container>
      </AppBar>

      <main>
        <Paper className={classes.mainFeaturesPost}
          style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
          <Container fixed>
            <div className={classes.overlay} />
            <Grid container>
              <Grid item md={6}>

                <div className={classes.mainFeaturesPostContent}>
                  <Typography
                    component="h1"
                    variant="h3"
                    color="inherit"
                    gutterBottom>
                    Сергей Ляшенко
                  </Typography>

                  <Typography component="h5"
                    color="inherit"
                    paragraph>
                    <p> e-mail: sergio033032@gmail.com </p>
                    <p> Instagram: sergio_lyashenko</p>
                    <p> Github: https://github.com/Petropavlovskoy</p>
                    <p> website: https://petropavlovskoy.github.io/demo-samurai/</p>


                  </Typography>

                  <Button variant="contained" color="secondary">
                    Learn more
                  </Button>

                </div>
              </Grid>
            </Grid>
          </Container>
        </Paper>
        <div className={classes.mainConteiner}>
          <Container maxWidth="md">
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>Web blog </Typography>
            <Typography variant="h5" align="center" color="textSecondary" pargraph>
              Я быстро учусь, ответственный, готовый к тяжелым задачам.
              С удовольствием отвечу на вопросы и выполню тестовое задание.
            </Typography>
          </Container>
          <div className={classes.mainButtons}>
            <Grid container spacing={2} justify="center">
              <Grid item>
                <Button variant="contained" color="primary">Start Now</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" color="primary">Lear more</Button>
              </Grid>
            </Grid>
          </div>
        </div>
        <Container className={classes.cardGrid} maxWidth="md">
          <Grid container spacing={4}>
            {cards.map((card) => (
              <Grid item key={card} xs={12} sm={6} md={4}>
                <Card className={classes.card}>
                  <CardMedia className={classes.CardMedia}
                    image="https://source.unsplash.com/random"
                    title="Image title" />
                  <CardContent className={classes.CardContent}>
                    <Typography variant="h5" gutterBottom>
                      Post
  </Typography>
                    <Typography>
                      Хорошо что заглянули
  </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" color="primary">
                      View
  </Button>
                    <Button size="small" color="primary">
                      Edit
  </Button>
                    <LayerIcon />
                    <PlayCircleFilledIcon />
                  </CardActions>
                </Card>
              </Grid>

            ))}
          </Grid>
        </Container>
      </main>
      <footer>
        <Typography variant="h6" align="center" gutterBottom>
          Cайт сделанный на React js с применением библиотеки Material UI
        </Typography>
        <BottomNavigation
          value={value}
          onChange={handleChange}
          className={classes.root}>
          <BottomNavigationAction
            label="Recents"
            value="recents"
            icon={<RestoreIcon />} />

          <BottomNavigationAction
            label="Favorites"
            value="favorites"
            icon={<FavoriteIcon />} />

          <BottomNavigationAction
            label="Nearby"
            value="nearby"
            icon={<LocationOnIcon />} />

          <BottomNavigationAction
            label="Folder"
            value="folder"
            icon={<FolderIcon />} />

        </BottomNavigation>
        <Typography align="center" color="textSecondary"
          component="p" variant="subtitle1">
          Web developer blog React JS material
        </Typography>
      </footer>
    </>
  );
}

export default App;
