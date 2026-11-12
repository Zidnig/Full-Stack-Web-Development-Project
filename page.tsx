import Link from "next/link";

export default function About() {
  return (
    <div>
      <h1 className="text-2xl font-bold">About</h1>
      <p className="mt-2">Built with TypeScript, React, Next.js and Tailwind CSS.</p>
      <Link href="/" className="mt-4 inline-block text-blue-600 underline">
        Back home
      </Link>
    </div>
  );
}
