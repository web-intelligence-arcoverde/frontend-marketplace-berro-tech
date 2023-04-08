import {Svg, SvgContainer} from './style';

export const IconLoading = () => {
  return (
    <SvgContainer>
      <Svg
        width='128'
        height='128'
        viewBox='0 0 128 128'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <g clipPath='url(#clip0_362_2551)'>
          <path
            d='M64 112C90.5097 112 112 90.5097 112 64C112 37.4903 90.5097 16 64 16C37.4903 16 16 37.4903 16 64C16 90.5097 37.4903 112 64 112Z'
            stroke='#FFCB04'
            stroke-width='3'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            className='dot-one'
            d='M42.667 64V64.0533'
            stroke='#FFCB04'
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            className='dot-two'
            d='M64 64V64.0533'
            stroke='#FFCB04'
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
          <path
            className='dot-tree'
            d='M85.333 64V64.0533'
            stroke='#FFCB04'
            stroke-width='5'
            stroke-linecap='round'
            stroke-linejoin='round'
          />
        </g>
        <defs>
          <clipPath id='clip0_362_2551'>
            <rect width='128' height='128' fill='white' />
          </clipPath>
        </defs>
      </Svg>
    </SvgContainer>
  );
};
