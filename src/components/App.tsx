import { h, Component } from 'preact';
import { hot } from 'react-hot-loader';
import { XInput } from './XInput';
import StyledButton from './StyledButton';

class App extends Component {
  render() {
    return (
      <div>
        <div className="hooks-example">
          <XInput text="1" />
        </div>
        <div className="sc-example">
          <StyledButton>use styled-components</StyledButton>
        </div>
      </div>
    );
  }
}

export default hot(module)(App);
