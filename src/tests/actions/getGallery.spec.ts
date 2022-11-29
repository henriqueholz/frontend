import '@testing-library/jest-dom'
import configureStore from 'redux-mock-store'
import { getImagesData } from '../../state/actions/galleryActions'
import responseMock from '../../mock/smallHotTopDayMock.json'
import moxios from 'moxios'

describe('Get gallery actions', () => {
  const mockStore = configureStore()

  beforeEach(() => moxios.install())
  afterEach(() => moxios.uninstall())

  it('dispatches getImages after a successful API requests', () => {
    const { data, status } = responseMock
    moxios.stubRequest('hot/top/day/0?album_previews=true', {
      status: status,
      response: data
    })
    const expectedActions = [{ payload: [ {id: '1', title: 'Mock Title'}], type: 'getImages' }]
    const store = mockStore({})
    store.dispatch(getImagesData(data))
    expect(store.getActions()).toEqual(expectedActions)
  })
})
