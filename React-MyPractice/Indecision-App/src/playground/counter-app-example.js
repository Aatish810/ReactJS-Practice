class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this)
        this.handleMinusOne = this.handleMinusOne.bind(this)
        this.handleReset = this.handleReset.bind(this)
        this.state = {
            count: 0
        }
    }
    handleAddOne() {
        this.setState((prevoiusState) => {
            return {
                count: prevoiusState.count + 1
            }
        })
    }
    handleMinusOne() {
        this.setState((prevState) => {
            return {
                count: prevState.count - 1
            }
        })
    }
    handleReset() {
       this.setState(() => {
           return {
               count: 0 
           }
       })
    }
    render() {
        return(
            <div>
                <h1>Count: {this.state.count}</h1>
                <button onClick = {this.handleAddOne}>+1</button>
                <button onClick={this.handleMinusOne}>-1</button>
                <button onClick={this.handleReset}>Reset</button>

            </div>
        )
    }
}

ReactDOM.render(<Counter />, document.getElementById('app'))
// let count = 0;
// const addOne = () => {
//     count++;
//     renderConterApp()
// }
// const substractOne = () => {
//     count--;
//     renderConterApp()
// }
// const reset = () => {
//     count = 0;
//     renderConterApp()
// }




// const renderConterApp = () => {
//     const templateTwo = (
//         <div>
//             <h1>COUNT: {count}</h1>
//             <button onClick={addOne}>+1</button>
//             <button onClick={substractOne}>-1</button>
//             <button onClick={reset}>Reset</button>
//         </div>
//     )
//     ReactDOM.render(templateTwo, appRoot)
// }
// renderConterApp()

// JS code for above template jsx code got from babel
// var template = React.createElement(
    //     "p",
    //     {id: "someid"},
    //     "SomeThing is done"
    // )
                        // const getLocation = (location) => {
                        //    if(location) {
                        //        return <p>Location: {location}</p>;
                        //    }
                        // }
                        // const userName = 'Aatish';
                        // const userAge = 24;
                        // const userLocation = 'Bhubaneshwar';
                        // const templateTwo = (<div>
                        //         <h1>{userName ? userName : 'Anonymous'}</h1>
                        //         { (userAge && userAge >= 18) && <p>Age: {userAge}</p> }
                        //        {getLocation(userLocation)}
                        //      </div>)