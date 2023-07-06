import Image from 'next/image'
import { AiOutlineEye, AiOutlineHeart } from 'react-icons/ai'
import { BiBookmarks, BiCommentDetail } from 'react-icons/bi'
import './post.scss'

export const Post = () => {
  return (
    <article className="post">
      <div className="post__header">
        <div className="post__theme">
          <span>Технологии</span>
        </div>
      </div>
      <div className="post__body">
        <div className="post__title">
          «Не прорыв, но один из лучших в своей категории»: первые впечатления от 15-дюймового MacBook Air с
          чипом M2
        </div>

        <p className="post__subtitle">
          Отзывами поделились журналисты. Новый ноутбук Apple не сильно отличается от 13-дюймового MacBook Air
          по техническим характеристикам, но выигрывает как минимум по размеру дисплея и качеству звука.
        </p>

        <div className="post__img">
          <Image
            src="https://leonardo.osnova.io/0684c8bb-68f7-574a-a4ab-ac7af8c68aef/-/preview/1300/-/format/webp/"
            width={700}
            height={700}
            className="post__img-pic"
            alt="post__title"
          ></Image>
        </div>
      </div>
      <div className="post__footer">
        <button className="btn btn-action">
          <AiOutlineHeart size={16} />
        </button>
        <button className="btn btn-action">
          <BiCommentDetail />
        </button>
        <button className="btn btn-action">
          <BiBookmarks size={16} />
        </button>

        <div className="post__views">
          <AiOutlineEye size={18} />
          <span>1k</span>
        </div>
      </div>
    </article>
  )
}
