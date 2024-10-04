import React, { useState, useEffect } from "react";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";
import Footer from "./footer";
import Rating from "./rating";
import review from "../images/review.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const reviews = [
  {
    id: 1,
    name: "Katherine D, Banora Point",
    review:
      "Highly recommend Doriano. Our Airbnb was managed seamlessly, with efficient and reliable bookings and communication. And our house was kept in great condition.",
    rating: 5,
  },
  {
    id: 2,
    name: "Jane Smith",
    review: "Very professional and quick.",
    rating: 4,
  },
  {
    id: 3,
    name: "Mike Johnson",
    review: "I will definitely use them again.",
    rating: 5,
  },
];

export default function Reviews() {
  // const [reviews, setReviews] = useState([]);

  // useEffect(() => {
  //   fetch("http://localhost:1337/api/testimonials", {
  //     headers: {
  //       Authorization:
  //         "Bearer a2cec26802a977ccbc5d6a5b1cbbd91f38d5902087d21a8b316dbfd46163dc8b8fe13c34a218e9b39f314ec2db383ce96b7c7a2803fbae1992bd2dcaaa8db71968fe6cb5df44ab53e739309d44e6a2c293d0ad6af62552ab6f48488f8a4e24b8df0453a1059a01ef211c3cc45e179bc429e6ca485195de4fe1701a3a2f2f189d",
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((json) => {
  //       console.log(json.data);
  //       setReviews(json.data);
  //     });
  // }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE
  const settings = {
    dots: true,
    infinite: true,
    // speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    // autoplay: true,
    // autoplaySpeed: 3000,
  };

  return (
    <>
      <section className="reviewsection">
        <container>
          <img className="reviewpng" src={review} />
        </container>
        {/* {reviews.map((r) => (
          <>
            <fieldset id="fieldreview">
              <p className="starRating">{r.attributes.Rating}</p>
              <p className="review">{r.attributes.Review}</p>
              <p className="date">{r.attributes.Date}</p>
              <p className="reviewRichtext">
                {r.attributes.reviewRichtext !== null && (
                  <BlocksRenderer
                    content={r.attributes.reviewRichtext}
                  ></BlocksRenderer>
                )}
              </p>
            </fieldset>
          </>
        ))} */}
        {/* <h3 className="reviewtitle">
          You set the drive, and we deliver the five
        </h3> */}
        <h3 className="reviewtitle">
          You set the bar, and we deliver the star
        </h3>
        <container id="star">
          <Rating />
          {/* </container>
        <p className="reviewname">Katherine D, Banora Point</p>
        <p className="reviews">
          Highly recommend Doriano. Our Airbnb was managed seamlessly, with
          efficient and reliable bookings and communication. And our house was
          kept in great condition.
        </p>

        <container> */}
          <div>
            <Slider {...settings}>
              {reviews.map((review) => (
                <div key={review.id} className="review-item">
                  <p className="reviewname">{review.name}</p>
                  <p className="reviews">{review.review}</p>{" "}
                </div>
              ))}
            </Slider>
          </div>
          <a
            id="writeareview"
            href="https://www.google.com/maps/place/Homebound+Services/@-30.6637087,152.4510941,7z/data=!4m6!3m5!1s0xef9998617bc7e4d:0xe94329dcf5a091f!8m2!3d-30.6637087!4d152.4510941!16s%2Fg%2F11wfgdzhhf?entry=ttu&g_ep=EgoyMDI0MDkyNS4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
          >
            Write a review
          </a>
        </container>
      </section>
      <hr></hr>
      <Footer />
    </>
  );
}
