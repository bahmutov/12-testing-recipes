/// <reference types="cypress" />
import React, { useContext } from 'react'
import { mount } from 'cypress-react-unit-test'

const UserContext = React.createContext()

function UserFullName() {
  const { user } = useContext(UserContext)
  return <p>{user.fullName}</p>
}

describe('Proivder', () => {
  it('displays name of current user', () => {
    mount(
      <UserContext.Provider value={{ user: { fullName: 'Giorno Giovanna' } }}>
        <UserFullName />
      </UserContext.Provider>,
    )
    cy.contains('Giorno Giovanna').should('be.visible')
  })
})
