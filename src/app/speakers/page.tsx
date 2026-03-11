"use client";

import { useRef, useEffect, useState } from "react";
import {
  Stack,
  Grid,
  Typography,
  Divider,
  Box,
  Chip,
  Skeleton,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import patternImg from "@/assets/images/layer.webp";
import type { Speaker } from "@/lib/speakers";

const SpeakerCard = ({
  speaker,
  index,
}: {
  speaker: Speaker;
  index: number;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, amount: 0.2 });

  const mainAffiliation = speaker.affiliations?.[0];

  return (
    <Grid size={{ xs: 6, sm: 6, md: 3 }} key={speaker.id}>
      <motion.div
        ref={cardRef}
        initial={{ opacity: 0, y: 60 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 60 }}
        transition={{
          duration: 0.6,
          delay: (index % 4) * 0.15,
          ease: [0.43, 0.13, 0.23, 0.96],
        }}
      >
        <Stack gap={2}>
          <Divider
            sx={{
              borderBottom: "1px solid rgba(220,184,33,0.55)",
            }}
          />

          {/* Name & Affiliation */}
          <Stack
            direction="row"
            gap={0.5}
            alignItems="center"
            sx={{ flexWrap: "wrap" }}
          >
            <Typography variant="subtitle1" fontWeight={500}>
              {speaker.name}
            </Typography>
            {mainAffiliation && (
              <>
                <Typography
                  variant="caption"
                  fontWeight={500}
                  sx={{ display: { xs: "none", md: "block" } }}
                >
                  &nbsp;&#9679;&nbsp;
                </Typography>
                <Typography
                  variant="subtitle1"
                  fontWeight={300}
                  className="animated-gradient-text"
                  component={
                    mainAffiliation.company_website ? "a" : "span"
                  }
                  {...(mainAffiliation.company_website && {
                    href: mainAffiliation.company_website,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  sx={{
                    textDecoration: "none",
                    "&:hover": { textDecoration: "underline" },
                  }}
                >
                  {mainAffiliation.company_name}
                </Typography>
              </>
            )}
          </Stack>

          {/* Profile Picture */}
          <Box
            component={speaker.personalWebsite ? "a" : "div"}
            {...(speaker.personalWebsite && {
              href: speaker.personalWebsite,
              target: "_blank",
              rel: "noopener noreferrer",
            })}
            sx={{
              display: "block",
              width: "100%",
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
              borderRadius: 2,
              cursor: speaker.personalWebsite ? "pointer" : "default",
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

          {/* Bio */}
          {speaker.bio && (
            <Typography
              variant="body2"
              sx={{
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.85rem",
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {speaker.bio}
            </Typography>
          )}

          {/* Additional Affiliations */}
          {speaker.affiliations.length > 1 && (
            <Stack direction="row" gap={0.5} flexWrap="wrap">
              {speaker.affiliations.slice(1).map((aff) => (
                <Chip
                  key={aff.company_name}
                  label={aff.company_name}
                  size="small"
                  component={aff.company_website ? "a" : "span"}
                  {...(aff.company_website && {
                    href: aff.company_website,
                    target: "_blank",
                    rel: "noopener noreferrer",
                  })}
                  clickable={!!aff.company_website}
                  sx={{
                    backgroundColor: "rgba(220,184,33,0.15)",
                    color: "#DCB821",
                    border: "1px solid rgba(220,184,33,0.3)",
                    fontSize: "0.75rem",
                    height: 24,
                    "&:hover": {
                      backgroundColor: "rgba(220,184,33,0.25)",
                    },
                  }}
                />
              ))}
            </Stack>
          )}
        </Stack>
      </motion.div>
    </Grid>
  );
};

function SpeakerCardSkeleton() {
  return (
    <Grid size={{ xs: 6, sm: 6, md: 3 }}>
      <Stack gap={2}>
        <Divider sx={{ borderBottom: "1px solid rgba(220,184,33,0.2)" }} />
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
  );
}

export default function SpeakersPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });
  const isContentInView = useInView(headerRef, { amount: 0.4, once: true });

  const [speakers, setSpeakers] = useState<Speaker[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/speakers")
      .then((res) => res.json())
      .then((data: Speaker[]) => {
        setSpeakers(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

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
        <Typography
          component={motion.h1}
          className="animated-gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isContentInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          sx={{
            fontWeight: 500,
            fontSize: { xs: "2.25rem", md: "3rem", lg: "4rem" },
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            pb: 2,
            mb: { xs: 1, md: 0 },
            textAlign: { xs: "left", md: "left" },
            width: { xs: "100%", md: "50%" },
          }}
        >
          <span>Our</span> <span>Speakers</span>
        </Typography>

        <Box
          component={motion.div}
          initial={{ opacity: 0, y: 40 }}
          animate={
            isHeaderInView
              ? { opacity: 1, y: 0 }
              : { opacity: 0, y: 40 }
          }
          transition={{
            duration: 0.8,
            delay: 0.2,
            ease: [0.43, 0.13, 0.23, 0.96],
          }}
          sx={{
            width: { xs: "100%", md: "50%" },
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
              sx={{ textAlign: { xs: "left", md: "right" } }}
            >
              Voices from around the world converge at ctrl/shift.
              <br />
              Our speakers bring deep expertise in AI, Web3, and Quantum
              Computing — sharing insights that shape the future of
              technology.
              <br />
              Different perspectives, one stage:
              <br />
              pushing the boundaries of what&apos;s possible.
            </Typography>
          </Stack>
        </Box>
      </Stack>

      {/* Grid of speakers */}
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
        {loading
          ? Array.from({ length: 8 }).map((_, i) => (
              <SpeakerCardSkeleton key={i} />
            ))
          : speakers.map((speaker, index) => (
              <SpeakerCard
                key={speaker.id}
                speaker={speaker}
                index={index}
              />
            ))}
      </Grid>

      {/* Empty state */}
      {!loading && speakers.length === 0 && (
        <Box
          component={motion.div}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          sx={{
            pb: 16,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            sx={{ color: "rgba(255,255,255,0.5)", fontWeight: 300 }}
          >
            Speakers coming soon
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "rgba(255,255,255,0.3)", mt: 1 }}
          >
            Stay tuned for our lineup announcement
          </Typography>
        </Box>
      )}
    </Stack>
  );
}
