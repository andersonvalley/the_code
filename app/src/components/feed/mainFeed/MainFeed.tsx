'use client'
import { Post } from '../../post/Post'
import './feed.scss'

export const MainFeed = () => {
  return (
    <div className="feed">
      <select name="sort" id="">
        <option value="24">24 часа</option>
        <option value="24">неделя</option>
      </select>

      <div className="feed__list">
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  )
}
