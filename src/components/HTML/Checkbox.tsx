'use client'

import { FC, useState } from 'react'
import styles from './Checkbox.module.scss'

type CheckboxProps = {
	onChange?: () => void
	disabled?: boolean
	className?: string
	id?: string
}

const Checkbox: FC<CheckboxProps> = ({
	onChange,
	disabled = false,
	className,
	id,
}) => {
	const [isActive, setIsActive] = useState<boolean>(false)
	return (
		<div
			className={`${styles['Checkbox']} ${
				isActive ? styles['checkbox-active'] : ''
			} ${disabled ? styles['checkbox-disabled'] : ''} ${
				className ? className : ''
			}`}
		>
			<input
				type='checkbox'
				onChange={() => {
					setIsActive(!isActive)
					onChange!()
				}}
				disabled={disabled}
				id={true && id}
			/>
			<span className={styles['checkbox-mark']}>
				<div className={styles['checkbox-mark-left']}></div>
				<div className={styles['checkbox-mark-right']}></div>
			</span>
		</div>
	)
}

export default Checkbox
