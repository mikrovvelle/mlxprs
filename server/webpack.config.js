//@ts-check

'use strict'

const withDefaults = require('../shared.webpack.config')
const path = require('path')

module.exports = withDefaults({
    context: path.join(__dirname),
    entry: {
        extension: './server.ts',
    },
    output: {
        filename: 'server.js',
        path: path.join(__dirname, 'dist'),
        libraryTarget: 'commonjs'
    }
})
