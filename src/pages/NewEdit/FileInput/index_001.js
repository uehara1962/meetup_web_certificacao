import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '@rocketseat/unform'

import { includeFileRequest } from '~/store/modules/file/actions'

import { Container } from './styles'

export default function AvatarInput () {
  console.log('AvatarInput: ')

  const {name, email, avatar} = useSelector(state => state.user.profile)
  const preview = avatar ? avatar.url : 'https://api.adorable.io/avatars/50/abott@adorable.png'

  const dispatch = useDispatch()

  function handleChange(e){
    const file = new FormData()

    file.append('file', e.target.files[0])

    const data = {
      file: file,
      name: name,
      email: email
    }

    dispatch(includeFileRequest(data))

  }

  return (
    <Container> 
      <label htmlFor="avatar">
        <img 
          src={ preview } 
          alt=""
        />
        <input 
          type="file"
          id="avatar"
          accept="image/*"
          onChange={e => handleChange(e)}
        />
      </label>
    </Container> 
  )
}