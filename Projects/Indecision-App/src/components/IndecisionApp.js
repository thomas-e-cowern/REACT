import React from 'react';
import AddOptions from './AddOption';
import Header from './Header';
import Action from './Action';
import Options from './Options';
import OptionModal from './OptionModal';

class IndecisionApp extends React.Component {
    state = {
        options: [],
        selectedOptions: undefined
        
    };
    

    handleClearSelectedOptions = () => {
        this.setState(() => ({ selectedOptions: undefined }));
    };
    
    handleDeleteOptions = () => {
        this.setState(() => ({options: []}));
    };
    
    handleDeleteOption = (optionToRemove) => {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    };
    
    handlePick = () => {
 
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
//        alert(option);
        this.setState(() => ({
            selectedOptions: option
        }));
//        console.log(this.setState.selectedOptions);
       
    };
    
    handleAddOption = (option) => {
        if (!option) {
            return 'Enter valid value to add Option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option already exists';
        } 
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
        
    };

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);
            console.log(options);
            if (options) {
                this.setState(() => ({ options }));
            }
        
        } catch (e) {
            console.log('DidMount Error: ', e);
        }
    }
    
    componentDidUpdate(prevProp, prevState) {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
            console.log('saving data');
        }
        
    }
    
    componentWillUnmount() {
        console.log('componentWillUnmount');
    }
    
    render () {
        const subTitle = 'Put Your Life in The Hands of a Computer';
        return (
            <div>
            <Header subTitle={ subTitle }/>
            <div className='container'>
                <Action hasOptions={ this.state.options.length > 0 } handlePick={ this.handlePick }/>
                <div className='widget'>
                    <Options options={ this.state.options } handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                    <AddOptions handleAddOption={this.handleAddOption}/>
                </div>
            </div>
                <OptionModal 
                    selectedOptions={this.state.selectedOptions}
                    handleClearSelectedOptions={ this.handleClearSelectedOptions }
                />
            </div>
        );
    }
};

export default IndecisionApp;