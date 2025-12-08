"use client";

import type { ReactElement } from "react";
import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";

import decorationImg from "@/assets/images/decorationImage.webp";

type TeamMember = {
  name: string;
  role: string;
  image: string;
};

const team: TeamMember[] = [
  {
    name: "David Cole",
    role: "Head of Strategy",
    image:
      "https://images.unsplash.com/photo-1642610225765-a1cd62b7b565?w=600&q=80",
  },
  {
    name: "Jane Cooper",
    role: "Lead Engineer",
    image:
      "https://images.unsplash.com/photo-1623594675959-02360202d4d6?w=600&q=80",
  },
  {
    name: "Paul Kim",
    role: "Product Design",
    image:
      "https://images.unsplash.com/photo-1750187655549-b5009f762677?w=600&q=80",
  },
  {
    name: "Emma Banks",
    role: "Operations",
    image:
      "https://images.unsplash.com/photo-1622825312265-5d5caaed05b4?w=600&q=80",
  },
];

function Speakers(): ReactElement {
  return (
    <Box
      component="section"
      sx={{
        pt: 0,
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
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            component="span"
            sx={{
              display: "block",
              fontSize: 14,
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: "#DCB821",
              mb: 2,
            }}
          >
            SPEAKERS
          </Typography>

          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 500,
              color: "#FFFFFF",
              mb: 1.5,
            }}
          >
            Voices from{" "}
            <Box
              component="span"
              sx={{
                backgroundImage:
                  "linear-gradient(90deg, rgba(255,255,255,0.7) , rgba(142, 142, 142, 0.7))",
                backgroundSize: "200% auto",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                animation: "text-gradient 8s ease-in-out infinite",
              }}
            >
              around
            </Box>{" "}
            the world
          </Typography>

          <Typography
            component="p"
            sx={{
              fontSize: "1.125rem",
              color: "#D1D5DB",
              maxWidth: "32rem",
            }}
          >
            Faces, stories, and ideas that make our event unforgettable
          </Typography>
        </Box>

        {/* Team grid */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {team.map((member) => (
            <Grid key={member.name} size={{ xs: 6, md: 3 }}>
              <Box
                sx={{
                  position: "relative",
                  borderRadius: "1rem",
                  overflow: "hidden",
                  aspectRatio: "3 / 4",
                  cursor: "pointer",
                  "&:hover .team-image": {
                    transform: "scale(1.05)",
                  },
                }}
              >
                <Box
                  className="team-image"
                  sx={{
                    position: "absolute",
                    inset: 0,
                    transition: "transform 0.5s ease",
                  }}
                >
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="(max-width: 900px) 50vw, 25vw"
                    style={{
                      objectFit: "cover",
                      filter: "blur(12px)",
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>

        {/* Apply / Here title */}
        <Box
          sx={{
            mt: 6,
            mb: 3,
            textAlign: "center",
          }}
        >
          <Typography
            component="h2"
            sx={{
              fontSize: { xs: "1.875rem", md: "2.25rem" },
              fontWeight: 500,
              color: "#FFFFFF",
              mb: 1.5,
            }}
          >
            Apply{" "}
            <Box
              component="span"
              className="switzer-italic"
              sx={{
                color: "rgba(255,255,255,0.7)",
                animation: "text-gradient 8s ease-in-out infinite",
                fontWeight: 400
              }}
            >
              Here
            </Box>
          </Typography>
        </Box>

        {/* CTA card with full decoration background */}
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            borderRadius: "1rem",
            p: 3,
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            alignItems: "center",
            justifyContent: "space-between",
            gap: { xs: 2.5, md: 3 },
            backgroundImage:
              "linear-gradient(180deg, #A42A2E, #1A0707, #A42A2E)",
            backgroundSize: "100% 200%",
            backgroundPosition: "top",
          }}
        >
          {/* Decoration image across entire card, on top of gradient */}
          <Box
            sx={{
              position: "absolute",
              inset: 0,
              zIndex: 0,
              opacity: 0.5,
              pointerEvents: "none",
            }}
          >
            <Image
              src={decorationImg}
              alt=""
              fill
              sizes="(max-width: 900px) 100vw, 68rem"
              style={{ objectFit: "cover" }}
              priority
            />
          </Box>

          {/* Text */}
          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              maxWidth: "32rem",
            }}
          >
            <Typography
              component="h3"
              sx={{
                fontWeight: 500,
                fontSize: "1.125rem",
                color: "#FFFFFF",
                mb: 1,
              }}
            >
              Want to be a speaker at ctrl/shift?
            </Typography>
            <Typography
              component="p"
              sx={{
                fontSize: "1rem",
                color: "#FFFFFF",
                fontWeight: 400,
              }}
            >
              We are always looking for talented people who want to come and share
              their ideas with the blockchain community.
            </Typography>
          </Box>

          {/* Button */}
          <Button
            component="a"
            href="https://speak.ctrlshift.events/"
            sx={{
              position: "relative",
              zIndex: 1,
              height: 48,
              width: 224,
              borderRadius: "0.5rem",
              px: 0,
              textTransform: "none",
              fontSize: "1rem",
              fontWeight: 600,
              color: "#DCB821",
              backgroundImage:
                "linear-gradient(0deg,#000000 0%,#131313 23.08%,#191919 45.67%,#1E1E1E 63.46%,#222222 100%)",
              boxShadow: "0 18px 40px rgba(0,0,0,0.65)",
              border: "none",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "& .speaker-btn-decoration": {
                position: "absolute",
                right: -48,
                top: "50%",
                transform: "translateY(-50%)",
                pointerEvents: "none",
                opacity: 0,
                transition: "opacity 0.3s ease",
              },
              "&:hover .speaker-btn-decoration": {
                opacity: 0.35,
              },
              "& span.label": {
                position: "relative",
                zIndex: 1,
                color: "#FFFFFF",
              },
            }}
          >
            {/* Inner decoration on hover (kept as in your version) */}
            <Box className="speaker-btn-decoration">
              <Image
                src={decorationImg}
                alt=""
                style={{ height: "auto", width: "180px" }}
              />
            </Box>

            <span className="label">Become a speaker</span>
          </Button>
        </Box>
      </Container>
    </Box>
  );
}

export default Speakers;
