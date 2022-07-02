import React  from 'react';
import LoginForm from './components/LoginForm';

function App() {

  const Login = detail =>{
    console.log(detail);
  }
  
   return (
    <div className="App">
    {/*gọi hàm Login bên trong biểu mẫu */}
    <LoginForm Login={Login} />
    
    </div>
  );
      }

export default App;
