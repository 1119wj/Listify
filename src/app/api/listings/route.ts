import { getAllListings } from "@/lib/data/listings";
import { prisma } from "@/lib/prisma";
import { ListingCreateInputSchema } from "@/lib/zod/schemas";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET() {
  try {
    const listings = await getAllListings();
    return NextResponse.json(listings);
  } catch (error) {
    console.error("[API_GET_LISTINGS_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const validatedData = ListingCreateInputSchema.parse(body);

    const newListing = await prisma.listing.create({
      data: validatedData,
    });

    return NextResponse.json(newListing, { status: 201 });
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          message: "입력값이 유효하지 않습니다.",
          errors: error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }
    console.error("[API_CREATE_LISTING_ERROR]", error);
    return NextResponse.json(
      { message: "서버 내부 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
