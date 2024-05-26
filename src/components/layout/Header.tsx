'use client'

import { usePathname, useRouter } from 'next/navigation'
import { useState } from 'react'
import { observer } from 'mobx-react-lite';
import userStore from '@/store/userStore'
import AuthAPI from '@/api/services/auth'
import authStore from '@/store/authStore'
import Link from 'next/link';
import {
	ChevronDown,
	CircleUser,
	LogOut
} from 'lucide-react';


function Header() {
	const [profileOpened, setProfileOpened] = useState<boolean>(false)

	const router = useRouter()
	const pathname = usePathname()

	async function logout() {
		AuthAPI.logout().then(() => {
			authStore.setAuth(false)
			localStorage.removeItem('accessToken')
			localStorage.removeItem('tokenType')
			router.push('/login')
		})
	}

	return (
		<header className="h-[74px] sticky w-full text-white items-center flex justify-center bg-slate-800"
			onMouseLeave={() => {
				if (profileOpened) {
					setProfileOpened(false)
				}
			}}
		>
			<div className='flex items-center px-[45px] w-full h-full justify-between max-w-screen-xl'>
				<div className='flex flex-row gap-[45px] text-base'>
					<Link href="/groups">
						Выбор класса
					</Link>
					<Link href="/lessons">
						Выбор занятия
					</Link>
					<Link href="/">
						Расписание
					</Link>
				</div>

				<div className='relative'>
					<div className='cursor-pointer flex flex-row gap-[12px] items-center' onClick={() => setProfileOpened(!profileOpened)}>
						<p className='text-[16px] font-medium'>
							Детинкин Олег
						</p>
						<CircleUser className='size-[36px]' />
						<ChevronDown className='w-[16px]' />
					</div>
					<div
						className={`
						absolute justify-center items-center
						min-w-[150px] w-full top-[100%] -right-4 p-4 mx-4 rounded-b-[16px] bg-slate-800
						opacity-0 transition-all duration-300 ease-in-out
						${profileOpened ? 'top-[120%] opacity-100' : 'invisible'}
					`}
					>
						<button
							className='justify-between text-slate-950 bg-slate-100 flex items-center px-[12px] w-full h-[46px] rounded-[8px]'
							onClick={logout}
						>
							<p>
								Выйти
							</p>
							<LogOut size={16} />
						</button>
					</div>
				</div>
			</div>
		</header>
	)
}

export default observer(Header)
