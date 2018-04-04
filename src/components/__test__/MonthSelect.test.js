import React from 'react'
import { shallow } from 'enzyme'
import sinon from 'sinon'
import MonthSelect from '../MonthSelect'

describe('<MonthSelect />', () => {
  it('renders two icons', () => {
    const wrapper = shallow(<MonthSelect />)
    expect(wrapper.find('i')).to.have.length(2)
  })

  it('renders an `.icon-star`', () => {
    const wrapper = shallow(<MonthSelect />)
    expect(wrapper.find('.icon-star')).to.have.length(1)
  })

  it('renders children when passed in', () => {
    const wrapper = shallow((
      <MonthSelect>
        <div className="unique" />
      </MonthSelect>
    ))
    expect(wrapper.contains(<div className="unique" />)).to.equal(true)
  })

  it('simulates click events', () => {
    const lastMonth = sinon.spy()
    const wrapper = shallow(<MonthSelect lastMonth={lastMonth} />)
    wrapper.find('button').simulate('click')
    expect(lastMonth).to.have.property('callCount', 1)
  })
})
