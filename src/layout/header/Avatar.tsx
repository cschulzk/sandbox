import Image from 'next/image'
import Link from 'next/link'
import avatarImage from 'public/avatar.png'

export const AvatarContainer = ({
  className,
  ...props
}: React.ComponentPropsWithoutRef<'div'>) => {
  return (
    <div
      className={`${className} h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10`}
      {...props}
    />
  )
};

export const Avatar = ({
  large = false,
  className,
  ...props
}: Omit<React.ComponentPropsWithoutRef<typeof Link>, 'href'> & {
  large?: boolean
}) => {
  return (
    <Link
      href="/"
      aria-label="Home"
      className={`${className} pointer-events-auto`}
      {...props}
    >
      <Image
        src={avatarImage}
        alt=""
        sizes={large ? '4rem' : '2.25rem'}
        className={`rounded-full bg-zinc-100 object-cover dark:bg-zinc-800 ${large ? 'h-16 w-16' : 'h-9 w-9'}`}
        priority
      />
    </Link>
  )
};