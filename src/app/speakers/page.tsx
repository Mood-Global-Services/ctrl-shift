"use client";

import { useRef, useEffect, useState } from "react";
import {
  Stack,
  Grid,
  Typography,
  Divider,
  Box,
  Skeleton,
  ClickAwayListener,
} from "@mui/material";
import { motion, useInView, AnimatePresence } from "framer-motion";
import Image from "next/image";
import patternImg from "@/assets/images/layer.webp";
import type { Speaker } from "@/lib/speakers";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import GitHubIcon from "@mui/icons-material/GitHub";
import LanguageIcon from "@mui/icons-material/Language";
import LinkIcon from "@mui/icons-material/Link";
import type { SvgIconComponent } from "@mui/icons-material";

function getLinkIcon(url: string): { Icon: SvgIconComponent; label: string } {
  try {
    const hostname = new URL(url).hostname.toLowerCase();
    if (hostname.includes("x.com") || hostname.includes("twitter.com"))
      return { Icon: XIcon, label: "X / Twitter" };
    if (hostname.includes("linkedin.com"))
      return { Icon: LinkedInIcon, label: "LinkedIn" };
    if (hostname.includes("t.me") || hostname.includes("telegram"))
      return { Icon: TelegramIcon, label: "Telegram" };
    if (hostname.includes("github.com"))
      return { Icon: GitHubIcon, label: "GitHub" };
  } catch {
    // invalid URL
  }
  return { Icon: LanguageIcon, label: "Website" };
}

function parseLinks(personalWebsite: string): string[] {
  return personalWebsite
    .split(",")
    .map((url) => url.trim())
    .filter(Boolean);
}

