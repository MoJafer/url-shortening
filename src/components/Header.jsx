import Nav from "./Nav"
import ilWorking from '../assets/images/illustration-working.svg'

const Header = () => {
    return (
        <div className="md:h-screen lg:px-20 px-10 py-10 mb-40 overflow-hidden w-full relative">
            <Nav />
            <div className="flex flex-col w-full items-center md:w-1/2 h-full md:justify-center max-md:mt-20">
                <img src={ilWorking} alt="ilWorking" className="w-2/3 md:absolute scale-x-[-1] md:left-[-190px] md:top-[100px] md:z-10 max-md:mb-10" />
                <div className="max-md:text-center">
                    <h1 className="mb-5 text-4xl text-primary-violet max-md:mb-10">اكثر من مجرد اختصار روابط</h1>
                    <p className="mb-8 text-neutral-grayish-violet leading-7">بناء التعرف على علامتك التجارية والحصول على رؤى مفصلة حول كيفية أداء الروابط الخاصة بك</p>
                    <a href="#!" className="bg-primary-cyan px-8 py-3 rounded-full text-white font-bold">أبدأ الآن</a>
                </div>
            </div>
        </div>
    )
}

export default Header