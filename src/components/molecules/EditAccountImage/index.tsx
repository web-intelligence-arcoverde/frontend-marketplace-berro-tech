import {ICONS, IMAGES} from '@/assets';
import Image from 'next/image';
import {useState, useRef} from 'react';
import {Container, Overlay, Button} from './style';
import { useAppSelector } from '@/hooks/useSelectorHook';

export const EditAccountImage = () => {
  const avatar = useAppSelector((state)=>state.auth.user.avatar_url)
  const [imagePreview, setImagePreview] = useState<string | null>(avatar?avatar:ICONS.Avatar);
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
        <Image src={imagePreview} width={100} height={100} alt='Preview' />
      )}
      <Overlay onClick={handleOverlayClick}>
        <input
          name='avatar_url'
          type='file'
          accept='image/*'
          onChange={handleImageChange}
          ref={inputRef}
          style={{display: 'none'}}
          onKeyDown={handleKeyDown}
        />
        <Button>
          <Image src={ICONS.EditImage} alt='icone de edição de imagem' />
        </Button>
      </Overlay>
    </Container>
  );
};
