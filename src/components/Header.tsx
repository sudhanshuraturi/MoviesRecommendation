import { logo } from '../utils/constants'

const Header: React.FC = () => {
  return (
    <div className='absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-screen'>
        <img src={logo} alt='logo' className='w-44' />
    </div>
  )
}

export default Header