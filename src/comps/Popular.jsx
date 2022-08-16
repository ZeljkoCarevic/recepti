import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/splide/dist/css/splide.min.css";

function Popular() {
  const [popular, setPopular] = useState([]);

  useEffect(() => {
    getPopular();
  }, []);

  const getPopular = async () => {
    const res = await fetch(
      `https://api.spoonacular.com/recipes/random?apiKey=${process.env.REACT_APP_KEY}&number=9`
    );
    const data = await res.json();
    setPopular(data.recipes);
  };

  return (
    <div>
      <Wrapper>
        <h3>Popular pics</h3>

        <Splide>
          {popular.map((recipe) => {
            return (
              <SplideSlide>
                <Card>
                  <p>{recipe.title}</p>
                  <img src={recipe.image} alt="" />
                </Card>
              </SplideSlide>
            );
          })}
        </Splide>
      </Wrapper>
      ;
    </div>
  );
}

const Wrapper = styled.div`
  margin: 4rem, 0rem;
`;
const Card = styled.div`
  min-height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  img {
    border-radius: 2rem;
  }
`;

export default Popular;
