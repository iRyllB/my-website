const HamburgerIcon = ({ onClick }: { onClick: () => void }) => (
  <button
    className="hamburger-icon"
    aria-label="Open menu"
    onClick={onClick}
    style={{ background: "none", border: "none", padding: 0, cursor: "pointer" }}
  >
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="7" width="32" height="3" rx="1.5" fill="#18181B" />
      <rect y="15" width="32" height="3" rx="1.5" fill="#18181B" />
      <rect y="23" width="32" height="3" rx="1.5" fill="#18181B" />
    </svg>
  </button>
);

export default HamburgerIcon;
