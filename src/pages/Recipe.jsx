import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Recipe() {
  let params = useParams();
  const [deets, setDeets] = useState({});
  const [active, setActive] = useState("instructions");
  const fetchDetails = async () => {
    const data = await fetch(
      `https://api.spoonacular.com/recipes/${params.id}/information?apiKey=${process.env.REACT_APP_KEY}`
    );
    const res = await data.json();
    setDeets(res);
  };

  useEffect(() => {
    fetchDetails();
  }, [params.name]);

  return (
    <Wrapper>
      <div>
        <h2>{deets.title}</h2>
        <img src={deets.image} alt="" />
      </div>
      <Info>
        <Button
          className={active === "instructions" ? "active" : ""}
          onClick={() => setActive("instructions")}
        >
          Instructions
        </Button>
        <Button
          className={active === "ingredients" ? "active" : ""}
          onClick={() => setActive("ingredients")}
        >
          Ingredients
        </Button>
        {active === "instructions" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: deets.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: deets.instructions }}></h3>
          </div>
        )}
        {active === "ingredients" && (
          <ul>
            {deets.extendedIngredients.map((ing) => (
              <li key={ing.id}>{ing.original}</li>
            ))}
          </ul>
        )}
      </Info>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin-top: 10rem;
  margin-bottom: 5rem;
  display: flex;
  .active {
    background: linear-gradient(35deg, #494949, #313131);
    color: white;
  }
  h2 {
    margin-bottom: 2rem;
  }
  li {
    font-size: 1.2rem;
    line-height: 2.5rem;
  }
  ul {
    margin-top: 2rem;
  }
`;

const Button = styled.button`
  padding: 1rem 2rem;
  color: #313131;
  background: white;
  border: 2px solid black;
  margin-right: 2rem;
`;

const Info = styled.div`
  margin-left: 2rem;
`;

export default Recipe;
