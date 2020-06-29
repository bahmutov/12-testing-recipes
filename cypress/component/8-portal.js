/// <reference types="cypress" />
import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { mount } from 'cypress-react-unit-test'

function PortalCounter() {
  const el = useRef(document.createElement('div'))
  const [count, setCount] = useState(0)

  useEffect(() => {
    const modalRoot = document.getElementById('modal-root')
    const currentEl = el.current
    modalRoot.appendChild(currentEl)
    return () => modalRoot.removeChild(currentEl)
  }, [])

  return ReactDOM.createPortal(
    <>
      <section aria-live="polite">
        count: <span data-testid="counter">{count}</span>
      </section>
      <button type="button" onClick={() => setCount((c) => c + 1)}>
        inc
      </button>
    </>,
    el.current,
  )
}

describe('Portal', () => {
  it('PortalCounter starts at 0 and increments', () => {
    const modalRoot = document.createElement('div')
    modalRoot.setAttribute('id', 'modal-root')
    document.body.appendChild(modalRoot)

    mount(<PortalCounter />)
    cy.contains('[data-testid=counter]', 0)
    cy.contains('button[type=button]', 'inc').click()
    cy.contains('[data-testid=counter]', 1)
  })
})
