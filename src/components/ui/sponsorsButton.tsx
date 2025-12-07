"use client";

import React, { type ButtonHTMLAttributes, type ReactElement } from "react";
import { styled } from "@mui/material/styles";

type SponsorsButtonProps = {
  label?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const RootButton = styled("button")(() => ({
  position: "relative",
  display: "inline-flex",
  border: "none",
  background: "transparent",
  padding: 0,
  cursor: "pointer",
  outline: "none",
  transition: "transform 0.15s ease-out",
}));

const Glow = styled("div")(() => ({
  position: "absolute",
  inset: -4,
  borderRadius: 8,
  backgroundColor: "rgba(220, 184, 33, 0.35)", // #DCB821 with alpha
  filter: "blur(14px)",
  opacity: 0.45,
  transition: "opacity 0.4s ease",
  zIndex: 0,
}));

const Inner = styled("div")(() => ({
  position: "relative",
  zIndex: 1,
  borderRadius: 8,
  padding: "12px 26px", // less height
  display: "flex",
  alignItems: "center",
  gap: 10,
  color: "#2A1802",
  background:
    "linear-gradient(180deg,#E59804 0%, #DCB821 45%, #E59804 100%)",
  boxShadow:
    "0 0 0 1px rgba(220,184,33,0.7), 0 3px 0 #A66506, 0 10px 18px -6px rgba(0,0,0,0.55)",
  transition: "box-shadow 0.15s ease-out, transform 0.15s ease-out",
  minHeight: 36,
  minWidth: 130,
}));

const Label = styled("span")(() => ({
  fontSize: "1rem",
  fontWeight: 500,
  letterSpacing: "-0.02em",
}));

const Icon = styled("svg")(() => ({
  width: 18,
  height: 18,
  fill: "rgba(42, 24, 2, 0.18)",
  stroke: "#2A1802",
  strokeWidth: 1.5,
  transition: "transform 0.2s ease-out",
}));

function SponsorsButton({
  label = "Initialize Launch",
  type = "button",
  ...rest
}: SponsorsButtonProps): ReactElement {
  return (
    <RootButton
      type={type}
      onMouseDown={(e) => {
        rest.onMouseDown?.(e);
        const target = e.currentTarget;
        const inner = target.querySelector<HTMLElement>("[data-inner]");
        if (inner) {
          inner.style.boxShadow =
            "0 0 0 1px rgba(220,184,33,0.7), 0 2px 0 #A66506, 0 6px 12px -4px rgba(0,0,0,0.5)";
          inner.style.transform = "translateY(2px)";
        }
      }}
      onMouseUp={(e) => {
        rest.onMouseUp?.(e);
        const target = e.currentTarget;
        const inner = target.querySelector<HTMLElement>("[data-inner]");
        if (inner) {
          inner.style.boxShadow =
            "0 0 0 1px rgba(220,184,33,0.7), 0 3px 0 #A66506, 0 10px 18px -6px rgba(0,0,0,0.55)";
          inner.style.transform = "translateY(0)";
        }
      }}
      onMouseLeave={(e) => {
        rest.onMouseLeave?.(e);
        const target = e.currentTarget;
        const inner = target.querySelector<HTMLElement>("[data-inner]");
        if (inner) {
          inner.style.boxShadow =
            "0 0 0 1px rgba(220,184,33,0.7), 0 3px 0 #A66506, 0 10px 18px -6px rgba(0,0,0,0.55)";
          inner.style.transform = "translateY(0)";
        }
      }}
      onMouseEnter={(e) => {
        rest.onMouseEnter?.(e);
        const target = e.currentTarget;
        const glow = target.querySelector<HTMLElement>("[data-glow]");
        const icon = target.querySelector<SVGSVGElement>("[data-icon]");
        if (glow) glow.style.opacity = "0.8";
        if (icon) icon.style.transform = "translateX(2px)";
      }}
      onMouseOut={(e) => {
        rest.onMouseOut?.(e);
        const target = e.currentTarget;
        const glow = target.querySelector<HTMLElement>("[data-glow]");
        const icon = target.querySelector<SVGSVGElement>("[data-icon]");
        if (glow) glow.style.opacity = "0.45";
        if (icon) icon.style.transform = "translateX(0)";
      }}
      {...rest}
    >
      <Glow data-glow />
      <Inner data-inner>
        <Label>{label}</Label>
        <Icon
          data-icon
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z" />
        </Icon>
      </Inner>
    </RootButton>
  );
}

export default SponsorsButton;
