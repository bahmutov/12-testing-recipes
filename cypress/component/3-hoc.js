/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'

function withSum(WrappedComponent, numbersToSum) {
  const sum = numbersToSum.reduce((a, b) => a + b, 0)
  return () => <WrappedComponent sum={sum} />
}

describe('Higher Order Component', () => {
  it('Adds number and gives result as a prop', () => {
    let result
    function WrappedComponent({ sum }) {
      result = sum
      return null
    }
    const ComponentWithSum = withSum(WrappedComponent, [4, 6])
    mount(<ComponentWithSum />, { alias: 'ComponentWithSum' })

    // mount is an asynchronous command
    cy.then(() => {
      expect(result).to.equal(10)
    })
  })
})