const LinksDropdown = ({ personalWebsite }: { personalWebsite: string }) => {
  const [open, setOpen] = useState(false);
  const links = parseLinks(personalWebsite);

  if (links.length === 0) return null;

  // If there's only one link, show its platform icon directly
  const firstLink = links[0]!;
  const { Icon: TriggerIcon } = getLinkIcon(firstLink);

  return (
    <ClickAwayListener onClickAway={() => setOpen(false)}>
      <Box sx={{ position: "relative", flexShrink: 0 }}>
        {/* Trigger button */}
        <Box
          onClick={() => {
            if (links.length === 1) {
              window.open(firstLink, "_blank", "noopener,noreferrer");
            } else {
              setOpen((prev) => !prev);
            }
          }}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: 30,
            height: 30,
            borderRadius: 1,
            cursor: "pointer",
            backgroundColor: open
              ? "rgba(220,184,33,0.15)"
              : "rgba(255,255,255,0.06)",
            border: open
              ? "1px solid rgba(220,184,33,0.4)"
              : "1px solid rgba(255,255,255,0.08)",
            transition: "all 0.2s ease",
            "&:hover": {
              backgroundColor: "rgba(220,184,33,0.15)",
              borderColor: "rgba(220,184,33,0.4)",
              "& .trigger-icon": { color: "#DCB821" },
            },
          }}
        >
          {links.length === 1 ? (
            <TriggerIcon
              className="trigger-icon"
              sx={{
                fontSize: 14,
                color: open ? "#DCB821" : "rgba(255,255,255,0.5)",
                transition: "color 0.2s ease",
              }}
            />
          ) : (
            <LinkIcon
              className="trigger-icon"
              sx={{
                fontSize: 14,
                color: open ? "#DCB821" : "rgba(255,255,255,0.5)",
                transition: "color 0.2s ease",
              }}
            />
          )}
        </Box>

        {/* Dropdown */}
        <AnimatePresence>
          {open && links.length > 1 && (
            <Box
              component={motion.div}
              initial={{ opacity: 0, y: -4, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -4, scale: 0.95 }}
              transition={{ duration: 0.15, ease: "easeOut" }}
              sx={{
                position: "absolute",
                right: { xs: "auto", sm: 0 },
                left: { xs: 0, sm: "auto" },
                top: "calc(100% + 6px)",
                zIndex: 50,
                minWidth: { xs: 140, sm: 160 },
                borderRadius: 1.5,
                overflow: "hidden",
                backgroundColor: "rgba(20,3,0,0.92)",
                backdropFilter: "blur(16px)",
                border: "1px solid rgba(220,184,33,0.2)",
                boxShadow: "0 12px 32px rgba(0,0,0,0.5)",
                py: 0.5,
              }}
            >
              {links.map((url) => {
                const { Icon, label } = getLinkIcon(url);
                return (
                  <Box
                    key={url}
                    component="a"
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => setOpen(false)}
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.5,
                      px: 1.5,
                      py: 1,
                      textDecoration: "none",
                      transition: "background-color 0.15s ease",
                      "&:hover": {
                        backgroundColor: "rgba(220,184,33,0.1)",
                        "& .dropdown-icon": { color: "#DCB821" },
                        "& .dropdown-label": {
                          color: "rgba(255,255,255,0.9)",
                        },
                      },
                    }}
                  >
                    <Icon
                      className="dropdown-icon"
                      sx={{
                        fontSize: 16,
                        color: "rgba(255,255,255,0.45)",
                        transition: "color 0.15s ease",
                      }}
                    />
                    <Typography
                      className="dropdown-label"
                      sx={{
                        fontSize: "0.8rem",
                        color: "rgba(255,255,255,0.6)",
                        transition: "color 0.15s ease",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {label}
                    </Typography>
                  </Box>
                );
              })}
            </Box>
          )}
        </AnimatePresence>
      </Box>
    </ClickAwayListener>
  );
};

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
        <Stack gap={1.5}>
          <Divider
            sx={{ borderBottom: "1px solid rgba(220,184,33,0.55)" }}
          />

          {/* Name & Company */}
          <Stack
            direction={{ xs: "column", md: "row" }}
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", md: "baseline" }}
            sx={{ minHeight: { xs: 40, md: 40 } }}
            gap={{ xs: 0.25, md: 0 }}
          >
            <Typography
              variant="subtitle1"
              fontWeight={500}
              sx={{
                fontSize: { xs: "0.8rem", sm: "0.85rem", md: "1rem" },
                lineHeight: 1.3,
                wordBreak: "break-word",
              }}
            >
              {speaker.name}
            </Typography>
            <Typography
              variant="subtitle1"
              fontWeight={300}
              className={mainAffiliation ? "animated-gradient-text" : undefined}
              component={
                mainAffiliation?.company_website ? "a" : "span"
              }
              {...(mainAffiliation?.company_website && {
                href: mainAffiliation.company_website,
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              sx={{
                textDecoration: "none",
                fontSize: { xs: "0.72rem", sm: "0.78rem", md: "1rem" },
                lineHeight: 1.4,
                textAlign: { xs: "left", md: "right" },
                flexShrink: { xs: 1, md: 0 },
                ml: { xs: 0, md: 1 },
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                maxWidth: { xs: "100%", md: "50%" },
                visibility: mainAffiliation ? "visible" : "hidden",
                "&:hover": mainAffiliation?.company_website
                  ? { textDecoration: "underline" }
                  : {},
              }}
            >
              {mainAffiliation?.company_name || "\u00A0"}
            </Typography>
          </Stack>

          {/* Profile Picture */}
          <Box
            sx={{
              width: "100%",
              position: "relative",
              aspectRatio: "3/4",
              overflow: "hidden",
              borderRadius: 2,
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

          {/* Bio (left) & Links dropdown (right) */}
          <Stack direction="row" gap={1} alignItems="flex-start">
            <Typography
              variant="body2"
              sx={{
                flex: 1,
                color: "rgba(255,255,255,0.6)",
                fontSize: { xs: "0.7rem", sm: "0.75rem", md: "0.85rem" },
                lineHeight: 1.5,
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
                minHeight: speaker.bio ? undefined : 0,
              }}
            >
              {speaker.bio || ""}
            </Typography>
            {speaker.personalWebsite && (
              <LinksDropdown personalWebsite={speaker.personalWebsite} />
            )}
          </Stack>
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
        px={{ xs: 1.5, sm: 4, md: 8, lg: 16 }}
        pt={{ xs: 12, sm: 14, md: 18 }}
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
        spacing={{ xs: 2, sm: 3, md: 3 }}
        alignItems="flex-start"
        sx={{
          width: "100%",
          mx: "auto",
          px: { xs: 1.5, sm: 4, md: 8, lg: 16 },
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
