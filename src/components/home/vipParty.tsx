"use client";

import type { ReactElement } from "react";
import { useRef, useState } from "react";
import {
    Box,
    Button,
    Container,
    Typography,
} from "@mui/material";
import Image, { type StaticImageData } from "next/image";
import { motion, useInView } from "motion/react";
import NewTicketsButton from "@/components/ui/newTicketsButton";

import vipImg1 from "@/assets/images/vipParty/1.webp";
import vipImg2 from "@/assets/images/vipParty/2.webp";

const VIP_IMAGES: StaticImageData[] = [vipImg1, vipImg2];

// Build a long strip by repeating images many times for seamless looping
const SLIDER_IMAGES: StaticImageData[] = [
    ...VIP_IMAGES, ...VIP_IMAGES, ...VIP_IMAGES, ...VIP_IMAGES,
    ...VIP_IMAGES, ...VIP_IMAGES, ...VIP_IMAGES, ...VIP_IMAGES,
];

const HIGHLIGHTS = [
    "Live Music",
    "Curated Guest List",
    "Limited Capacity",
    "Naples Coastline",
];

function VIPParty(): ReactElement {
    const sectionRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [activeImage, setActiveImage] = useState<StaticImageData | null>(null);
    const [videoOpen, setVideoOpen] = useState(false);

    const handleOpenLightbox = (img: StaticImageData) => {
        setActiveImage(img);
        setLightboxOpen(true);
    };

    const handleCloseLightbox = () => {
        setLightboxOpen(false);
        setTimeout(() => setActiveImage(null), 150);
    };

    const handleOpenVideo = () => {
        setVideoOpen(true);
    };

    const handleCloseVideo = () => {
        setVideoOpen(false);
    };

    return (
        <>
            <Box
                component="section"
                ref={sectionRef}
                sx={{
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
                    {/* SECTION TITLE */}
                    <Box sx={{ mb: 6, textAlign: "center" }}>
                        <Typography
                            component={motion.h2}
                            initial={{ opacity: 0, y: 20 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                            transition={{ duration: 0.5, ease: "easeOut" }}
                            sx={{
                                fontWeight: 500,
                                fontSize: { xs: "1.5rem", sm: "1.9rem", md: "2.25rem" },
                                letterSpacing: "-0.03em",
                                lineHeight: 1.15,
                                color: "#FFFFFF",
                            }}
                        >
                            The{" "}
                            <span className="animated-gradient-text">VIP Boat Party</span>
                        </Typography>
                    </Box>

                    {/* MAIN CINEMATIC CARD */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0, y: 30 }}
                        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                        onMouseMove={(event: React.MouseEvent<HTMLDivElement>) => {
                            const rect = event.currentTarget.getBoundingClientRect();
                            const x = event.clientX - rect.left;
                            const y = event.clientY - rect.top;
                            event.currentTarget.style.setProperty("--mouse-x", `${x}px`);
                            event.currentTarget.style.setProperty("--mouse-y", `${y}px`);
                        }}
                        sx={{
                            position: "relative",
                            borderRadius: "1.75rem",
                            overflow: "hidden",
                            minHeight: { xs: 420, sm: 480, md: 500 },
                            boxShadow:
                                "0 24px 60px rgba(0,0,0,0.6), 0 0 120px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06)",
                            border: "1px solid rgba(255,255,255,0.10)",
                            "--mouse-x": "50%",
                            "--mouse-y": "50%",
                            "&::before": {
                                content: '""',
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(252,210,33,0.1), transparent 55%)",
                                opacity: 0,
                                transition: "opacity 0.5s ease",
                                pointerEvents: "none",
                                zIndex: 6,
                            },
                            "&:hover::before": {
                                opacity: 1,
                            },
                        }}
                    >
                        {/* Background image */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                transition: "transform 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)",
                                ".MuiBox-root:hover > &": {
                                    transform: "scale(1.04)",
                                },
                            }}
                        >
                            <Image
                                src={vipImg1}
                                alt="VIP Boat Party"
                                fill
                                sizes="(max-width: 900px) 100vw, 68rem"
                                style={{ objectFit: "cover" }}
                                priority
                            />
                        </Box>

                        {/* LAYER 1 – Primary directional gradient */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background: {
                                    xs: "linear-gradient(to top, rgba(0,0,0,0.95) 30%, rgba(0,0,0,0.7) 50%, rgba(0,0,0,0.25) 70%, rgba(0,0,0,0.05) 100%)",
                                    md: "linear-gradient(115deg, rgba(0,0,0,0.92) 25%, rgba(0,0,0,0.65) 45%, rgba(0,0,0,0.2) 65%, rgba(0,0,0,0.05) 100%)",
                                },
                                zIndex: 1,
                            }}
                        />

                        {/* LAYER 2 – Bottom edge darkening */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 35%)",
                                zIndex: 1,
                            }}
                        />

                        {/* LAYER 3 – Vignette */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.45) 100%)",
                                zIndex: 1,
                            }}
                        />

                        {/* LAYER 4 – Warm gold glow bottom-left */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(ellipse at 15% 85%, rgba(252,184,33,0.14), transparent 45%)",
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        />

                        {/* LAYER 5 – Secondary gold accent top-right */}
                        <Box
                            sx={{
                                position: "absolute",
                                inset: 0,
                                background:
                                    "radial-gradient(circle at 85% 15%, rgba(252,210,33,0.06), transparent 40%)",
                                zIndex: 2,
                                pointerEvents: "none",
                            }}
                        />

                        {/* LAYER 6 – Top edge light */}
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                height: "1px",
                                background:
                                    "linear-gradient(90deg, transparent 10%, rgba(252,210,33,0.15) 50%, transparent 90%)",
                                zIndex: 3,
                                pointerEvents: "none",
                            }}
                        />

                        {/* Content overlay – left side */}
                        <Box
                            sx={{
                                position: "relative",
                                zIndex: 4,
                                height: "100%",
                                minHeight: { xs: 420, sm: 480, md: 500 },
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "flex-end",
                                p: { xs: 2.5, sm: 3, md: 5 },
                                maxWidth: { xs: "100%", md: "50%" },
                            }}
                        >
                            {/* Eyebrow */}
                            <Typography
                                component={motion.span}
                                initial={{ opacity: 0, y: 14 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                                transition={{ duration: 0.4, delay: 0.25 }}
                                sx={{
                                    display: "block",
                                    fontSize: { xs: "0.68rem", sm: "0.75rem" },
                                    fontWeight: 600,
                                    letterSpacing: "0.18em",
                                    textTransform: "uppercase",
                                    color: "rgba(252,210,33,0.95)",
                                    mb: 1.5,
                                }}
                            >
                                Exclusive Side Event
                            </Typography>

                            {/* Description */}
                            <Typography
                                component={motion.p}
                                initial={{ opacity: 0, y: 14 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 14 }}
                                transition={{ duration: 0.45, delay: 0.35 }}
                                sx={{
                                    color: "rgba(249,250,251,0.88)",
                                    fontSize: { xs: "0.85rem", sm: "0.95rem", md: "1.05rem" },
                                    lineHeight: { xs: 1.6, md: 1.75 },
                                    maxWidth: "28rem",
                                    mb: { xs: 2, md: 3 },
                                }}
                            >
                                An intimate evening for builders, partners, and friends of
                                ctrl/shift. Expect deep conversations, live music,
                                and unexpected moments — all with{" "}
                                <Box
                                    component="span"
                                    sx={{ color: "rgba(252,210,33,0.95)", fontWeight: 500 }}
                                >
                                    Naples
                                </Box>{" "}
                                as the backdrop.
                            </Typography>

                            {/* Highlight pills */}
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 12 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                transition={{ duration: 0.4, delay: 0.45 }}
                                sx={{
                                    display: "flex",
                                    flexWrap: "wrap",
                                    gap: 1,
                                    mb: { xs: 2.5, md: 3.5 },
                                }}
                            >
                                {HIGHLIGHTS.map((label, i) => (
                                    <Box
                                        key={label}
                                        component={motion.span}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={
                                            isInView
                                                ? { opacity: 1, scale: 1 }
                                                : { opacity: 0, scale: 0.9 }
                                        }
                                        transition={{ duration: 0.3, delay: 0.5 + i * 0.08 }}
                                        sx={{
                                            px: { xs: 1.5, sm: 2 },
                                            py: { xs: 0.5, sm: 0.6 },
                                            borderRadius: 9999,
                                            fontSize: { xs: "0.7rem", sm: "0.78rem" },
                                            fontWeight: 500,
                                            letterSpacing: "0.02em",
                                            backgroundColor: "rgba(255,255,255,0.08)",
                                            backdropFilter: "blur(8px)",
                                            border: "1px solid rgba(252,210,33,0.25)",
                                            color: "rgba(255,255,255,0.9)",
                                            whiteSpace: "nowrap",
                                        }}
                                    >
                                        {label}
                                    </Box>
                                ))}
                            </Box>

                            {/* CTA row */}
                            <Box
                                component={motion.div}
                                initial={{ opacity: 0, y: 12 }}
                                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
                                transition={{ duration: 0.4, delay: 0.55 }}
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                            >
                                <NewTicketsButton label="Get your tickets" comingSoon />
                            </Box>
                        </Box>

                        {/* Play button */}
                        <Box
                            component={motion.div}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 200 }}
                            onClick={handleOpenVideo}
                            sx={{
                                position: "absolute",
                                zIndex: 5,
                                cursor: "pointer",
                                right: { xs: "50%", md: "25%" },
                                top: { xs: "18%", sm: "22%", md: "40%" },
                                transform: {
                                    xs: "translate(50%, -50%)",
                                    md: "translate(50%, -50%)",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    width: { xs: 56, sm: 64, md: 80 },
                                    height: { xs: 56, sm: 64, md: 80 },
                                    borderRadius: "999px",
                                    background:
                                        "radial-gradient(circle at 30% 30%, #FCD221, #B07510)",
                                    boxShadow:
                                        "0 14px 40px rgba(0,0,0,0.6), 0 0 60px rgba(252,210,33,0.15)",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    transition: "transform 0.3s ease, box-shadow 0.3s ease",
                                    "&:hover": {
                                        transform: "scale(1.12)",
                                        boxShadow:
                                            "0 18px 50px rgba(0,0,0,0.7), 0 0 80px rgba(252,210,33,0.3)",
                                    },
                                }}
                            >
                                <Box
                                    component="span"
                                    sx={{
                                        display: "inline-block",
                                        marginLeft: "5px",
                                        width: 0,
                                        height: 0,
                                        borderTop: "12px solid transparent",
                                        borderBottom: "12px solid transparent",
                                        borderLeft: "18px solid #1F0900",
                                    }}
                                />
                            </Box>
                            <Typography
                                sx={{
                                    textAlign: "center",
                                    mt: 1,
                                    fontSize: "0.7rem",
                                    fontWeight: 600,
                                    letterSpacing: "0.15em",
                                    textTransform: "uppercase",
                                    color: "rgba(255,255,255,0.7)",
                                    textShadow: "0 2px 8px rgba(0,0,0,0.6)",
                                }}
                            >
                                Watch
                            </Typography>
                        </Box>
                    </Box>

                    {/* INFINITE IMAGE SLIDER – below the card */}
                    <Box
                        component={motion.div}
                        initial={{ opacity: 0 }}
                        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
                        transition={{ duration: 0.6, delay: 0.5 }}
                        sx={{
                            mt: 3,
                            position: "relative",
                            overflow: "hidden",
                            borderRadius: "1.25rem",
                            // Fade-out masks on both edges
                            maskImage:
                                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                            WebkitMaskImage:
                                "linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%)",
                            // Define the keyframes via a global style injection
                            "@keyframes vip-slider-scroll": {
                                "0%": { transform: "translateX(0)" },
                                "100%": { transform: "translateX(-50%)" },
                            },
                        }}
                    >
                        {/* The sliding track – two identical sets side by side */}
                        <Box
                            sx={{
                                display: "flex",
                                gap: 1.5,
                                width: "max-content",
                                animation: "vip-slider-scroll 50s linear infinite",
                                "&:hover": {
                                    animationPlayState: "paused",
                                },
                            }}
                        >
                            {SLIDER_IMAGES.map((img, index) => (
                                <Box
                                    key={index}
                                    onClick={() => handleOpenLightbox(img)}
                                    sx={{
                                        position: "relative",
                                        flex: "0 0 auto",
                                        width: { xs: 160, sm: 200, md: 260 },
                                        height: { xs: 100, sm: 130, md: 160 },
                                        borderRadius: "1rem",
                                        overflow: "hidden",
                                        cursor: "pointer",
                                        border: "1px solid rgba(255,255,255,0.08)",
                                        boxShadow: "0 8px 24px rgba(0,0,0,0.5)",
                                        transition: "border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease",
                                        "&:hover": {
                                            borderColor: "rgba(252,210,33,0.4)",
                                            boxShadow:
                                                "0 12px 32px rgba(0,0,0,0.7), 0 0 20px rgba(252,210,33,0.08)",
                                            transform: "translateY(-4px)",
                                        },
                                        "&:hover img": {
                                            transform: "scale(1.08)",
                                        },
                                    }}
                                >
                                    <Image
                                        src={img}
                                        alt={`VIP Boat Party moment`}
                                        fill
                                        sizes="(max-width: 900px) 200px, 260px"
                                        style={{
                                            objectFit: "cover",
                                            transition: "transform 0.5s ease",
                                        }}
                                    />
                                    {/* Subtle bottom gradient on each thumbnail */}
                                    <Box
                                        sx={{
                                            position: "absolute",
                                            inset: 0,
                                            background:
                                                "linear-gradient(to top, rgba(0,0,0,0.25) 0%, transparent 40%)",
                                            pointerEvents: "none",
                                        }}
                                    />
                                </Box>
                            ))}
                        </Box>
                    </Box>
                </Container>
            </Box>

            {/* IMAGE LIGHTBOX */}
            <ImageLightbox
                open={lightboxOpen}
                image={activeImage}
                onClose={handleCloseLightbox}
            />

            {/* VIDEO LIGHTBOX */}
            <VideoLightbox open={videoOpen} onClose={handleCloseVideo} />
        </>
    );
}

