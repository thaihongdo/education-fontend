import React from 'react';

export const Banner = () => {
	return (
		<div
			className="nd_options_section nd_options_background_size_cover nd_options_background_position_center"
			style={{
				backgroundImage:
					'url(http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax5.jpg)',
			}}
		>
			<div className="nd_options_section nd_options_bg_greydark_alpha_gradient_2">
				<div className="nd_options_container nd_options_clearfix">
					<div className="nd_options_section nd_options_height_200"></div>

					<div className="nd_options_section nd_options_padding_15 nd_options_box_sizing_border_box">
						<strong className="nd_options_color_white nd_options_font_size_60 nd_options_font_size_40_all_iphone nd_options_line_height_40_all_iphone nd_options_first_font">
							My Account
						</strong>
						<div className="nd_options_section nd_options_height_20"></div>
					</div>
				</div>
			</div>
		</div>
	);
};
