export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-[var(--border)] py-8 text-center text-[13px] text-[var(--text-muted)]">
      &copy; {year} Reggie Evans&nbsp;&nbsp;·&nbsp;&nbsp;Built with Next.js &amp; Tailwind CSS
    </footer>
  );
}
