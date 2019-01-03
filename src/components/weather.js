import React from 'react'

export default class Weather extends React.Component {
    render(){
        return(
                <div>
                    { this.props.temperature && 
                        <li>
                            temperature: {this.props.temperature}
                        </li>
                    }

                    { this.props.humidity &&
                        <li>
                            humidity: {this.props.humidity}
                        </li>
                    }

                    { this.props.country &&
                        <li>
                            country: {this.props.country}
                        </li>
                    }

                    { this.props.description && 
                        <li>
                            description: {this.props.description}
                        </li>
                    }



                </div>
        )
    }
}