"use client";

import type { ReactElement, ReactNode } from "react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { motion } from "motion/react";
import {
    Engine,
    World,
    Bodies,
    Body,
    Runner,
    Events,
} from "matter-js";

type Track = {
    id: string;
    title: ReactNode;
};

const tracks: Track[] = [
    {
        id: "01",
        title: (
            <>
                Quantum Futures
            </>
        ),
    },
    {
        id: "02",
        title: (
            <>
                Artificial Intelligence &amp; AI Systems
            </>
        ),
    },
    { id: "03", title: "Blockchain & Decentralized Tech" },
    { id: "04", title: "Culture, Creativity & Narrative" },
];

const topicsMap: Record<number, string[]> = {
    0: [
        "Quantum Computing",
        "Quantum Threats",
        "Post-Quantum Cryptography",
        "Quantum Money",
    ],
    1: ["Artificial Intelligence", "AI Agents", "Vibe Coding", "Ethics"],
    2: [
        "DeFi",
        "RWA",
        "ZK Proofs",
        "Privacy",
        "Layer 2",
        "Infrastructure",
        "Law",
        "Community",
    ],
    3: ["Art", "Marketing", "Sci-Fi"],
};

const MIN_BUBBLES = 18;
const MAX_BUBBLES = 28;

function shuffle<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i -= 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j]!, copy[i]!];
    }
    return copy;
}

