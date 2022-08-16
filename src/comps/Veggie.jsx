import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Veggie() {
  const [veggie, setVeggie] = useState([]);

  useEffect(() => {
    getVeggie();
  }, []);

  const getVeggie = async () => {
    const check = localStorage.getItem("veggie");
    if (check) {
      setVeggie(JSON.parse(check));
    } else {
      const res = await fetch(
        `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9&tags=vegetarian`
      );
      const data = await res.json();
      localStorage.setItem("veggie", JSON.stringify(data.recipes));
      setVeggie(data.recipes);
    }
  };
  return (
    <div>
      <Wrapper>
        <h3>Veggie pics</h3>

        <Splide
          options={{
            perPage: 4,
            arrows: false,
            drag: "free",
            gap: "5rem",
          }}
        >
          {veggie.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="" />
                  <gradient />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
    </div>
  );
}

export default Veggie;
const Wrapper = styled.div`
  margin: 4rem, 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  position: relative;
  img {
    border-radius: 2rem;
    position: absolute;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  p {
    position: absolute;
    z-index: 10;
    left: 50%;
    bottom: 0%;
    transform: translate(-50%, 0%);
    color: white;
    width: 100%;
    text-align: center;
    font-weight: 500;
    font-size: 1.5rem;
    height: 40%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const gradient = styled.div`
  z-index: 3;
  position: aboslute;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
`;
