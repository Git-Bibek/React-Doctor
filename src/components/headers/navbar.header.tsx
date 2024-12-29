import logo from '../../assets/logo.svg'
import {NavLink, useNavigate} from "react-router-dom";
import {useState} from "react";
import {IoMdArrowDropdown} from "react-icons/io";
import {RxHamburgerMenu} from "react-icons/rx";
import {MdClose} from "react-icons/md";
import {RootState} from "../../redux/store.ts";
import {useSelector} from "react-redux";


interface navItem {
    title: string
    path: string
}

const Navbar = () => {
    const navItems: navItem[] = [
        {title: 'Home', path: '/'},
        {title: 'All Doctors', path: '/doctors'},
        {title: 'About', path: '/about'},
        {title: 'Contact', path: '/contact'},
    ]
    const ProfileItem: navItem[] = [
        {title: 'Profile', path: '/profile'},
        {title: 'Appointment', path: '/appointment'},
    ]


    const navigate = useNavigate()
    const [showMenu, setShowMenu] = useState(false)
    const {isAuthenticated,} = useSelector((state: RootState) => state.auth)

    return (
        <>
            <div className={`flex justify-between items-center text-sm py-3 mb-5 border-b border-b-gray-400`}>
                <NavLink to={''}>
                    <img src={logo} className={'w-44 cursor-pointer'} alt=""/>
                </NavLink>
                <ul className={'hidden md:flex items-start gap-5 font-medium cursor-pointer'}>
                    {
                        navItems && navItems.map((item, index) => {
                            return (
                                <li className={' py-1'} key={index}>
                                    <NavLink to={item.path}
                                             className={({isActive}) => isActive ? 'underline-offset-4 underline  decoration-[#ff5733] ' : ''}>
                                        {item.title}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>

                <div className={'flex items-center gap-4'}>
                    {
                        isAuthenticated ? <>
                                <div className={'flex items-center gap-2 cursor-pointer group relative'}>
                                    <img src={'https://cdn-icons-png.flaticon.com/512/149/149071.png'} alt=""
                                         className={'w-8 rounded-full'}/>
                                    <IoMdArrowDropdown className={'cursor-pointer w-4 text-2xl'}/>
                                    <div
                                        className={'absolute top-0 right-0 pt-14 text-base font-medium text-gray-500 z-20 hidden group-hover:block'}>
                                        <div className={'min-w-48 bg-stone-100 rounded flex flex-col gap-4 p-4'}>

                                            {
                                                ProfileItem && ProfileItem.map((item, index) => {
                                                    return (
                                                        <NavLink to={item.path} key={index}
                                                                 className={({isActive}) => isActive ? 'underline-offset-4 underline  decoration-[#ff5733] ' : ''}>
                                                            {item.title}
                                                        </NavLink>
                                                    )
                                                })
                                            }
                                            <NavLink to={'/'}
                                                     className={({isActive}) => isActive ? 'underline-offset-4 underline  decoration-[#ff5733] ' : ''}>
                                                Logout
                                            </NavLink>
                                        </div>
                                    </div>
                                </div>
                            </> :
                            <>
                                <button
                                    onClick={() => navigate('/register')}
                                    className={'bg-primary text-white px-4 py-2 rounded-full'}>
                                    create account
                                </button>
                            </>
                    }
                    {/* Mobile Button */}
                    <div className={' md:hidden flex items-center'}>
                        <button
                            onClick={() => setShowMenu(!showMenu)}
                            className={'md:hidden cursor-pointer font-bold'}>
                            {
                                showMenu ? <MdClose className={'w-6 text-2xl'}/> :
                                    <RxHamburgerMenu className={'w-6 text-2xl'}/>
                            }
                        </button>
                    </div>
                    {/* Mobile Menu */}
                    {
                        showMenu && (
                            <div
                                className={'md:hidden bg-white fixed inset-0 top-[60px] z-10'}>
                                <div className={'min-w-48 bg-stone-100 rounded flex flex-col items-center gap-4 p-4'}>
                                    {
                                        navItems && navItems.map((item, index) => {
                                            return (
                                                <NavLink to={item.path} key={index}
                                                         className={({isActive}) => isActive ? 'underline-offset-4 underline  decoration-[#ff5733] ' : ''}>
                                                    {item.title}
                                                </NavLink>
                                            )
                                        })
                                    }
                                    <NavLink to={'/login'}
                                             className={({isActive}) => isActive ? 'underline-offset-4 underline  decoration-[#ff5733] ' : ''}>
                                        Login
                                    </NavLink>
                                </div>
                            </div>
                        )
                    }

                </div>
            </div>
        </>)
}

export default Navbar
