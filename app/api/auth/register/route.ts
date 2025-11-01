// /app/api/auth/register/route.ts
import connectMongo from "@/lib/mongo";
import User from "@/models/User";
import { hash } from "bcryptjs";

export async function POST(req: Request) {
  const { name, email, password } = await req.json();
  await connectMongo();
  const existing = await User.findOne({ email });
  if (existing) {
    return new Response(JSON.stringify({ error: "User already exists" }), {
      status: 400,
    });
  }
  const hashedPwd = await hash(password, 10);
  await User.create({ name, email, password: hashedPwd, role: "user" });
  return new Response(JSON.stringify({ name, email }), { status: 201 });
}
