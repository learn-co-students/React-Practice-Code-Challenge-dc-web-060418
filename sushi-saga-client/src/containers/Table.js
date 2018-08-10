import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div className="empty-plate" style={{ top: -7 * index }} key={x.id}/>
    })
  }

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${props.wallet} remaining!
      </h1>
      <h3>Add The Money Here!</h3>
      <form onSubmit={(e) => props.addMoneyToWallet(e)}>
        <input type="number" name="addAmount"></input>
        <input type="submit"></input>
      </form>
      <div className="table">
        <div className="stack">
          {renderPlates(props.eatenSushi)}
        </div>
      </div>
    </Fragment>
  )
}

export default Table
