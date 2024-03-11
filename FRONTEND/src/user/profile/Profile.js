import React from 'react'
import Header from './Header';
import Sidebar from './Sidebar';
import ProfileData from '../components/ProfileData';
import styled from 'styled-components';

const Profile = () => {
  return (
    <Wrapper>
        <Header data={'Profile'}/>
        <div className='list'>
            <Sidebar/>
            <ProfileData/>
        </div>
    </Wrapper>
  )
}

const Wrapper=styled.section`
  
`;

export default Profile;