import imageD from '../images/d.jpg';

function About() {
  let styles = {
    width:"100vw",
    height:"100vh",
    objectFit:"cover",
  }
  return <div> 
    <img src={imageD} style={styles}/>
  </div>;
}

export default About;