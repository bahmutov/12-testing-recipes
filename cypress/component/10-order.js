/// <reference types="cypress" />
import React from 'react'
import { mount } from 'cypress-react-unit-test'

function NamesList({ names }) {
  return (
    <ul>
      {names.map((name) => (
        <li key={name}>{name}</li>
      ))}
    </ul>
  )
}

describe('Order of elements', () => {
  it('renders names in given order', () => {
    const names = ['Bucciarati', 'Abbacchio', 'Narancia']

    mount(<NamesList names={names} />)
    cy.get('li').should(($li) => {
      expect($li[0]).to.have.text(names[0])
      expect($li[1]).to.have.text(names[1])
      expect($li[2]).to.have.text(names[2])
    })
    // alternative
    cy.get('li').each((li, k) => {
      expect(li).to.have.text(names[k])
    })
  })
})
