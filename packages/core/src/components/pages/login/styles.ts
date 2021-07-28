import { CSSProperties } from "react";

export const layoutStyles: CSSProperties = {
    background: `radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(0, 0, 0, 0.5) 100%), #095398`,
    backgroundSize: "cover",
};

export const containerStyles: CSSProperties = {
    maxWidth: "408px",
    margin: "auto",
};

export const titleStyles: CSSProperties = {
    textAlign: "center",
    color: "#626262",
    fontSize: "30px",
    letterSpacing: "-0.04em",
};

export const imageContainer: CSSProperties = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
};
