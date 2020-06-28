/// <reference types="cypress" />
import React from 'react'
import {mount} from 'cypress-react-unit-test'

describe('Invoke callback', () => {
  function Button({ action }) {
    return <button onClick={() => action()}>Call</button>
  }

  it('callback is called on button click', () => {
    const callback = cy.stub()
    mount(<Button action={callback} />)

    cy.contains('button', /call/i).click()
      .then(() => {
        expect(callback).to.have.been.calledOnce
        expect(callback).to.have.been.calledWithExactly()
      })
  })
})
