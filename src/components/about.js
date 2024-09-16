import about from "../images/aboutUs.png";

export default function About() {
  return (
    <>
      <img className="aboutUsPng" src={about} />

      <p className="aboutUs">
        Welcome to {""}
        <span id="aboutBold">HOMEBOUND SERVICES</span>, where cleaning and
        property management meet a whole new level of sparkle! We’re a team of
        neat freaks and organizational pros who are passionate about keeping
        your spaces spotless and stress-free. Whether it’s sprucing up vacation
        rentals or managing properties with precision, we’ve got you covered.
        From cleaning every corner to handling the nitty-gritty of property
        management, we make sure everything runs smoothly, so you can focus on
        the fun stuff. At HOMEBOUND SERVICES, we don’t just clean – we create
        spaces that shine!
      </p>
    </>
  );
}
