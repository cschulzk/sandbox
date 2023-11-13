import GHLIbug from 'public/github-mark.svg'
import LIbug from 'public/LI-In-Bug.png'
import HRbug from 'public/hackerrank_logo-21e2867566.svg'
import Image, { StaticImageData } from "next/image"

const iconDimensions = 40;
const iconStyles = 'mx-1'

const SocialIcon = ({
  src, 
  alt,
  href,
  customStyle,
}: {
  // The image data needs to be provided as StaticImageData so that the width can be set dynamically
  src: StaticImageData; 
  alt: string;
  href: string;
  customStyle?: string;
}) => {
  return (
  <a 
    rel='noreferrer' 
    target="_blank" 
    href={href}
    className={`${iconStyles} ${customStyle}`}
  >
    <Image
      src={src}
      alt={alt}
      // The width can vary without damaging the layout, but the height needs to be a constant across icons
      height={iconDimensions}
    />
  </a>
  )
}

export const GitHubIcon = () => {
  return (
    <SocialIcon
      src={GHLIbug}
      alt="Christoph's Github Profile"
      href="https://github.com/cschulzk"
    />
  )
}

export const LinkedInIcon = () => {
  return (
    <SocialIcon
    src={LIbug}
    alt="Christoph's LinkedIn Profile"
    href="https://www.linkedin.com/in/christoph-schulzke/"
  />
  )
}

export const HackerRankIcon = () => {
  return (
    <SocialIcon
      src={HRbug}
      alt="Christoph's HackerRank Profile"
      href="https://www.hackerrank.com/christophschulz1"
      customStyle="bg-black dark:bg-inherit"
    />
  )
}