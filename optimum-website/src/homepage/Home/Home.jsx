import bg from '../../assets/bluebg.png'
import phone from '../../assets/mockup1.png'
import plusgreen from '../../assets/plusgreen.png'
import pluswhite1 from '../../assets/pluswhite.png'
import plusgreen2 from '../../assets/plusgreen.png'

const Home = () => {
    return ( 
        <div className=" flex sm:items-end h-screen w-full relative ">
            <img src={bg} alt="" className=' absolute top-0 right-0 h-[90%] max-xl:h-[80%] max-lg:h-[70%] max-md:h-[60%] max-sm:hidden'/>
            <img src={phone} alt="" className=' absolute bottom-0 right-20 h-[85%] max-lg:h-[75%] max-md:h-[60%] max-sm:h-[50%] max-xl:right-0 ' />
            <img src={plusgreen} alt="" className=' absolute top-96 right-20   max-lg:right-8' />
            <img src={pluswhite1} alt="" className=' absolute top-20 right-44 h-6 max-sm:hidden' />
            <img src={plusgreen2} alt="" className=' absolute top-56 right-[500px] max-xl:hidden' />
            <img src={plusgreen2} alt="" className=' absolute bottom-[200px] left-[30px] md:hidden' />
            <div className='lg:flex h-[70%] w-full max-sm:pt-32  '>
                <div className='  w-[60%] max-sm:w-[100%] pl-[7%]'>
                    <h4 className='text-myblue font-bold text-3xl max-lg:text-xl '>Best Healthcare App</h4>
                    <h1 className='text-mypink font-bold text-6xl mt-3 max-lg:text-4xl max-xl:text-5xl '>Swift Appointments,</h1>
                    <h1 className='text-mypink font-bold text-6xl mt-1 max-lg:text-4xl max-xl:text-5xl'>Healthier You.</h1>
                    <p className='text-black font-bold text-2xl mt-6 max-lg:text-lg max-xl:text-xl'>With <span className='text-myblue'>Optimum</span>, Quick Appointments for Quality Care,</p>
                    <p className='text-black font-bold text-2xl max-lg:text-lg max-xl:text-xl'>Your Doctor, Just a Tap Away.</p>
                </div>
                <div className='w-[40%] h-full max-sm:hidden'></div>
            </div>
        </div>
     );
}
 
export default Home;