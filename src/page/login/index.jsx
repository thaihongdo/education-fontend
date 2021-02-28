import React from 'react';
import { Banner } from './banner';
import { Breadcrumb } from '../../components/Breadcrumb';
import { Form } from './form';

export const Login = () => {
	return (
		<>
			<Banner />
			<Breadcrumb label="Đăng nhập hoặc đăng ký tài khoản học tập" />
			<Form />
		</>
	);
};
