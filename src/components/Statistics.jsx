import { statistics } from '../consts'
import ShortenForm from './ShortenForm'


const Statistics = () => {
    return (
        <section className="p-20 bg-neutral-200 flex flex-col items-center lg:justify-center relative max-lg:text-center">
            <ShortenForm />
            <h1 className="lg:mt-20 mt-32 mb-5 md:text-5xl text-3xl text-neutral-dark-violet">احصائيات متقدمة</h1>
            <p className="text-neutral-grayish-violet">تتبع كيفية أداء الروابط الخاصة بك عبر الويب باستخدام لوحة معلومات الإحصائيات المتقدمة الخاصة بنا</p>

            <div className='relative mt-10 lg:mt-20 w-full flex flex-col lg:flex-row justify-between'>

                {statistics.map((d, index) => {
                    return (
                        <div
                            key={d.id}
                            className={`lg:desktop-card max-lg:mobile-card rounded-md bg-white p-5 lg:p-10 flex flex-col justify-center max-lg:items-center relative w-full lg:w-1/3 lg:h-[250px] h-auto max-lg:mt-16`}>
                            <div className='p-5 w-[80px] h-[80px] rounded-full bg-primary-violet absolute top-[-15%] lg:right-[40px]'>
                                <img src={d.icon} alt={d.id} className='w-full' />
                            </div>
                            <h1 className='text-2xl mt-5 mb-2 max-lg:mt-10 text-neutral-dark-violet'>{d.title}</h1>
                            <p className='text-neutral-grayish-violet leading-7 max-lg:text-center'>{d.text}</p>
                        </div>
                    )
                })}

            </div>
        </section>
    )
}

export default Statistics