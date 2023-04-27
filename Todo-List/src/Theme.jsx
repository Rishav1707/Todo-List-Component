export default function Theme({ toggleTheme, theme }) {
  return (
    <div className="mainTheme">
      <button className="theme" onClick={toggleTheme}>
        {theme === "light" ? (
          <span class="material-symbols-outlined" style={{ color: "#000" }}>
            dark_mode
          </span>
        ) : (
          <span class="material-symbols-outlined" style={{ color: "#fff" }}>
            light_mode
          </span>
        )}
      </button>
    </div>
  );
}
