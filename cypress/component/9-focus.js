/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'

function NameForm() {
  return (
    <form>
      <label htmlFor="name">Name</label>
      <input id="name" type="text" />
    </form>
  )
}

describe('Focus is on correct element', () => {
  it('clicking on label gives focus to name input', () => {
    mount(<NameForm />)

    cy.contains('label', 'Name').click()
    cy.get('input#name').should('have.focus')
  })
})
