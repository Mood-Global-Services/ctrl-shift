"use client";

import type { ReactElement } from "react";
import Image from "next/image";
import { Box, Container, Typography, Link } from "@mui/material";
import { useRef } from "react";
import { motion, useInView } from "motion/react";
import NewSponsorsButton from "@/components/ui/newSponsorsButton";
import NewAgendaButton from "@/components/ui/newAgendaButton";
import NewSpeakersButton from "@/components/ui/newSpeakersButton";
import SponsorButton2 from "@/components/ui/sponsorButton2";

import napulethIcon from "@/assets/images/napulethLogo.webp";
import ctrlShiftIcon from "@/assets/images/rawLogo.webp";

interface StepProps {
  number: string;
  title: string;
  description: string;
  buttonComponent?: ReactElement;
  buttonText: string;
  link?: string;
}

const STEPS: StepProps[] = [
  {
    number: "01",
    title: "Become a sponsor",
    description:
      "We partner selectively — if your brand shapes the future, this is your stage.",
    buttonComponent: <SponsorButton2 label="Become a sponsor" />,
    buttonText: "Become a sponsor",
    link: "https://docsend.com/view/zaw8ij7k9avkcg6z",
  },
  {
    number: "02",
    title: "Become a speaker",
    description:
      "We’re selective, but simple: if you bring real value, you’re welcome on our stage.",
    buttonComponent: <NewSpeakersButton label="Become a speaker" />,
    buttonText: "Become a speaker",
    link: "https://speak.ctrlshift.events/",
  },
  {
    number: "03",
    title: "Explore our agenda",
    description:
      "Discover sessions across AI, Web3, and Quantum — the full agenda drops soon.",
    buttonComponent: <NewAgendaButton label="Check the agenda" />,
    buttonText: "Check the agenda",
  },
];

function Step({
  number,
  title,
  description,
  buttonComponent,
  link,
}: StepProps): ReactElement {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "flex-start",
        gap: 3,
      }}
    >
      <Typography
        component="span"
        sx={{
          fontSize: "0.875rem",
          fontWeight: 500,
          color: "#FAD021",
          mt: 1.5,
        }}
      >
        {number}
      </Typography>

      <Box>
        <Typography
          component="h3"
          sx={{
            fontSize: "1.25rem",
            fontWeight: 500,
            color: "#FFFFFF",
            mb: 1.5,
          }}
        >
          {title}
        </Typography>

        <Typography
          component="p"
          sx={{
            color: "rgba(255,255,255,0.8)",
            lineHeight: 1.7,
            maxWidth: "28rem",
            mb: 0.5,
          }}
        >
          {description}
        </Typography>

        {link ? (
          <Link href={link} target="_blank" rel="noopener noreferrer">
            {buttonComponent}
          </Link>
        ) : (
          buttonComponent ?? ""
        )}
      </Box>
    </Box>
  );
}

function About(): ReactElement {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, {
    amount: 0.3,
    once: true,
  });

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        px: { xs: 3, md: 6 },
        bgcolor: "transparent",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: "68rem",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              lg: "minmax(0, 1.1fr) minmax(0, 0.9fr)",
            },
            columnGap: { xs: 3, lg: 4 },
            rowGap: { xs: 6, lg: 8 },
          }}
        >
          {/* LEFT COLUMN – title first, then text (as one block) */}
          <Box>
            {/* Title block (eyebrow + main title) */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 18 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              <Typography
                component="span"
                variant="subtitle2"
                sx={{
                  display: "block",
                  mb: 1.5,
                  fontWeight: 700,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                  color: "#DCB821",
                }}
              >
                THE MOMENT OUR IDENTITY EXPANDS
              </Typography>

              <Typography
                component="h2"
                variant="h3"
                sx={{
                  fontWeight: 500,
                  color: "#FFFFFF",
                  mb: 1.5,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                }}
              >
                From{" "}
                <Box
                  component="span"
                  sx={{
                    fontFamily: "serif",
                    fontStyle: "italic",
                    color: "rgba(255,255,255,0.7)",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  NapulETH
                  <Image
                    src={napulethIcon}
                    alt="NapulETH"
                    height={36}
                    style={{ width: "auto", height: 36 }}
                  />
                </Box>
                <br />
                to{" "}
                <Box
                  component="span"
                  sx={{
                    color: "#DCB821",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 1,
                  }}
                >
                  ctrl/shift
                  <Image
                    src={ctrlShiftIcon}
                    alt="ctrl/shift"
                    height={24}
                    style={{ width: "auto", height: 24, marginTop: 4 }}
                  />
                </Box>
              </Typography>
            </Box>

            {/* TEXT BLOCK – all paragraphs appear together after title */}
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: 18 }}
              animate={
                isInView
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 18 }
              }
              transition={{
                duration: 0.45,
                ease: "easeOut",
                delay: 0.25,
              }}
            >
              <Typography
                component="p"
                sx={{
                  mb: 1.5,
                  maxWidth: "28rem",
                  lineHeight: 1.85,
                }}
              >
                What started as a spark in Web3 now unfolds into a wider
                constellation—{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  AI
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  Quantum Computing
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  blockchain
                </span>
                , and the technologies that bend the horizon.
              </Typography>

              <Typography
                component="p"
                variant="body1"
                sx={{
                  mb: 1.5,
                  maxWidth: "28rem",
                  lineHeight: 1.85,
                }}
              >
                This year,{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  thinkers
                </span>{" "}
                and{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  builders
                </span>{" "}
                gather not just to speak, but to experiment, to collide, to
                imagine.
              </Typography>

              <Typography
                component="p"
                variant="body1"
                sx={{
                  mb: 2,
                  maxWidth: "28rem",
                  lineHeight: 1.85,
                }}
              >
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  Institutions
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  researchers
                </span>
                ,{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  creators
                </span>
                , and{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  protocols
                </span>{" "}
                meet under one roof to trace new patterns, uncover hidden
                connections, and turn emerging ideas into living, breathing
                experiences.
              </Typography>

              <Typography
                component="p"
                variant="body1"
                sx={{
                  mb: { xs: 4, md: 0 },
                  maxWidth: "28rem",
                  lineHeight: 1.85,
                }}
              >
                A <span className="animated-gradient-text" style={{ fontWeight: 700 }}>shift</span> in{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  scale
                </span>
                , a <span className="animated-gradient-text" style={{ fontWeight: 700 }}>shift</span> in{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  ambition
                </span>
                , a <span className="animated-gradient-text" style={{ fontWeight: 700 }}>shift</span> in what’s possible: Welcome to a new{" "}
                <span className="bg-gradient-to-r from-[#A42A2E] to-[#1A0707] bg-[length:200%_auto] animate-text-gradient bg-clip-text text-transparent font-medium">
                  chapter
                </span>
                .
              </Typography>
            </Box>
          </Box>

          {/* RIGHT COLUMN – steps appear one by one */}
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 18 }}
            animate={
              isInView
                ? { opacity: 1, y: 0 }
                : { opacity: 0, y: 18 }
            }
            transition={{
              duration: 0.45,
              ease: "easeOut",
              delay: 0.35,
            }}
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 4,
              pt: { xs: 0, lg: 4 },
            }}
          >
            {STEPS.map((step, index) => (
              <Box
                key={step.number}
                component={motion.div}
                initial={{ opacity: 0, y: 14 }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: 14 }
                }
                transition={{
                  duration: 0.4,
                  ease: "easeOut",
                  delay: 0.45 + index * 0.18,
                }}
              >
                <Step {...step} />
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}

export default About;
