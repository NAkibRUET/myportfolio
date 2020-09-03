import React, { useState } from "react";
import { Grid, Paper, Typography, Chip } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import CodeIcon from "@material-ui/icons/Code";
import { Skeleton } from "@material-ui/lab";
import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  sections: {
    marginTop: "20px",
  },
  containerDiv: {
    maxWidth: "1500px",
    margin: "10px auto",
  },
  personalInfo: {
    padding: "20px",
    backgroundColor: "#fff",
    height: "100%",
  },
  personalInfo2: {
    backgroundColor: "#fff",
    height: "100%",
    ["@media (min-width:320px)"]: {
      padding: "35px 20px 0px",
    },
    ["@media (min-width:768px)"]: {
      padding: "10px 20px 10px",
    },
    ["@media (min-width:1024px)"]: {
      padding: "5px 20px 0",
    },
  },
  personalInfo3: {
    padding: "3px 20px 20px",
    backgroundColor: "#fff",
    height: "100%",
  },
  images: {
    display: "block",

    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.25) translate(10%, 10%)",
    },
    ["@media (min-width:320px)"]: {
      width: "80%",
    },
    ["@media (min-width:1000px)"]: {
      width: "60%",
    },
    ["@media (min-width:1100px)"]: {
      width: "80%",
    },
  },
  infoHeader: {
    marginBottom: "5px",
  },
});

