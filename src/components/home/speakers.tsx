"use client";

import type { ReactElement } from "react";
import { useEffect, useRef, useState } from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import {
  Box,
  Container,
  Divider,
  Grid,
  Skeleton,
  Stack,
  Typography,
  Link,
} from "@mui/material";
import Image from "next/image";
import NextLink from "next/link";
import { motion, useInView } from "motion/react";
import type { Speaker } from "@/lib/speakers";
import NewGenericButton from "@/components/ui/newGenericButton";

function Speakers(): ReactElement {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const [allSpeakers, setAllSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/speakers")
      .then((res) => res.json())
      .then((data: Speaker[]) => {
        setAllSpeakers(data.slice(0, 12));
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  const speakers = isMobile ? allSpeakers.slice(0, 6) : allSpeakers;

  return (
    <Box
      component="section"
      ref={sectionRef}
      sx={{
        pt: 0,
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
        {/* Header */}
        <Box sx={{ mb: 6 }}>
          <Typography
            component={motion.span}
            initial={{ opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
            transition={{ duration: 0.4 }}
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
            component={motion.h2}
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            sx={{
              fontSize: { xs: "2.25rem", md: "3rem" },
              fontWeight: 500,
              color: "#FFFFFF",
              mb: 1.5,
            }}
          >
            Voices from{" "}
            <Box component="span" className="animated-gradient-text">
              around
            </Box>{" "}
            the world
          </Typography>

          <Typography
            component={motion.p}
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            sx={{
              fontSize: "1.125rem",
              color: "#D1D5DB",
              maxWidth: "32rem",
            }}
          >
            Faces, stories, and ideas that make our event unforgettable.
          </Typography>
        </Box>

        {/* Speakers grid */}
        <Grid container spacing={{ xs: 2, md: 3 }}>
          {loading
            ? Array.from({ length: isMobile ? 6 : 12 }).map((_, i) => (
                <Grid key={i} size={{ xs: 6, md: 3 }}>
                  <Stack gap={1.5}>
                    <Skeleton
                      variant="text"
                      width="70%"
                      sx={{ bgcolor: "rgba(255,255,255,0.08)" }}
                    />
                    <Skeleton
                      variant="rounded"
                      sx={{
                        width: "100%",
                        aspectRatio: "3/4",
                        bgcolor: "rgba(255,255,255,0.05)",
                        borderRadius: 2,
                      }}
                    />
                  </Stack>
                </Grid>
              ))
            : speakers.map((speaker, index) => {
                const mainAffiliation = speaker.affiliations?.[0];
                return (
                  <Grid key={speaker.id} size={{ xs: 6, md: 3 }}>
                    <Box
                      component={motion.div}
                      initial={{ opacity: 0, y: 30 }}
                      animate={
                        isInView
                          ? { opacity: 1, y: 0 }
                          : { opacity: 0, y: 30 }
                      }
                      transition={{
                        duration: 0.5,
                        delay: 0.15 + index * 0.1,
                        ease: [0.43, 0.13, 0.23, 0.96],
                      }}
                    >
                      <Stack gap={1.5}>
                        {/* Mobile: divider + name/company ABOVE image */}
                        <Box sx={{ display: { xs: "block", md: "none" } }}>
                          <Divider
                            sx={{ borderBottom: "1px solid rgba(220,184,33,0.55)", mb: 1.5 }}
                          />
                          <Stack direction="column" sx={{ minHeight: 40 }}>
                            <Typography
                              variant="subtitle1"
                              fontWeight={500}
                              sx={{
                                fontSize: { xs: "0.8rem", sm: "0.85rem" },
                                lineHeight: 1.3,
                                color: "#FFFFFF",
                                wordBreak: "break-word",
                              }}
                            >
                              {speaker.name}
                            </Typography>
                            <Typography
                              variant="subtitle1"
                              fontWeight={700}
                              className={mainAffiliation ? "animated-gradient-text" : undefined}
                              sx={{
                                fontSize: { xs: "0.72rem", sm: "0.78rem" },
                                lineHeight: 1.4,
                                overflow: "hidden",
                                textOverflow: "ellipsis",
                                whiteSpace: "nowrap",
                                visibility: mainAffiliation ? "visible" : "hidden",
                              }}
                            >
                              {mainAffiliation?.company_name ?? "\u00A0"}
                            </Typography>
                          </Stack>
                        </Box>

                        {/* Profile Picture */}
                        <Box
                          sx={{
                            position: "relative",
                            borderRadius: "1rem",
                            overflow: "hidden",
                            aspectRatio: "3 / 4",
                            cursor: "pointer",
                            backgroundColor: "#ffffff",
                            "&:hover .speaker-image": {
                              transform: { xs: "scale(1)", md: "scale(1.05)" },
                            },
                          }}
                        >
                          {speaker.profilePicUrl ? (
                            <Box
                              className="speaker-image"
                              sx={{
                                position: "absolute",
                                inset: 0,
                                transition: "transform 0.5s ease",
                              }}
                            >
                              <Image
                                src={speaker.profilePicUrl}
                                alt={speaker.name}
                                fill
                                sizes="(max-width: 900px) 50vw, 25vw"
                                style={{ objectFit: "cover" }}
                              />
                            </Box>
                          ) : (
                            <Box
                              sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                  "linear-gradient(135deg, #952527 0%, #170300 100%)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Typography
                                sx={{
                                  fontSize: { xs: "2rem", md: "3rem" },
                                  fontWeight: 600,
                                  color: "rgba(255,255,255,0.3)",
                                }}
                              >
                                {speaker.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </Typography>
                            </Box>
                          )}
                        </Box>

                        {/* Desktop: name/company BELOW image */}
                        <Box
                          sx={{
                            display: { xs: "none", md: "block" },
                            minHeight: 44,
                          }}
                        >
                          <Typography
                            variant="subtitle1"
                            fontWeight={500}
                            sx={{
                              fontSize: "1rem",
                              lineHeight: 1.3,
                              color: "#FFFFFF",
                              wordBreak: "break-word",
                            }}
                          >
                            {speaker.name}
                          </Typography>
                          <Typography
                            variant="subtitle1"
                            fontWeight={700}
                            className={mainAffiliation ? "animated-gradient-text" : undefined}
                            sx={{
                              fontSize: "0.88rem",
                              lineHeight: 1.4,
                              overflow: "hidden",
                              textOverflow: "ellipsis",
                              whiteSpace: "nowrap",
                              visibility: mainAffiliation ? "visible" : "hidden",
                            }}
                          >
                            {mainAffiliation?.company_name ?? "\u00A0"}
                          </Typography>
                        </Box>
                      </Stack>
                    </Box>
                  </Grid>
                );
              })}
        </Grid>

        {/* View all button */}
        {!loading && speakers.length > 0 && (
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 14 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 5,
            }}
          >
            <Link
              component={NextLink}
              href="/speakers"
              sx={{ textDecoration: "none", borderRadius: 999 }}
            >
              <NewGenericButton label="View all speakers" />
            </Link>
          </Box>
        )}
      </Container>
    </Box>
  );
}

export default Speakers;
