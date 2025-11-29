import React from 'react';
import { VerticalAlignment } from './types';
import useToast from './use-toast';

const App = () => {
  const { verticalPosition, horizontalPosition } = useToast();
  return (
    <div>
      <form action=''>
        <select
          name='veritical-position'
          value={verticalPosition}
          id=''
          onChange={set}
        >
          <option value={VerticalAlignment.TOP}>Top</option>
          <option value={VerticalAlignment.BOTTOM}>Bottom</option>
        </select>
      </form>
    </div>
  );
};

export default App;
