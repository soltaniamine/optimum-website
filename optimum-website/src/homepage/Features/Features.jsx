import appphoto from '../../assets/appphoto.png'
import historyphoto from '../../assets/historyphoto.png'
import medicalidphoto from '../../assets/medicalidphoto.png'
import drcontactphoto from '../../assets/contactphoto.png'

const Features = () => {
    return ( 
        <div className='bg-mygreyy w-full h-screen max-lg:h-[1500px] max-sm:h-[1800px] '>
            <div className='flex justify-center h-[35%]  items-center  max-sm:h-[29%] '>
                <div className='w-[50%] max-lg:hidden'>
                    <p className="text-black text-4xl font-bold flex justify-center max-sm:text-2xl "><span className="text-myblue pr-3 ">Optimum</span>Features and Goals</p>
                    <p className="text-mygrey text-base pt-10">"Our goal is to simplify the process of booking doctor appointments, making it quick, easy, and accessible, so users can get the medical care they need when they need it."</p>
                </div>
                <div className='w-[50%] lg:hidden'>
                    <p className="text-black text-4xl font-bold flex justify-center max-sm:text-3xl "><span className="text-myblue pr-3 ">Optimum</span></p>
                    <p className="text-black text-4xl font-bold flex justify-center max-sm:text-2xl ">Features and Goals</p>
                    <p className="text-mygrey text-base pt-10">"Our goal is to simplify the process of booking doctor appointments, making it quick, easy, and accessible, so users can get the medical care they need when they need it."</p>
                </div>
            </div>
            <div className='h-[65%] w-[100%] flex justify-center max-sm:h-[71%]'>
                <div className="flex  h-[100%] w-[90%] justify-around max-lg:flex-col max-lg:items-center ">
                    <div className='h-[100%]  w-[50%] flex justify-around max-sm:flex-col max-sm:items-center '>
                        <div className='h-[100%]  flex justify-start items-end pb-8 '>
                            <div className='bg-white w-40 h-72 rounded-t-full rounded-b-full relative'>
                                <img src={appphoto} alt="" className='h-28 absolute top-6 left-6' />
                                <p className='absolute top-[150px] font-bold left-3 text-xl'>Appointments</p>
                                <p className='absolute top-[185px] left-4 text-mygrey text-sm'>Book, change and cancel reservations</p>
                            </div>
                        </div>
                        <div className='h-[100%]  flex justify-start '>
                            <div className='bg-white w-40 h-72 rounded-t-full rounded-b-full relative ml-10 max-sm:ml-0 '>
                                <img src={medicalidphoto} alt="" className='h-28 absolute top-6 left-6' />
                                <p className='absolute top-[150px] font-bold left-6 text-xl'>Medical ID</p>
                                <p className='absolute top-[185px] left-4 text-mygrey text-sm'>Each patient has their own medical profile</p>
                            </div>
                        </div>
                    </div>
                    <div className='h-[100%]  w-[50%] flex justify-around max-sm:flex-col max-sm:items-center '>
                        <div className='h-[100%] flex justify-start items-end pb-8'>
                            <div className='bg-white w-40 h-72 rounded-t-full rounded-b-full relative'>
                                <img src={historyphoto} alt="" className='h-28 absolute top-6 left-6' />
                                <p className='absolute top-[150px] font-bold left-11 text-xl'>History</p>
                                <p className='absolute top-[180px] left-6 text-mygrey text-sm'>All previous consultations are saved and you can check them</p>
                            </div>
                        </div>
                        <div className='h-[100%]  flex justify-start '>
                            <div className='bg-white w-40 h-72 rounded-t-full rounded-b-full relative ml-10 max-sm:ml-0'>
                                <img src={drcontactphoto} alt="" className='h-28 absolute top-6 left-6' />
                                <p className='absolute top-[150px] font-bold left-7 text-xl'>Dr Contact</p>
                                <p className='absolute top-[185px] left-4 text-mygrey text-sm'>You will find all the contact details of the doctor and his office</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Features;