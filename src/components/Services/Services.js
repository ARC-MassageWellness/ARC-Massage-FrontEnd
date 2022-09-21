import {
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { db } from "./db/db";
import "./services.css";
import Intakeq from "../intakeq/intakeq";
import { Tab, Tabs } from "react-bootstrap";
// import PackageSale from './sale/PackageSale';

export default function Services(props) {

  const basicMassage = (service) => {
    let result = db.filter((filter) => filter.type === service);

    let finalResult = result.map((el, idx) => {
      return (
        <Grid item key={idx}className="sessionWidthGrid">
          <img className="cardImage" src={el.image} alt="data" />
          <Card className="card" sx={{ maxWidth: 345 }}>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {el.title}
              </Typography>
              <Typography>{el.addOn && el.addOn}</Typography>
              <Typography variant="body2" color="text.secondary">
                {el.bio}
              </Typography>
            </CardContent>
            <CardActions>
              <div className="priceButton">
                {el.addOn && "+"}${el.cost}
              </div>
            </CardActions>
          </Card>
        </Grid>
      );
    });
    return finalResult;
  };

  return (
    <div className='serviceContainer'>
      <div >
        <h2 className="servicesTitle">Services</h2>
        <div className="servicesInfo">
          Here's what to consider when you book with us.
        </div>

        {/* <PackageSale /> */}
        <Tabs
          defaultActiveKey="basic"
          id="uncontrolled-tab-example"
          className="mb-3"
          fill
        >
          <Tab eventKey="basic" title="Massage" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage("basic")}
            </Grid>
          </Tab>
          <Tab eventKey="lymphatic" title="Lymphatic" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage("lymphatic")}
            </Grid>
          </Tab>
          <Tab eventKey="prenatal" title="Prenatal" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage("prenatal")}
            </Grid>
          </Tab>
          <Tab eventKey="cupping" title="Cupping" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage("cupping")}
            </Grid>
          </Tab>
          <Tab eventKey="enhancement" title="Enhancements" tabClassName="tab">
            <Grid container spacing={2} className="gridContainer">
              {basicMassage("enhancement")}
            </Grid>
          </Tab>
        </Tabs>

      </div>
      <section className="bookAppContainer">
        <Intakeq />
      </section>
    </div>
  );
}
