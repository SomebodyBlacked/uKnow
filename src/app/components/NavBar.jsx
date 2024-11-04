import Link from "next/link";

export default function NavBar() {
  return (
    <nav className="p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl">
          <Link href="/">uKnow</Link>
        </h1>
      </div>
    </nav>
  );
}
