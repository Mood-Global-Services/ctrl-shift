"use client";

import {
  useEffect,
  useState,
  useRef,
  type ReactElement,
} from "react";
import { Box, Container, Typography } from "@mui/material";
import {
  motion,
  useMotionValue,
  animate,
  useInView,
} from "motion/react";

type StatsVariant = "problem" | "solution";

export interface StatsProps {
  type?: StatsVariant;
}

interface FeatureCardProps {
  value: string;
  label: string;
  index: number;
  isActive: boolean;
}

interface AnimatedCounterProps {
  target: number;
  delay?: number;
  suffix?: string;
  isActive: boolean;
}

function parseStatValue(raw: string): { target: number; suffix: string } {
  const match = /([\d,]+)/.exec(raw);
  if (!match) {
    return { target: 0, suffix: raw };
  }

  const numeric = parseInt((match[1] ?? "").replace(/,/g, ""), 10);
  const suffix = raw.slice((match[1] ?? "").length);

  return { target: numeric, suffix };
}

function AnimatedCounter({
  target,
  delay = 0,
  suffix = "",
  isActive,
}: AnimatedCounterProps): ReactElement {
  const motionValue = useMotionValue(0);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isActive) {
      // keep it at 0 until the section is in view
      setDisplay(0);
      return;
    }

    const controls = animate(motionValue, target, {
      duration: 1.4,
      delay,
      ease: "easeOut",
      onUpdate(latest) {
        setDisplay(Math.round(latest));
      },
    });

    return () => {
      controls.stop();
    };
  }, [motionValue, target, delay, isActive]);

  return (
    <span>
      {display.toLocaleString()}
      {suffix}
    </span>
  );
}

function FeatureCard({
  value,
  label,
  index,
  isActive,
}: FeatureCardProps): ReactElement {
  const { target, suffix } = parseStatValue(value);

  // stagger animations per card
  const baseDelay = 0.2 * index;
  const labelDelay = baseDelay;
  const numberDelay = baseDelay + 0.35;

  return (
    <Box
      sx={{
        position: "relative",
        overflow: "hidden",
        borderRadius: "1.5rem",
        px: 4,
        py: 3,
        aspectRatio: { xs: "1 / 1", md: "auto" },
        minHeight: { md: "12rem" },
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        transition: "transform 0.3s ease",
        "&:hover": {
          transform: "scale(1.02)",
        },
        backgroundColor: "rgba(0,0,0,0.35)",
        border: "1px solid rgba(255,255,255,0.10)",
      }}
    >
      <Box sx={{ position: "relative", zIndex: 10 }}>
        {/* Number (animated count) */}
        <Typography
          component={motion.p}
          variant="h2"
          sx={{
            fontWeight: 500,
            mb: 1,
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={
            isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 8 }
          }
          transition={{ delay: numberDelay, duration: 0.4 }}
        >
          <AnimatedCounter
            target={target}
            suffix={suffix}
            delay={numberDelay}
            isActive={isActive}
          />
        </Typography>

        {/* Label */}
        <Typography
          component={motion.p}
          variant="h6"
          sx={{
            fontWeight: 500,
            color: "rgba(255,255,255,0.75)",
          }}
          initial={{ opacity: 0, y: 8 }}
          animate={
            isActive
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 8 }
          }
          transition={{ delay: labelDelay, duration: 0.4 }}
        >
          {label}
        </Typography>
      </Box>
    </Box>
  );
}

function Stats({ type: _type = "solution" }: StatsProps): ReactElement {
  const cards = [
    { value: "1,200+", label: "People happy" },
    { value: "80+", label: "Speakers" },
    { value: "35+", label: "Sponsors" },
    { value: "70+", label: "Partners" },
  ];

  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3, // ~30% of the block in viewport
    once: true,  // only trigger the first time
  });

  return (
    <Box
      component="section"
      sx={{
        pt: { xs: 10, md: 12 },
        pb: { xs: 3, md: 6 },
        px: { xs: 3, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "68rem",
          mx: "auto",
        }}
      >
        {/* Title (unchanged text) */}
        <Typography
          component="h2"
          variant="h3"
          sx={{
            fontWeight: 500,
            textAlign: "center",
            mb: 1.5,
          }}
        >
          {"Last version : "}
          <Box
            component="span"
            sx={{
              backgroundImage:
                "linear-gradient(0deg,rgb(122, 121, 121) 0%,rgb(85, 85, 85) 100%)",
              backgroundSize: "200% auto",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              color: "transparent",
              animation: "text-gradient 6s ease-in-out infinite",
            }}
          >
            NapulETH
          </Box>{" "}
          2025
        </Typography>

        {/* Subtitle (unchanged text) */}
        <Typography
          component="p"
          variant="subtitle1"
          sx={{
            textAlign: "center",
            maxWidth: "32rem",
            mx: "auto",
            mb: 3,
            lineHeight: 1.6,
          }}
        >
          NapulETH 2025 was a great event! Hundreds of people came together to
          celebrate the fusion of culture and frontier tech.
        </Typography>

        {/* Stats container */}
        <Box
          ref={sectionRef}
          sx={{
            position: "relative",
            overflow: "hidden",
            px: { xs: 3, md: 0 },
          }}
        >
          <Box
            sx={{
              position: "relative",
              zIndex: 10,
              display: "grid",
              gridTemplateColumns: {
                xs: "repeat(2, minmax(0, 1fr))",
                md: "repeat(4, minmax(0, 1fr))",
              },
              gap: { xs: 2.5, md: 3.5 },
            }}
          >
            {cards.map((card, index) => (
              <FeatureCard
                key={card.label}
                index={index}
                value={card.value}
                label={card.label}
                isActive={isInView}
              />
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default Stats;
