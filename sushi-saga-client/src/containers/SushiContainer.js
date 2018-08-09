import React, { Fragment, Component } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from "../components/Sushi";

class SushiContainer extends Component{ 

  render(){
  return (
    <Fragment>
      <div className="belt">
        {this.props.displayedSushi.map(sushi=><Sushi  key={sushi.id} 
                                                      sushi={sushi} 
                                                      eatSushi={this.props.eatSushi} 
                                                      customerMoney={this.props.customerMoney}/>)}
        <MoreButton moreSushi={this.props.moreSushi} />
      </div>
    </Fragment>
  )
}
}

export default SushiContainer