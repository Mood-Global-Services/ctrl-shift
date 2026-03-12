"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import {
  Stack,
  Typography,
  Box,
  TextField,
  IconButton,
  Snackbar,
  Alert,
  Grid,
} from "@mui/material";
import { motion, useInView } from "framer-motion";
import Image from "next/image";
import patternImg from "@/assets/images/layer.webp";
import AddIcon from "@mui/icons-material/Add";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import CloseIcon from "@mui/icons-material/Close";
import type { Speaker } from "@/lib/speakers";

interface AffiliationInput {
  company_name: string;
  company_website: string;
  company_description: string;
}

const inputSx = {
  "& .MuiOutlinedInput-root": {
    backgroundColor: "rgba(255,255,255,0.04)",
    borderRadius: 1.5,
    fontSize: "0.9rem",
    "& fieldset": { borderColor: "rgba(255,255,255,0.1)" },
    "&:hover fieldset": { borderColor: "rgba(255,255,255,0.2)" },
    "&.Mui-focused fieldset": { borderColor: "#DCB821" },
  },
  "& .MuiInputLabel-root": {
    color: "rgba(255,255,255,0.4)",
    fontSize: "0.85rem",
    "&.Mui-focused": { color: "#DCB821" },
  },
  "& .MuiOutlinedInput-input": { color: "#FFFFFF" },
};

const emptyAffiliation: AffiliationInput = {
  company_name: "",
  company_website: "",
  company_description: "",
};

