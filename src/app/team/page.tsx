"use client";

import { useRef } from "react";
import { Stack, Grid, Typography, Divider, Box } from "@mui/material";
import { motion, useInView } from "framer-motion";
import { TeamMembersList, type TeamMember } from "@/data/teamData";
import Image from "next/image";
import patternImg from "@/assets/images/layer.webp";

const TeamCard = ({
    member,
    index,
}: {
    member: TeamMember;
    index: number;
}) => {
    const cardRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(cardRef, { once: true, amount: 0.2 });

    return (
        <Grid size={{ xs: 6, sm: 6, md: 3 }} key={member.name}>
            <motion.div
                ref={cardRef}
                initial={{ opacity: 0, y: 60 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
                transition={{
                    duration: 0.6,
                    delay: (index % 3) * 0.15,
                    ease: [0.43, 0.13, 0.23, 0.96],
                }}
            >
                <Stack gap={2}>
                    <Divider
                        sx={{
                            borderBottom: `1px solid rgba(220,184,33,0.55)`,
                        }}
                    />
                    <Stack
                        direction="row"
                        gap={0.5}
                        alignItems="center"
                        sx={{
                            flexWrap: "wrap",
                        }}
                    >
                        <Typography variant="subtitle1" fontWeight={500}>
                            {member.name}
                        </Typography>
                        <Typography variant="caption" fontWeight={500} sx={{
                            display: {xs: "none", md: "block"},
                        }}>
                            &nbsp;&#9679;&nbsp;
                        </Typography>
                        <Typography
                            variant="subtitle1"
                            fontWeight={300}
                            className="animated-gradient-text"
                        >
                            {member.position}
                        </Typography>
                    </Stack>
                    <Stack
                        width="100%"
                        position="relative"
                        sx={{
                            aspectRatio: "3/4",
                            overflow: "hidden",
                            borderRadius: 2,
                        }}
                    >
                        <Image
                            src={member.image}
                            alt={member.name}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </Stack>
                </Stack>
            </motion.div>
        </Grid>
    );
};

export default function Home() {
    const headerRef = useRef<HTMLDivElement>(null);
    const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

    const isContentInView = useInView(headerRef, {
        amount: 0.4,
        once: true,
    });

    return (
        <Stack
            width="100%"
            alignItems="center"
            sx={{
                minHeight: "100vh",
                maxWidth: "100vw",
                overflowX: "hidden",
                position: "relative",
                color: "#FFFFFF",
            }}
        >
            {/* Background layer (fixed) */}
            <Box
                sx={{
                    position: "fixed",
                    inset: 0,
                    width: "100vw",
                    maxWidth: "100vw",
                    overflow: "hidden",
                    zIndex: -10,
                }}
            >
                {/* Gradient base */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        maxWidth: "100vw",
                        height: { xs: "100dvh", md: "100vh" },
                        overflowX: "hidden",
                        background:
                            "linear-gradient(to bottom, #170300 0%, #841403 100%)",
                    }}
                />

                {/* Pattern overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        width: "100%",
                        height: "100%",
                        opacity: 0.2,
                    }}
                >
                    <Image
                        src={patternImg}
                        alt="Background pattern"
                        fill
                        priority
                        sizes="100vw"
                        style={{ objectFit: "cover" }}
                    />
                </Box>

                {/* Blur + mask gradient */}
                <Box
                    sx={{
                        position: "absolute",
                        inset: 0,
                        backdropFilter: "blur(6px)",
                        WebkitMaskImage:
                            "linear-gradient(to bottom, transparent, black)",
                        maskImage: "linear-gradient(to bottom, transparent, black)",
                    }}
                />
            </Box>

            {/* Header section */}
            <Stack
                ref={headerRef}
                width="100%"
                direction={{ xs: "column", md: "row" }}
                gap={{ xs: 2, md: 4 }}
                px={{ xs: 2, sm: 4, md: 8, lg: 16 }}
                pt={{ xs: 6, sm: 6, md: 18 }}
                pb={{ xs: 4, md: 6 }}
                justifyContent="space-between"
                alignItems={{ xs: "flex-start", md: "start" }}
                sx={{ mx: "auto" }}
            >
                {/* Left: Title */}
                <Typography
                    component={motion.h1}
                    className="animated-gradient-text"
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                        isContentInView
                            ? { opacity: 1, y: 0 }
                            : { opacity: 0, y: 20 }
                    }
                    transition={{
                        duration: 0.5,
                        ease: "easeOut",
                        delay: 0.2,
                    }}
                    sx={{
                        fontWeight: 500,
                        fontSize: {
                            xs: "2.25rem",
                            md: "3rem",
                            lg: "4rem",
                        },
                        letterSpacing: "-0.04em",
                        lineHeight: 1.1,
                        pb: 2,
                        mb: { xs: 1, md: 0 },
                        textAlign: { xs: "left", md: "left" },
                        width: { xs: "100%", md: "50%" },   // left column
                    }}
                >
                    <span>Meet</span> <span>Our</span> <span>Team</span>
                </Typography>

                {/* Right: Text */}
                <Box
                    component={motion.div}
                    initial={{ opacity: 0, y: 40 }}
                    animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                    transition={{
                        duration: 0.8,
                        delay: 0.2,
                        ease: [0.43, 0.13, 0.23, 0.96],
                    }}
                    sx={{
                        width: { xs: "100%", md: "50%" },   // right column
                        display: "flex",
                        justifyContent: { xs: "flex-start", md: "flex-end" },
                    }}
                >
                    <Stack
                        width="100%"
                        maxWidth={{ xs: "100%", md: "32rem" }}
                        alignItems={{ xs: "flex-start", md: "flex-end" }}
                        gap={2}
                        pt={{ xs: 0, md: 2 }}
                    >
                        <Typography
                            variant="body1"
                            fontWeight={300}
                            fontSize={16}
                            sx={{
                                textAlign: { xs: "left", md: "right" },
                            }}
                        >
                            At ctrl/shift, we’re builders pushing the frontier.
                            <br />
                            Our team brings together experts in AI, Web3, and Quantum
                            Computing, shaped by research, design, engineering, and
                            community leadership.
                            <br />
                            Different backgrounds, one mission:
                            <br />
                            expand access to emerging technologies and grow a global
                            ecosystem rooted in Naples.
                        </Typography>
                    </Stack>
                </Box>
            </Stack>


            {/* Grid of team members */}
            <Grid
                container
                spacing={{ xs: 3, md: 3 }}
                sx={{
                    width: "100%",
                    mx: "auto",
                    px: { xs: 2, sm: 4, md: 8, lg: 16 },
                    pt: { xs: 4, md: 8 },
                    pb: { xs: 10, md: 12 },
                }}
            >
                {TeamMembersList.map((member: TeamMember, index: number) => (
                    <TeamCard key={member.name} member={member} index={index} />
                ))}
            </Grid>
        </Stack>
    );
}
