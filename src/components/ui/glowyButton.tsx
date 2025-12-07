"use client";

import React, { type ButtonHTMLAttributes, type ReactElement } from "react";
import { styled } from "@mui/material/styles";

type SponsorsButtonProps = {
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

// Root button with golden gradient + glass layers
const RootButton = styled("button")(() => ({
  cursor: "pointer",
  position: "relative",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
  transition: "all 0.25s ease",
  // NapulETH gold gradient instead of blue
  background:
    "radial-gradient(65.28% 65.28% at 50% 100%, rgba(250, 208, 33, 0.85) 0%, rgba(250, 208, 33, 0) 100%), linear-gradient(0deg, #DCB821, #DCB821)",
  borderRadius: "0.75rem",
  border: "none",
  outline: "none",
  padding: "12px 18px",
  minHeight: 48,
  minWidth: 102,

  "&::before, &::after": {
    content: '""',
    position: "absolute",
    transition: "all 0.5s ease-in-out",
    zIndex: 0,
  },

  // soft inner top highlight
  "&::before": {
    inset: 1,
    background:
      "linear-gradient(177.95deg, rgba(255, 255, 255, 0.19) 0%, rgba(255, 255, 255, 0) 100%)",
    borderRadius: "calc(0.75rem - 1px)",
  },

  // inner golden gradient
  "&::after": {
    inset: 2,
    background:
      "radial-gradient(65.28% 65.28% at 50% 100%, rgba(250, 208, 33, 0.85) 0%, rgba(250, 208, 33, 0) 100%), linear-gradient(0deg, #DCB821, #DCB821)",
    borderRadius: "calc(0.75rem - 2px)",
  },

  "&:active": {
    transform: "scale(0.95)",
  },

  // Floating points keyframes
  "@keyframes floating-points": {
    "0%": {
      transform: "translateY(0)",
      opacity: 1,
    },
    "85%": {
      opacity: 0,
    },
    "100%": {
      transform: "translateY(-55px)",
      opacity: 0,
    },
  },

  "@keyframes dash": {
    "0%": {
      strokeDasharray: "0, 20",
      strokeDashoffset: 0,
    },
    "50%": {
      strokeDasharray: "10, 10",
      strokeDashoffset: -5,
    },
    "100%": {
      strokeDasharray: "20, 0",
      strokeDashoffset: -10,
    },
  },
}));

// Wrapper that holds the floating points
const PointsWrapper = styled("div")(() => ({
  overflow: "hidden",
  width: "100%",
  height: "100%",
  pointerEvents: "none",
  position: "absolute",
  inset: 0,
  zIndex: 1,

  "& .point": {
    bottom: -10,
    position: "absolute",
    animationName: "floating-points",
    animationIterationCount: "infinite",
    animationTimingFunction: "ease-in-out",
    pointerEvents: "none",
    width: 2,
    height: 2,
    backgroundColor: "#FFFFFF",
    borderRadius: 9999,
  },

  // positions + timings per point
  "& .point:nth-of-type(1)": {
    left: "10%",
    opacity: 1,
    animationDuration: "2.35s",
    animationDelay: "0.2s",
  },
  "& .point:nth-of-type(2)": {
    left: "30%",
    opacity: 0.7,
    animationDuration: "2.5s",
    animationDelay: "0.5s",
  },
  "& .point:nth-of-type(3)": {
    left: "25%",
    opacity: 0.8,
    animationDuration: "2.2s",
    animationDelay: "0.1s",
  },
  "& .point:nth-of-type(4)": {
    left: "44%",
    opacity: 0.6,
    animationDuration: "2.05s",
  },
  "& .point:nth-of-type(5)": {
    left: "50%",
    opacity: 1,
    animationDuration: "1.9s",
  },
  "& .point:nth-of-type(6)": {
    left: "75%",
    opacity: 0.5,
    animationDuration: "1.5s",
    animationDelay: "1.5s",
  },
  "& .point:nth-of-type(7)": {
    left: "88%",
    opacity: 0.9,
    animationDuration: "2.2s",
    animationDelay: "0.2s",
  },
  "& .point:nth-of-type(8)": {
    left: "58%",
    opacity: 0.8,
    animationDuration: "2.25s",
    animationDelay: "0.2s",
  },
  "& .point:nth-of-type(9)": {
    left: "98%",
    opacity: 0.6,
    animationDuration: "2.6s",
    animationDelay: "0.1s",
  },
  "& .point:nth-of-type(10)": {
    left: "65%",
    opacity: 1,
    animationDuration: "2.5s",
    animationDelay: "0.2s",
  },
}));

// Inner content wrapper (label + icon)
const Inner = styled("span")(() => ({
  zIndex: 2,
  gap: 6,
  position: "relative",
  width: "100%",
  color: "white",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: 1.5,
  transition: "color 0.2s ease-in-out",

  "& svg.icon": {
    width: 18,
    height: 18,
    transition: "transform 0.3s ease",
    stroke: "white",
    fill: "none",
  },

  [`&:hover svg.icon`]: {
    transform: "translateX(2px)",
  },

  [`&:hover svg.icon path`]: {
    animation: "dash 0.8s linear forwards",
  },
}));

const Point = styled("i")(() => ({
  display: "block",
}));

function GlowyButton({
  label = "Become a sponsor",
  type = "button",
  ...rest
}: SponsorsButtonProps): ReactElement {
  return (
    <RootButton type={type} {...rest}>
      <PointsWrapper>
        {Array.from({ length: 10 }).map((_, idx) => (
          <Point key={idx} className="point" />
        ))}
      </PointsWrapper>

      <Inner>
        {label}
        <svg
          className="icon"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
        >
          <path d="M5 12h14" />
          <path d="m12 5 7 7-7 7" />
        </svg>
      </Inner>
    </RootButton>
  );
}

export default GlowyButton;
