import {BrowserRouter, Route, Routes} from 'react-router-dom'
import {MarketingExample} from './examples/marketing'
import {MediaExample} from './examples/media'
import {IndexPage} from './IndexPage'

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
