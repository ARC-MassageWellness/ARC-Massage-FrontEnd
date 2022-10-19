import TherapistCard from "./therapistCard/TherapistCard";
import "./therapists.css";
import { db } from "./therapistsDB/db";
// import familyPhoto from 'https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'

export default function Therapist(props) {
  const therapistCards = db.map((el, idx) => {
    return (
        <div key={idx}>
          <TherapistCard el={el} /> <hr />
        </div>
    );
  });
  return (
    <>
      <img
        src="https://images.unsplash.com/photo-1460627390041-532a28402358?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
        alt="family"
        className="familyPhoto"
      />
      {therapistCards}
    </>
  );
}
