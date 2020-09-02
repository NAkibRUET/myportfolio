import React from "react";
import { withStyles, makeStyles, useTheme } from "@material-ui/core/styles";
import { Grid, Typography } from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";

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
}));

const SkeletonDiv = () => {
  const classes = useStyles();
  return (
    <Grid item lg={4} md={6} sm={12} xs={12} style={{ padding: "30px" }}>
      <Card className={classes.card}>
        <CardHeader
          title={
            <Skeleton
              animation="wave"
              height={20}
              width="50%"
              style={{ marginBottom: 6 }}
            />
          }
          subheader={<Skeleton animation="wave" height={10} width="80%" />}
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
export default SkeletonDiv;
