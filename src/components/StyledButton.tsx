import styled from 'styled-components';
import { h, Component, ComponentChildren } from 'preact';

const C = styled.div`
  display: inline-block;
  padding: 4px 12px;
  margin: 4px;
  background: greenyellow;
  color: #333;
  border: 1px solid #fff;
  border-radius: 2px;
  cursor: pointer;
  transition: 0.4s;

  :hover {
    background: yellowgreen;
  }
  :active {
    background: yellow;
  }
`;

export class StyledButton extends Component<{ children?: ComponentChildren }> {
  render() {
    return <C onClick={() => alert('you click the button')}>{this.props.children}</C>;
  }
}

export default StyledButton;
