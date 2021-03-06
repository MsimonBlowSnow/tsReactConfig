import React, { useEffect } from 'react';

import './App.less'
import { Button,message} from 'antd'
// import Login from './pages/login';
function App() {
  useEffect(() => {
    // message. ('adfadfsa');
    message.success('hjlhjkkhaldfjaskdlhfadfa',10000000000);
    console.log(1)
  }, [])
  return (
    <div className="App">
      {/* <Login /> */}
      <Button>click</Button>
    </div>
  );
}

export default App;
