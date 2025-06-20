import { http } from "@/lib/http";

export async function getListings() {
  return http.get("/api/listings");
}

export async function getListingById(id: string) {
  return http.get(`/api/listings/${id}`);
}
