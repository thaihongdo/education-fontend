import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { SigninService } from '../../service';

export const Login = () => {
	const { register, handleSubmit, errors } = useForm();
	const onLogin = (data) => {
		console.log(data);
		SigninService.signin(data)
			.then((res) => {
				console.log(res);
				if (res?.success) {
					toast.success(res.message);
				} else {
					toast.error(res?.message || 'Error occurred');
				}
			})
			.catch((err) => {
				toast.error(err?.message || err);
			});
	};

	return (
		<div className="nd_learning_width_50_percentage nd_learning_float_left nd_learning_box_sizing_border_box nd_learning_padding_15 nd_learning_width_100_percentage_responsive">
			<div className="nd_learning_section nd_learning_border_radius_3 nd_learning_border_1_solid_grey nd_learning_padding_20 nd_learning_box_sizing_border_box">
				<h6 className="nd_options_second_font nd_learning_bg_green nd_learning_padding_5 nd_learning_border_radius_3 nd_learning_color_white_important nd_learning_display_inline_block">
					ALREADY A MEMBER
				</h6>
				<div className="nd_learning_section nd_learning_height_5"></div>
				<h2>
					<strong>Log In</strong>
				</h2>

				<form
					onSubmit={handleSubmit(onLogin)}
					name="nd_learning_shortcode_account_login_form"
					id="nd_learning_shortcode_account_login_form"
				>
					<p className="login-username">
						<label htmlFor="nd_learning_login_form_user">Email</label>
						<input
							type="text"
							name="email"
							id="nd_learning_login_form_user"
							className="input"
							size="20"
							ref={register({ required: true })}
						/>
						{errors.email && 'Email is required'}
					</p>
					<p className="login-password">
						<label htmlFor="nd_learning_login_form_password">Password</label>
						<input
							type="password"
							name="password"
							id="nd_learning_login_form_password"
							className="input"
							size="20"
							ref={register({ required: true })}
						/>
						{errors.password && 'Password is required'}
					</p>
					<p className="login-remember">
						<label>
							<input
								name="rememberme"
								type="checkbox"
								id="nd_learning_login_form_remember"
								value="forever"
							/>{' '}
							Remember Me
						</label>
					</p>
					<p className="login-submit">
						<input
							type="submit"
							name="wp-submit"
							id="nd_learning_login_form_submit"
							className="button button-primary"
							value="Log In"
						/>
						<input
							type="hidden"
							name="redirect_to"
							value="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
						/>
					</p>
				</form>
			</div>
		</div>
	);
};
