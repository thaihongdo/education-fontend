import React from 'react';

export const Form = () => {
	return (
		<div
			style={{ float: 'left', width: '100%' }}
			id="post-395"
			className="post-395 page type-page status-publish hentry"
		>
			<div className="nd_learning_section">
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
							name="nd_learning_shortcode_account_login_form"
							id="nd_learning_shortcode_account_login_form"
							action="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-login.php"
							method="post"
						>
							<p className="login-username">
								<label for="nd_learning_login_form_user">Username</label>
								<input
									type="text"
									name="log"
									id="nd_learning_login_form_user"
									className="input"
									value=""
									size="20"
								/>
							</p>
							<p className="login-password">
								<label for="nd_learning_login_form_password">Password</label>
								<input
									type="password"
									name="pwd"
									id="nd_learning_login_form_password"
									className="input"
									value=""
									size="20"
								/>
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

				<div className="nd_learning_width_50_percentage nd_learning_float_left nd_learning_box_sizing_border_box nd_learning_padding_15 nd_learning_width_100_percentage_responsive">
					<div className="nd_learning_opacity_04 nd_learning_section nd_learning_bg_white nd_learning_border_radius_3 nd_learning_border_1_solid_grey nd_learning_padding_20 nd_learning_box_sizing_border_box">
						<h6 className="nd_options_second_font nd_learning_bg_orange nd_learning_padding_5 nd_learning_border_radius_3 nd_learning_color_white_important nd_learning_display_inline_block">
							I DO NOT HAVE AN ACCOUNT
						</h6>
						<div className="nd_learning_section nd_learning_height_5"></div>
						<h2>
							<strong>Registration Disabled</strong>
						</h2>

						<form action="#" method="post">
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									Username *
								</label>
								<input
									readonly=""
									type="text"
									name="nd_learning_username"
									className=" nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									Password *
								</label>
								<input
									readonly=""
									type="password"
									name="nd_learning_password"
									className=" nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									Email *
								</label>
								<input
									readonly=""
									type="text"
									name="nd_learning_email"
									className=" nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									Website
								</label>
								<input
									readonly=""
									type="text"
									name="nd_learning_website"
									className=" nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									First Name
								</label>
								<input
									readonly=""
									type="text"
									name="nd_learning_first_name"
									className="nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									Last Name
								</label>
								<input
									readonly=""
									type="text"
									name="nd_learning_last_name"
									className="nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									Nickname
								</label>
								<input
									readonly=""
									type="text"
									name="nd_learning_nickname"
									className="nd_learning_section"
									value=""
								/>
							</p>
							<p>
								<label className="nd_learning_section nd_learning_margin_top_20">
									About / Bio
								</label>
								<textarea
									readonly=""
									className="nd_learning_section"
									name="nd_learning_bio"
								></textarea>
							</p>
							<input
								disabled=""
								className="nd_learning_section nd_learning_margin_top_20"
								type="submit"
								name="submit"
								value="Registration Disabled"
							/>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};
