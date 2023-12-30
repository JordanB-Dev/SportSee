import * as apiServer from './apiServer'
import * as apiMock from './apiMock'

const isMockActive = true

export const API = isMockActive ? apiMock : apiServer
