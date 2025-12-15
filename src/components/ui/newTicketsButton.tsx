"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { AnimatePresence, motion } from "framer-motion";

type NewTicketsButtonProps = {
  label?: string;
  comingSoon?: boolean;
  comingSoonLabel?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Wrapper = styled("div")(({ theme }) => ({
  position: "relative",
  marginTop: 16,
  display: "inline-block",
  width: "100%", // full width on mobile
  [theme.breakpoints.up("sm")]: {
    width: "auto", // shrink to content on desktop
  },
  "&:hover .nebula-glow": {
    opacity: 0.85,
    transform: "scale(1.02)",
  },
  "&:hover .sheen-track": {
    transform: "translateX(100%)",
  },
  "&:hover .arrow-icon": {
    transform: "translateX(2px)",
    color: "#F9FAFB",
  },
  "&:hover .left-icon": {
    color: "#FCD221",
  },
  "&:hover .label": {
    color: "#F9FAFB",
  },
}));

const Glow = styled("div")(() => ({
  position: "absolute",
  inset: 0,
  borderRadius: 9999,
  backgroundImage:
    "linear-gradient(90deg, #E59804, #DCB821, #E59804, #DCB821)",
  filter: "blur(16px)",
  opacity: 0.45,
  transition: "opacity 0.5s ease, transform 0.5s ease",
  pointerEvents: "none",
  zIndex: 0,
  transform: "scale(1)",
  transformOrigin: "center center",
}));

const ButtonRoot = styled("button")(({ theme }) => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 12,
  padding: "14px 28px",
  borderRadius: 9999,
  border: "1px solid rgba(255,255,255,0.10)",
  backgroundImage:
    "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23301010%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22m136-197-437 426 65 700L867 105%22 fill=%22%23B09050%22%2F%3E%3Cpath d=%22m278-71-82 1083 1354 368 17-1255%22 fill=%22%23B09050%22%2F%3E%3Cpath d=%22M1919 304 807 1000l881 357 285-883%22 fill=%22%23503010%22%2F%3E%3Cpath d=%22m7 227-502 869 528 430 754-746%22 fill=%22%23705010%22%2F%3E%3Cpath d=%22m787 822-480 538 1055 741 76-583%22 fill=%22%23503010%22%2F%3E%3Cpath d=%22M1214 806 970 1955l447 305 1050-411%22 fill=%22%23705030%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-200%22 y=%22-200%22 width=%222400%22 height=%221400%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22200%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
  backgroundSize: "102%",
  backgroundPosition: "center center",
  backgroundRepeat: "no-repeat",
  color: "#F9FAFB",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1,
  cursor: "pointer",
  outline: "none",
  width: "100%",
  boxShadow:
    "inset 0 1px 0 0 rgba(255,255,255,0.10), 0 18px 45px rgba(0,0,0,0.55)",
  transition:
    "background-color 0.25s ease, border-color 0.25s ease, transform 0.2s ease, box-shadow 0.25s ease",
  overflow: "hidden",
  "&:hover": {
    backgroundColor: "#0A0508",
    borderColor: "rgba(255,255,255,0.20)",
    transform: "scale(1.02)",
  },
  "&:active": {
    transform: "scale(0.98)",
    boxShadow:
      "inset 0 1px 0 0 rgba(255,255,255,0.10), 0 10px 25px rgba(0,0,0,0.55)",
  },
  "&:focus-visible": {
    outline: "none",
    boxShadow:
      "0 0 0 2px #1A0707, 0 0 0 4px rgba(252,210,33,0.85)",
  },
  [theme.breakpoints.up("sm")]: {
    width: "auto",
  },
}));

const SheenTrack = styled("span")(() => ({
  position: "absolute",
  inset: 0,
  width: "100%",
  height: "100%",
  transform: "translateX(-100%)",
  transition: "transform 0.7s ease-in-out",
  pointerEvents: "none",
  zIndex: 0,
}));

const SheenInner = styled("span")(() => ({
  position: "absolute",
  inset: 0,
  width: "50%",
  backgroundImage:
    "linear-gradient(to right, transparent, rgba(255,255,255,0.11), transparent)",
  transform: "skewX(-18deg)",
  transformOrigin: "left center",
}));

const LeftIcon = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  marginTop: -3,
}));

const ArrowIcon = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(249,250,251,0.6)",
  transition: "transform 0.3s ease, color 0.3s ease",
}));

const Label = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  fontSize: "0.95rem",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1.1,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
}));

function NewTicketsButton({
  label = "Get your tickets",
  comingSoon = false,
  comingSoonLabel = "Coming soon",
  type = "button",
  ...rest
}: NewTicketsButtonProps): ReactElement {
  const [isHovered, setIsHovered] = useState(false);

  const activeKey = comingSoon && isHovered ? "coming-soon" : "default-label";
  const textToShow = comingSoon && isHovered ? comingSoonLabel : label;

  return (
    <Wrapper>
      <Glow className="nebula-glow" />
      <ButtonRoot
        type={type}
        {...rest}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <SheenTrack className="sheen-track">
          <SheenInner />
        </SheenTrack>

        <LeftIcon className="left-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 737 604"
            fill="none"
          >
            <path
              d="M281.667 5V85C281.667 95.9052 290.762 105 301.667 105C312.572 105 321.667 95.9051 321.667 85V5H535C608.672 5 658.432 16.1103 689.494 47.1729C720.557 78.2355 731.667 127.995 731.667 201.667V235C731.667 251.428 718.095 265 701.667 265C672.429 265 648.333 289.095 648.333 318.333C648.333 347.572 672.428 371.667 701.667 371.667C718.095 371.667 731.667 385.239 731.667 401.667C731.667 475.339 720.556 525.098 689.494 556.16C658.432 587.223 608.672 598.333 535 598.333H321.667V518.333C321.667 507.428 312.572 498.333 301.667 498.333C290.762 498.333 281.667 507.428 281.667 518.333V598.333H201.667C127.995 598.333 78.2355 587.223 47.1729 556.16C16.1104 525.098 5.00003 475.339 5 401.667V385C5 368.572 18.5719 355 35 355C64.2385 355 88.3328 330.905 88.333 301.667C88.333 272.428 64.2386 248.333 35 248.333C18.5719 248.333 5 234.761 5 218.333V201.667C5 127.995 16.1102 78.2355 47.1729 47.1729C78.2355 16.1102 127.995 5 201.667 5H281.667ZM301.667 209.333C290.762 209.333 281.667 218.428 281.667 229.333V374C281.667 384.905 290.762 394 301.667 394C312.572 394 321.667 384.905 321.667 374V229.333C321.667 218.428 312.572 209.333 301.667 209.333Z"
              stroke="#FAD021"
              strokeWidth={50}
            />
          </svg>
        </LeftIcon>

        {/* Label with width locked to main label, animated text inside */}
        <Label className="label">
          {/* Invisible baseline to fix width */}
          <span
            style={{
              opacity: 0,
              pointerEvents: "none",
              whiteSpace: "nowrap",
            }}
          >
            {label}
          </span>

          {/* Animated visible text */}
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={activeKey}
              initial={{ y: "100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              style={{
                position: "absolute",
                left: "0%",
                transform: "translateX(-100%)",
                whiteSpace: "nowrap",
              }}
            >
              {textToShow}
            </motion.span>
          </AnimatePresence>
        </Label>

        <ArrowIcon className="arrow-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={16}
            height={16}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </ArrowIcon>
      </ButtonRoot>
    </Wrapper>
  );
}

export default NewTicketsButton;
