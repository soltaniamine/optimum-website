import doctor from '../../assets/dr.png'
import appointments from '../../assets/iconappointments.png'
import availability from '../../assets/iconavailability.png'
import contacts from '../../assets/iconcontact.png'

const Separateur = () => {
    return ( 
        <div className=' bg-mygreyy flex  h-40 relative justify-center max-lg:h-[300PX] max-md:h-[200PX] max-md:justify-end'>
            <img src={doctor} alt="" className=' absolute bottom-0 left-10 h-[160%] max-lg:h-[100%]' />
            <div className=' w-[70%] flex items-center justify-between ml-24 max-lg:flex-col max-lg:py-9 max-md:py-4 max-md:items-end '>
                <div className='flex items-center max-lg:w-[240px]' >
                    <img src={appointments} alt="" className='h-16 max-md:h-[50PX]' />
                    <p className='font-bold pl-6 text-2xl max-md:text-lg'>Appointments</p>
                </div>
                <div className='flex items-center max-lg:w-[240px]' >
                    <img src={availability} alt="" className='h-16 max-md:h-[50PX]' />
                    <p className='font-bold pl-6 text-2xl max-md:text-lg'>Availability</p>
                </div>
                <div className='flex items-center max-lg:w-[240px]' >
                    <img src={contacts} alt="" className='h-16 max-md:h-[50PX]'/>
                    <p className='font-bold pl-6 text-2xl max-md:text-lg'>Contacts</p>
                </div>
            </div>
        </div>
     );
}
 
export default Separateur;