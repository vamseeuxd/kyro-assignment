import React from 'react'
import Context from './Context'
import Options from './options'

const ChangeLanguage = () => {
  return (
    <Context.Consumer>
      {({ state, actions }) => {
        let handleChange = e => actions.changeLanguage(e.target.value)

        return (
          <React.Fragment>
            <select className='form-control ms-2 border-0 w-50 py-0' value={state.language} onChange={handleChange}>
              <Options />
            </select>{' '}
          </React.Fragment>
        )
      }}
    </Context.Consumer>
  )
}

export default ChangeLanguage
