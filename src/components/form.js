import React from 'react'

export default class Form extends React.Component {
    render(){
        return(
            <div>
                <h3>
                    Weather Form!
                </h3>
                <form onSubmit={this.props.getWeather}>
                    <input type="text" name="city" placeholder="City..."></input>
                    <input type="text" name="country" placeholder="Country..."></input>
                    <button> Get Weather</button>
                </form>
            </div>
        )
    }
}