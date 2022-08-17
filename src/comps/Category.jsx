import React from "react";
//react-icons na google, prejaka stvar frfr
import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";
import styled from "styled-components";
//navlink daje class active
import { NavLink } from "react-router-dom";
//moran prominit ovo asian
function Category() {
  return (
    <List>
      <NavLink to={"/cousine/Italian"}>
        <FaPizzaSlice />
        <h4>Italian</h4>
      </NavLink>
      <NavLink to={"/cousine/American"}>
        <FaHamburger></FaHamburger>
        <h4>American</h4>
      </NavLink>
      <NavLink to={"/cousine/Chinese"}>
        <GiNoodles></GiNoodles>
        <h4>Chinese</h4>
      </NavLink>

      <NavLink to={"/cousine/Asian"}>
        <GiChopsticks></GiChopsticks>
        <h4>asian</h4>
      </NavLink>
    </List>
  );
}

const List = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0rem;
  gap: 2rem;
`;

const SLink = styled(NavLink)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  margin-right: 2rem;
  cursor: pointer;
  transform: scale(0.8);
  h4 {
    color: white;
    font-site: 1rem;
  }
  svg {
    color: white;
    font-size: 1.5rem;
  }
  &.active {
    background: blue;
  }
`;

export default Category;
