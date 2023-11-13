import MobileNav from './MobileNav'
import ThemeToggle from './ThemeToggle'
import { Avatar, AvatarContainer } from './Avatar'
import DesktopNavigation from './DesktopNav'
import { Container } from 'sandbox-lib/general/containers/MainContainer'

export default function MainHeader() {
  return (
    <>
      <header
        className="pointer-events-none relative z-50 flex flex-none flex-col"
      >
        <div
          className="top-0 z-10 h-16 pt-6"
        >
          <Container>
            <div className="relative flex gap-4">
              <div className="flex flex-1">
                <AvatarContainer>
                  <Avatar />
                </AvatarContainer>
              </div>
              <div className="flex flex-1 justify-end md:justify-center">
                <MobileNav className="pointer-events-auto md:hidden" />
                <DesktopNavigation className="pointer-events-auto hidden md:block" />
              </div>
              <div className="flex justify-end md:flex-1">
                <div className="pointer-events-auto">
                  <ThemeToggle />
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}
