import React from 'react'
import { blog2 } from '../../assets';
import { Button, Gap, Link } from '../../components/atoms';
import Input from '../../components/atoms/input';
import '../Register/register.scss';
const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={blog2} className="bg-image" />
      </div>
      <div className='right'>
        <p className='title'>Login</p>
        <Input label="Email" placeholder="Email"/>
        <Gap height={18}></Gap>
        <Input label="passwword" placeholder="password"/>
        <Gap height={50}></Gap>
        <Button title="Login"/>
        <Gap height={100}></Gap>
        <Link title="Register"></Link>
      </div>
    </div>
  )
}

export default Register