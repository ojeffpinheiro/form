import logoImg from '../../assets/logo1.svg'
import plus from '../../assets/plus-orange.svg'

interface HeaderProps {
  onClick: () => void
}

import './style.scss'

export default function Header({ onClick }: HeaderProps) {
  return (
    <header>
      <div className="content">
        <section id='top' className="animate-up">
          <img src={logoImg} alt="logo" />
          <a href="/manager/dashboard" id='profile'  >
            <strong>
                Jéferson Pinheiro
            </strong>
          </a>
        </section>
        <div className="separator" />
        <button onClick={ onClick }>
          <span>
            <img src={plus} alt="Adicionar Aluno" />
          </span>
          Adicionar Aluno
        </button>
      </div>
    </header>
  )
}