import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Usman Ali Awan — Software Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#0B0C0E",
          color: "#F3F1EA",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "36px",
          }}
        >
          <div
            style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              background: "#C9A876",
              display: "flex",
            }}
          />
          <span style={{ fontSize: "22px", color: "#8C8E94" }}>
            Islamabad, Pakistan
          </span>
        </div>

        <div style={{ fontSize: "64px", fontWeight: 600, lineHeight: 1.1, display: "flex" }}>
          Usman Ali Awan
        </div>

        <div
          style={{
            marginTop: "20px",
            fontSize: "30px",
            color: "#C9A876",
            display: "flex",
          }}
        >
          Software Engineer
        </div>

        <div
          style={{
            marginTop: "18px",
            fontSize: "24px",
            color: "#8C8E94",
            display: "flex",
          }}
        >
          Full-Stack · Systems · APIs · Infrastructure
        </div>
      </div>
    ),
    { ...size }
  );
}