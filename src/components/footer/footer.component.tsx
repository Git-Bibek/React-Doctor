import {assets} from "../../assets/images/assets.ts";
import {NavLink} from "react-router-dom";
import {FaFacebook, FaInstagram, FaTwitch, FaTwitter} from "react-icons/fa6";

const FooterComponent = () => {
    const footerItems = [
        {title: 'Home', link: '/'},
        {title: 'About Us', link: '/about'},
        {title: 'Contact', link: '/contact'},
        {title: 'Privacy Policy', link: '/privacy'},
    ]

    const socialMedia = [
        {icon: <FaFacebook/>, link: 'https://www.facebook.com/'},
        {icon: <FaInstagram/>, link: 'https://www.instagram.com/'},
        {icon: <FaTwitch/>, link: 'https://www.twitch.tv/'},
        {icon: <FaTwitter/>, link: 'https://www.twitter.com/'},
    ]

    return (
        <>
            <footer className={'mx-10'}>
                <div className={'flex flex-col justify-between sm:grid sm:grid-cols-3 gap-14 my-8 mt-10'}>
                    {/*left section*/}
                    <div className={' flex flex-col gap-4'}>
                        <img src={assets.logo} alt="" className={' w-32 cursor-pointer'}/>
                        <p className={' text-sm text-gray-500'}>
                            Easily find trusted specialists and schedule appointments at your convenience. Your health,
                            just
                            a few clicks away.
                        </p>
                    </div>
                    {/*center section*/}
                    <div className={' flex flex-col gap-3'}>
                        <span className={' text-lg font-medium'}>Company</span>
                        <ul>
                            {
                                footerItems && footerItems.map((item, index) => {
                                    return (
                                        <li className={'py-1'} key={index}>
                                            <NavLink to={item.link}
                                                     className={({isActive}) => isActive ? 'underline-offset-4 underline  decoration-[#ff5733] ' : ''}>
                                                {item.title}
                                            </NavLink>
                                        </li>
                                    )
                                })
                            }

                        </ul>
                    </div>
                    {/*right section*/}
                    <div className={' flex flex-col gap-3'}>
                        <span className={' text-sm font-bold'}> Get In Touch</span>
                        <ul className={' flex flex-col gap-1 underline-offset-4 underline '}>
                            <li className={'  font-light text-gray-700 cursor-pointer hover:scale-90 transition-all duration-300 '}>
                                <a href="mailto: Prescripto@google.com">
                                    Prescripto@google.com</a>
                            </li>
                            <li className={'  font-light text-gray-700 cursor-pointer hover:scale-90 transition-all duration-300 '}>
                                <a href="tel: +977-9804733759">
                                    +977-9804733759
                                </a>
                            </li>
                        </ul>
                        {/*social media icons*/}
                        <h2 className={' text-lg font-medium'}>Follow Us</h2>
                        <div className={'flex items-center  gap-3'}>
                            {
                                socialMedia && socialMedia.map((item, index) => {
                                    return (
                                        <a href={item.link} target={'_blank'} key={index}
                                           className={'text-2xl cursor-pointer hover:scale-110 transition-all duration-300'}>
                                            {item.icon}
                                        </a>)
                                })
                            }

                        </div>
                    </div>
                </div>
                {/*---copyright---*/}
                <div>
                    <hr className={'mb-2  border-gray-400 w-full  '}/>
                    <p className={'text-center text-sm text-gray-500'}>Copyright © 2022. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}
export default FooterComponent