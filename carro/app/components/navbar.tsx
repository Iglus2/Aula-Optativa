import Link from "next/link";

export default function Navbar() {
  return (
    <nav>
      <div className="logo">BrumBrum</div>

      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/motors">Motores</Link>
        </li>
        <li>
          <Link href="/rodas">Rodas</Link>
        </li>
        <li>
          <Link href="/bodykits">BodyKits</Link>
        </li>
      </ul>
    </nav>
  );
}
