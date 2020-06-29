/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'

function SeasonsForm() {
  return (
    <form>
      <p>Best season:</p>
      <section>
        <input name="season" type="radio" id="winter" value="winter" />
        <label htmlFor="winter">Winter</label>
        <input name="season" type="radio" id="spring" value="spring" />
        <label htmlFor="spring">Spring</label>
        <input
          name="season"
          checked
          readOnly
          type="radio"
          id="summer"
          value="summer"
        />
        <label htmlFor="summer">Summer</label>
        <input name="season" type="radio" id="autumn" value="autumn" />
        <label htmlFor="autumn">Autumn</label>
      </section>
    </form>
  )
}

describe('Selected option', () => {
  it('Has Summer pre-selected', () => {
    mount(<SeasonsForm />)
    cy.get('input[type=radio]#summer').should('be.checked')
  })
})
