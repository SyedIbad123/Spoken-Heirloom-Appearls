import Image, { StaticImageData } from "next/image";

interface CardProps {
  images: Array<StaticImageData | string>;
  title: string;
  description?: string;
  price?: string | number;
  className?: string;
}

export default function Card({
  images,
  title,
  description,
  price,
  className = "",
}: CardProps) {
  return (
    <div className={`flex flex-col ${className}`}>
      {/* Image gallery - supports any number of images */}
      <div className="w-full mb-4">
        {images && images.length > 0 ? (
          images.length === 1 ? (
            <div className="w-full aspect-4/4 overflow-hidden">
              <Image
                src={images[0]}
                alt={title}
                className="object-cover w-full h-full"
              />
            </div>
          ) : (
            <div className="grid grid-cols-3 gap-2">
              {images.map((img, idx) => (
                <div
                  key={idx}
                  className="w-full aspect-square overflow-hidden rounded-sm"
                >
                  <Image
                    src={img}
                    alt={`${title}-${idx}`}
                    className="object-cover w-full h-full"
                  />
                </div>
              ))}
            </div>
          )
        ) : (
          <div className="w-full aspect-4/3 bg-gray-100 rounded-sm" />
        )}
      </div>

      <div className="mt-2">
        <h3 className="font-cormorant text-lg 2xl:text-3xl text-primary-foreground mb-1">
          {title}
        </h3>
        {description && (
          <p className="text-sm 2xl:text-lg text-foreground-muted mb-2">{description}</p>
        )}
        {price !== undefined && (
          <div className="text-xl 2xl:text-3xl font-cormorant font-semibold text-primary-foreground">
            {price}
          </div>
        )}
      </div>
    </div>
  );
}
