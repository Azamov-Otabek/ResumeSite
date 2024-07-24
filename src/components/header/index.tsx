import { Link, useNavigate } from 'react-router-dom'
import './style.scss'
import {Container} from '@components'
import { Button } from 'antd'


function Header() {
  const navigate = useNavigate()
  return (
    <>
      <header className='header'>
         <Container>
            <nav>
              <Link className='Link' to={'/'}>
                <h2>RESUME WORDED</h2>
              </Link>
              <Button onClick={() => navigate('/login')}>
                Tizimga kirish
              </Button>
            </nav>
         </Container>
      </header>
    </>
  )
}

export default Header