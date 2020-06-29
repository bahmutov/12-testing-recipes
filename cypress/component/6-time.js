/// <reference types="cypress" />
import React, { useState, useEffect } from 'react'
import { mount } from 'cypress-react-unit-test'

function TrafficLight() {
  const timeUntilChange = 500
  const [light, setLight] = useState('Red')
  useEffect(() => {
    setTimeout(() => setLight('Green'), timeUntilChange)
  }, [timeUntilChange])
  return <p>{light}</p>
}

describe('Functions that depend on time', () => {
  it('Changes from red to green to after timeout', () => {
    cy.clock()
    mount(<TrafficLight />)

    cy.contains(/red/i).should('be.visible')
    cy.tick(500)
    cy.contains(/green/i).should('be.visible')
  })
})
