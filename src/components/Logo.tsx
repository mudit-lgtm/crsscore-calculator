const LEAF =
  "M256 32l-42 78c-4.8 8.9-13.6 8-22.4 3.1l-30.4-15.7 22.7 120.4c4.8 22-10.6 22-18.2 12.5l-53-59.3-8.6 30.1c-1 4-5.4 8.2-12 7l-67-14.1 17.6 64c3.8 14.2 6.7 20.1-3.8 23.8l-23.9 11.2 115.3 93.7c4.6 3.6 6.9 10 5.2 15.8l-10.1 33.1c39.7-4.6 75.3-11.5 115-15.9 3.5-.4 9.4 5.4 9.4 9.4l-5.3 121h19.3l-3-120.8c0-4 5.5-10 9-9.6 39.7 4.4 75.3 11.3 115 15.9l-10.1-33.1c-1.7-5.8.6-12.2 5.2-15.8l115.3-93.7-23.9-11.2c-10.5-3.7-7.6-9.6-3.8-23.8l17.6-64-67 14.1c-6.6 1.2-11-3-12-7l-8.6-30.1-53 59.3c-7.6 9.5-23 9.5-18.2-12.5l22.7-120.4-30.4 15.7c-8.8 4.9-17.6 5.8-22.4-3.1z";

/** Square brand mark: red rounded tile with a white maple leaf. */
export function LogoMark({ size = 32 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-hidden="true"
      focusable="false"
      style={{ flexShrink: 0, display: "block" }}
    >
      <rect width="64" height="64" rx="14" fill="#d32f2f" />
      <g transform="translate(12 11) scale(0.0781)">
        <path d={LEAF} fill="#ffffff" />
      </g>
    </svg>
  );
}

export default function Logo({
  size = 32,
  wordmarkColor = "#111827",
  subColor = "#6b7280",
}: {
  size?: number;
  wordmarkColor?: string;
  subColor?: string;
}) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <LogoMark size={size} />
      <span style={{ display: "flex", flexDirection: "column", lineHeight: 1.05 }}>
        <span
          style={{
            color: wordmarkColor,
            fontWeight: 800,
            fontSize: size * 0.52,
            letterSpacing: "-0.01em",
            whiteSpace: "nowrap",
          }}
        >
          CRS Calculator
        </span>
        <span
          style={{
            color: subColor,
            fontWeight: 600,
            fontSize: size * 0.31,
            letterSpacing: "0.09em",
            textTransform: "uppercase",
            whiteSpace: "nowrap",
          }}
        >
          Canada Express Entry
        </span>
      </span>
    </span>
  );
}
