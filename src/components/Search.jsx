import React from 'react'

const Search = () => {
  return (
    <div className='search'>
      <div className="searchForm">
        <input type="text" placeholder='Find A User' />
      </div>
      <div className="userChat">
        <img src="https://images.pexels.com/photos/13743846/pexels-photo-13743846.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" />
        <div className="userChatInfo">
          <span>Prathmesh</span>
        </div>
      </div>
    </div>
  )
}

export default Search