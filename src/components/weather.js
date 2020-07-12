import React from "react";
import { withStyles } from "@material-ui/core/styles";
import { Grid, Paper, Typography } from "@material-ui/core";

const styles = (theme) => ({
  textColor: {
    color: "#7f7f7f",
  },
  images: {
    display: "block",
    margin: "-15px auto",
    padding: "0",
    width: "100px",
  },
  images2: {
    display: "block",
    margin: "-15px auto",
    padding: "0",
    width: "50px",
  },

  sections: {
    marginTop: "20px",
  },
  WeatherDiv1: {
    padding: "45px 0px",
  },
});
function formatHour(hour10) {
  hour10 = new Date(hour10 * 1000);
  hour10 = hour10.getHours();
  var ampm10 = hour10 >= 12 ? "PM" : "AM";
  hour10 = hour10 % 12;
  hour10 = hour10 ? hour10 : 12;
  let str = hour10 + " " + ampm10;
  return str;
}
function getImageUrl(icon) {
  let url = "http://openweathermap.org/img/wn/" + icon + "@2x.png";
  return url;
}
class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  renderHourly() {
    if (this.props.weatherData.hourly.length > 0) {
      let i = 1;
      return this.props.weatherData.hourly.map((element, index) => {
        if (i <= 4) {
          i++;
          return (
            <Grid item xs={3} key={element.dt}>
              <Typography
                align="center"
                variant="subtitle2"
                style={{ color: "white" }}
              >
                {formatHour(element.dt)}
              </Typography>
              <Typography
                align="center"
                variant="h6"
                color="primary"
                style={{ color: "white" }}
              >
                {Math.round(element.temp - 273)}
                &deg;
              </Typography>
              <img
                src={getImageUrl(element.weather[0].icon)}
                style={{
                  display: "block",
                  margin: "-15px auto",
                  padding: "0",
                  width: "50px",
                }}
              />
            </Grid>
          );
        }
      });
    } else {
      return null;
    }
  }
  render() {
    const { classes } = this.props;
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "June",
      "July",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    let timeStamp = new Date(this.props.weatherData.current.dt * 1000);
    let months1 = months[timeStamp.getMonth()];
    let date = timeStamp.getDate();

    date = date + months1;

    //let url = process.env.PUBLIC_URL + "./rain1.webp";
    let url1;
    let icon = this.props.weatherData.current.weather[0].icon;
    if (icon == "50d") {
      url1 = process.env.PUBLIC_URL + "./haze_day.jpg";
    }
    //
    else if (icon == "04n" || icon == "04d") {
      url1 = process.env.PUBLIC_URL + "./cloudy.jpeg";
    }
    //
    else if (icon == "10n" || icon == "9n" || icon == "10d" || icon == "9d") {
      url1 = process.env.PUBLIC_URL + "./rain1.webp";
    }
    //
    else if (icon == "11n" || icon == "11d") {
      url1 = process.env.PUBLIC_URL + "./thunderStorm.jpg";
    }
    //
    else {
      url1 = process.env.PUBLIC_URL + "./else.jpg";
    }

    return (
      <div
        style={{
          backgroundImage: `url(${url1})`,
        }}
        className={classes.WeatherDiv1}
      >
        <Typography align="center" variant="h5" style={{ color: "white" }}>
          {this.props.CT_NAME}, {date}
        </Typography>

        <Grid container style={{ padding: 20 }}>
          <Grid item lg={6} xs={6}>
            <Typography
              align="center"
              variant="subtitle2"
              style={{ color: "white" }}
            >
              Day {Math.round(this.props.weatherData.daily[0].temp.day - 273)}
              &deg; - Night{" "}
              {Math.round(this.props.weatherData.daily[0].temp.night - 273)}
              &deg;
            </Typography>
            <Typography align="center" variant="h3" style={{ color: "white" }}>
              {Math.round(this.props.weatherData.current.temp - 273)}&deg;C
            </Typography>
            <Typography
              align="center"
              variant="subtitle2"
              style={{ color: "white" }}
            >
              Feels Like{" "}
              {this.props.weatherData.hourly.length > 0
                ? Math.round(this.props.weatherData.hourly[0].feels_like - 273)
                : 0}
              &deg;
            </Typography>
          </Grid>
          <Grid item lg={6} xs={6}>
            <img
              src={getImageUrl(this.props.weatherData.current.weather[0].icon)}
              className={classes.images}
            />
            <Typography
              align="center"
              variant="subtitle1"
              style={{ color: "white" }}
            >
              {this.props.weatherData.current.weather[0].main}
            </Typography>
          </Grid>
        </Grid>
        <hr />
        <Grid container>{this.renderHourly()}</Grid>
      </div>
    );
  }
}
export default withStyles(styles)(Weather);
