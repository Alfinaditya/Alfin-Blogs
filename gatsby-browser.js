import React from 'react'
import 'prismjs/themes/prism-tomorrow.css'
import { AnimatePresence } from 'framer-motion'
export const wrapPageElement = ({ element }) => (
  <AnimatePresence exitBeforeEnter>{element}</AnimatePresence>
)
