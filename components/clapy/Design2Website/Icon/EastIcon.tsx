import { memo, SVGProps } from 'react';

const EastIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 26 18' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.75 0.269531L14.9922 2.02734L20.7344 7.76953H0.519531V10.2305H20.7344L14.9922 15.9727L16.75 17.7305L25.4805 9L16.75 0.269531Z'
      fill='#262626'
    />
  </svg>
);

const Memo = memo(EastIcon);
export { Memo as EastIcon };
