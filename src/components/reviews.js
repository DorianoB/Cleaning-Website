import React, { useState, useEffect } from "react";
import Rating from "./rating";

export default function Reviews() {
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    fetch("http://localhost:1337/api/testimonials", {
      headers: {
        Authorization:
          "Bearer a2cec26802a977ccbc5d6a5b1cbbd91f38d5902087d21a8b316dbfd46163dc8b8fe13c34a218e9b39f314ec2db383ce96b7c7a2803fbae1992bd2dcaaa8db71968fe6cb5df44ab53e739309d44e6a2c293d0ad6af62552ab6f48488f8a4e24b8df0453a1059a01ef211c3cc45e179bc429e6ca485195de4fe1701a3a2f2f189d",
      },
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        setReviews(json.data);
      });
  }, []);
  // use an empty dependencies array, so we only run the fetch request ONCE

  return (
    <div>
      {reviews.map((r) => (
        <>
          <fieldset id="fieldreview">
            <p className="starRating">{r.attributes.Rating}</p>
            <p className="review">{r.attributes.Review}</p>
            <p className="date">{r.attributes.Date}</p>
            <p className="reviewRichtext">
              {r.attributes.reviewRichtext?.toString()}
            </p>
          </fieldset>
        </>
      ))}
    </div>
  );
}
