import moment from 'moment';
import logo from "../../../assets/logo.png"
const Header = () => {
    return (
        <div className='text-center'>
            <img src={logo} alt="" className='mx-auto' />
            <p>Journalism without Fear or Favour</p>
            <p className='text-3xl'>{moment().format("dddd, MMMM D, YYYY")} </p>
        </div>
    );
};

export default Header;