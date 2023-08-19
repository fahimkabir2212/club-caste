import React from 'react';
import notificationIcon from '../icons/notifications.svg';
import personIcon from '../icons/person-circle.svg';
import searchIcon from '../icons/search.svg';

export const SearchBox = () => {
  return (
    <>
    <div className='search-bar'>
        <form  className='search-field'>
                <img className='navbar-icon' src={searchIcon} alt="Dashboard Icon"/>
                <input className='search-input' type="text" placeholder="Search for clubs that you're interested in" />
        </form>
        <div className='user-icons'>
            <img className='navbar-icon-profile' src={notificationIcon} alt="Dashboard Icon"/>
            <img className='navbar-icon-profile' src={personIcon} alt="Dashboard Icon"/>
        </div>
    </div>
    </>
  )
}
