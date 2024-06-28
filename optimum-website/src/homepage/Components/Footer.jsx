import copyright from '../../assets/copyright.png'
const Footer = () => {
    return ( 
        <div className='w-screen h-20'>
            <div className='h-20 bg-myblue w-[94%] rounded-tr-full flex justify-center pl-20'>
                <div className='flex items-center '>
                    <img src={copyright} alt="" className='h-8 '/>
                    <p className='text-xl text-white pl-2'> 2024 All Rights Are Reserved</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;