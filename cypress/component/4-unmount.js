/// <reference types="cypress" />
import React, { useEffect } from 'react'
import { mount, unmount } from 'cypress-react-unit-test'

function ComponentThatSubscribes({ subscriptionService }) {
  useEffect(() => {
    subscriptionService.subscribe()
    return () => subscriptionService.unsubscribe()
  }, [subscriptionService])
  return null
}

describe('Component cleans up on unmount', () => {
  it('Subscribes and unsubscribes when appropriate', () => {
    const subscriptionService = {
      subscribe: cy.stub().as('subscribe'),
      unsubscribe: cy.stub().as('unsubscribe'),
    }

    mount(<ComponentThatSubscribes subscriptionService={subscriptionService} />)

    cy.get('@subscribe')
      .should('have.been.calledOnce')
      .and('have.been.calledWithExactly')

    unmount()

    cy.get('@unsubscribe')
      .should('have.been.calledOnce')
      .and('have.been.calledWithExactly')
  })
})
