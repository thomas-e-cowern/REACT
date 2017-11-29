class Toggle extends React.Component {
    constructor (props) {
        super(props);
        this.isHidden = this.isHidden.bind(this);
        this.state = {
            hidden: true,
            text: 'Show Details'
        }
        
    }
    
    isHidden () {
        this.setState((prevState) => {
            return {
                hidden: !prevState.hidden,
                text: !prevState.hidden ? 'Show Details' : 'Hide Details'
            }
        });
    }
    
    render () {
        return (
        <div>
        <h1>Visibility Toggle</h1>   
        <button onClick={ this.isHidden }> { this.state.text } </button>
        <p hidden={this.state.hidden} >Hey. There are some details you can now see!</p>
        </div>
        )
    }
}

ReactDOM.render(<Toggle />, document.getElementById('app'));