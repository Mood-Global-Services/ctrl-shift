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
    padding: "12px 26px",
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
    fill: "rgba(42, 24, 2, 0.85)",
    stroke: "#2A1802",
    strokeWidth: 5,
    marginTop: 2,
    transition: "transform 0.2s ease-out",
}));

function TicketsButton({
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
                    viewBox="0 0 800 722"
                >
                    <path d="M281.667 5V85C281.667 95.9052 290.762 105 301.667 105C312.572 105 321.667 95.9051 321.667 85V5H535C608.672 5 658.432 16.1103 689.494 47.1729C720.557 78.2355 731.667 127.995 731.667 201.667V235C731.667 251.428 718.095 265 701.667 265C672.429 265 648.333 289.095 648.333 318.333C648.333 347.572 672.428 371.667 701.667 371.667C718.095 371.667 731.667 385.239 731.667 401.667C731.667 475.339 720.556 525.098 689.494 556.16C658.432 587.223 608.672 598.333 535 598.333H321.667V518.333C321.667 507.428 312.572 498.333 301.667 498.333C290.762 498.333 281.667 507.428 281.667 518.333V598.333H201.667C127.995 598.333 78.2355 587.223 47.1729 556.16C16.1104 525.098 5.00003 475.339 5 401.667V385C5 368.572 18.5719 355 35 355C64.2385 355 88.3328 330.905 88.333 301.667C88.333 272.428 64.2386 248.333 35 248.333C18.5719 248.333 5 234.761 5 218.333V201.667C5 127.995 16.1102 78.2355 47.1729 47.1729C78.2355 16.1102 127.995 5 201.667 5H281.667ZM301.667 209.333C290.762 209.333 281.667 218.428 281.667 229.333V374C281.667 384.905 290.762 394 301.667 394C312.572 394 321.667 384.905 321.667 374V229.333C321.667 218.428 312.572 209.333 301.667 209.333Z" fill="#2A1802" fillOpacity="0.2" stroke="#2A1802" stroke-width="50" />
                </Icon>
            </Inner>
        </RootButton>
    );
}

export default TicketsButton;
