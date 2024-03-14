import Link from "next/link";

export default function page() {
  return (
    <div>
      <h3>Intercept Route - page.js</h3>
      <Link href="/file-system-routing/photo">To PHOTO COMPONENT</Link>
    </div>
  );
}
