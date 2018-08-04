class Visible extends React.Component {
    constructor(props) {
        super(props)
        this.handleChangeBtn = this.handleChangeBtn.bind(this)
        this.state = {
            visibility: false
        }
    }

    handleChangeBtn() {
        this.setState((previousState) => {
            return {
                visibility: !previousState.visibility
            }
        })
    }
    render() {
        return(
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleChangeBtn}>{this.state.visibility ? 'Hide Details' : 'Show Details'}</button>
                {this.state.visibility && (
                <div>
                    <p>Here is data!!!! You can find your data here</p>
                </div>
            )}
            </div>
        )
    }
}

ReactDOM.render(<Visible />, document.getElementById('app'))
// let visibility = false
// const showText = (e) => {
//     visibility = !visibility;
//     renderVisible();
// }

// const renderVisible = () => {
//     const template = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick = {showText} >{visibility ? 'Hide Details' : 'Show Details'}</button>
            // {visibility && (
            //     <div>
            //         <p>Here is data!!!! You can find your data here</p>
            //     </div>
            // )}
//         </div>
//     )
//     ReactDOM.render(template, appRoot)
// }

// const appRoot = document.getElementById('app');
// renderVisible();