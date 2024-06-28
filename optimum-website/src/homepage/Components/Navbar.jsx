
import logo from '../../assets/logo.png';

const Navbar = () => {
    return ( 
        <div className='h-16 w-screen flex justify-center'> 
            <div className='  flex justify-between items-center h-16 w-[92%]'> 
                <img src={logo} alt="" className=' h-16'/>
                <div className='w-[40%] text-white flex justify-between text-lg'>
                    <a href="" className='text-mydarkblue hover:text-mypink'>Home</a>
                    <a href="" className='text-mydarkblue hover:text-mypink'>About</a>
                    <a href="" className='text-mydarkblue hover:text-mypink'>Features</a>
                    <a href="" className='hover:text-mypink'>About us</a>
                    <a href="" className='hover:text-mypink'>App</a>
                </div>
                <button className=' bg-mypink text-white h-10 w-36 rounded-3xl '>Download</button>
            </div>
        </div>
    );
}
export default Navbar;
