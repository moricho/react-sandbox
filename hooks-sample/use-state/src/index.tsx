import * as React from 'react';
import { render } from 'react-dom';

const App: React.FC = (): JSX.Element => {
  const [text, setText] = React.useState<string>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <div>
      <p>
        text:
        {text.split('').reverse().join('')}
      </p>
      <input value={text} onChange={handleChange} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
