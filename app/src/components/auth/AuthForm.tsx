import { FC } from 'react'
import { AiOutlineGoogle } from 'react-icons/ai'
import './authForm.scss'

interface Props {
  title?: string
}

export const AuthForm: FC<Props> = ({ title = 'Вход' }) => {
  return (
    <div className="auth">
      <form className="auth__form rounded-lg bg-white p-10 border-1">
        <h1 className="font-bold text-center text-[#D8246C] text-3xl">{title}</h1>

        <div className="flex justify-center">
          <button className='flex gap-1 m-5 items-center p-4 px-14 font-semibold ease-in-out bg-[var(--auth-btn)] hover:bg-[var(--auth-btn-hover)] text-white rounded-[13px]'>
            <AiOutlineGoogle />
            <span>
              Google</span>
          </button>
        </div>
        <div className="auth__group">
          <label>
            <input className="auth__input" type="text" placeholder="Введите email" required />
          </label>
        </div>
        <div className="input__group">
          <label>
            <input className="auth__input" type="text" placeholder="Введите пароль" required />
          </label>
        </div>
      </form>
    </div>
  )
}
