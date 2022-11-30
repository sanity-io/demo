import {Link, Route, Routes} from 'react-router-dom'
import {ArticlePage} from './ArticlePage'
import {HomePage} from './HomePage'

export function MediaExample() {
  return (
    <>
      <div className="border-b border-gray-200 px-4 py-3 dark:border-gray-900">
        <Link
          className="text-gray-700 hover:text-blue-600 dark:text-gray-200 dark:hover:text-blue-400"
          to="/"
        >
          &larr; Demo
        </Link>
      </div>

      <Routes>
        <Route element={<HomePage />} index />
        <Route element={<ArticlePage />} path="article" />
      </Routes>
    </>
  )
}
