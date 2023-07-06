import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { IoMdClose } from "react-icons/io";
import './search.scss';

export const Search = ({ value, onChange }) => {
  const [openInput, setOpenInput] = useState(false)

  return (
    <div className={openInput ? 'search open' : 'search'}>
      <label>
        <BiSearch onClick={() => setOpenInput(true)} size={20} className='search__icon-search' />
        <input className='search__input' value={value} onChange={(e) => onChange(e.target.value)} type="text" placeholder='Поиск...' />
        {value.length ? <IoMdClose onClick={() => onChange('')} size={18} className='search__icon-remove' /> : ''}
      </label>
    </div>
  )
}