import React, { useState, useRef, useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useField } from '@rocketseat/unform'
import api from '~/services/api'

import { Container } from './styles'

export default function AvatarInput () {

  // console.log('AvatarInput')

  const { defaultValue, registerField } = useField('avatar')

  const [ file, setFile ] = useState(defaultValue && defaultValue.id)
  const [ preview, setPreview ] = useState(defaultValue && defaultValue.url)

  // console.tron.log('preview: ', preview)
  // console.log('defaultValue: ', defaultValue)

  const ref = useRef()

  // console.log('ref: ', ref)

  useEffect(() => {
    if(ref.current) {
      registerField({
        name: 'avatar-id',
        ref: ref.current,
        path: 'dataset.file'
      })
    }

    console.tron.log('useEffet_avataInput_ref: ')
  }, [ref, registerField])


  async function handleChange(e){
    e.preventDefault()
    const data = new FormData()

    data.append('file', e.target.files[0])

    const response = await api.post('files', data)

    const { id, url } = response.data

    setFile(id)
    setPreview(url)
  }


  return (
    <Container> 
      <label htmlFor="avatar">
        <img 
          src={
            preview || 'https://api.adorable.io/avatars/50/abott@adorable.png' 
          } 
          alt=""
        />
        <input 
          type="file"
          id="avatar"
          accept="image/*"
          data-file={file}
          onChange={e => handleChange(e)}
          ref={ref}
        />
      </label>
    </Container> 
  )
}