export default function AddSpeakerPage() {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.3 });

  const [name, setName] = useState("");
  const [bio, setBio] = useState("");
  const [profilePicUrl, setProfilePicUrl] = useState("");
  const [personalWebsite, setPersonalWebsite] = useState("");
  const [affiliations, setAffiliations] = useState<AffiliationInput[]>([
    { ...emptyAffiliation },
  ]);
  const [submitting, setSubmitting] = useState(false);
  const [toast, setToast] = useState<{
    open: boolean;
    message: string;
    severity: "success" | "error";
  }>({ open: false, message: "", severity: "success" });

  // Existing speakers list
  const [speakers, setSpeakers] = useState<Speaker[]>([]);

  const fetchSpeakers = useCallback(() => {
    fetch("/api/speakers")
      .then((res) => res.json())
      .then((data: Speaker[]) => setSpeakers(data))
      .catch(() => undefined);
  }, []);

  useEffect(() => {
    fetchSpeakers();
  }, [fetchSpeakers]);

  const updateAffiliation = (
    index: number,
    field: keyof AffiliationInput,
    value: string,
  ) => {
    setAffiliations((prev) =>
      prev.map((aff, i) => (i === index ? { ...aff, [field]: value } : aff)),
    );
  };

  const addAffiliation = () => {
    setAffiliations((prev) => [...prev, { ...emptyAffiliation }]);
  };

  const removeAffiliation = (index: number) => {
    setAffiliations((prev) => prev.filter((_, i) => i !== index));
  };

  const resetForm = () => {
    setName("");
    setBio("");
    setProfilePicUrl("");
    setPersonalWebsite("");
    setAffiliations([{ ...emptyAffiliation }]);
  };

  const handleSubmit = async () => {
    if (!name.trim()) {
      setToast({ open: true, message: "Name is required", severity: "error" });
      return;
    }

    setSubmitting(true);
    try {
      const res = await fetch("/api/speakers", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          bio,
          profilePicUrl,
          personalWebsite,
          affiliations: affiliations.filter((a) => a.company_name.trim()),
        }),
      });

      if (!res.ok) throw new Error("Failed");

      setToast({
        open: true,
        message: `${name} added successfully`,
        severity: "success",
      });
      resetForm();
      fetchSpeakers();
    } catch {
      setToast({
        open: true,
        message: "Failed to add speaker",
        severity: "error",
      });
    } finally {
      setSubmitting(false);
    }
  };

  const handleDelete = async (id: string, speakerName: string) => {
    try {
      const res = await fetch("/api/speakers", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ id }),
      });

      if (!res.ok) throw new Error("Failed");

      setToast({
        open: true,
        message: `${speakerName} removed`,
        severity: "success",
      });
      fetchSpeakers();
    } catch {
      setToast({
        open: true,
        message: "Failed to delete speaker",
        severity: "error",
      });
    }
  };

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
      {/* Background */}
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
            alt=""
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

      {/* Header */}
      <Stack
        ref={headerRef}
        width="100%"
        px={{ xs: 2, sm: 4, md: 8, lg: 16 }}
        pt={{ xs: 6, sm: 6, md: 18 }}
        pb={{ xs: 2, md: 4 }}
        sx={{ mx: "auto", maxWidth: "68rem" }}
      >
        <Typography
          component={motion.h1}
          className="animated-gradient-text"
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
          sx={{
            fontWeight: 500,
            fontSize: { xs: "2rem", md: "3rem" },
            letterSpacing: "-0.04em",
            lineHeight: 1.1,
            pb: 1,
          }}
        >
          Add Speaker
        </Typography>
        <Typography
          component={motion.p}
          initial={{ opacity: 0, y: 20 }}
          animate={
            isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
          }
          transition={{ duration: 0.5, ease: "easeOut", delay: 0.35 }}
          sx={{ color: "rgba(255,255,255,0.5)", fontSize: "0.95rem" }}
        >
          Add speakers to the ctrl/shift lineup
        </Typography>
      </Stack>

      {/* Form */}
      <Box
        component={motion.div}
        initial={{ opacity: 0, y: 30 }}
        animate={
          isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
        }
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
        sx={{
          width: "100%",
          maxWidth: "68rem",
          mx: "auto",
          px: { xs: 2, sm: 4, md: 8, lg: 16 },
          pb: { xs: 6, md: 10 },
        }}
      >
        <Box
          sx={{
            backgroundColor: "rgba(0,0,0,0.3)",
            border: "1px solid rgba(255,255,255,0.08)",
            borderRadius: 3,
            p: { xs: 3, md: 4 },
          }}
        >
          <Stack gap={3}>
            {/* Name & Profile Pic */}
            <Stack direction={{ xs: "column", md: "row" }} gap={2}>
              <TextField
                label="Name *"
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
                sx={inputSx}
              />
              <TextField
                label="Profile Picture URL"
                value={profilePicUrl}
                onChange={(e) => setProfilePicUrl(e.target.value)}
                fullWidth
                sx={inputSx}
              />
            </Stack>

            {/* Bio */}
            <TextField
              label="Bio"
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              multiline
              rows={3}
              fullWidth
              sx={inputSx}
            />

            {/* Personal Links */}
            <TextField
              label="Personal links (comma-separated URLs)"
              value={personalWebsite}
              onChange={(e) => setPersonalWebsite(e.target.value)}
              fullWidth
              placeholder="https://x.com/handle, https://linkedin.com/in/handle"
              sx={inputSx}
            />

            {/* Affiliations */}
            <Box>
              <Stack
                direction="row"
                justifyContent="space-between"
                alignItems="center"
                mb={2}
              >
                <Typography
                  sx={{
                    fontSize: "0.85rem",
                    fontWeight: 500,
                    color: "rgba(255,255,255,0.6)",
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                  }}
                >
                  Affiliations
                </Typography>
                <IconButton
                  onClick={addAffiliation}
                  size="small"
                  sx={{
                    color: "#DCB821",
                    border: "1px solid rgba(220,184,33,0.3)",
                    borderRadius: 1,
                    width: 28,
                    height: 28,
                    "&:hover": {
                      backgroundColor: "rgba(220,184,33,0.15)",
                    },
                  }}
                >
                  <AddIcon sx={{ fontSize: 16 }} />
                </IconButton>
              </Stack>

              <Stack gap={2}>
                {affiliations.map((aff, idx) => (
                  <Stack
                    key={idx}
                    direction={{ xs: "column", md: "row" }}
                    gap={1.5}
                    alignItems={{ md: "center" }}
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.05)",
                    }}
                  >
                    <TextField
                      label="Company"
                      value={aff.company_name}
                      onChange={(e) =>
                        updateAffiliation(idx, "company_name", e.target.value)
                      }
                      size="small"
                      sx={{ ...inputSx, flex: 1 }}
                    />
                    <TextField
                      label="Website"
                      value={aff.company_website}
                      onChange={(e) =>
                        updateAffiliation(
                          idx,
                          "company_website",
                          e.target.value,
                        )
                      }
                      size="small"
                      sx={{ ...inputSx, flex: 1 }}
                    />
                    <TextField
                      label="Description"
                      value={aff.company_description}
                      onChange={(e) =>
                        updateAffiliation(
                          idx,
                          "company_description",
                          e.target.value,
                        )
                      }
                      size="small"
                      sx={{ ...inputSx, flex: 1.5 }}
                    />
                    {affiliations.length > 1 && (
                      <IconButton
                        onClick={() => removeAffiliation(idx)}
                        size="small"
                        sx={{
                          color: "rgba(255,255,255,0.3)",
                          alignSelf: { xs: "flex-end", md: "center" },
                          "&:hover": { color: "#ff6b6b" },
                        }}
                      >
                        <CloseIcon sx={{ fontSize: 16 }} />
                      </IconButton>
                    )}
                  </Stack>
                ))}
              </Stack>
            </Box>

            {/* Submit */}
            <Box
              component="button"
              onClick={handleSubmit}
              disabled={submitting}
              sx={{
                mt: 1,
                alignSelf: "flex-start",
                px: 4,
                py: 1.5,
                border: "none",
                borderRadius: 2,
                cursor: submitting ? "not-allowed" : "pointer",
                fontSize: "0.95rem",
                fontWeight: 600,
                fontFamily: "inherit",
                color: "#170300",
                background: submitting
                  ? "rgba(220,184,33,0.4)"
                  : "linear-gradient(135deg, #FCD221 0%, #E39A01 100%)",
                transition: "all 0.2s ease",
                opacity: submitting ? 0.6 : 1,
                "&:hover": {
                  transform: submitting ? "none" : "translateY(-1px)",
                  boxShadow: submitting
                    ? "none"
                    : "0 4px 20px rgba(252,210,33,0.3)",
                },
              }}
            >
              {submitting ? "Adding..." : "Add Speaker"}
            </Box>
          </Stack>
        </Box>

        {/* Existing speakers list */}
        {speakers.length > 0 && (
          <Box sx={{ mt: 6 }}>
            <Typography
              sx={{
                fontSize: "0.85rem",
                fontWeight: 500,
                color: "rgba(255,255,255,0.4)",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                mb: 3,
              }}
            >
              Current Speakers ({speakers.length})
            </Typography>

            <Grid container spacing={2}>
              {speakers.map((speaker) => (
                <Grid key={speaker.id} size={{ xs: 12, sm: 6, md: 4 }}>
                  <Stack
                    direction="row"
                    gap={2}
                    alignItems="center"
                    sx={{
                      p: 2,
                      borderRadius: 2,
                      backgroundColor: "rgba(0,0,0,0.25)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Thumbnail */}
                    <Box
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 1.5,
                        overflow: "hidden",
                        flexShrink: 0,
                        position: "relative",
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      {speaker.profilePicUrl ? (
                        <Image
                          src={speaker.profilePicUrl}
                          alt={speaker.name}
                          fill
                          sizes="44px"
                          style={{ objectFit: "cover" }}
                        />
                      ) : (
                        <Box
                          sx={{
                            width: "100%",
                            height: "100%",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            background:
                              "linear-gradient(135deg, #952527 0%, #170300 100%)",
                          }}
                        >
                          <Typography
                            sx={{
                              fontSize: "0.75rem",
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

                    {/* Info */}
                    <Stack sx={{ flex: 1, minWidth: 0 }}>
                      <Typography
                        sx={{
                          fontSize: "0.85rem",
                          fontWeight: 500,
                          color: "#FFFFFF",
                          whiteSpace: "nowrap",
                          overflow: "hidden",
                          textOverflow: "ellipsis",
                        }}
                      >
                        {speaker.name}
                      </Typography>
                      {speaker.affiliations[0] && (
                        <Typography
                          sx={{
                            fontSize: "0.75rem",
                            color: "rgba(255,255,255,0.4)",
                            whiteSpace: "nowrap",
                            overflow: "hidden",
                            textOverflow: "ellipsis",
                          }}
                        >
                          {speaker.affiliations[0].company_name}
                        </Typography>
                      )}
                    </Stack>

                    {/* Delete */}
                    <IconButton
                      onClick={() => handleDelete(speaker.id, speaker.name)}
                      size="small"
                      sx={{
                        color: "rgba(255,255,255,0.2)",
                        flexShrink: 0,
                        "&:hover": {
                          color: "#ff6b6b",
                          backgroundColor: "rgba(255,107,107,0.1)",
                        },
                      }}
                    >
                      <DeleteOutlineIcon sx={{ fontSize: 18 }} />
                    </IconButton>
                  </Stack>
                </Grid>
              ))}
            </Grid>
          </Box>
        )}
      </Box>

      {/* Toast */}
      <Snackbar
        open={toast.open}
        autoHideDuration={3000}
        onClose={() => setToast((t) => ({ ...t, open: false }))}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          severity={toast.severity}
          onClose={() => setToast((t) => ({ ...t, open: false }))}
          sx={{
            backgroundColor:
              toast.severity === "success"
                ? "rgba(220,184,33,0.15)"
                : "rgba(255,107,107,0.15)",
            color: "#FFFFFF",
            border:
              toast.severity === "success"
                ? "1px solid rgba(220,184,33,0.3)"
                : "1px solid rgba(255,107,107,0.3)",
            backdropFilter: "blur(12px)",
          }}
        >
          {toast.message}
        </Alert>
      </Snackbar>
    </Stack>
  );
}
