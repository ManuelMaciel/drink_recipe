import React from 'react';

const Header = ({title}) => {
  return (  
    <header className='bg-alert'>
      <h1 className='text-center'>{title}</h1>
    </header>
  );
}
 
export default Header;