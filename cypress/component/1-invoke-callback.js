/// <reference types="cypress" />
describe('Invoke callback', () => {
  function Button({ action }) {
    return <button onClick={() => action()}>Call</button>
  }
})
