import React from 'react';
import AddOptions from './AddOptions';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import ModalOption from './OptionModal'

export class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOption: undefined
    }


   handleDeleteOptions = () => {
       this.setState((previousState) => ({options: []}))
   };


   handleDeleteOption = (optionToRemove) => {
       this.setState((previousSate) => {
           return {
               options: this.state.options.filter((option) =>{
                   return option !== optionToRemove
               })
           }
       })
   }

   handlePick = () => {
       let option = this.state.options[Math.floor(Math.random()*this.state.options.length)]
       this.setState((prevState) => ({selectedOption: option}))
   }

   handleAddOption = (option) => {
       if(!option) {
           return 'Enter valid value to item'
       } else if (this.state.options.indexOf(option) > -1) {
           return 'This Option already Exists'
       } else {
        this.setState((prevState) => ({options: prevState.options.concat([option])})) 
       }
   }

   handleClearSelectedOptions = () => {
       this.setState(() => ({selectedOption: undefined}))
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

componentDidUpdate(prevProps, prevState)  {
    if(prevState.options.length !== this.state.options.length) {
        const json = JSON.stringify(this.state.options);
        localStorage.setItem('options', json)
    }
}

componentWillUnmount() {
    console.log('destroyed')
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

                <ModalOption 
                selectedOption = {this.state.selectedOption}
                handleClearSelectedOptions= {this.handleClearSelectedOptions}/>
            </div>
        )
    }
}

