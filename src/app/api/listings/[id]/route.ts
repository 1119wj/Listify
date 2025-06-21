import { getListingById } from "@/shared/lib/data/listings";
import { prisma } from "@/shared/lib/prisma";
import { ListingUpdateInputSchema } from "@/shared/lib/zod/schemas";
import { NextResponse } from "next/server";
import { z } from "zod";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  try {
    const id = params.id;
    const listing = await getListingById(id);

    if (!listing) {
      return new NextResponse("Not found", { status: 404 });
    }

    return NextResponse.json(listing);
  } catch (error) {
    console.error("[API_GET_LISTING_BY_ID_ERROR]", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const listingExists = await prisma.listing.findUnique({
      where: { id: params.id },
    });

    if (!listingExists) {
      return new NextResponse("해당 매물을 찾을 수 없습니다.", { status: 404 });
    }

    const body = await request.json();
    const validatedData = ListingUpdateInputSchema.parse(body);

    const updatedListing = await prisma.listing.update({
      where: { id: params.id },
      data: validatedData,
    });

    return NextResponse.json(updatedListing);
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
    console.error("[API_UPDATE_LISTING_ERROR]", error);
    return NextResponse.json(
      { message: "서버 내부 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const listingExists = await prisma.listing.findUnique({
      where: { id: params.id },
    });

    if (!listingExists) {
      return new NextResponse("해당 매물을 찾을 수 없습니다.", { status: 404 });
    }

    await prisma.listing.delete({
      where: { id: params.id },
    });

    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("[API_DELETE_LISTING_ERROR]", error);
    return NextResponse.json(
      { message: "서버 내부 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
