import styled from "styled-components";
import Image from "next/image";

export const HeroContainer = styled.section`
  display: flex;
  width: 100%;
  min-height: 100vh;
  justify-content: center;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    min-height: auto;
  }
`;

export const ImageColumn = styled.div`
  width: 500px;
  height: 697px;
  position: relative;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 100%;
    height: 50vh;
    min-height: 300px;

    &.left-image {
      order: 1;
    }
    &.right-image {
      order: 3;
    }
  }
`;

export const ColumnsWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

export const StyledImage = styled(Image)`
  object-fit: cover;
`;

export const TextColumn = styled.div`
  flex: 1;
  height: 697px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem;
  background-color: #FFF9F8;
  text-align: center;
  min-height: 697px;

  @media (max-width: 768px) {
    width: 100%;
    order: 2;
    padding: 3rem 1rem;
    min-height: 50vh;
  }
`;

export const MainText = styled.h1`
  font-family: var(--font-playfair);
   font-size: 90px; 
  font-weight: 700;
  color: #B0726E;
  line-height: 1.24;
  letter-spacing: 0.02em;
  margin-bottom: 1.5rem;
  text-align: left;
  width: 100%;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 1.2;
    padding-left: 1rem;
  }
`;

export const MainTextSecond = styled.h1`
  font-family: var(--font-playfair);
  font-size: 90px;
  font-weight: 700;
  color: #D8A498;
  letter-spacing:0.02rem;
  margin-bottom: 1.5rem;
  line-height: 1.24;
  text-align: left;
  width: 100%;
  align-self: flex-start;

  @media (max-width: 768px) {
    font-size: 50px;
    line-height: 1.2;
    padding-left: 1rem;
  }
`;

export const SubText = styled.p`
  font-family: var(--font-lato);
  font-size: 18px;
  font-weight:300;
  color: #5C4033;
  margin-bottom: 2rem;
  max-width: 80%;
  line-height: 1.24;
  letter-spacing: 0.02rem;
  text-align: left;
  align-self: flex-start;
  width: 100%;

  @media (max-width: 768px) {
     font-size: 16px;
    padding-left: 1rem;
    max-width: 100%;
  }
`;

export const CTAButton = styled.button`
  background-color: #D8A498;
  color: white;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-family: var(--font-lato);
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  letter-spacing: 1px;
  align-self: flex-start;
  margin-left: 0;

  &:hover {
    background-color: #c29387;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    padding: 0.8rem 2rem;
    margin-left: 1rem;
  }
`;