class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.state = {
            options: []
        }
    }
   handleDeleteOptions() {
       this.setState((previousState) => {
           return {
               options: []
           }
       })
   }

   handlePick() {
       let option = this.state.options[Math.floor(Math.random()*this.state.options.length)]
       alert(option)
   }

   handleAddOption(option) {
       if(!option) {
           return 'Enter valid value to item'
       } else if (this.state.options.indexOf(option) > -1) {
           return 'This Option already Exists'
       } else {
        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        }) 
       }
   }
    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in hands of computer';
        return (
            <div>
                <Header title={title} subtitle={subTitle} />

                <Action hasOptions={this.state.options.length > 0}
                     handlePick = {this.handlePick} />

                <Options options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}/>

                <AddOptions handleAddOption = {this.handleAddOption}/>
            </div>
        )
    }
}


class Header extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subtitle}</h2>
            </div>
        )
    }
}


class Action extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handlePick}
                 disabled={!this.props.hasOptions}
                 >What should I Do?
                 </button>
            </div>
        )
    }
}


class Options extends React.Component {
    render() {
        return (
            <div>
                <button onClick={this.props.handleDeleteOptions}>Remove All</button>
                {
                    this.props.options.map((option) => <Option key={option} optionText={option} />)
                }
                <Option />
            </div>
        )
    }
}


class Option extends React.Component {
    render() {
        return (
            <div>
                {this.props.optionText}
            </div>
        )
    }
}
class AddOptions extends React.Component {
    constructor(props) {
        super(props)
        this.handleAddOptions = this.handleAddOptions.bind(this)
        this.state = {
            error: undefined
        }
    }
    handleAddOptions(e) {
        e.preventDefault();
        let option = e.target.elements.option.value;
        option = option.trim();
          const error =  this.props.handleAddOption(option)
          e.target.elements.option.value = '';
        this.setState((previousState) => {
            // return {error: error} which is equal to
            return { error }

        })
    }
    render() {
        return (
            <div>
                {this.state.error && <p>{this.state.error}</p>}
                <form onSubmit={this.handleAddOptions}>
                    <input type="text" name="option" />
                    <button>Add Option</button>
                </form>
            </div>
        )
    }
}


ReactDOM.render(<IndecisionApp />, document.getElementById('app'))
