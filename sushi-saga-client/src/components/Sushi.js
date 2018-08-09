import React, { Fragment, Component } from 'react'

class Sushi extends Component{ 
  constructor(props){
    super(props)
    this.state = {
      eaten: false
    }
  }
  
  render() {
  return (
    <div className="sushi">
      <div className="plate" 
           onClick={()=>{
             if (this.props.customerMoney >= this.props.sushi.price) {
                this.setState({eaten: true})
                this.props.eatSushi(this.props.sushi.price)
             }
             }}>
        { 
          /* Tell me if this sushi has been eaten! */ 
          this.state.eaten===true ?
            null
          :
            <img src={this.props.sushi.img_url} width="100%" />
        }
      </div>
      <h4 className="sushi-details">
        {this.props.sushi.name} - ${this.props.sushi.price}
      </h4>
    </div>
  )
}
}

export default Sushi