/// <reference types="cypress" />
import React, { useState } from 'react'
import { MemoryRouter, Route, useHistory } from 'react-router-dom'
import { mount } from 'cypress-react-unit-test'

describe('Changes current route', () => {
  it('On search redirects to new route', () => {
    let location
    mount(
      <MemoryRouter initialEntries={['/']}>
        <Route path="/">
          <SearchBar />
        </Route>
        <Route
          path="/*"
          render={({ location: loc }) => {
            location = loc
            return null
          }}
        />
      </MemoryRouter>,
    )

    cy.get('input#query').type('react')
    cy.get('input[type=submit]')
      .click()
      .then(() => {
        expect(location.pathname).to.equal('/search-results')
        const searchParams = new URLSearchParams(location.search)
        expect(searchParams.has('query')).to.be.true
        expect(searchParams.get('query')).to.equal('react')
      })
  })
})

function SearchBar() {
  const history = useHistory()
  const [query, setQuery] = useState('')

  return (
    <form
      onSubmit={function redirectToResultsPage(e) {
        debugger
        e.preventDefault()
        history.push(`/search-results?query=${query}`)
      }}
    >
      <label htmlFor="query">search</label>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.currentTarget.value)}
        id="query"
      />
      <input type="submit" value="go" />
    </form>
  )
}
