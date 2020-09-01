import React from "react";
import { Grid, Paper, Typography, Chip } from "@material-ui/core";
import TranslateIcon from "@material-ui/icons/Translate";
import CodeIcon from "@material-ui/icons/Code";

import { withStyles } from "@material-ui/core/styles";
const styles = (theme) => ({
  sections: {
    marginTop: "20px",
  },
  containerDiv: {
    maxWidth: "1500px",
    margin: "40px auto",
  },
  personalInfo: {
    padding: "20px",
    backgroundColor: "#fff",
    height: "100%",
  },
  images: {
    display: "block",
    width: "80%",
    transition: "transform .2s",
    "&:hover": {
      transform: "scale(1.25) translate(10%, 10%)",
    },
  },
  infoHeader: {
    marginBottom: "5px",
  },
});

const AboutInfo = (props) => {
  const { classes } = props;
  return (
    <div className="px-lg-5 px-md-5">
      <div className="px-lg-5 px-md-5">
        <Paper elevation={24} className={classes.containerDiv}>
          <Grid container spacing={0} className={classes.sections}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo}>
                <img src="./img3.jpg" className={classes.images} />
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
                  HSC
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Govt K.C College, Jhenidah</b>
                </Typography>
                <Typography align="left" variant="subtitle2" className="pt-2">
                  SSC
                </Typography>
                <Typography align="left" variant="subtitle1">
                  <b>Govt Boys High School, Jhenidah</b>
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Grid container spacing={0}>
            <Grid item lg={3} md={6} sm={12} xs={12}>
              <div className={classes.personalInfo}>
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
              <div className={classes.personalInfo}>
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
              <div className={classes.personalInfo}>
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
        </Paper>
      </div>
    </div>
  );
};
export default withStyles(styles)(AboutInfo);
