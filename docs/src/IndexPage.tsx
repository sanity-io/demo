import {useMemo} from 'react'
import {Link, Route, Routes, useLocation} from 'react-router-dom'
import {ColorsPage} from './guidelines/ColorsPage'
import {GraphicsPage} from './guidelines/GraphicsPage'
import {IntroPage} from './guidelines/IntroPage'
import {LogoPage} from './guidelines/LogoPage'
import {SpacingPage} from './guidelines/SpacingPage'
import {TypographyPage} from './guidelines/TypographyPage'

export function IndexPage() {
  const loc = useLocation()
  const segments = useMemo(() => loc.pathname.split('/').filter(Boolean), [loc.pathname])

  return (
    <div className="mx-auto flex max-w-6xl">
      <div className="sticky top-0 h-screen w-52 flex-none overflow-auto sm:w-64">
        <div className="p-3 sm:p-4 md:pt-5 lg:pt-6">
          {/* Logo */}
          <div className="p-2 sm:p-3">
            <div className="text-2xl font-extrabold leading-none tracking-tight sm:text-3xl">
              <Link className="hover:text-blue-500" to="/" style={{whiteSpace: 'nowrap'}}>
                <span className="text-blue-500" style={{marginLeft: '-0.125em'}}>
                  ●
                </span>{' '}
                Demo
              </Link>
            </div>
          </div>

          {/* Guidelines */}
          <div className="p-2 leading-relaxed sm:p-3">
            <div>
              <Link
                className={segments[0] === undefined ? 'text-blue-500' : 'hover:text-blue-500'}
                to="/"
              >
                Introduction
              </Link>
            </div>
            <div>
              <Link
                className={segments[0] === 'logo' ? 'text-blue-500' : 'hover:text-blue-500'}
                to="/logo"
              >
                Logo
              </Link>
            </div>
            <div>
              <Link
                className={segments[0] === 'colors' ? 'text-blue-500' : 'hover:text-blue-500'}
                to="/colors"
              >
                Colors
              </Link>
            </div>
            <div>
              <Link
                className={segments[0] === 'spacing' ? 'text-blue-500' : 'hover:text-blue-500'}
                to="/spacing"
              >
                Spacing
              </Link>
            </div>
            <div>
              <Link
                className={segments[0] === 'typography' ? 'text-blue-500' : 'hover:text-blue-500'}
                to="/typography"
              >
                Typography
              </Link>
            </div>
            <div>
              <Link
                className={segments[0] === 'graphics' ? 'text-blue-500' : 'hover:text-blue-500'}
                to="/graphics"
              >
                Graphics
              </Link>
            </div>
          </div>

          {/* Examples */}
          <div className="p-2 leading-relaxed sm:p-3">
            <div className="font-bold">Examples</div>

            <div>
              <Link className="hover:text-blue-500" to="/example/media">
                Media example
              </Link>
            </div>
            <div>
              <Link className="hover:text-blue-500" to="/example/marketing">
                Marketing example
              </Link>
            </div>
          </div>

          {/* Links */}
          <div className="p-2 leading-relaxed sm:p-3">
            <div className="font-bold">Links</div>

            <div>
              <a
                className="hover:text-blue-500"
                href="https://github.com/sanity-io/demo"
                target="_blank"
                rel="noreferrer"
              >
                GitHub repo
              </a>
            </div>
            <div>
              <a
                className="hover:text-blue-500"
                href="https://sanity.io"
                target="_blank"
                rel="noreferrer"
              >
                Sanity.io
              </a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Routes>
          <Route element={<IntroPage />} index />
          <Route element={<ColorsPage />} path="colors" />
          <Route element={<GraphicsPage />} path="graphics" />
          <Route element={<LogoPage />} path="logo" />
          <Route element={<SpacingPage />} path="spacing" />
          <Route element={<TypographyPage />} path="typography" />
        </Routes>
      </div>
    </div>
  )
}
