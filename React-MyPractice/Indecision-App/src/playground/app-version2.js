class IndecisionApp extends React.Component {
    constructor(props) {
        super(props)
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
        this.handlePick = this.handlePick.bind(this)
        this.handleAddOption = this.handleAddOption.bind(this)
        this.handleDeleteOption = this.handleDeleteOption.bind(this)
        this.state = {
            options: props.options
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options')
            const options = JSON.parse(json)
            if(json) {
                this.setState(() => ({options}))
            }
        } catch(e) {
            console.log('Some Error in Data')
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json)
        }
    }

    componentWillUnmount() {
        console.log('destroyed')
    }

   handleDeleteOptions() {
       this.setState((previousState) => ({options: []}))
   }


   handleDeleteOption(optionToRemove) {
       this.setState((previousSate) => {
           return {
               options: this.state.options.filter((option) =>{
                   return option !== optionToRemove
               })
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
        this.setState((prevState) => ({options: prevState.options.concat([option])})) 
       }
   }
    render() {
        const title = 'Indecision App';
        const subTitle = 'Put your life in hands of computer';
        return (
            <div>
                <Header subtitle={subTitle} />

                <Action hasOptions={this.state.options.length > 0}
                     handlePick = {this.handlePick} />

                <Options options={this.state.options} 
                    handleDeleteOptions = {this.handleDeleteOptions}
                    handleDeleteOption = {this.handleDeleteOption}/>

                <AddOptions handleAddOption = {this.handleAddOption}/>
            </div>
        )
    }
}

IndecisionApp.defaultProps = {
    options: []
}

const Header = (props) => {
    return (
        <div>
            <h1>{props.title}</h1>
            <h2>{props.subtitle}</h2>
        </div>
    )
}

Header.defaultProps = {
    title: 'Indecison App'
}
const Action = (props) => {
    return (
        <div>
            <button onClick={props.handlePick}
             disabled={!props.hasOptions}
             >What should I Do?
             </button>
        </div>
    )  
}

const Options = (props) => {
    return (
        <div>
            {props.options.length === 0 && <p>Please add an option to get started</p>}
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            {
                props.options.map((option) => <Option key={option} optionText={option} handleDeleteOption = {props.handleDeleteOption}/>)
            }
        </div>
    )
}


const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button onClick = {(e)=> {
                props.handleDeleteOption(props.optionText)
            }}>remove</button>
        </div>
    )
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
        this.setState((previousState) =>  ({error}))
            // return {error: error} which is equal to
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
