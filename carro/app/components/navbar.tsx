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
          <Link href="/motors">Motors</Link>
        </li>
        <li>
          <Link href="/suspensions">Suspensions</Link>
        </li>
        <li>
          <Link href="/bodykits">Cars & BodyKits</Link>
        </li>
      </ul>
    </nav>
  );
}