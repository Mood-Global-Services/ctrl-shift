"use client";

import type { ButtonHTMLAttributes, ReactElement } from "react";
import { styled } from "@mui/material/styles";

type GenerateExperienceButtonProps = {
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Wrapper = styled("div")(() => ({
  position: "relative",
  marginTop: 16,
  display: "inline-block",
  // Hover interactions for children
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
  inset: 0, // match button bounds, no extra width
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
  backgroundSize: "cover",
  backgroundPosition: "center center",
  backgroundRepeat: "repeat",
  backgroundImage: "url('data:image/svg+xml;utf8,%3Csvg xmlns=%22http:%2F%2Fwww.w3.org%2F2000%2Fsvg%22 width=%222000%22 height=%221000%22%3E%3Cg filter=%22url(%23a)%22%3E%3Cpath fill=%22%23E59804%22 d=%22M-1000-500h4000v2000h-4000z%22%2F%3E%3Cpath d=%22M299-225-406 780l353 185 851-848%22 fill=%22%23AC6F16%22%2F%3E%3Cpath d=%22M1191-144 126 639l744 429 429-799%22 fill=%22%23E59804%22%2F%3E%3Cpath d=%22m1421 392-629 63 1307 1244 67-957%22 fill=%22%23E59804%22%2F%3E%3Cpath d=%22m-454 144-54 1372 1064 31 480-165%22 fill=%22%23DCB821%22%2F%3E%3Cpath d=%22m1300 941-991 381 1197 928 265-1274%22 fill=%22%23DCB821%22%2F%3E%3Cpath d=%22m1243 695-395 543 1428 961 81-1285%22 fill=%22%23E59804%22%2F%3E%3C%2Fg%3E%3Cdefs%3E%3Cfilter id=%22a%22 x=%22-182%22 y=%22-182%22 width=%222364%22 height=%221364%22 filterUnits=%22userSpaceOnUse%22 color-interpolation-filters=%22sRGB%22%3E%3CfeFlood flood-opacity=%220%22 result=%22BackgroundImageFix%22%2F%3E%3CfeBlend in=%22SourceGraphic%22 in2=%22BackgroundImageFix%22 result=%22shape%22%2F%3E%3CfeGaussianBlur stdDeviation=%22182%22 result=%22effect1_foregroundBlur_1_2%22%2F%3E%3C%2Ffilter%3E%3C%2Fdefs%3E%3C%2Fsvg%3E')",
  color: "#181818",
  fontSize: "0.875rem",
  fontWeight: 500,
  letterSpacing: "-0.01em",
  lineHeight: 1,
  cursor: "pointer",
  outline: "none",
  width: "100%", // full-width on mobile
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
    width: "auto", // pill on desktop
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
  color: "#5d3c0a", // golden
  transition: "color 0.3s ease",
}));

const ArrowIcon = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "rgba(18,18,18,0.9)",
  transition: "transform 0.3s ease, color 0.3s ease",
}));

const Label = styled("span")(() => ({
  position: "relative",
  zIndex: 1,
  fontSize: "0.95rem",
  fontWeight: 500,
  letterSpacing: "-0.01em",
}));

function NewAgendaButton({
  label = "Generate Experience",
  type = "button",
  ...rest
}: GenerateExperienceButtonProps): ReactElement {
  return (
    <Wrapper>
      <Glow className="nebula-glow" />
      <ButtonRoot type={type} {...rest}>
        <SheenTrack className="sheen-track">
          <SheenInner />
        </SheenTrack>

        <LeftIcon className="left-icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={18}
            height={18}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z" />
            <path d="M20 2v4" />
            <path d="M22 4h-4" />
            <circle cx="4" cy="20" r="2" />
          </svg>
        </LeftIcon>

        <Label className="label">{label}</Label>

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

export default NewAgendaButton;
