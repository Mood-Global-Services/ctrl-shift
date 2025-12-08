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

function NewSpeakersButton({
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
            
<path d="M16 4.97846C16.7956 4.97846 17.5587 5.29453 18.1213 5.85714C18.6839 6.41975 19 7.18281 19 7.97846C19 8.77411 18.6839 9.53717 18.1213 10.0998C17.5587 10.6624 16.7956 10.9785 16 10.9785M8 4.97846V15.9785C8 16.2437 7.89464 16.498 7.70711 16.6856C7.51957 16.8731 7.26522 16.9785 7 16.9785H6C5.73478 16.9785 5.48043 16.8731 5.29289 16.6856C5.10536 16.498 5 16.2437 5 15.9785V10.9785M10 4.97846L14.524 1.20846C14.6555 1.09897 14.8154 1.02922 14.9851 1.00737C15.1548 0.985522 15.3271 1.01249 15.482 1.08511C15.6369 1.15774 15.7679 1.27301 15.8597 1.41741C15.9514 1.56182 16.0001 1.72938 16 1.90046V14.0565C16.0001 14.2275 15.9514 14.3951 15.8597 14.5395C15.7679 14.6839 15.6369 14.7992 15.482 14.8718C15.3271 14.9444 15.1548 14.9714 14.9851 14.9496C14.8154 14.9277 14.6555 14.858 14.524 14.7485L10 10.9785H2C1.73478 10.9785 1.48043 10.8731 1.29289 10.6856C1.10536 10.498 1 10.2437 1 9.97846V5.97846C1 5.71325 1.10536 5.45889 1.29289 5.27136C1.48043 5.08382 1.73478 4.97846 2 4.97846H10Z" strokeLinecap="round" strokeLinejoin="round"/>
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

export default NewSpeakersButton;
