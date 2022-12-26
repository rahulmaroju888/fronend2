import React from "react";
import { NavLink } from "react-router-dom";

function HeroSection({ myData }) {
  const { name } = myData;
  return (
    <div>
      <p>
        <h1>{name}</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <NavLink to='/'>
          <button type='button' class='btn btn-primary'>
            Show Now
          </button>
        </NavLink>
        <div className=''>
          <figure>
            <img src='./images/store1.png'></img>
          </figure>
        </div>
      </p>
    </div>
  );
}

export default HeroSection;
