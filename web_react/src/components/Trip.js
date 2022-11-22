import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Projects</h1>
      <p>During my internship in different companies, I managed to do some projects</p>
      <div className="tripcard">
        <TripData
        image={Trip1}
        heading="Java"
        text = "Project in Java"
        />

<TripData
        image={Trip2}
        heading="Python"
        text = "Project in Python"
        />

<TripData
        image={Trip3}
        heading="C++"
        text = "Project in C++"
        />
      </div>
    </div>
  );
}

export default Trip;