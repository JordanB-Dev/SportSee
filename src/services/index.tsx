import * as apiServer from './apiServer'
import * as apiMock from './apiMock'

export const API = import.meta.env.VITE_MOCK === 'true' ? apiMock : apiServer
