import React from 'react'
import { blog1 } from '../../assets';
import { Button, Gap, Link } from '../../components/atoms';
import Input from '../../components/atoms/input';
import './register.scss';
const Register = () => {
  return (
    <div className='main-page'>
      <div className='left'>
        <img src={blog1} className="bg-image" />
      </div>
      <div className='right'>
        <p className='title'>Register</p>
        <Input label="Full Name" placeholder="Full Name" />
        <Gap height={18}></Gap>
        <Input label="Email" placeholder="Email"/>
        <Gap height={18}></Gap>
        <Input label="passwword" placeholder="password"/>
        <Gap height={50}></Gap>
        <Button title="Register"/>
        <Gap height={100}></Gap>
        <Link title="kembali ke login"></Link>
      </div>
    </div>
  )
}

export default Register