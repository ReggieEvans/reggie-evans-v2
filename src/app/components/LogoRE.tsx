export default function LogoRE({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20.834 16.721"
      width="42"
      height="34"
      xmlns="http://www.w3.org/2000/svg"
      aria-label="Reggie Evans"
      className={className}
    >
      {/* E bars — transforms removed, all same color as R */}
      <rect x="5.21" y="0.00"  width="15.62" height="3.07" rx="0.31" fill="#c2c2c7" />
      <rect x="9.13" y="6.74"  width="11.68" height="3.48" rx="0.23" fill="#c2c2c7" />
      <rect x="12.77" y="13.08" width="8.07" height="3.64" rx="0.16" fill="#c2c2c7" />
      {/* R */}
      <text
        x="-2.13"
        y="16.72"
        style={{
          fontWeight: 900,
          fontSize: "22.99px",
          fontFamily: "Inter, sans-serif",
          fill: "#f0f0f5",
        }}
      >
        R
      </text>
    </svg>
  );
}
