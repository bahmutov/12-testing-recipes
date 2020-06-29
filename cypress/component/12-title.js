/// <reference types="cypress" />
import React, { useState } from 'react'
import { Helmet } from 'react-helmet'
import { mount } from 'cypress-react-unit-test'

function DocTitleCounter() {
  const [counter, setCounter] = useState(0)

  return (
    <>
      <Helmet>
        <title>{String(counter)}</title>
      </Helmet>
      <button onClick={() => setCounter((c) => c + 1)}>inc</button>
    </>
  )
}

describe('Dynamic page titles', () => {
  it('Increments document title', () => {
    mount(<DocTitleCounter />)
    cy.title().should('equal', '0')
    cy.contains('button', /inc/i).click()
    cy.title().should('equal', '1')
  })
})
