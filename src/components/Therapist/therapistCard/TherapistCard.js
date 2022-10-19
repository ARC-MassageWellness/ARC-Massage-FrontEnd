import { Grid } from "@mui/material";
import "./therapistCard.css";

export default function TherapistCard({ el }) {
  const { name, bio, services, licenses } = el;
  return (
    <section className="therapistSection">
      <Grid container>
        <Grid item xs={12} sm={12} md={6} lg={3}>
          <img
            src="https://via.placeholder.com/400x400?text=Profile+Photo"
            alt="portrait"
            className="therapistImg"
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={7}>
          <section className="therapistInfo">
            <div>{name}</div>
            <div className="therapistCardLicense">
              {licenses.map((el, idx) => (
                <span key={idx}>{el} </span>
              ))}
            </div>
          </section>
        </Grid>
        <Grid item xs={12} sm={12} md={0} lg={2}>
          <section className="therapistServiceSection">
            <section>Services:</section>
            <section>
              {services.map((el, idx) => (
                <div key={idx}>{el} </div>
              ))}{" "}
            </section>
          </section>
        </Grid>

        {/* Next line in Grid */}
        <Grid item xs={0} sm={12} md={0} lg={3}></Grid>
        <Grid item xs={12} sm={12} md={10} lg={7}>
          <div className='TherapistBio'>{bio}</div>
        </Grid>
        <Grid item xs={0} sm={12} md={2} lg={2}></Grid>
      </Grid>
    </section>
  );
}
