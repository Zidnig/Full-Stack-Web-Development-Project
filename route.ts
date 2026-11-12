import { NextResponse } from "next/server";

const tasks: string[] = ["Learn TypeScript", "Learn Next.js"];

// GET /api/tasks
export async function GET() {
  return NextResponse.json(tasks);
}

// POST /api/tasks  body: { title: string }
export async function POST(request: Request) {
  const { title } = (await request.json()) as { title: string };
  tasks.push(title);
  return NextResponse.json(tasks);
}
