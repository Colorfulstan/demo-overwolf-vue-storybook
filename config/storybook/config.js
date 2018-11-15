import Vue from 'vue';
import Vuex from 'vuex'; // Vue plugins
import * as sinon from 'sinon';
/* eslint-disable import/no-extraneous-dependencies */
import {configure} from '@storybook/vue'

Vue.use(Vuex)

window.overwolf = {
  windows: {
    getMainWindow: sinon.stub().returns({})
  }
}

const req = require.context('../../src/stories', true, /.stories.ts$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
