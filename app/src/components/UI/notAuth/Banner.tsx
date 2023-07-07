import Image from 'next/image';
import BannerImg from '../../../../../public/img/3d-casual-life-young-man-with-laptop-on-chair.png';

import { AuthLink } from '../buttons/AuthLink';
import './banner.scss';

export const Banner = () => {
  return (
    <div className="banner">
      <Image src={BannerImg} width={100} height={200} alt='no auth' />
      <h3 className='banner-title'>Ой, кажется вы не авторизованы</h3>
      <p>Самое время это сделать!</p>

      <AuthLink className='banner-auth' />
    </div>
  )
}
