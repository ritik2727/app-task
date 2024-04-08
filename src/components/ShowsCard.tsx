import React, { Component } from "react";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Typography,
  withStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import { Theme, createStyles, WithStyles } from "@material-ui/core/styles";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      maxWidth: 400,
      // width:400,
      height: 400,
      // padding:10,
      backgroundPosition:'center',
      border:'1px solid black',
      marginTop:10,
      justifyContent: 'center',
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center'
      // marginTop:20
    },
    media: {
      position: "relative",
      height: 350,
    },
    contentOverlay: {
      padding:40,
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      display: "flex",
      flexDirection: "column",
      alignItems: "stretch",
      // backgroundPosition:'center',

      justifyContent: "flex-end",
      // backgroundColor: "rgba(0, 0, 0, 0.2)", // Add some opacity to overlay
      color: "white", // Text color for overlay
      zIndex: 9999,
    },
  });

interface Props extends WithStyles<typeof styles> {
  event: any;
}

class ShowsCard extends Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  convertImage = (imgUrl: string) => {
    const imgId = imgUrl.split("/")[5];
    const img = `https://drive.google.com/thumbnail?id=${imgId}`;
    return img;
  };

  formatDate = (dateString: string) => {
    const options: any = { month: "long", day: "numeric", year: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  render() {
    const { classes, event } = this.props;
    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={this.convertImage(event.imgUrl)}
          title={event.name}
        >
          <CardContent className={classes.contentOverlay}>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 2,
                }}
              >
                <div>
                  <Typography style={{ fontSize: 12 }}>
                    {event.eventName}
                  </Typography>
                </div>
                <div>
                  <Typography variant="body2" style={{ fontSize: 12 }}>
                    {this.formatDate(event.date)}
                  </Typography>
                </div>
              </div>
            </div>
            <div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                  color: "white",
                  fontWeight: "bold",
                }}
              >
                <div>
                  <Typography variant="body1" style={{ fontSize: 12 }}>
                    {event.cityName}
                  </Typography>
                </div>

                <div>
                  <Typography variant="body2" style={{ fontSize: 12 }}>
                    {event.weather} | {Math.floor(event.distanceKm / 100)} Km
                  </Typography>
                </div>
              </div>
            </div>
          </CardContent>
        </CardMedia>
      </Card>
    );
  }
}

export default withStyles(styles)(ShowsCard);
