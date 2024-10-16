'use client'

import { HeroSection, Title, Subtitle, ButtonGroup, Button } from './Hero.styles';

const Hero = () => {
  return (
    <HeroSection>
    <Title>Welcome to Valorant</Title>
    <Subtitle>Explore agents, weapons, maps, and more.</Subtitle>
    <ButtonGroup>
      <Button href="/category/agents">Agents</Button>
      <Button href="/category/bundles">Bundles</Button>
      <Button href="/category/maps">Maps</Button>
      <Button href="/category/weapons">Weapons</Button>
      <Button href="/category/ranks">Ranks</Button>
    </ButtonGroup>
  </HeroSection>
  )
}

export default Hero;
