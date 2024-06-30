import copyright from '../../assets/copyright.png'
const Footer = () => {
    return ( 
        <div className='w-full h-20'>
            <div className='h-20 bg-myblue w-[94%] rounded-tr-full flex justify-center pl-20 max-md:pl-4'>
                <div className='flex items-center '>
                    <img src={copyright} alt="" className='h-8 max-md:h-5 '/>
                    <p className='text-xl text-white pl-2 max-md:text-base'> 2024 All Rights Reserved</p>
                </div>
            </div>
        </div>
     );
}
 
export default Footer;