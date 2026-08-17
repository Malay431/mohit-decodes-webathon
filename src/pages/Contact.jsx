import React from 'react'

const Contact = () => {
  return (
    <div className='mt-15'>
      <form>
        <div>
          <label>Name:</label>
          <input placeholder='Enter your name'/>
        </div>
        <div>
          <label>Email:</label>
          <input placeholder='Enter your email'/>
        </div>
        <div>
          <label>Message:</label>
          <input placeholder='Enter your message'/>
        </div>
      </form>
    </div>
  )
}

export default Contact
