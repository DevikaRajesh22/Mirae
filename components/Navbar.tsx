"use client";
import Link from "next/link";
import { useState } from "react";
import { 
  Header, 
  BrandWrapper, 
  LogoCircle, 
  BrandText, 
  Nav, 
  HamburgerButton, 
  MobileNavWrapper, 
  Overlay,
  DesktopNavWrapper
} from '../styles/NavbarStyles';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Header>
            <BrandWrapper>
                <LogoCircle />
                <BrandText>Miraé</BrandText>
            </BrandWrapper>

            <DesktopNavWrapper>
                <Nav>
                    <Link href="/">Home</Link>
                    <Link href="/about">About us</Link>
                    <Link href="/contact">Contact us</Link>
                </Nav>
            </DesktopNavWrapper>

            <HamburgerButton onClick={toggleMenu} $isOpen={isOpen}>
                <span></span>
                <span></span>
                <span></span>
            </HamburgerButton>

            <MobileNavWrapper $isOpen={isOpen}>
                <Overlay onClick={toggleMenu} $isOpen={isOpen} />
                <Nav $isOpen={isOpen}>
                    <Link href="/" onClick={toggleMenu}>Home</Link>
                    <Link href="/about" onClick={toggleMenu}>About us</Link>
                    <Link href="/contact" onClick={toggleMenu}>Contact us</Link>
                </Nav>
            </MobileNavWrapper>
        </Header>
    );
}