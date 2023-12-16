import logoImg from '../../assets/logo1.svg'

import './style.scss'

export default function Header() {
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
      </div>
    </header>
  )
}