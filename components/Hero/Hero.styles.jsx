import Link from "next/link";
import styled from "styled-components";

export const HeroSection = styled.section`
  background-color: #ff4655;
  color: white;
  padding: 50px 0;
  text-align: center;
`;

export const Title = styled.h1`
  font-size: 3rem;
`;

export const Subtitle = styled.p`
  font-size: 1.5rem;
  margin-top: 10px;
`;

export const ButtonGroup = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
`;

export const Button = styled(Link)`
  margin: 10px;
  padding: 10px 20px;
  font-size: 1.2rem;
  background-color: black;
  color: white;
  text-decoration: none;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: white;
    color: black;
  }
`;
