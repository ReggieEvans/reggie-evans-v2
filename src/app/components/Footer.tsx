export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      style={{
        borderTop: "1px solid var(--border)",
        padding: "2rem",
        textAlign: "center",
        fontSize: "0.8125rem",
        color: "var(--text-muted)",
      }}
    >
      <p>
        &copy; {year} Reggie Evans&nbsp;&nbsp;·&nbsp;&nbsp;Built with Next.js &amp;
        Tailwind CSS
      </p>
    </footer>
  );
}
