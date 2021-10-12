import Link from "next/link";
import Logo from "@svg/Logo.js";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-section">
        <Link href="/">
          <Logo />
        </Link>
        <Link href="/">
          <a>Hakkımda</a>
        </Link>
        <Link href="/">
          <a>Etkınlıkler</a>
        </Link>
        <Link href="/">
          <a>S.S.S</a>
        </Link>
      </div>
      <div className="navbar-discord">
        <button>
          <i src="/assets/discord.svg" />
          Discord
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
