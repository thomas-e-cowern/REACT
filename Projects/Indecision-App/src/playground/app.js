class IndecisionApp extends React.Component {
    constructor (props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.state = {
            options: []
        }
    }
    
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
//    handleDeleteOptions () {
//        this.setState(() => {
//            return {
//                options: []
//            }
//        });   
//    }
    
    //This is the same as above commented code.
    handleDeleteOptions () {
        this.setState(() => ({options: []}));
    }
    
    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => optionToRemove !== option)
        }));
    }
    
    handlePick () {
 
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        alert(option);
       
    }
    
    handleAddOption (option) {
        if (!option) {
            return 'Enter valid value to add Option';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'This Option already exists';
        } 
        
        this.setState((prevState) => ({options: prevState.options.concat(option)}));
        
    }
    
    render () {
        
        const subTitle = 'Put Your Life In The Hands of A Computer';
        
        return (
            <div>
                <Header subTitle={ subTitle }/>
                <Action hasOptions={ this.state.options.length > 0 } handlePick={ this.handlePick }/>
                <Options options={ this.state.options } handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption}/>
                <AddOptions handleAddOption={this.handleAddOption}/>
            </div>
        );
    }
}

const Header = (props) => {
        return (
        <div>
            <h1>{ props.title }</h1>
            { props.subTitle && <h2>{ props.subTitle }</h2> }
        </div>
        );
};

Header.defaultProps = {
  title: 'Indecision'  
};

const Action = (props) => {
    return (
        <div>
            <button onClick={ props.handlePick } disabled={ !props.hasOptions }>What Should I do?</button>     
        </div>
        );
};

//Below is an example of Stateless vs State in components
const Options = (props) => {
    return (
        <div>
            <button onClick={props.handleDeleteOptions}>Remove All</button>
            { props.options.length === 0 && <p>Please add an option to begin</p> }
            {
            props.options.map((option) => (
            <Option key={ option } 
            optionText={ option } 
            handleDeleteOption={props.handleDeleteOption}/>))
            }
        </div>
        );
};

//class Options extends React.Component {
//    
//    render () {
//        return (
//        <div>
//            <button onClick={this.props.handleDeleteOptions}>Remove All</button>
//            {
//            this.props.options.map((option) => <Option key={ option } optionText={ option }/>)
//            }
//        </div>
//        );
//    }
//}

const Option = (props) => {
    return (
        <div>
            { props.optionText }
            <button onClick={(e) => {
                props.handleDeleteOption(props.optionText)
            }}>Remove</button>
        </div>
    );
};

class AddOptions extends React.Component {
    constructor (props) {
        super(props);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.state = {
            error: undefined
        }
        
    }
    handleAddOption (e) {
        e.preventDefault();
        const option = e.target.elements.option.value.trim();
        const error = this.props.handleAddOption(option);
        
        this.setState(() => ({error}));
        
        if (!error) {
            e.target.elements.option.value = '';
        }
    }
    
    render () {
        return (
        <div>
        { this.state.error && <p>{ this.state.error }</p> }
        <form onSubmit={this.handleAddOption}>
            <input type="text" name="option"/>
            <button>Add Option</button>
        </form>
        </div>
        );
    }
};

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));