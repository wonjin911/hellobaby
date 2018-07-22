var name = 'baby';
const element = <h1>Hello, {name}</h1>;

function StartButton(props) {
  return (
    <button className="btn-2" onClick={props.onClick}>
      {props.value}
    </button>
  );
}

class Start extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
			s: 0
    };
  }

	handleClick() {
		console.log(name);
		this.setState({s: this.state['s']+1});
  }

  render() {
    return (
        <div>
					{element}
					<StartButton
						value={this.state['s']}
        		onClick={() => this.handleClick()}
      		/>
        </div>
    );
  }
}

ReactDOM.render(
  <Start />,
  document.getElementById('menu_div')
);