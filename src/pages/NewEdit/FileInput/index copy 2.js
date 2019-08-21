import React, { useState, useRef, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useField } from '@rocketseat/unform'

import { includeFileRequest } from '~/store/modules/file/actions'

import { Container } from './styles'

export default function AvatarInput () {
  console.log('AvatarInput: ')
  // const { fieldName, registerField, defaultValue, error } = useField('avatar')
  const {name, email, avatar} = useSelector(state => state.user.profile)
  const stateFile = useSelector(state => state.file)

  const dispatch = useDispatch()

  const [ file, setFile ] = useState(avatar && avatar.id)
  const [ preview, setPreview ] = useState(avatar && avatar.url || 'https://api.adorable.io/avatars/50/abott@adorable.png')

  // console.log('file: ', file)
  // console.log('preview: ', preview)
  // console.log('stateFile: ', stateFile)

  // const ref = useRef()
  // console.log('AvatarInput_ref ',ref)

  useEffect(() => {
    console.log('AvatarInput_useEffect')
    if(stateFile.file){
      console.log('useEffect_stateFile: ', stateFile)
      setFile(stateFile.file.data.id)
      setPreview(stateFile.file.data.url)
    }
  }, [stateFile])

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
          data-file={file}
          onChange={handleChange}
          // ref={ref}
        />
      </label>
    </Container> 
  )
}