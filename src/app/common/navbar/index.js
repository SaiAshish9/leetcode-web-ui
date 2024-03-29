"use client";

import { useEffect } from "react";

import { useRouter, usePathname } from "next/navigation";

import {
  NavContainer,
  NavContent,
  NavItem,
  NavItemContainer,
  StyledImage,
  OptionsContainer,
  CircularAvatar,
  CircularContainer,
  NavIcon,
  ScoreText,
  PremiumButton,
  PremiumText,
} from "./styles";

import AvatarPic from "@/assets/p.jpeg";
import BellSvg from "@/assets/bell.svg";
import FireSvg from "@/assets/fire.svg";

const options1 = [
  {
    text: "Explore",
  },
  {
    text: "Problems",
  },
  {
    text: "Contest",
  },
  {
    text: "Discuss",
  },
  {
    text: "Interview",
  },
  {
    text: "Store",
  },
];

const options = [
  {
    text: "Problems",
    route: "/",
  },
  {
    text: "Contest",
    route: "/contest",
  },
  {
    text: "Scale",
    route: "/scale",
  },
  {
    text: "Design Principles",
    route: "/design_principles",
  },
  {
    text: "Design Patterns",
    route: "/design_patterns",
  },
  {
    text: "System Design",
    route: "/system_design",
  },
];

const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();

  const handleClick = (e, route) => {
    e.preventDefault();
    router.push(route);
  };

  useEffect(() => {}, [pathname]);

  return (
    <NavContainer>
      <NavContent>
        <NavItemContainer>
          <StyledImage
            alt="img"
            src="https://leetcode.com/_next/static/images/logo-dark-c96c407d175e36c81e236fcfdd682a0b.png"
            width="22"
            height="24"
          />
          <OptionsContainer>
            {options.map((i, _) => (
              <NavItem
                key={i.text}
                route={i.route == pathname}
                text={i.text}
                onClick={(e) => handleClick(e, i.route)}
              >
                {i.text}
              </NavItem>
            ))}
          </OptionsContainer>
        </NavItemContainer>
        <CircularContainer>
          <NavIcon>
            <PremiumButton>
              <PremiumText>Premium</PremiumText>
            </PremiumButton>
          </NavIcon>
          <NavIcon>
            <StyledImage alt="img" src={BellSvg} width="24" height="24" />
          </NavIcon>
          <NavIcon>
            <StyledImage alt="img" src={FireSvg} width="24" height="24" />
            <ScoreText>0</ScoreText>
          </NavIcon>
          <CircularAvatar alt="pic" src={AvatarPic} width="24" height="24" />
        </CircularContainer>
      </NavContent>
    </NavContainer>
  );
};

export default Navbar;
