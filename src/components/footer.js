import email from "../images/email.png";
import phone from "../images/phone.png";

export default function Footer() {
  return (
    <>
      <div className="border" id="contact">
        <p>
          GET IN TOUCH WITH US:
          <span>
            {" "}
            <img className="email" src={email} />
            <a href="mailto:hshomeboundservices@gmail.com">
              hshomeboundservices@gmail.com
            </a>
          </span>
          <span>
            {" "}
            <img className="phone" src={phone} />
            <a href="tel:+0481816752">0481 816 752</a>
          </span>
        </p>
      </div>
    </>
  );
}
