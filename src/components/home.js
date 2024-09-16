import home from "../images/profilepic01.png";

export default function Home() {
  return (
    <>
      <h2>We take care of your home</h2>
      <img className="profilepic" src={home} alt="Profile Picture" />
    </>
  );
}
