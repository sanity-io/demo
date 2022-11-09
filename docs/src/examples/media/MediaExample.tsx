import {Link, Route, Routes} from 'react-router-dom'
import {ArticlePage} from './ArticlePage'
import {HomePage} from './HomePage'

export function MediaExample() {
  return (
    <>
      <div className="border-b border-gray-200 px-4 py-3 font-extrabold dark:border-gray-900">
        <Link to="/">● Demo</Link>
      </div>

      <Routes>
        <Route element={<HomePage />} index />
        <Route element={<ArticlePage />} path="article" />
      </Routes>
    </>
  )
}
