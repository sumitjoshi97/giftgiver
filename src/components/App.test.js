import React from 'react'
import { shallow } from 'enzyme'
import App from './App'

const app = shallow(<App />)

describe('App', () => {
  const id = 1
  it('renders correctly', () => {
    expect(app).toMatchSnapshot()
  })

  it('initializes `state` with an empty list of gifts', () => {
    expect(app.state().gifts).toEqual([])
  })

  describe('when clicking `add gift` button', () => {
    beforeEach(() => {
      app.find('.btn-add').simulate('click')
    })

    afterEach(() => {
      app.setState({ gifts: [] })
    })
    it('adds a new gift to `state`', () => {
      expect(app.state().gifts).toEqual([{ id }])
    })

    it('adds a new gift to rendered list', () => {
      const giftsList = app.find('.gifts-list').children
      expect(giftsList.length).toEqual(1)
    })

    it('creates a gift component', () => {
      expect(app.find('Gift').length).toBe(1)
    })
  })

  describe('when user wants to remove added gift', () => {
    beforeEach(() => {
      app.instance().removeGift(id)
    })

    it('removes gift from `state`', () => {
      expect(app.state().gifts).toEqual([])
    })
  })
})
