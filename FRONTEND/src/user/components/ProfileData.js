
import styled from 'styled-components';


const ProfileData = () => {
  return (
    <Wrapper>
      <div className='top'>
        <h3>Personal Information</h3>
        <form>
          <div className='info'>
            <label>Name</label>
            <input type='text' />
          </div>
          <div className='info'>
            <label>Email</label>
            <input type='text' />
          </div>
          <div className='info'>
            <label>Phone</label>
            <input type='number' />
          </div>
          <button className='btn'>Update</button>
        </form>
      </div>
      <div className='bottom'>
        <form>
        <h3>Address</h3>
        <div className="row-2">
          <div className="info">
            <label>First Name</label>
            <input type='text'/>
          </div>
          <div className="info">
            <label>Last Name</label>
            <input type='text'/>
          </div>
        </div>
        <div className="row-2">
          <div className="info">
            <label>Email</label>
            <input type='text'/>
          </div>
          <div className="info">
            <label>Mobile</label>
            <input type='text'/>
          </div>
        </div>
        <div className="row-2">
        <div className="info">
            <label>Country</label>
            <input type='text'/>
          </div>
          <div className="info">
            <label>City</label>
            <input type='text'/>
          </div>
        </div >
        <div className="row-2">
          <div className="info">
            <label>Zip</label>
            <input type='text'/>
          </div>
          <div className="info">
            <label>Apartment</label>
            <input type='text'/>
          </div>
        </div>
        <div className='address'>
          <label>Address</label>
          <textarea className='textarea'></textarea>
        </div>
        <button className='btn'>Update</button>
        </form>
      </div>
    </Wrapper>
  )
}
const Wrapper=styled.section`
.top{
  box-shadow: 0.2rem 0.4rem 1rem 0.1rem rgba(201,201,201,0.47);
  padding:2rem 3rem 3rem 3rem;
  min-width:100rem ;
  border-radius: 10px;
  margin-bottom: 4rem;
  h3{
      margin-bottom: 3rem;
  }
  form{
      display: flex;
      flex-direction: column;
      gap:3.5rem;
      .btn{
          color: #fff;
          width: 8rem;
          height: 4.5rem;
          background-color: #001d3d;
          cursor: pointer;
          border: none;
          &:hover{
              background-color: rgb(242, 215, 14);
          }
      }
      .info{
          display: flex;
          flex-direction: column;
          font-size: 1.3rem;
          input{
              width: 100%;
              margin-top: 2rem;
              max-width: 100%;
          }
      }
  }
}

.bottom{
  box-shadow: 0.2rem 0.4rem 1rem 0.1rem rgba(201,201,201,0.47);
  padding:2rem 3rem 3rem 3rem;
  min-width:100rem ;
  border-radius: 10px;
  form{
      display: flex;
      flex-direction: column;
      gap:3.5rem;
      .btn{
          color: #fff;
          width: 8rem;
          height: 4.5rem;
          background-color: #001d3d;
          cursor: pointer;
          border: none;
          &:hover{
              background-color: rgb(242, 215, 14);
          }
      }
      .row-2{
          display: flex;
          gap:3rem;
          .info{
              display: flex;
              flex-direction: column;
              font-size: 1.3rem;
              input{
                  width: 50rem;
                  max-width: 100%;
                  margin-top: 2rem;
              }
          }
      }
      .address{
          display: flex;
          flex-direction: column;
          .textarea{
              width: 100%;
              min-width: 100%;
          }
      }
  }
}
`
export default ProfileData