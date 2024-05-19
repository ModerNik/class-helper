'use client'

import Checkbox from '@/components/HTML/Checkbox'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import AuthAPI from '@/api/services/auth'
import { useSnackbar } from 'notistack'
import authStore from '@/store/authStore'

type inputsErrors = {
	email: boolean
	password: boolean
}

const page = () => {
	const [passwordType, setPasswordType] = useState<'password' | 'text'>(
		'password'
	)
	let emailTimeout: NodeJS.Timeout
	let passwordTimeout: NodeJS.Timeout
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [inputsErrors, setInputsErrors] = useState<inputsErrors>({
		email: false,
		password: false,
	})

	const router = useRouter()
	const { enqueueSnackbar } = useSnackbar()

	const handleSubmit = async () => {
		if (email.length && email.includes('@') && password.length) {
			AuthAPI.login(email, password).then((response) => {
				localStorage.setItem('accessToken', response.data.access_token)
				localStorage.setItem('tokenType', response.data.token_type)
				authStore.setAuth(true)
				router.push('/');
			}).catch(error => {
				enqueueSnackbar(error.response.data.detail, { variant: "error" });
			})
		} else {
			let errors: inputsErrors = {
				email: false,
				password: false,
			}
			if (!email.length || !email.includes('@')) {
				errors = {
					...errors,
					email: true,
				}
			}
			if (!password.length) {
				errors = {
					...errors,
					password: true,
				}
			}

			setInputsErrors(errors)
		}
	}

	return (
		<div className={styles['SignIn']}>
			<label className={styles['content-wrapper']}>
				<h2 className={styles['title']}>ВХОД</h2>
				<div className={styles['inputs']}>
					<input
						type='text'
						onChange={event => setEmail(event.target.value)}
						placeholder='Почта'
					/>
					<input
						type={passwordType}
						onChange={event => setPassword(event.target.value)}
						placeholder='Пароль'
					/>
				</div>
				<div className={styles['additional']}>
					<label className="flex flex-row gap-3 items-center cursor-pointer text-text/70">
						<Checkbox
							onChange={() => {
								if (passwordType == 'text') {
									setPasswordType('password')
								} else {
									setPasswordType('text')
								}
							}}
						/>
						<span>Показать пароль</span>
					</label>
				</div>
				<button
					className='w-full bg-slate-600 rounded-md h-[40px] text-white'
					onClick={handleSubmit}
				>
					Войти
				</button>
			</label>
		</div>
	)
}

export default page