function ThemeAndTracks(): ReactElement {
    const [activeTrack, setActiveTrack] = useState(0);

    const containerRef = useRef<HTMLDivElement | null>(null);
    const pillRefs = useRef<(HTMLDivElement | null)[]>([]);

    // Build the list of labels (repeating topics to have many pills)
    const labels = useMemo(() => {
        const baseTopics = topicsMap[activeTrack] ?? [];
        if (!baseTopics.length) return [];

        const targetCount = Math.max(
            MIN_BUBBLES,
            Math.min(MAX_BUBBLES, baseTopics.length * 4)
        );

        const raw: string[] = [];
        for (let i = 0; i < targetCount; i += 1) {
            raw.push(baseTopics[i % baseTopics.length]!);
        }

        return shuffle(raw);
    }, [activeTrack]);

    const topicsTitle = useMemo(
        () => tracks[activeTrack]?.title,
        [activeTrack]
    );

    // Matter.js simulation: DOM pills <-> invisible bodies
    useEffect(() => {
        const box = containerRef.current;
        if (!box || labels.length === 0) return;

        const width = box.clientWidth || 800;
        const height = box.clientHeight || 260;

        const engine = Engine.create({
            gravity: { x: 0, y: 1.15 },
        });
        const world = engine.world;

        // Boundaries
        const ground = Bodies.rectangle(
            width / 2,
            height + 40,
            width + 80,
            80,
            {
                isStatic: true,
            }
        );
        const leftWall = Bodies.rectangle(-40, height / 2, 80, height, {
            isStatic: true,
        });
        const rightWall = Bodies.rectangle(width + 40, height / 2, 80, height, {
            isStatic: true,
        });

        World.add(world, [ground, leftWall, rightWall]);

        const bodies: Body[] = [];

        const baseCount = Math.min(6, labels.length);
        const usableWidth = width - 80;

        pillRefs.current.forEach((el, i) => {
            if (!el) return;

            // Measure pill size
            const rect = el.getBoundingClientRect();
            const pillWidth = rect.width || 160;
            const pillHeight = rect.height || 42;

            let x: number;
            let y: number;

            if (i < baseCount) {
                // Base row: spread across width, close to the ground
                const segment = usableWidth / baseCount;
                const center = 40 + segment * (i + 0.5);
                const jitter = (Math.random() - 0.5) * segment * 0.35;
                x = center + jitter;
                y = -40 - Math.random() * 40; // a bit above so they "fall into" place
            } else {
                // Upper pills: higher, random X
                x = 40 + Math.random() * usableWidth;
                y = -height - Math.random() * height;
            }

            const body = Bodies.rectangle(x, y, pillWidth, pillHeight, {
                chamfer: { radius: pillHeight / 2 },
                restitution: 0.55,
                friction: 0.3,
                frictionAir: 0.02,
            });

            Body.setAngle(body, (Math.random() - 0.5) * 0.8);
            World.add(world, body);
            bodies[i] = body;
        });

        const sync = () => {
            bodies.forEach((body, i) => {
                const el = pillRefs.current[i];
                if (!el) return;

                const { x, y } = body.position;
                const angle = body.angle;

                el.style.left = `${x}px`;
                el.style.top = `${y}px`;
                el.style.transform = `translate(-50%, -50%) rotate(${angle}rad)`;
            });
        };

        Events.on(engine, "afterUpdate", sync);

        const runner = Runner.create();
        Runner.run(runner, engine);

        return () => {
            Events.off(engine, "afterUpdate", sync as (e: Event) => void);
            Runner.stop(runner);
            Engine.clear(engine);
            World.clear(world, false);
        };
    }, [activeTrack, labels.length]);

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
                    Themes &amp; Tracks
                </Typography>

                <Grid container spacing={4}>
                    {/* LEFT – Tracks grid */}
                    <Grid size={{ xs: 12, md: 5 }}>
                        <Grid
                            container
                            spacing={2}
                            sx={{
                                height: "100%",
                            }}
                        >
                            {tracks.map((track, index) => {
                                const isActive = index === activeTrack;
                                return (
                                    <Grid key={track.id} size={{ xs: 6, md: 6 }}>
                                        <Box
                                            component={motion.button}
                                            type="button"
                                            onClick={() => setActiveTrack(index)}
                                            whileTap={{ scale: 0.97 }}
                                            sx={{
                                                width: "100%",
                                                height: "100%",
                                                borderRadius: "1.5rem",
                                                border: isActive
                                                    ? "1px solid rgba(252,210,33,0.9)"
                                                    : "1px solid rgba(255,255,255,0.12)",
                                                backgroundImage: isActive
                                                    ? "linear-gradient(180deg,#A42A2E,#1A0707,#000000)"
                                                    : "linear-gradient(180deg,#A42A2E,#1A0707,#000000)",
                                                color: "#FFFFFF",
                                                padding: "18px 18px 20px",
                                                textAlign: "left",
                                                cursor: "pointer",
                                                outline: "none",
                                                position: "relative",
                                                overflow: "hidden",
                                                display: "flex",
                                                flexDirection: "column",
                                                justifyContent: "space-between",
                                                minHeight: 150,
                                                boxShadow: isActive
                                                    ? "0 18px 40px rgba(0,0,0,0.65)"
                                                    : "0 10px 24px rgba(0,0,0,0.45)",
                                                transition:
                                                    "transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease, background 0.25s ease",
                                                "&:hover": {
                                                    transform: "translateY(-4px)",
                                                    boxShadow: "0 18px 45px rgba(0,0,0,0.75)",
                                                    borderColor: "rgba(252,210,33,0.85)",
                                                },
                                            }}
                                        >
                                            <Typography
                                                sx={{
                                                    fontSize: "0.75rem",
                                                    letterSpacing: "0.15em",
                                                    textTransform: "uppercase",
                                                    color: "rgba(252,210,33,0.95)",
                                                    mb: 1,
                                                }}
                                            >
                                                Track {track.id}
                                            </Typography>
                                            <Typography
                                                sx={{
                                                    fontSize: { xs: "0.9rem", md: "1rem" },
                                                    fontWeight: 500,
                                                    lineHeight: 1.3,
                                                }}
                                            >
                                                {track.title}
                                            </Typography>
                                        </Box>
                                    </Grid>
                                );
                            })}
                        </Grid>
                    </Grid>

                    {/* RIGHT – Topics box + Matter.js pills */}
                    <Grid size={{ xs: 12, md: 7 }} sx={{
                        display: "flex",
                    }}>
                        <Box
                            sx={{
                                borderRadius: "1.75rem",
                                background: "linear-gradient(180deg,#A42A2E,#1A0707,#000000)",
                                border: "1px solid rgba(255,255,255,0.12)",
                                color: "#111827",
                                p: { xs: 3, md: 4 },
                                minHeight: 260,
                                boxShadow: "0 18px 45px rgba(0,0,0,0.45)",
                                display: "flex",
                                flexDirection: "column",
                                flex: 1
                            }}
                        >
                            {/* Header */}
                            <Box
                                sx={{
                                    mb: 2.5,
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "baseline",
                                    gap: 2,
                                }}
                            >
                                <Box>
                                    <Typography
                                        sx={{
                                            fontSize: "0.8rem",
                                            fontWeight: 600,
                                            letterSpacing: "0.16em",
                                            textTransform: "uppercase",
                                            color: "rgba(252,210,33,0.95)",
                                        }}
                                    >
                                        Topics
                                    </Typography>
                                    <Typography
                                        sx={{
                                            fontSize: "1.1rem",
                                            fontWeight: 500,
                                            color: "#FFFFFF",
                                        }}
                                    >
                                        {topicsTitle}
                                    </Typography>
                                </Box>
                            </Box>

                            {/* Physics field (DOM pills controlled by Matter.js) */}
                            <Box
                                ref={containerRef}
                                sx={{
                                    position: "relative",
                                    flex: 1,
                                    borderRadius: "1.5rem",
                                    overflow: "hidden",
                                    background:
                                        "radial-gradient(circle at top, rgba(252,184,33,0.18), transparent 55%), rgba(5,0,0,0.96)",
                                    border: "1px solid rgba(255,255,255,0.12)",
                                    boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.7)",
                                }}
                            >
                                {labels.map((label, index) => (
                                    <Box
                                        // DOM pill that Matter.js will move
                                        key={`${activeTrack}-${index}-${label}`}
                                        ref={(el) => {
                                            pillRefs.current[index] = el as HTMLDivElement | null;
                                        }}
                                        sx={{
                                            position: "absolute",
                                            left: "50%",
                                            top: "-80px", // start above box; physics will take over
                                            transform: "translate(-50%, -50%)",
                                            pointerEvents: "none",
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                px: 2.6,
                                                py: 1.05,
                                                borderRadius: 9999,
                                                fontSize: "0.82rem",
                                                fontWeight: 500,
                                                letterSpacing: "0.015em",
                                                background:
                                                  "linear-gradient(135deg,#FFFDF6,#F6E0B8)", // warm white → soft gold
                                                color: "#111827",
                                                border: "1px solid rgba(252,210,33,0.7)",
                                                boxShadow: "0 12px 26px rgba(0,0,0,0.55)",
                                                whiteSpace: "nowrap",
                                              }}
                                        >
                                            {label}
                                        </Box>
                                    </Box>
                                ))}
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
}

export default ThemeAndTracks;
