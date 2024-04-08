import axios from "axios";
import React from "react";
import ShowsCard from "../components/ShowsCard";
import { Grid } from "@material-ui/core";

interface stateType {
  events: any[];
}

class Shows extends React.Component<{}, stateType> {
  constructor(props: any) {
    super(props);

    this.state = {
      events: [],
    };
  }
  fetchData = async () => {
    try {
      // const res = await axios.get(
      //   ``
      // );
      this.setState({ events: res.data.events });
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount(): void {
    this.fetchData();
  }

  render() {
    const { events } = this.state;
    return (
      <div>
        <h1>shows</h1>
        <Grid
          container
          direction="row"
          style={{ justifyContent: "center", alignItems: "center" ,gap:10}}
        >
          {events.length > 0 &&
            events.map((event, idx) => (
              <Grid item key={idx} style={{width:400}}>
                <ShowsCard event={event} />
              </Grid>
            ))}
        </Grid>
      </div>
    );
  }
}

export default Shows;
