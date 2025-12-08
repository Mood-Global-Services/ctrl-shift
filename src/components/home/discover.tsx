"use client";

import type { ReactElement } from "react";
import {
    Box,
    Container,
    Grid,
    Typography,
    Button,
} from "@mui/material";
import Image, { type StaticImageData } from "next/image";

import conferenceImage from "@/assets/images/lastVersion/1.webp";
import buildImage from "@/assets/images/lastVersion/2.webp";
import hackathonImage from "@/assets/images/lastVersion/2.webp";
import visionsImage from "@/assets/images/lastVersion/3.webp";
import meetupsImage from "@/assets/images/lastVersion/5.webp";
import sideEventsImage from "@/assets/images/lastVersion/4.webp";

type StepCTA = {
    type: "button";
    text: string;
    hoverText?: string;
};

type Step = {
    id: string;
    title: string;
    description: string;
    image: StaticImageData;
    cta?: StepCTA;
};

const steps: Step[] = [
    {
        id: "01",
        title: "Conference",
        description:
            "Join us for insightful talks, panels, and networking with industry leaders in AI, Web3, and Quantum Computing.",
        image: conferenceImage,
    },
    {
        id: "02",
        title: "Hackathon",
        description:
            "Prototype bold ideas, solve real challenges, and compete for prizes, grants, and ecosystem opportunities.",
        image: hackathonImage,
        cta: {
            type: "button",
            text: "Apply for hackathon",
            hoverText: "Coming soon",
        },
    },
    {
        id: "03",
        title: "Visions",
        description:
            "An exhibition and competition where aesthetic, economic, and symbolic dimensions merge — shaped by artists exploring the future of value, technology, and identity.",
        image: visionsImage,
        cta: {
            type: "button",
            text: "Explore our marketplace",
        },
    },
    {
        id: "04",
        title: "Side Events",
        description:
            "From boat parties to late-night drinks to delightfully nerdy experiences — discover a playful side of this community.",
        image: sideEventsImage,
    },
    {
        id: "05",
        title: "Meetups",
        description:
            "Discover our next meetups — follow us on Luma for all upcoming dates.",
        image: meetupsImage,
        cta: {
            type: "button",
            text: "Follow us on Luma",
        },
    },
];

type DiscoverCardProps = {
    step: Step;
    minHeight?: number;
};

function DiscoverCard({ step, minHeight = 260 }: DiscoverCardProps): ReactElement {
    return (
        <Box
            sx={{
                position: "relative",
                borderRadius: "1.75rem",
                overflow: "hidden",
                minHeight,
                height: "100%",
                cursor: "pointer",
                backgroundColor: "rgba(255,255,255,0.02)",
                boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
                "&:hover .discover-card-image": {
                    transform: "scale(1.06)",
                },
                "&:hover .discover-card-overlay": {
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.9), rgba(0,0,0,0.45), rgba(0,0,0,0.05))",
                },
                transition: "transform 0.25s ease",
                "&:hover": {
                    transform: "translateY(-4px)",
                },
            }}
        >
            {/* Background image */}
            <Box
                className="discover-card-image"
                sx={{
                    position: "absolute",
                    inset: 0,
                    transition: "transform 0.6s ease",
                }}
            >
                <Image
                    src={step.image}
                    alt={step.title}
                    fill
                    sizes="(max-width: 900px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                    priority={step.id === "01"}
                />
            </Box>

            {/* Dark overlay */}
            <Box
                className="discover-card-overlay"
                sx={{
                    position: "absolute",
                    inset: 0,
                    background:
                        "linear-gradient(to top, rgba(0,0,0,0.85), rgba(0,0,0,0.40), rgba(0,0,0,0.05))",
                    transition: "background 0.3s ease",
                    zIndex: 1,
                }}
            />

            {/* Bottom content */}
            <Box
                sx={{
                    position: "relative",
                    zIndex: 2,
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "flex-end",
                    p: { xs: 3, md: 4 },
                }}
            >
                <Typography
                    variant="h5"
                    sx={{
                        fontWeight: 500,
                        color: "#FFFFFF",
                        mb: 1,
                    }}
                >
                    {step.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: "rgba(255,255,255,0.82)",
                        maxWidth: 500,
                        mb: step.cta ? 2.5 : 0,
                    }}
                >
                    {step.description}
                </Typography>

                {step.cta?.type === "button" && (
                    <Button
                        variant="contained"
                        disableElevation
                        sx={{
                            alignSelf: "flex-start",
                            mt: 0.5,
                            borderRadius: 3,
                            px: 2.75,
                            py: 1,
                            fontSize: "0.95rem",
                            textTransform: "none",
                            fontWeight: 500,
                            backgroundImage:
                                "linear-gradient(180deg, #942629 0%, #2E0C0D 100%)",
                            backgroundSize: "200% auto",
                            color: "#FFFFFF",
                            boxShadow: "0 10px 25px rgba(0,0,0,0.55)",
                            "&:hover": {
                                backgroundPosition: "100% 0",
                                boxShadow: "0 12px 30px rgba(0,0,0,0.7)",
                                filter: "brightness(0.9)",
                            },
                        }}
                    >
                        {step.cta.text}
                    </Button>
                )}
            </Box>
        </Box>
    );
}

function Discover(): ReactElement {
    return (
        <Box
            component="section"
            sx={{
                pb: 12,
                px: { xs: 4, md: 6 },
            }}
        >
            <Container
                maxWidth={false}
                sx={{
                    maxWidth: "68rem",
                    mx: "auto",
                }}
            >
                <Typography
                    component="h2"
                    variant="h3"
                    sx={{
                        fontWeight: 500,
                        textAlign: "center",
                        mb: 6,
                    }}
                >
                    Discover the event
                </Typography>

                <Grid container spacing={3}>
                    {/* Row 1 */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <DiscoverCard step={steps[0]!} minHeight={320} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 7 }}>
                        <DiscoverCard step={steps[3]!} minHeight={320} />
                    </Grid>

                    {/* Row 2 */}
                    <Grid size={{ xs: 12, md: 6 }}>
                        <DiscoverCard step={steps[2]!} minHeight={360} />
                    </Grid>
                    <Grid size={{ xs: 12, md: 6 }}>
                        <DiscoverCard step={steps[1]!} minHeight={360} />
                    </Grid>

                    {/* Row 3 – full width */}
                    <Grid size={{ xs: 12, md: 12 }}>
                        <DiscoverCard step={steps[4]!} minHeight={300} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default Discover;