const AboutInfo = (props) => {
  const [loading, setLoading] = useState(true);
  console.log(loading);
  const handleSetLoading = () => {
    console.log("Hi");
    setLoading(false);
    console.log(loading);
  };
  const { classes } = props;
  return (
    <div className="px-lg-5 px-md-5">
      <div className="px-lg-5 px-md-5">
        <Paper elevation={24} className={classes.containerDiv}>
          <Grid container spacing={0} className={classes.sections}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo}>
                {process.env.NODE_ENV === "production" ? (
                  <img
                    src="./img3.jpg"
                    onLoad={() => setLoading(false)}
                    className={classes.images}
                    style={{ display: loading ? "none" : "block" }}
                  />
                ) : (
                  <img
                    src="/img3.jpg"
                    onLoad={() => setLoading(false)}
                    className={classes.images}
                    style={{ display: loading ? "none" : "block" }}
                  />
                )}
                {loading ? (
                  <Skeleton variant="rect" width={200} height={200} />
                ) : null}
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo}>
                <Typography
                  align="left"
                  variant="h5"
                  color="secondary"
                  className={classes.infoHeader}
                >
                  Personal Info:
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Name:</b> Nakib Hossain
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Birthday:</b> 09 Feb, 1997
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Mobile:</b> +8801967101376
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Email:</b> hussain0296@gmail.com
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle1"
                  style={{ width: "300px" }}
                >
                  <b>Address:</b> Hamdah, Jhenidah Sadar, Jhenidah
                </Typography>
              </div>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo}>
                <Typography
                  align="left"
                  variant="h5"
                  color="secondary"
                  className={classes.infoHeader}
                >
                  Education:
                </Typography>
                <Typography align="left" variant="subtitle2">
                  BSc. in Computer Science & Engineering,
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Rajshahi University of Engineering & Technology</b>
                </Typography>

                <Typography align="left" variant="subtitle2" className="pt-2">
                  HSC - 2014
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Govt K.C College, Jhenidah</b>
                </Typography>
                <Typography align="left" variant="subtitle2" className="pt-2">
                  SSC - 2012
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Govt Boys High School, Jhenidah</b>
                </Typography>
              </div>
            </Grid>

            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo2}>
                <Typography
                  align="left"
                  variant="h5"
                  color="secondary"
                  className={classes.infoHeader}
                >
                  Problem Solving:
                </Typography>

                <Typography align="left" variant="subtitle2">
                  <a
                    href="https://codeforces.com/profile/NAkib_RUET"
                    target="_blank"
                  >
                    Codeforces -
                  </a>
                  <i> Solved 170+ problems</i>
                </Typography>
                <Typography align="left" variant="subtitle2">
                  <a
                    href="http://lightoj.com/volume_userstat.php?user_id=28194"
                    target="_blank"
                  >
                    LightOj -
                  </a>
                  <i> Solved 86 problems</i>
                </Typography>
                <Typography align="left" variant="subtitle2">
                  <a
                    href="https://uhunt.onlinejudge.org/id/695159"
                    target="_blank"
                  >
                    UVa -
                  </a>
                  <i> Solved 131 problems</i>
                </Typography>
                <Typography align="left" variant="subtitle2">
                  HackerRank -<i> Solved 12 problems</i>
                </Typography>
              </div>
            </Grid>
            <Grid item lg={4} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo2}>
                <Typography
                  align="left"
                  variant="h5"
                  color="secondary"
                  className={classes.infoHeader}
                >
                  Coding & Social Profiles:
                </Typography>
                <Typography align="left" variant="subtitle2">
                  <b>Github:</b>{" "}
                  <a href="https://github.com/NAkibRUET" target="_blank">
                    github.com/NAkibRUET
                  </a>
                </Typography>
                <Typography align="left" variant="subtitle2">
                  <b>StackOverflow:</b>{" "}
                  <a
                    href="https://stackoverflow.com/users/9481880/nakib"
                    target="_blank"
                  >
                    stackoverflow.com/users/9481880
                  </a>
                </Typography>
                <Typography align="left" variant="subtitle2">
                  <b>LinkedIn:</b>{" "}
                  <a
                    href="https://www.linkedin.com/in/nakib-hossain-143048/"
                    target="_blank"
                  >
                    linkedin.com/in/nakib-hossain-143048/
                  </a>
                </Typography>
                <Typography align="left" variant="subtitle2">
                  <b>Facebook:</b>{" "}
                  <a href="https://www.facebook.com/N4K1B" target="_blank">
                    facebook.com/N4K1B
                  </a>
                </Typography>
              </div>
            </Grid>
            <Grid item lg={5} md={6} sm={12} xs={12} className="">
              <div className={classes.personalInfo2}>
                <Typography
                  align="left"
                  variant="h5"
                  color="secondary"
                  className={classes.infoHeader}
                >
                  Languages & Skills:
                </Typography>
                <div>
                  <Chip
                    icon={<TranslateIcon style={{ fontSize: "18px" }} />}
                    label="C/C++"
                    variant="default"
                    color="primary"
                    size="small"
                    style={{
                      margin: "0px 6px 4px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<TranslateIcon style={{ fontSize: "18px" }} />}
                    label="Python"
                    variant="default"
                    size="small"
                    color="primary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<TranslateIcon style={{ fontSize: "18px" }} />}
                    label="JavaScript"
                    variant="default"
                    size="small"
                    color="primary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<TranslateIcon style={{ fontSize: "18px" }} />}
                    label="HTML"
                    variant="default"
                    size="small"
                    color="primary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<TranslateIcon style={{ fontSize: "18px" }} />}
                    label="CSS"
                    variant="default"
                    size="small"
                    color="primary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />

                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="ReactJs"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="Redux"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="Gatsby"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="NodeJs"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="ExpressJs"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="MongoDB"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="Django"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="Linux"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 6px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                  <Chip
                    icon={<CodeIcon style={{ fontSize: "18px" }} />}
                    label="AWS IAM, S3, EC2"
                    variant="default"
                    size="small"
                    color="secondary"
                    style={{
                      margin: "0px 5px 6px 0px",
                      fontWeight: 500,
                    }}
                  />
                </div>
              </div>
            </Grid>
          </Grid>
          <br />
          <div className={classes.personalInfo2}>
            <Typography
              align="left"
              variant="h5"
              color="secondary"
              className={classes.infoHeader}
            >
              Work Experiences:
            </Typography>
          </div>
          <Grid container spacing={0}>
            <Grid item lg={6} md={6} sm={12} xs={12} className="">
              <div className={classes.personalInfo3}>
                <Typography align="left" variant="h6">
                  <b>
                    Front end Developer at{" "}
                    <a href="https://aamartaka.com" target="_blank">
                      AamarTaka.com
                    </a>
                  </b>{" "}
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  <i>August 2020</i>
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle2"
                  color="textSecondary"
                  className="mb-2"
                >
                  <i>Fin-tech Company, Banani, Dhaka</i>
                </Typography>
                <Typography
                  align="justify"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  - Worked at an e-commerce project named{" "}
                  <a href="http://test.dailyshobji.com/" target="_blank">
                    Daily-Shobji{" "}
                  </a>
                  with React-Redux, a subsidiary project of the mother company.
                </Typography>
                <Typography
                  align="justify"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  - Led the whole front end of the project, designed the project
                  structure, connected APIs from backend, managed states with
                  Redux etc.
                </Typography>
              </div>
            </Grid>
            <Grid item lg={6} md={6} sm={12} xs={12} className="">
              <div className={classes.personalInfo3}>
                <Typography align="left" variant="h6">
                  <b>Part time Software Developer at 71bits</b>{" "}
                </Typography>
                <Typography
                  align="left"
                  variant="subtitle2"
                  color="textSecondary"
                  className="mb-2"
                >
                  <i>
                    Feb 2019 - Aug 2019 &nbsp; & &nbsp; Mar 2020 - July 2020
                  </i>
                </Typography>

                <Typography
                  align="justify"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  - Worked as a front end developer at a cross-platform desktop
                  application named
                  <a href="http://e-doctorscript.com/" target="_blank">
                    {" "}
                    E-DoctorScript{" "}
                  </a>
                  with React-Redux, a startup project by team 71bits
                </Typography>
                <Typography
                  align="justify"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  - Worked at the patient mobile app of{" "}
                  <a href="http://e-doctorscript.com/" target="_blank">
                    E-DoctorScript{" "}
                  </a>
                  with React-Native
                </Typography>
                <Typography
                  align="justify"
                  variant="subtitle2"
                  color="textSecondary"
                >
                  - Worked at an e-commerce project named{" "}
                  <a href="http://design-glasses.com/" target="_blank">
                    Design Glasses{" "}
                  </a>
                  , which is made with Shopware CMS. Fixed front end issues and
                  developed plugin.
                </Typography>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutInfo);
