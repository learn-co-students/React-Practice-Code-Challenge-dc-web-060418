import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.sushiList.map(sushi => {
            return <Sushi
              sushi={sushi}
              key={sushi.id}
              ateSushi={props.ateSushi}
              currentWallet={props.currentWallet}
              eatenSushi={props.eatenSushi}
            />
          })
        }
        <MoreButton moreButton={props.moreButton}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer
