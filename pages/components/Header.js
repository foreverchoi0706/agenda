import Link from "next/link";

const Header = () => {
  return (
    <header>
      <nav
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
        }}
      >
        <Link href="./components/Home" as="/home">
          Home
        </Link>
        <Link href="/">TEST</Link>
        <Link href="/">TEST</Link>
        <Link href="/">TEST</Link>
        <Link href="/">TEST</Link>
        <Link href="/">TEST</Link>
        <Link href="./Config" as="/config">
          Config
        </Link>
      </nav>
    </header>
  );
};

export default Header;
