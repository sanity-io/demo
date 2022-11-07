import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import './index.css'
import {Root} from './Root'

const element = document.getElementById('root')

if (!element) throw new Error('missing element')

createRoot(element).render(
  <StrictMode>
    <Root />
  </StrictMode>
)
