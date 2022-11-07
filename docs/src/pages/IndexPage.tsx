import {Link, Route, Routes} from 'react-router-dom'
import {ColorsPage} from './guidelines/ColorsPage'
import {ImagesPage} from './guidelines/ImagesPage'
import {LayoutsPage} from './guidelines/LayoutsPage'
import {LogoPage} from './guidelines/LogoPage'
import {OverviewPage} from './guidelines/OverviewPage'
import {SpacingPage} from './guidelines/SpacingPage'
import {TypographyPage} from './guidelines/TypographyPage'

export function IndexPage() {
  return (
    <div className="flex">
      <div className="sticky top-0 h-screen w-64 flex-none overflow-auto border-r border-gray-200 dark:border-gray-900">
        <div className="p-5">
          <div className="mb-4 text-2xl font-extrabold leading-none tracking-tight sm:text-3xl md:text-4xl">
            <Link className="hover:text-blue-500" to="/">
              Guideline.
            </Link>
          </div>

          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/">
              Introduction
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/logo">
              Logo
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/colors">
              Colors
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/spacing">
              Spacing
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/typography">
              Typography
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/layouts">
              Layouts
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/images">
              Images
            </Link>
          </div>
        </div>

        <div className="p-5">
          <div className="mb-1 text-lg font-extrabold">Examples</div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/example/media">
              Media example
            </Link>
          </div>
          <div className="font-medium">
            <Link className="hover:text-blue-500" to="/example/marketing">
              Marketing example
            </Link>
          </div>
        </div>
      </div>

      <div className="flex-1">
        <Routes>
          <Route element={<OverviewPage />} index />
          <Route element={<ColorsPage />} path="colors" />
          <Route element={<ImagesPage />} path="images" />
          <Route element={<LayoutsPage />} path="layouts" />
          <Route element={<LogoPage />} path="logo" />
          <Route element={<SpacingPage />} path="spacing" />
          <Route element={<TypographyPage />} path="typography" />
        </Routes>
      </div>
    </div>
  )
}
