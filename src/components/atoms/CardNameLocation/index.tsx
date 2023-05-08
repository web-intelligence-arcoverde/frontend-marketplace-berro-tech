import Image from 'next/image';
import {ICONS} from '@/assets';
import {Location, Flex} from './style';
import {CardNameLocationProps} from '@/types';
import {Avaliation} from '@/components';

export const CardNameLocation = ({
  name,
  city,
  state,
  isAvaliation,
  age,
}: CardNameLocationProps) => {
  return (
    <div>
      <Flex>
        <h4>
          {age} {name}
        </h4>
        {isAvaliation && <Avaliation avaliation='4.8' />}
      </Flex>
      <Flex>
        {!!city && !!state && (
          <Location>
            <Image src={ICONS.Location} alt='icone de localização' />
            {city}, {state}
          </Location>
        )}
      </Flex>
    </div>
  );
};
