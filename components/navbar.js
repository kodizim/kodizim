import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="navbar-container">
      <div className="navbar-section">
        <Link href="/">
          <Image
            src="/assets/images/kodizim-logo.svg"
            width="174"
            height="44"
          />
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
