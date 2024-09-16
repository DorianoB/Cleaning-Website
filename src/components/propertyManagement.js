import CleaningService from "./cleaningService";
import management from "../images/management.png";
import photography from "../images/photography.png";
import listing from "../images/listing.png";
import pricing from "../images/pricing.png";
import maintenance from "../images/maintenance.png";

export default function PropertyManagement() {
  return (
    <>
      <h3 className="cleaningLeft">You customize and we optimize</h3>
      <p className="cleaningServicesLeft">
        We understand what it takes to make your property shine in the market,
        offering efficient and professional end-to-end property management. Our
        commitment goes beyond just managing your home; we take pride in
        delivering exceptional guest management services, ensuring every guest
        receives the attention, care, and respect they deserve. With us, you and
        your guests are in expert hands every step of the way.
      </p>
      <img className="managementPng" src={management} />

      <h3 className="photograhpyRight">Professional Photography</h3>
      <p className="cleaningServicesRight">
        Stunning photos are essential for making your listing stand out. Because
        your success is our success, we go the extra mile to capture vibrant and
        captivating images of your property that truly shine.
      </p>
      <img className="photographyPng" src={photography} />

      <h3 className="listingLeft">Listing Creation</h3>
      <p className="cleaningServicesLeft">
        In the short-term rental market, your listing is crucial. Recognizing
        the impact of first impressions, we create thorough and engaging
        descriptions that highlight your property's unique features and make it
        truly stand out.
      </p>
      <img className="listingPng" src={listing} />

      <h3 className="cleaningRight">Advanced Pricing Strategies</h3>
      <p className="cleaningServicesRight">
        Aligning pricing with supply and demand is key to maintaining high
        occupancy and boosting revenue. To achieve this, we analyze and monitor
        the market fluctuations, allowing us to adjust prices dynamically and
        optimize your returns.
      </p>
      <img className="pricingPng" src={pricing} />

      <h3 className="maintenanceLeft">Maintenance Management</h3>
      <p className="cleaningServicesLeft">
        We are committed to maintaining your property to the highest standards.
        Our team promptly handles any maintenance issues, ensuring your property
        remains in excellent condition and providing a seamless and comfortable
        experience for your guests.
      </p>
      <img className="maintenancePng" src={maintenance} />

      <CleaningService />
    </>
  );
}
