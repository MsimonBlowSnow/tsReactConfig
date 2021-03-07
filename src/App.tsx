import React, { ReactElement, useEffect } from 'react';

import './App.less';
import { Button,message} from 'antd';
function App():ReactElement{
  const MyName = 1;
  console.log(MyName);
  useEffect(() => {
    message.success('hjlhjkkhaldfjaskdlhfadfa',10000000000);
    console.log(1);
  }, []);
  return (
    <div className='App'>
      <Button>click</Button>
    </div>
  );
}

export default App;
