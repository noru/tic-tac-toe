import React from 'react'
import ReactDOM from 'react-dom'
import '#/js/polyfills'
import '#css/main'
import { Index } from '#/js/containers/Index'

if (module.hot) {
  module.hot.accept()
}

ReactDOM.render(<Index />, document.getElementById('app'))
