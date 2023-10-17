import Image, { StaticImageData } from "next/image"

const iconDimensions = 40;

const SocialIcon = ({
  src, 
  alt,
}: {
  // The image data needs to be provided as StaticImageData so that the width can be set dynamically
  src: StaticImageData; 
  alt: string;
}) => {
  return <Image
    src={src}
    alt={alt}
    // The width can vary without damaging the layout, but the height needs to be a constant across icons
    height={iconDimensions}
  />
}

export default SocialIcon;