"use client";

import type { ReactElement } from "react";
import { useRef } from "react";
import {
    Box,
    Container,
    Typography,
    Link,
    Stack,
} from "@mui/material";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import NewTicketsButton from "@/components/ui/newTicketsButton";

import bitcashbackLogo from "@/assets/images/bitcashback.webp";

const STEPS = [
    {
        number: "01",
        title: "Get your ticket",
        description: "Purchase your ctrl/shift ticket through the link below.",
    },
    {
        number: "02",
        title: "Use the promo code",
        description: "Apply the code BITCASHBACK at checkout.",
    },
    {
        number: "03",
        title: "Earn BTC cashback",
        description: "Receive cashback in Bitcoin, powered by BitCashback.",
    },
];

function BitCashback(): ReactElement {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    return (
        <Box
            component="section"
            ref={sectionRef}
            sx={{
                pb: 12,
                px: { xs: 2, md: 6 },
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "68rem",
                    mx: "auto",
                }}
            >
                {/* Main card */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
                        const rect = event.currentTarget.getBoundingClientRect();
                        const x = event.clientX - rect.left;
                        const y = event.clientY - rect.top;
                        event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                        event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                    }}
                    sx={{
                        position: "relative",
                        borderRadius: "1.75rem",
                        overflow: "hidden",
                        backgroundColor: "rgba(255, 255, 255, 0.06)",
                        backdropFilter: "blur(14px)",
                        border: "1px solid rgba(255,255,255,0.10)",
                        boxShadow:
                            "0 24px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.06)",
                        p: { xs: 3, sm: 4, md: 6 },
                        "--mouse-x": "50%",
                        "--mouse-y": "50%",
                        "&::before": {
                            content: '""',
                            position: "absolute",
                            inset: 0,
                            background:
                                "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(252,210,33,0.07), transparent 55%)",
                            opacity: 0,
                            transition: "opacity 0.5s ease",
                            pointerEvents: "none",
                            zIndex: 0,
                        },
                        "&:hover::before": {
                            opacity: 1,
                        },
                    }}
                >
                    {/* Ambient glow – top right */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            right: 0,
                            width: "50%",
                            height: "50%",
                            background:
                                "radial-gradient(ellipse at 100% 0%, rgba(252,184,33,0.08), transparent 60%)",
                            pointerEvents: "none",
                            zIndex: 0,
                        }}
                    />

                    {/* Top edge light */}
                    <Box
                        sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: "1px",
                            background:
                                "linear-gradient(90deg, transparent 10%, rgba(252,210,33,0.12) 50%, transparent 90%)",
                            zIndex: 1,
                            pointerEvents: "none",
                        }}
                    />

                    {/* Content */}
                    <Box sx={{ position: "relative", zIndex: 2 }}>
                        {/* Header row: logo left + badge right */}
                        <Stack
                            direction="row"
                            justifyContent={{ xs: "center", sm: "space-between" }}
                            alignItems="center"
                            gap={2}
                            sx={{ mb: { xs: 3, md: 4 } }}
                        >
                            {/* "Powered by" + logo in a row */}
                            <Stack
                                direction="row"
                                alignItems="center"
                                gap={1.5}
                            >
                                <Typography
                                    component={motion.span}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.4, delay: 0.1 }}
                                    sx={{
                                        fontSize: { xs: "0.68rem", sm: "0.75rem" },
                                        fontWeight: 600,
                                        letterSpacing: "0.18em",
                                        textTransform: "uppercase",
                                        color: "rgba(252,210,33,0.95)",
                                    }}
                                >
                                    Powered by
                                </Typography>
                                <Box
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                                    transition={{ duration: 0.45, delay: 0.15 }}
                                    sx={{ display: "flex", alignItems: "center" }}
                                >
                                    <Image
                                        src={bitcashbackLogo}
                                        alt="BitCashback"
                                        height={28}
                                        style={{
                                            width: "auto",
                                            height: 28,
                                            filter: "invert(1)",
                                        }}
                                    />
                                </Box>
                            </Stack>

                            {/* BTC badge */}
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                                sx={{
                                    px: 2.5,
                                    py: 1,
                                    borderRadius: "1rem",
                                    backgroundColor: "rgba(252,210,33,0.08)",
                                    border: "1px solid rgba(252,210,33,0.25)",
                                    display: { xs: "none", sm: "inline-flex" },
                                    alignItems: "center",
                                    gap: 1,
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "1.1rem",
                                        fontWeight: 600,
                                    }}
                                >
                                    ₿
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "0.82rem",
                                        fontWeight: 500,
                                        color: "rgba(255,255,255,0.9)",
                                        letterSpacing: "0.02em",
                                    }}
                                >
                                    Cashback in Bitcoin
                                </Typography>
                            </Box>
                        </Stack>

                        {/* Main heading */}
                        <Typography
                            component={motion.h2}
                            initial={{ opacity: 0, y: 16 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: "1.6rem", sm: "1.9rem", md: "2.25rem" },
                                letterSpacing: "-0.03em",
                                lineHeight: 1.2,
                                color: "#FFFFFF",
                                mb: { xs: 1.5, md: 2 },
                                textAlign: "center",
                                maxWidth: "36rem",
                                mx: "auto",
                            }}
                        >
                            Buy your ticket,{" "}
                            <span className="animated-gradient-text">
                                earn Bitcoin
                            </span>
                        </Typography>

                        {/* Subtitle */}
                        <Typography
                            component={motion.p}
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                            transition={{ duration: 0.45, delay: 0.3 }}
                            sx={{
                                color: "rgba(249,250,251,0.78)",
                                fontSize: { xs: "0.9rem", md: "1.05rem" },
                                lineHeight: 1.7,
                                maxWidth: "38rem",
                                mx: "auto",
                                textAlign: "center",
                                mb: { xs: 4, md: 5 },
                            }}
                        >
                            Get cashback in BTC when you purchase your ctrl/shift ticket.
                            Just use the promo code at checkout — it&apos;s that simple.
                        </Typography>

                        {/* Steps */}
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns: { xs: "1fr", sm: "repeat(3, 1fr)" },
                                gap: { xs: 2, md: 3 },
                                mb: { xs: 4, md: 5 },
                            }}
                        >
                            {STEPS.map((step, i) => (
                                <Box
                                    key={step.number}
                                    component={motion.div}
                                    initial={{ opacity: 0, y: 18 }}
                                    animate={
                                        isInView
                                            ? { opacity: 1, y: 0 }
                                            : { opacity: 0, y: 18 }
                                    }
                                    transition={{
                                        duration: 0.45,
                                        delay: 0.35 + i * 0.1,
                                    }}
                                    sx={{
                                        p: { xs: 2.5, md: 3 },
                                        borderRadius: "1.25rem",
                                        backgroundColor: "rgba(255,255,255,0.04)",
                                        border: "1px solid rgba(255,255,255,0.07)",
                                        textAlign: "center",
                                        transition: "border-color 0.3s ease, background-color 0.3s ease",
                                        "&:hover": {
                                            borderColor: "rgba(252,210,33,0.2)",
                                            backgroundColor: "rgba(255,255,255,0.06)",
                                        },
                                    }}
                                >
                                    <Typography
                                        sx={{
                                            fontSize: "0.72rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            color: "rgba(252,210,33,0.85)",
                                            mb: 1,
                                        }}
                                    >
                                        Step {step.number}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.95rem", md: "1.05rem" },
                                            fontWeight: 500,
                                            color: "#FFFFFF",
                                            mb: 0.75,
                                            lineHeight: 1.3,
                                        }}
                                    >
                                        {step.title}
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: { xs: "0.8rem", md: "0.88rem" },
                                            color: "rgba(255,255,255,0.6)",
                                            lineHeight: 1.55,
                                        }}
                                    >
                                        {step.description}
                                    </Typography>
                                </Box>
                            ))}
                        </Box>

                        {/* Promo code + CTA */}
                        <Stack
                            component={motion.div}
                            initial={{ opacity: 0, y: 14 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                            transition={{ duration: 0.4, delay: 0.6 }}
                            direction="column"
                            alignItems="center"
                            gap={2}
                        >
                            {/* Promo code pill */}
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1.5,
                                    px: 2.5,
                                    py: 1.2,
                                    borderRadius: "0.9rem",
                                    backgroundColor: "rgba(0,0,0,0.35)",
                                    border: "1px dashed rgba(252,210,33,0.35)",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontSize: "0.72rem",
                                        fontWeight: 500,
                                        color: "rgba(255,255,255,0.5)",
                                        letterSpacing: "0.08em",
                                        textTransform: "uppercase",
                                    }}
                                >
                                    Promo code
                                </Typography>
                                <Typography
                                    sx={{
                                        fontSize: "1rem",
                                        fontWeight: 700,
                                        letterSpacing: "0.12em",
                                        color: "rgba(252,210,33,0.95)",
                                        fontFamily: "monospace",
                                    }}
                                >
                                    BITCASHBACK
                                </Typography>
                            </Box>

                            {/* CTA button */}
                            <Link
                                href="https://luma.com/hfs5ijms?coupon=BITCASHBACK"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{
                                    textDecoration: "none",
                                    borderRadius: 999,
                                    width: { xs: "100%", sm: "auto" },
                                }}
                            >
                                <NewTicketsButton label="Get your ticket with cashback" />
                            </Link>
                        </Stack>
                    </Box>
                </Box>
            </Container>
        </Box>
    );
}

export default BitCashback;
