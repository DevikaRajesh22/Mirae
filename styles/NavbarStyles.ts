import styled from "styled-components";

const mobile = "768px";

export const Header = styled.header`
  background-color: #d8a498;
  color: #fff9f8;
  height: 119px;
  width: 100%;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: border-box;
  position: relative;

  @media (max-width: ${mobile}) {
    height: 70px; /* Reduced header height */
    padding: 0 1rem;
  }
`;

export const BrandWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  z-index: 1001;

  @media (max-width: ${mobile}) {
    position: absolute;
    left: 1rem;
    top: 50%;
    transform: translateY(-50%);
  }
`;

export const LogoCircle = styled.div`
  width: 40px;
  height: 40px;
  background-color: #fff9f8;
  border-radius: 50%;

  @media (max-width: ${mobile}) {
    width: 28px; /* Slightly smaller logo */
    height: 28px;
  }
`;

export const BrandText = styled.h1`
  font-size: 2rem;
  font-family: var(--font-playfair);
  font-weight: 700;
  line-height: 150%;

  @media (max-width: ${mobile}) {
    font-size: 1.25rem; /* Smaller brand text */
  }
`;

export const DesktopNavWrapper = styled.div`
  display: block;

  @media (max-width: ${mobile}) {
    display: none;
  }
`;

export const Nav = styled.nav<{ $isOpen?: boolean }>`
  display: flex;
  gap: 2rem;
  font-family: var(--font-lato), sans-serif;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  letter-spacing: 0.02em;
  color: #FFF9F8;

  @media (max-width: ${mobile}) {
    flex-direction: column;
    gap: 1.25rem; /* Reduced gap */
    padding: 1.5rem; /* Reduced padding */
    font-size: 16px; /* Smaller font size */
    background-color: #d8a498;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 70%;
    max-width: 280px; /* Slightly narrower */
    z-index: 1000;
    transform: ${({ $isOpen }) => $isOpen ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 0.3s ease-in-out;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    padding-top: 70px; 
    z-index: 1003;
  }

  a {
    text-decoration: none;
    color: inherit;
    transition: opacity 0.2s;

    &:hover {
      text-decoration: underline;
      opacity: 0.8;
    }
  }
`;

export const HamburgerButton = styled.button<{ $isOpen: boolean }>`
  display: none;
  flex-direction: column;
  justify-content: space-around;
  width: 1.75rem;
  height: 1.5rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 1001;
  position: absolute;
  right: 1rem;
  top: 50%;
  transform: translateY(-50%);
   z-index: 1004;

  &:focus {
    outline: none;
  }

  span {
    width: 100%;
    height: 2px; /* Thinner lines */
    background: #FFF9F8;
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    &:first-child {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(45deg)' : 'rotate(0)'};
    }

    &:nth-child(2) {
      opacity: ${({ $isOpen }) => $isOpen ? '0' : '1'};
      transform: ${({ $isOpen }) => $isOpen ? 'translateX(10px)' : 'translateX(0)'};
    }

    &:nth-child(3) {
      transform: ${({ $isOpen }) => $isOpen ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }

  @media (max-width: ${mobile}) {
    display: flex;
  }
`;

export const MobileNavWrapper = styled.div<{ $isOpen: boolean }>`
  display: none;
  
  @media (max-width: ${mobile}) {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100vh;
    pointer-events: ${({ $isOpen }) => $isOpen ? 'auto' : 'none'};
    z-index: 1003;
  }
`;

export const Overlay = styled.div<{ $isOpen: boolean }>`
  display: none;
  z-index: 1002;
  
  @media (max-width: ${mobile}) {
    display: ${({ $isOpen }) => $isOpen ? 'block' : 'none'};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 999;
    transition: opacity 0.3s ease;
    opacity: ${({ $isOpen }) => $isOpen ? '1' : '0'};
  }
`;