type ImageLightboxProps = {
    open: boolean;
    image: StaticImageData | null;
    onClose: () => void;
};

function ImageLightbox({
    open,
    image,
    onClose,
}: ImageLightboxProps): ReactElement | null {
    if (!open || !image) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1300,
                backgroundColor: "rgba(0,0,0,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-out",
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: "relative",
                    width: "min(90vw, 900px)",
                    maxHeight: "80vh",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <Image
                    src={image}
                    alt="VIP Boat Party"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                        borderRadius: 16,
                    }}
                />
                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 6,
                        right: 6,
                        minWidth: "auto",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        bgcolor: "rgba(0,0,0,0.6)",
                        color: "#FFFFFF",
                        fontSize: "0.75rem",
                        "&:hover": {
                            bgcolor: "rgba(0,0,0,0.8)",
                        },
                    }}
                >
                    Close
                </Button>
            </motion.div>
        </motion.div>
    );
}


type VideoLightboxProps = {
    open: boolean;
    onClose: () => void;
};

function VideoLightbox({
    open,
    onClose,
}: VideoLightboxProps): ReactElement | null {
    if (!open) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            onClick={onClose}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 1300,
                backgroundColor: "rgba(0,0,0,0.9)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "zoom-out",
            }}
        >
            <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.2 }}
                style={{
                    position: "relative",
                    maxWidth: "960px",
                    width: "90vw",
                    aspectRatio: "16 / 9",
                }}
                onClick={(e) => e.stopPropagation()}
            >
                <video
                    controls
                    autoPlay
                    preload="metadata"
                    style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 16,
                        objectFit: "cover",
                        backgroundColor: "#000",
                    }}
                >
                    <source src="/aftermovie.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Button
                    onClick={onClose}
                    sx={{
                        position: "absolute",
                        top: 12,
                        right: 12,
                        minWidth: "auto",
                        px: 1.5,
                        py: 0.5,
                        borderRadius: 999,
                        bgcolor: "rgba(0,0,0,0.7)",
                        color: "#FFFFFF",
                        fontSize: "0.75rem",
                        "&:hover": {
                            bgcolor: "rgba(0,0,0,0.9)",
                        },
                    }}
                >
                    Close
                </Button>
            </motion.div>
        </motion.div>
    );
}

export default VIPParty;
