import {Link, Route, Routes} from 'react-router-dom'
import {ArticlePage} from './ArticlePage'
import {HomePage} from './HomePage'

export function MediaExample() {
  return (
    <>
      <div className="bg-black p-3 text-white dark:bg-white dark:text-black">
        <Link to="/">&larr; Design guidelines</Link>
      </div>

      <Routes>
        <Route element={<HomePage />} index />
        <Route element={<ArticlePage />} path="article" />
      </Routes>
    </>
  )
}
