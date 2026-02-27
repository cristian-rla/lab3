import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import {Form} from './lab3/Form';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Form />
  </StrictMode>,
)
