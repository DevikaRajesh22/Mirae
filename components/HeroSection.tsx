"use client";
import React from 'react';
import {
    HeroContainer,
    ImageColumn,
    StyledImage,
    TextColumn,
    MainText,
    MainTextSecond,
    SubText,
    CTAButton
} from '../styles/HeroSectionStyles';
import heroImageOne from '../public/images/hero1.png';
import heroImageTwo from '../public/images/hero2.png';

const HeroSection = () => {
    return (
        <HeroContainer>
            <ImageColumn className="left-image">
                <StyledImage
                    src={heroImageOne}
                    alt="Hero Section left image"
                    fill
                    priority
                />
            </ImageColumn>

            <TextColumn>
                <MainText>Soft looks,</MainText>
                <MainTextSecond>Bold impact.</MainTextSecond>
                <SubText>Our cruelty-free makeup blends beauty with
                comfort all day, every day.</SubText>
                <CTAButton>Explore Collection</CTAButton>
            </TextColumn>

            <ImageColumn className="right-image">
                <StyledImage
                    src={heroImageTwo}
                    alt="Hero Section right image"
                    fill
                    priority
                />
            </ImageColumn>
        </HeroContainer>
    );
};

export default HeroSection;