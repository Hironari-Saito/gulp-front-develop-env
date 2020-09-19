'use strict'

const del = require('del')
const {config} = require('./config')

const clean = done => {
  del(config.cleanPath, {force:true}); 
  done();
}; 
exports.clean = clean
