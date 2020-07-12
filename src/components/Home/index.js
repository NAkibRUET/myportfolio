import React from "react";
import { Grid, Paper, Typography } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Axios from "axios";
import AppConfig from "../../constants/appConfig";
import Weather from "../weather";
import Weather2 from "../weather";
import { Spin } from "antd";
import Clock from "react-clock";
import "react-clock/dist/Clock.css";

const styles = (theme) => ({
  Spinner: {
    textAlign: "center",
    background: "rgba(0, 0, 0, 0.05)",
    borderRadius: "4px",
    marginBottom: "20px",
    padding: "153px 50px",
    height: "100%",
    //margin: "20px 0",
  },
  textColor: {
    color: "#7f7f7f",
  },
  images: {
    borderRadius: "50%",
    display: "block",
    marginLeft: "auto",
    marginRight: "auto",
    width: "50%",
  },
  personalInfo: {
    padding: "30px 0px",
    backgroundColor: "#000000",
    height: "100%",
  },
  sections: {
    marginTop: "20px",
  },
  ClockPos: {
    backgroundColor: "#ffffff",
    borderColor: "#ffffff",
    borderRadius: "50%",
  },

  WeatherDiv2: {
    padding: "45px 0px",
  },
});

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      weatherData1: {
        current: {
          dt: 0,
          temp: 0,
          feels_like: 0,
          weather: [
            {
              icon: "50n",
              main: "",
            },
          ],
        },
        daily: [
          {
            temp: {
              day: 0,
              night: 0,
            },
          },
        ],
        hourly: [],
      },
      weatherData2: {
        current: {
          dt: 0,
          temp: 0,
          feels_like: 0,
          weather: [
            {
              icon: "50n",
              main: "",
            },
          ],
        },
        daily: [
          {
            temp: {
              day: 0,
              night: 0,
            },
          },
        ],
        hourly: [],
      },
      loading: false,
      noInternet1: false,
      noInternet2: false,
    };
  }
  componentDidMount() {
    this.setState({
      loading: true,
    });
    setInterval(() => this.setState({ date: new Date() }), 1000);
    Axios.get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=23.8103&lon=90.4125&appid=" +
        AppConfig.WEATHER_API_KEY
    )
      .then((response) => {
        this.setState({
          weatherData1: response.data,
        });
        setTimeout(() => {
          this.setState({ loading: false });
        }, 1500);
      })
      .catch((response) => {
        this.setState({ loading: false, noInternet1: true });
      });
    Axios.get(
      "https://api.openweathermap.org/data/2.5/onecall?lat=23.5450&lon=89.1726&appid=" +
        AppConfig.WEATHER_API_KEY
    )
      .then((response) => {
        this.setState({
          weatherData2: response.data,
        });
      })
      .catch((response) => {
        this.setState({ loading: false, noInternet2: true });
      });
  }
  render() {
    const { classes } = this.props;

    return (
      <div className="px-lg-5 px-md-5">
        <div className="px-lg-5 px-md-5">
          <Paper elevation={24}>
            <Grid container spacing={0} className={classes.sections}>
              <Grid item lg={4} md={6} sm={12} xs={12}>
                <div className={classes.personalInfo}>
                  <img src={"./01.jpg"} className={classes.images} />
                  <Typography align="center" variant="h5" color="primary">
                    Nakib Hossain
                  </Typography>
                  <Typography align="center" variant="h6" color="secondary">
                    Software Developer
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle2"
                    className={classes.textColor}
                  >
                    hussain0296@gmail.com
                  </Typography>
                  <Typography
                    align="center"
                    variant="subtitle2"
                    className={classes.textColor}
                  >
                    +8801967101376
                  </Typography>
                </div>
              </Grid>
              <Grid item lg={8} md={6} sm={12} xs={12}>
                {this.state.loading ? (
                  <div className={classes.Spinner}>
                    <Spin size="large" />
                  </div>
                ) : (
                  <Grid container>
                    <Grid item lg={6} xs={12}>
                      {this.state.noInternet1 == false ? (
                        <Weather
                          weatherData={this.state.weatherData1}
                          CT_NAME="Dhaka"
                        />
                      ) : null}
                    </Grid>
                    <Grid item lg={6} xs={12}>
                      {this.state.noInternet2 == false ? (
                        <Weather
                          weatherData={this.state.weatherData2}
                          CT_NAME="Jhenidah"
                        />
                      ) : null}
                    </Grid>
                  </Grid>
                )}
              </Grid>
            </Grid>
          </Paper>
          <div
            style={{ display: "block", width: "150px", margin: "20px auto" }}
          >
            <Clock
              value={this.state.date}
              hourHandLength={60}
              hourHandOppositeLength={20}
              hourHandWidth={8}
              hourMarksLength={20}
              hourMarksWidth={8}
              minuteHandLength={90}
              minuteHandOppositeLength={20}
              minuteHandWidth={6}
              minuteMarksWidth={3}
              secondHandLength={75}
              secondHandOppositeLength={25}
              secondHandWidth={3}
              size={150}
              minuteMarksLength={6}
              renderHourMarks={true}
              renderMinuteHand={true}
              renderMinuteMarks={true}
              renderSecondHand={true}
              className={classes.ClockPos}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default withStyles(styles)(Home);
