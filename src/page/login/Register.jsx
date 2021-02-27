import React from 'react';

export const Register = () => {
	return (
		<div className="nd_learning_width_50_percentage nd_learning_float_left nd_learning_box_sizing_border_box nd_learning_padding_15 nd_learning_width_100_percentage_responsive">
			<div className=" nd_learning_section nd_learning_bg_white nd_learning_border_radius_3 nd_learning_border_1_solid_grey nd_learning_padding_20 nd_learning_box_sizing_border_box">
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
							Email *
						</label>
						<input
							type="text"
							name="nd_learning_email"
							className=" nd_learning_section"
							value=""
						/>
					</p>
					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							Password *
						</label>
						<input
							type="password"
							name="nd_learning_password"
							className=" nd_learning_section"
							value=""
						/>
					</p>

					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							First Name
						</label>
						<input
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
							type="text"
							name="nd_learning_last_name"
							className="nd_learning_section"
							value=""
						/>
					</p>
					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							Phone
						</label>
						<input
							type="text"
							name="nd_learning_last_name"
							className="nd_learning_section"
							value=""
						/>
					</p>
					<input
						className="nd_learning_section nd_learning_margin_top_20"
						type="submit"
						name="submit"
						value="Registration"
					/>
				</form>
			</div>
		</div>
	);
};
