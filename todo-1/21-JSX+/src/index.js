import React from 'react';
import ReactDom from 'react-dom';


const arr = ['Drink Coffee', 'Build Awesome App'];

const TodoList = () => {
  return (
    <ul>
      <li>{arr[0]}</li>
      <li>{arr[1]}</li>
    </ul>
  )
}


const AppHeader = () => {
  return <h1>My todo List</h1>;
}

const SearchPanel = () => {
  const searchText = 'Type here to search'
  const searchStyle = {fontSize: '20px'}

  return <input
  style={searchStyle}
  placeholder={searchText} />;
};
  


const App = () => {

  const isLoggedIn = true;
  const loginBox = <span>Log in please</span>;
  const welcomeBox = <span>Welcome Back</span>;

  return (
    <div>
      { isLoggedIn ? welcomeBox : loginBox}
      {/* <span>{(new Date()).toString()}</span> */}
      <AppHeader />
      <SearchPanel />
      <TodoList />
    </div>
  );
};

  
ReactDom.render(<App />,
  document.getElementById('root'));
