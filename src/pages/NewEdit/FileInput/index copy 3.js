import React, { useState, useRef } from 'react';

import api from '~/services/api';
import photo2 from '~/assets/photo2.svg';

import { Container, Span, DivImg, Img } from './styles';

export default function FileInput(props) {
  const { setfileId } = props;
  const ref = useRef();
  // const [file, setFile] = useState(fileId);
  const [preview, setPreview] = useState(photo2);
  const [visible, setVisible] = useState(true);

  // console.log('image: ', image);
  // console.log('preview: ', preview);
  // console.log('setfileId: ', setfileId);

  // useEffect(() => {
  //   setPreview(image);
  // });

  function openFileDialog() {
    ref.current.click();
  }

  async function handleChange(e) {
    e.preventDefault();
    // console.tron.log('handleChange_file: ', e.target.files[0]);

    const data = new FormData();

    data.append('file', e.target.files[0]);

    const response = await api.post('files', data);

    const { id, url } = response.data;

    setfileId(id);
    setPreview(url);
    setVisible(false);
  }

  return (
    <Container onClick={openFileDialog}>
      <input
        type="file"
        id="avatar"
        accept="image/*"
        onChange={e => handleChange(e)}
        ref={ref}
      />
      <DivImg>
        <Img src={preview} visible={visible} alt="" />
        {visible && <Span>Selecionar imagem</Span>}
        {/* {visible && <span>Selecionar imagem</span>} */}
      </DivImg>
    </Container>
  );
}
