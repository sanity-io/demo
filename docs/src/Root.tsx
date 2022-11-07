import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MarketingExample} from './pages/example/marketing'
import {MediaExample} from './pages/example/media'
import {IndexPage} from './pages/IndexPage'

export function Root() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MarketingExample />} path="example/marketing/*" />
        <Route element={<MediaExample />} path="example/media/*" />
        <Route element={<IndexPage />} path="*" />
      </Routes>
    </BrowserRouter>
  )
}
