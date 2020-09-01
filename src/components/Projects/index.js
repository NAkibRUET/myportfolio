import React, { useEffect, useState } from "react";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import {
  Drawer,
  Grid,
  Button,
  Paper,
  Typography,
  Tooltip,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";

import { red } from "@material-ui/core/colors";
import MobileStepper from "@material-ui/core/MobileStepper";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import DetailDialog from "./DetailDialog";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const projectDetails = {
  edoctorscript:
    "<b>Description:</b><br/> Doctors can write prescription with a few clicks by our user friendly UI, mail the patient or print them. <br/>Provides every important aspects related to patient and prescription in one place. <br/>Stores patient records with treatment and consists huge medicine database. <br/><br/><b>My Contribution:</b><br/> I worked in this project as a part time front end developer in Reactjs - Redux under the team 71bits, a startup company. <br/> I am currently working in the patient android app of this project with React-Native",
};

const tutorialSteps = [
  {
    imgPath: "/epres01.png",
  },
  {
    imgPath: "/epres02.png",
  },
  {
    imgPath: "/ePres04.png",
  },
  {
    imgPath: "/epres05.png",
  },
];
const tutorialSteps2 = [
  {
    imgPath: "/madrasa10.png",
  },
  {
    imgPath: "/madrasa06.png",
  },
  {
    imgPath: "/madrasa04.png",
  },
  {
    imgPath: "/madrasa09.png",
  },
  {
    imgPath: "/madrasa03.png",
  },
  {
    imgPath: "/madrasa02.png",
  },
];

const styles = {
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
};

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  media: {
    height: 190,
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
  img: {
    height: 180,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  img2: {
    height: 160,
    display: "block",
    maxWidth: 400,
    overflow: "hidden",
    width: "100%",
  },
  wrapper: {
    width: "90%",
    margin: "20px auto",
    ["@media (min-width:320px)"]: {
      width: "90%",
    },
    ["@media (min-width:768px)"]: {
      width: "80%",
    },
    ["@media (min-width:1024px)"]: {
      width: "75%",
    },
  },
}));

const SkeletonDiv = () => {
  const classes = useStyles();
  return (
    <Grid item lg={4} md={6} sm={12} xs={12} style={{ padding: "20px" }}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <Skeleton
              animation="wave"
              height={10}
              width="80%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="40%" />}
        />

        <Skeleton animation="wave" variant="rect" className={classes.media} />

        <CardContent>
          <React.Fragment>
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton
              animation="wave"
              height={10}
              style={{ marginBottom: 6 }}
            />
            <Skeleton animation="wave" height={10} width="80%" />
          </React.Fragment>
          <Typography variant="h3">
            <Skeleton width="100%" />
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const CustomPackage = (props) => {
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
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [activeStep2, setActiveStep2] = React.useState(0);
  const maxSteps2 = tutorialSteps2.length;

  const handleNext2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack2 = () => {
    setActiveStep2((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange2 = (step) => {
    setActiveStep2(step);
  };

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
              style={{ padding: "15px" }}
            >
              <Card className={classes.root} elevation="8">
                <CardHeader
                  title="E-DoctorScript"
                  subheader="Cross Platform Desktop Application"
                  style={{ color: "#73a93c" }}
                />
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {tutorialSteps.map((step, index) => (
                    <div key={step.imgPath}>
                      {Math.abs(activeStep - index) <= 2 ? (
                        <img className={classes.img} src={step.imgPath} />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <i>
                      <span style={{ color: "#73a93c" }}>
                        Development Tools:
                      </span>
                      ReactJs, Redux, ElectronJs, Java Spring
                    </i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="https://e-doctorscript.com/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Button
                      variant="contained"
                      style={{ width: "100%", border: "none", outline: "none" }}
                    >
                      Website
                    </Button>
                  </a>
                  <Button
                    variant="contained"
                    style={{ flexGrow: 1, border: "none", outline: "none" }}
                    onClick={() =>
                      handleShowDialog(
                        "E-DoctorScript",
                        projectDetails.edoctorscript
                      )
                    }
                  >
                    Details
                  </Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid
              item
              lg={4}
              md={6}
              sm={12}
              xs={12}
              style={{ padding: "15px" }}
            >
              <Card className={classes.root} elevation="8">
                <CardHeader
                  title="Talibe-Ilm"
                  subheader="Madrasa Management Application"
                  style={{ color: "#73a93c" }}
                />
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep2}
                  onChangeIndex={handleStepChange2}
                  enableMouseEvents
                  interval={4000}
                >
                  {tutorialSteps2.map((step, index) => (
                    <div key={step.imgPath}>
                      {Math.abs(activeStep2 - index) <= 2 ? (
                        <img className={classes.img2} src={step.imgPath} />
                      ) : null}
                    </div>
                  ))}
                </AutoPlaySwipeableViews>
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                    className="mt-3 pb-1"
                  >
                    <i>
                      <span style={{ color: "#73a93c" }}>
                        Development Tools:
                      </span>
                      ReactJs, Redux, Django Rest Framework
                    </i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="http://talib-e-ilm-web.s3-website-us-east-1.amazonaws.com/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Tooltip title="Guest view not available yet">
                      <Button
                        variant="contained"
                        style={{
                          width: "100%",
                          border: "none",
                          outline: "none",
                        }}
                      >
                        Demo
                      </Button>
                    </Tooltip>
                  </a>
                  <Button
                    variant="contained"
                    style={{ flexGrow: 1, border: "none", outline: "none" }}
                    onClick={() =>
                      handleShowDialog(
                        "E-DoctorScript",
                        projectDetails.edoctorscript
                      )
                    }
                  >
                    Details
                  </Button>
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
      <DetailDialog
        open={showDetailDialog}
        nutritionOf={detailOf}
        nutrition_details={project_details}
        handleClose={handleCloseDetailDialog}
        padding="20px"
      />
    </>
  );
};
export default withStyles(styles)(CustomPackage);
