import Link from "next/link";
import Head from "next/head";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import MUILink from "@material-ui/core/Link";
import { useStyles } from "../util/styles";
import { items } from "../util/items";
import Header from "../components/Header";

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {"Copyright © "}
//       <Link href="/about" as={process.env.BACKEND_URL + "/about"}>
//         <MUILink color="inherit" href="https://material-ui.com/">
//           Your Website
//         </MUILink>
//       </Link>

//       {new Date().getFullYear()}
//       {"."}
//     </Typography>
//   );
// }

export default function Album() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <Head>
        <title> Getting started </title>
      </Head>
      <Header />
      <main>
        {/* Hero unit */}
        <div className={classes.heroContent}>
          <Container maxWidth="sm">
            <Typography
              component="h1"
              variant="h2"
              align="center"
              color="textPrimary"
              gutterBottom
            >
              Getting Started
            </Typography>
            <Typography
              variant="h5"
              align="center"
              color="textSecondary"
              paragraph
            >
              Getting Started with software can be simple. Here you will find
              simple straight forward guides to get started with different
              programming tools from HTML, CSS, JavaScript and more...
            </Typography>
            {/* <div className={classes.heroButtons}>
              <Grid container spacing={2} justify="center">
                <Grid item>
                  <Button variant="contained" color="primary">
                    Main call to action
                  </Button>
                </Grid>
                <Grid item>
                  <Button variant="outlined" color="primary">
                    Secondary action
                  </Button>
                </Grid>
              </Grid>
            </div> */}
          </Container>
          <Container className={classes.cardGrid} maxWidth="md">
            <Grid container spacing={4}>
              {items.map((card) => {
                const link = `${process.env.BACKEND_URL}/${card.name}`;
                return (
                  <Grid item key={card.name} xs={12} sm={6} md={4}>
                    <Link href={link} as={link}>
                      <MUILink color="inherit" href={link}>
                        <Card className={classes.card}>
                          <CardMedia
                            className={classes.cardMedia}
                            image={card.img}
                            title={card.name}
                          />
                          <CardContent className={classes.cardContent}>
                            <Typography
                              gutterBottom
                              variant="h5"
                              component="h2"
                            >
                              {card.name}
                            </Typography>
                            <Typography>{card.subTitle}</Typography>
                          </CardContent>
                          <CardActions>
                            <Button size="small" color="primary">
                              View
                            </Button>
                          </CardActions>
                        </Card>
                      </MUILink>
                    </Link>
                  </Grid>
                );
              })}
            </Grid>
          </Container>
        </div>
      </main>
      {/* Footer */}
      {/* <footer className={classes.footer}>
        <Typography variant="h6" align="center" gutterBottom>
          Footer
        </Typography>
        <Typography
          variant="subtitle1"
          align="center"
          color="textSecondary"
          component="p"
        >
          Something here to give the footer a purpose!
        </Typography>
        <Copyright />
      </footer> */}
      {/* End footer */}
    </React.Fragment>
  );
}
// export default function Home() {
//   return (
//     <div>
//       Hello World.{' '}
//       <Link href="/about" as={process.env.BACKEND_URL + '/about'}>
//         <a>About</a>
//       </Link>
//     </div>
//   )
// }
