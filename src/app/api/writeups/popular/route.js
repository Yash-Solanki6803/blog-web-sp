import prisma from "@/utils/connect";
import { NextResponse } from "next/server";

export const GET = async (req) => {
  try {
    const posts = await prisma.writeUp.findMany({
      take: 5,
      orderBy: {
        views: "desc",
      },
    });
    return new NextResponse(JSON.stringify({ posts }, { status: 200 }));
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong!" }, { status: 500 })
    );
  }
};
