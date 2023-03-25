import desktopBg from '../assets/images/bg-shorten-desktop.svg'

const ShortenForm = () => {
    return (
        <div className='md:p-12 p-5 w-5/6 mx-auto rounded-md bg-primary-violet absolute top-[-60px] z-50 bg-cover bg-no-repeat' style={{ backgroundImage: `url(${desktopBg})` }}>
            <form className="w-full h-full flex flex-col md:flex-row items-center justify-center" >
                <input type="text" placeholder="اضف رابطك هنا..." className='md:w-5/6 w-full rounded-md h-14 p-5 md:ml-8 max-md:mb-5' />
                <button className='px-10 max-md:w-full h-14 bg-primary-cyan hover:bg-opacity-80 rounded-md text-white font-bold'>اختصر</button>
            </form>
        </div>
    )
}

export default ShortenForm