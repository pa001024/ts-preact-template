import { h, Fragment } from 'preact';
import { useState } from 'preact/hooks';
type Props = {
  text: string;
};

export const XInput = ({ text: _text }: Props) => {
  const [text, setText] = useState(_text);

  return (
    <Fragment>
      <input type="text" value={text} onInput={(e: any) => setText(e.target.value)} />
      [use hooks] text: {text} <br />
    </Fragment>
  );
};
