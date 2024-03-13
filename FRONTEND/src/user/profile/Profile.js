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
  .list{
    margin:3rem 14rem;
    background-color: #FFF;
    display:flex;
    gap:4rem;
  }
`;

export default Profile;