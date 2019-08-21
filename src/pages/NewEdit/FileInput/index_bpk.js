import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useField } from '@rocketseat/unform'
import { Container } from './styles'

export default function AvatarInput () {
  const profile = useSelector(state => state.user.profile)
  const { url, id } = profile
  console.log('AvatarInput_profile: ', profile)

  // const { fieldName, registerField, defaultValue, error } = useField('avatar')

  // console.log('AvatarInput_defaultValue: ', defaultValue)
  console.log('AvatarInput_avatar ',profile.avatar)
  console.log('AvatarInput_url ', url)
  
  const ref = useRef()
  
  console.log('AvatarInput_ref ',ref)


  function handleChange(e){
  }

  return (
    <Container> 
      <label htmlFor="avatar">
        <img 
          // src={
          //   profile.avatar.url || 'https://api.adorable.io/avatars/50/abott@adorable.png' 
          // } 
          // src={profile.avatar.url} 
          src='https://api.adorable.io/avatars/50/abott@adorable.png'
          // src='https://localhost/files/user2.png'
          alt=""
        />
        <input 
          type="file"
          id="avatar"
          accept="image/*"
          // data-file={}
          onChange={handleChange}
          ref={ref}
        />
      </label>
    </Container> 
  )
}