/// <reference types="cypress" />
import React, { useState, useCallback } from 'react'
import { mount } from 'cypress-react-unit-test'

function useCounter() {
  const [count, setCount] = useState(0)
  const increment = useCallback(() => setCount((x) => x + 1), [])
  return { count, increment }
}

describe('Hooks', () => {
  it('counter increments', () => {
    let counter
    function MockComponent() {
      counter = useCounter()
      return null
    }

    mount(<MockComponent />)
      .then(() => {
        expect(counter.count).to.equal(0)
        counter.increment()
      })
      .then(() => {
        expect(counter.count).to.equal(1)
      })
  })

  // TODO find my exactly with testing hooks
  it.skip('counter increments with react hooks testing library', () => {
    // const { result } = renderHook(() => useCounter())
    // expect(result.current.count).toBe(0)
    // act(() => result.current.increment())
    // expect(result.current.count).toBe(1)
  })
})
