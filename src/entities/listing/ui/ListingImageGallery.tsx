import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Maximize2 } from "lucide-react";

interface ListingImageGalleryProps {
  photos: string[];
}

const ListingImageGallery: React.FC<ListingImageGalleryProps> = ({
  photos,
}) => {
  const [selected, setSelected] = useState<number>(0);
  const [api, setApi] = useState<any>(null);

  useEffect(() => {
    if (!api) return;

    api.scrollTo(selected);

    const onSelect = () => {
      setSelected(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api, selected]);

  if (!photos || photos.length === 0) {
    return (
      <Card className="flex aspect-video w-full items-center justify-center bg-gray-100">
        <CardContent className="p-6 text-gray-500">
          No photos available
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="relative overflow-hidden">
      <CardContent className="p-0">
        <Carousel setApi={setApi}>
          <CarouselContent>
            {photos.map((photo, index) => (
              <CarouselItem key={index}>
                <div className="relative aspect-video w-full bg-gray-100">
                  <img
                    src={photo}
                    alt={`Property photo ${index + 1}`}
                    className="h-full w-full object-cover"
                  />
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="absolute bottom-3 right-3 rounded-full bg-white/80 p-2 hover:bg-white">
                        <Maximize2 className="h-5 w-5" />
                      </button>
                    </DialogTrigger>
                    <DialogContent className="max-w-4xl border-none bg-transparent p-0 shadow-none">
                      <img
                        src={photo}
                        alt={`Property photo ${index + 1}`}
                        className="h-auto w-full"
                      />
                    </DialogContent>
                  </Dialog>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-2" />
          <CarouselNext className="right-2" />
        </Carousel>

        <div className="flex gap-2 overflow-x-auto p-3">
          {photos.map((photo, index) => (
            <button
              key={index}
              onClick={() => setSelected(index)}
              className={`h-16 w-16 flex-none overflow-hidden rounded-md transition ${
                selected === index ? "ring-2 ring-blue-500" : "opacity-70"
              }`}
            >
              <img
                src={photo}
                alt={`Thumbnail ${index + 1}`}
                className="h-full w-full object-cover"
              />
            </button>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default ListingImageGallery;
