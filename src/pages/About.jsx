// import imageD from "Images/d.jpg";
import imageD from "../Images/d.jpg";

function About() {
  let styles = {
    width: "100vw",
    height: "100vh",
    objectFit: "cover",
  };
  return (
    <div>
      <img src={imageD} style={styles} />
    </div>
  );
}

export default About;
