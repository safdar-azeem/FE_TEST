import React from 'react'

interface IAlertProps {
	message: string
	variant?: 'danger' | 'success' | 'warning' | 'info' | 'primary'
}

const Alert = ({ message, variant = 'info' }: IAlertProps) => (
	<div className={`alert my-2 py-2 alert-${variant}`}>{message}</div>
)

export default Alert
