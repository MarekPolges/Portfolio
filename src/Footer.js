import React from 'react'

const Footer = ( ) => {

  const today = new Date()

  return ( 
    <div className='footer'>
      <p>
        Marek Polgesek &copy; {today.getFullYear()}
        </p>
    </div>
   );
}
 
export default Footer;