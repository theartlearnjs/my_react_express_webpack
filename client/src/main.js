/*eslint-disable no-unused-vars */
import React from 'react'
import { render } from 'react-dom'

if(module.hot){
    module.hot.accept()
}
render(
    <h1>hello,world</h1>,
    document.getElementById('app')
)