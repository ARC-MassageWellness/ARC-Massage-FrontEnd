import { Card, CardContent, Grid, Typography } from "@mui/material";
import TherapistCard from "./therapistCard/TherapistCard";
import "./therapists.css";
import { db } from "./therapistsDB/db";

export default function Therapist(props) {
  let therapists = db.map((el, idx) => {
    return (
      <Grid item key={idx} className="sessionWidthGrid">
        <img className="cardImage" src={el.image} alt="data" />
        <div className="therapistCards">
          <Card className="card therapistCards" sx={{ maxWidth: 940 }}>
            <CardContent className="TherapistCardContent">
              <Typography
                variant="h5"
                component="div"
                className="therapistName"
              >
                {el.name}
              </Typography>

              <Typography
                gutterBottom
                className="therapistLicenses"
                component="div"
              >
                {el.licenses.length &&
                  el.licenses.map((el, idx) => <span key={idx}>{el} </span>)}
              </Typography>

              <Grid container>
                <Grid item xs={8}>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    component="div"
                    className="therapistBioSection"
                  >
                    {el.bio}
                  </Typography>
                </Grid>

                <Grid item xs={4}>
                  <Typography
                    color="text.secondary"
                    component="div"
                    className="therapistServices therapistBioSection"
                  >
                    <section className="therapistServiesTitles">
                      Services:
                    </section>

                    {el.services.map((el, idx) => (
                      <div key={idx} className="therapistServicesDiv">
                        {el}{" "}
                      </div>
                    ))}
                  </Typography>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </div>
      </Grid>
    );
  });

  const therapistCards = db.map((el, idx) => {
    return (
      <>
        <TherapistCard el={el} idx={idx} /> <hr />
      </>
    );
  });
  return (
    <>
      <img
        src="https://via.placeholder.com/1800x200?text=Nicolle's+Family+Photo"
        alt="family"
        className="familyPhoto"
        />
        {therapistCards}
        <div className='OR'>OR</div>
      <section>
        <Grid
          container
          spacing={2}
          className="gridContainer therapistContainer"
        >
          {therapists}
        </Grid>
      </section>
    </>
  );
}
