import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Button, Typography, Tooltip, Avatar } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import "./index.css";
import SkeletonDiv from "../Projects/SkeletonComponent";

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  media: {
    height: 240,
  },
  root: {
    maxWidth: 400,
    flexGrow: 1,
  },
  header: {
    display: "flex",
    alignItems: "center",
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  button1: {
    background: "#3996cc",
    color: "#fff",
    width: "100%",
    border: "none !important",
    outline: "none !important",
    "&:hover": {
      background: "#278fcc",
    },
  },
  button2: {
    background: "#011e30",
    color: "#fff",
    flexGrow: 1,
    border: "none !important",
    outline: "none !important",
    "&:hover": {
      background: "#012942",
    },
  },
  wrapper: {
    margin: "20px auto",
    ["@media (min-width:320px)"]: {
      width: "90%",
    },
    ["@media (min-width:768px)"]: {
      width: "85%",
    },
    ["@media (min-width:1024px)"]: {
      width: "85%",
    },
    ["@media (min-width:1400px)"]: {
      width: "70%",
    },
  },
  gridPadding: {
    ["@media (min-width:320px)"]: {
      padding: "10px !important",
    },
    ["@media (min-width:768px)"]: {
      padding: "20px !important",
    },
    ["@media (min-width:1024px)"]: {
      padding: "30px !important",
    },
    ["@media (min-width:1400px)"]: {
      padding: "40px !important",
    },
  },
}));

const Certifications = (props) => {
  const [Loading, setLoading] = useState(true);
  const [showDetailDialog, setShowDetailDialog] = useState(false);
  const [detailOf, setDetailOf] = useState("");
  const [project_details, setProject_details] = useState("");
  const handleShowDialog = (name, detail) => {
    setShowDetailDialog(true);
    setDetailOf(name);
    setProject_details(detail);
  };
  const handleCloseDetailDialog = () => {
    setShowDetailDialog(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const screenWidth = window.innerWidth;

  const classes = useStyles();
  const theme = useTheme();

  return (
    <>
      <div className={classes.wrapper}>
        {Loading == false ? (
          <Grid container>
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="AWS Fundamentals: Going Cloud-Native"
                  //subheader="An Online News Portal"
                  className="cardHeader"
                  style={{ color: "#3996cc" }}
                />
                {process.env.NODE_ENV === "production" ? (
                  <CardMedia
                    className={classes.media}
                    image={"./coursera1.png"}
                    title={"AWS Coursera"}
                  />
                ) : (
                  <CardMedia
                    className={classes.media}
                    image={"/coursera1.png"}
                    title={"AWS Coursera"}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <i>by Coursera</i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="https://www.coursera.org/learn/aws-fundamentals-going-cloud-native"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button variant="contained" className={classes.button2}>
                      Course Link
                    </Button>
                  </a>
                  <a
                    href="https://www.coursera.org/account/accomplishments/records/WSDSBTNE75GR"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button variant="contained" className={classes.button1}>
                      View Credential
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="Ultimate AWS Certified Cloud Practitioner - 2020"
                  //subheader="An Online News Portal"
                  className="cardHeader"
                  style={{ color: "#3996cc" }}
                />
                {process.env.NODE_ENV === "production" ? (
                  <CardMedia
                    className={classes.media}
                    image={"./udemy1.jpg"}
                    title={"AWS Udemy"}
                  />
                ) : (
                  <CardMedia
                    className={classes.media}
                    image={"/udemy1.jpg"}
                    title={"AWS Udemy"}
                  />
                )}

                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <i>by Stephane Maarek, Udemy</i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="https://www.udemy.com/course/aws-certified-cloud-practitioner-new/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button variant="contained" className={classes.button2}>
                      Course Link
                    </Button>
                  </a>
                  <a
                    href="https://www.udemy.com/certificate/UC-1922951a-987a-4ecc-a646-e090eb7fe68b/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button variant="contained" className={classes.button1}>
                      View Credential
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="Modern JavaScript for React JS - ES6"
                  //subheader="An Online News Portal"
                  className="cardHeader"
                  style={{ color: "#3996cc" }}
                />
                {process.env.NODE_ENV === "production" ? (
                  <CardMedia
                    className={classes.media}
                    image={"./udemy2.jpg"}
                    title={"ES6 Udemy"}
                  />
                ) : (
                  <CardMedia
                    className={classes.media}
                    image={"/udemy2.jpg"}
                    title={"ES6 Udemy"}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <i>by Udemy</i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="https://www.udemy.com/course/modern-javascript-es6-for-react-js/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button variant="contained" className={classes.button2}>
                      Course Link
                    </Button>
                  </a>
                  <a
                    href="https://www.udemy.com/certificate/UC-f2cd5b05-cb35-406c-bfd9-9b11aa9636a2/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button variant="contained" className={classes.button1}>
                      View Credential
                    </Button>
                  </a>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        ) : (
          <Grid container style={{ padding: "1px" }}>
            <SkeletonDiv />
            <SkeletonDiv />
            <SkeletonDiv />
          </Grid>
        )}
      </div>
    </>
  );
};
export default Certifications;
