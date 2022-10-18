import { Grid } from "@mui/material";
import "./therapistCard.css";

export default function TherapistCard({ el, idx }) {
  const { name, bio, services, licenses } = el;
  return (
    <section className="therapistSection" key={idx}>
      <Grid container>
        <Grid item xs={3}>
          <img
            src="https://via.placeholder.com/400x400?text=Profile+Photo"
            alt="portrait"
            // className="therapistImg"
          />
        </Grid>
        <Grid item xs={7}>
          <section className="therapistInfo">
            <div>{name}</div>
            <div className="therapistCardLicense">
              {licenses.map((el, idx) => (
                <span key={idx}>{el} </span>
              ))}
            </div>
            <div className="therapistBio">{bio}</div>
          </section>
        </Grid>
        <Grid item xs={2}>
          <section className='therapistServiceSection'>
            <section>Services:</section>
            <section>
              {services.map((el, idx) => (
                <div key={idx}>{el} </div>
              ))}{" "}
            </section>
          </section>
        </Grid>
      </Grid>
    </section>
  );
}
