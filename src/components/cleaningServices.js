import CleaningService from "./cleaningService";
import about from "../images/cleaningServices.png";
import cleaningService from "../images/service.png";
import washing from "../images/washing.png";
import essentials from "../images/essentials.png";
import Footer from "./footer";

export default function CleaningServices() {
  return (
    <>
      <h3 className="cleaningLeft">We love a clean and tidy home</h3>
      <p className="cleaningServicesLeft">
        With a passion for making spaces sparkle and a dedication to exceptional
        service, our cleaning service sees a unique potential in the industry:
        to do more than just clean. We believe in creating environments where
        people feel truly comfortable, valued, and at ease. Our team is
        committed to delivering meticulous, reliable, and friendly cleaning
        services that go beyond expectations. Every detail matters, and we take
        pride in knowing that our clients feel well-cared for and in good hands
        with us. For us, cleaning is not just a task — it's a way to enhance
        lives and bring peace of mind.{" "}
      </p>
      <img className="cleaningServicesPng" src={about} />

      <h3 className="cleaningRight">Cleaning Services</h3>
      <p className="cleaningServicesRight">
        With years of industry experience, we've discovered that cleaning holds
        significant potential to achieve the highest standards we offer. In the
        case of short-term rentals, the most challenging aspect is the turnover
        process, where ensuring both owner and guest satisfaction is key to
        providing exceptional service. <br></br>We pride ourselves on offering a
        range of cleaning services, including:
        <ul>
          <li>Airbnb cleaning</li>
          <li>Commercial cleaning</li>
          <li>Residentail cleaning</li>
          <li>Bond cleaning</li>
        </ul>
      </p>
      <img className="servicesPng" src={cleaningService} />

      <h3 className="cleaningLeft">Wash, Dry and Fold</h3>
      <p className="cleaningServicesLeft">
        Our wash, dry, and fold service ensures your guests always enjoy fresh,
        clean sheets and towels. We take care of laundering your bedding,
        towels, and other linens, washing, drying, and folding them with care.
        With our service, you can maintain high standards of cleanliness and
        comfort for every stay, hassle-free.
      </p>
      <img className="washingPng" src={washing} />

      <h3 className="cleaningRight">Restocking Essentials</h3>
      <p className="cleaningServicesRight">
        Small details can greatly enhance your guests' comfort, convenience, and
        overall experience. For instance, we make sure to stock the kitchen
        daily with coffee, tea, and sugar. We also restock essential items such
        as body wash, shampoo, conditioner, hand soap, and toilet paper in the
        bathroom. Additionally, we ensure there is laundry detergent,
        dishwashing liquid, and that the kitchen has fresh sponges, wipes, tea
        towels, and bin liners.
      </p>
      <img className="essentialPng" src={essentials} />
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <hr></hr>
      <Footer />
    </>
  );
}
