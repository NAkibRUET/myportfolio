import React, { useEffect, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Button, Typography, Tooltip } from "@material-ui/core";

import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import {
  projectDetails,
  projectImageSteps,
  projectImageSteps2,
} from "./ProjectDetails";
import SkeletonDiv from "./SkeletonComponent";

import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import DetailDialog from "./DetailDialog";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const useStyles = makeStyles((theme) => ({
  card: {
    width: "100%",
  },
  media: {
    height: 180,
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
  button1: {
    background: "#418a3b",
    color: "#fff",
    width: "98%",
    border: "none !important",
    outline: "none !important",
    "&:hover": {
      background: "#348c2d",
    },
  },
  button2: {
    background: "#5db83c",
    flexGrow: 1,
    border: "none !important",
    outline: "none !important",
    "&:hover": {
      background: "#4eba27",
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
      padding: "35px !important",
    },
    ["@media (min-width:1400px)"]: {
      padding: "45px !important",
    },
  },
}));

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
  const maxSteps = projectImageSteps.length;

  const handleStepChange = (step) => {
    setActiveStep(step);
  };
  const [activeStep2, setActiveStep2] = React.useState(0);
  const maxSteps2 = projectImageSteps2.length;

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
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="E-DoctorScript"
                  subheader="Cross Platform Desktop Application"
                  style={{ color: "green" }}
                />
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep}
                  onChangeIndex={handleStepChange}
                  enableMouseEvents
                >
                  {projectImageSteps.map((step, index) => (
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
                      <span style={{ color: "green" }}>
                        Development Tools:{" "}
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
                    <Button variant="contained" className={classes.button1}>
                      Website
                    </Button>
                  </a>
                  <Button
                    variant="contained"
                    className={classes.button2}
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
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="Talibe-ilm"
                  subheader="Madrasa Management Application"
                  style={{ color: "green" }}
                />
                <AutoPlaySwipeableViews
                  axis={theme.direction === "rtl" ? "x-reverse" : "x"}
                  index={activeStep2}
                  onChangeIndex={handleStepChange2}
                  enableMouseEvents
                  interval={4000}
                >
                  {projectImageSteps2.map((step, index) => (
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
                      <span style={{ color: "green" }}>
                        Development Tools:{" "}
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
                      <Button variant="contained" className={classes.button1}>
                        Demo
                      </Button>
                    </Tooltip>
                  </a>
                  <Button
                    variant="contained"
                    className={classes.button2}
                    onClick={() =>
                      handleShowDialog("Talibe-ilm", projectDetails.talibeIlm)
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
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="Daily-Shobji"
                  subheader="E-commerce site for fresh vegetables"
                  style={{ color: "green" }}
                />

                {process.env.NODE_ENV === "production" ? (
                  <CardMedia
                    className={classes.media}
                    image={"./dailyShobji.png"}
                    title={"Daily-Shobji"}
                  />
                ) : (
                  <CardMedia
                    className={classes.media}
                    image={"/dailyShobji.png"}
                    title={"Daily-Shobji"}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <i>
                      <span style={{ color: "green" }}>
                        Development Tools:{" "}
                      </span>
                      ReactJs, Redux, Django Rest Framework
                    </i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="http://test.dailyshobji.com/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Tooltip title="Test Version">
                      <Button variant="contained" className={classes.button1}>
                        Live Demo
                      </Button>
                    </Tooltip>
                  </a>
                  <Button
                    variant="contained"
                    className={classes.button2}
                    onClick={() =>
                      handleShowDialog(
                        "Daily-Shobji",
                        projectDetails.dailyshobji
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
              className={classes.gridPadding}
            >
              <Card className={classes.root} elevation="12">
                <CardHeader
                  title="VarsityVoice"
                  subheader="An Online News Portal"
                  style={{ color: "green" }}
                />

                {process.env.NODE_ENV === "production" ? (
                  <CardMedia
                    className={classes.media}
                    image={"./varsityvoice.png"}
                    title={"VarsityVoice"}
                  />
                ) : (
                  <CardMedia
                    className={classes.media}
                    image={"/varsityvoice.png"}
                    title={"VarsityVoice"}
                  />
                )}
                <CardContent>
                  <Typography
                    variant="body2"
                    color="textSecondary"
                    component="p"
                  >
                    <i>
                      <span style={{ color: "green" }}>
                        Development Tools:{" "}
                      </span>
                      HTML, CSS, JavaScript, Php
                    </i>
                  </Typography>
                </CardContent>
                <CardActions disableSpacing>
                  <a
                    href="https://www.varsityvoice.net/"
                    style={{ flexGrow: 1 }}
                    target="_blank"
                  >
                    <Tooltip title="Test Version">
                      <Button variant="contained" className={classes.button1}>
                        Live Demo
                      </Button>
                    </Tooltip>
                  </a>
                  <Button
                    variant="contained"
                    className={classes.button2}
                    onClick={() =>
                      handleShowDialog(
                        "VarsityVoice",
                        projectDetails.varsityvoice
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
export default CustomPackage;
