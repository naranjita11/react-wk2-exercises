import { Component } from "react";
import Square from "./Square";

class Squares extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selected: 1,
        };
    }

    render() {
        let { colour } = this.props;
        let { selected } = this.state;
           
        return (
            <>
                <Square
                    colour={ colour } 
                    selected={ selected === 1 }
                    handleClick={ () => this.setState({ selected: 1 }) }
                />

                <br></br>

                <Square
                    colour={ colour } 
                    selected={ selected === 2 }
                    handleClick={ () => this.setState({ selected: 2 }) }
                />  

                <br></br>

                <Square
                    colour={ colour } 
                    selected={ selected === 3 }
                    handleClick={ () => this.setState({ selected: 3 }) }
                />  
        
            </>
        )
    }


}

export default Squares;