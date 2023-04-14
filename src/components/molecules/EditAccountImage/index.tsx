import {ICONS} from '@/assets';
import Image from 'next/image';
import React, {useState, useRef} from 'react';
import {Container, Overlay, Button} from './style';
import {useAppSelector} from '@/hooks/useSelectorHook';

export const EditAccountImage = () => {
  const {avatar_url} = useAppSelector((state) => state.auth.user);

  let showAvatarImage = avatar_url ? avatar_url : ICONS.Avatar;

  const [imagePreview, setImagePreview] = useState<string | null>(
    showAvatarImage,
  );

  const inputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleOverlayClick = () => {
    if (inputRef.current) {
      inputRef.current.click();
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      event.preventDefault();
    }
  };

  return (
    <Container>
      {imagePreview && (
        <Image src={imagePreview} width={271} height={271} alt='Preview' />
      )}
      <Overlay onClick={handleOverlayClick}>
        <input
          name='avatar_url'
          type='file'
          accept='image/*'
          onChange={(event) => handleImageChange(event)}
          ref={inputRef}
          style={{display: 'none', height: '271px', width: '271px'}}
          onKeyDown={handleKeyDown}
          id='fileInput'
        />

        <Button type='button'>
          <Image
            src={ICONS.EditImage}
            alt='icone de edição de imagem'
            height='58'
            width='58'
          />
        </Button>
      </Overlay>
    </Container>
  );
};
