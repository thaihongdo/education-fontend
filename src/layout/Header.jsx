import React from 'react';
import { Link } from 'react-router-dom';
import { SubMenu } from '../components';

export const Header = () => {
	return (
		<>
			<div className="nd_options_section">
				<div
					style={{ backgroundColor: '#174873' }}
					className="nd_options_section"
				>
					<div className="nd_options_container nd_options_clearfix">
						<div
							style={{ color: ' #ffffff' }}
							className="nd_options_grid_6 nd_options_padding_botttom_10 nd_options_padding_bottom_0_responsive nd_options_padding_top_10 nd_options_text_align_center_responsive"
						>
							<div
								id="nd_options_navigation_top_header_2_left"
								className="nd_options_navigation_top_header_2 nd_options_display_inline_block_responsive"
							>
								<div className=" nd_options_display_none_all_iphone nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a href="">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_right_10 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/world-white.svg"
											/>
										</a>
									</div>

									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a
											style={{ color: ' #fff' }}
											className="nd_options_margin_right_20"
											href=""
										>
											LANGUAGES
										</a>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a
											style={{ color: ' #fff' }}
											className="nd_options_margin_right_20"
											href=""
										>
											EN
										</a>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a
											style={{ color: ' #fff' }}
											className="nd_options_margin_right_20"
											href=""
										>
											ES
										</a>
									</div>
								</div>

								<div className=" nd_options_display_none_all_iphone nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a href="">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_right_10 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/share-white.svg"
											/>
										</a>
									</div>

									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a
											style={{ color: ' #fff' }}
											className="nd_options_margin_right_20"
											href=""
										>
											OUR SOCIAL
										</a>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a href="">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_right_10 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/facebook-white.svg"
											/>
										</a>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a href="">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_right_10 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/twitter-white.svg"
											/>
										</a>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a href="">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_right_10 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/linkedin-white.svg"
											/>
										</a>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_left">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<a href="">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_right_10 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/pinterest-white.svg"
											/>
										</a>
									</div>
								</div>
							</div>
						</div>

						<div
							style={{ color: '#ffffff' }}
							className="nd_options_grid_6 nd_options_text_align_right nd_options_text_align_center_responsive nd_options_padding_top_0_responsive nd_options_padding_botttom_10 nd_options_padding_top_10"
						>
							<div
								id="nd_options_navigation_top_header_2_right"
								className="nd_options_navigation_top_header_2 nd_options_display_inline_block_responsive"
							>
								<div className="  nd_options_display_table nd_options_float_right">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<Link to="/sign-in">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_left_20 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/login-white.svg"
											/>
										</Link>
									</div>

									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<Link
											style={{ color: ' #fff' }}
											className="nd_options_margin_left_10"
											to="/sign-in"
										>
											REGISTER
										</Link>
									</div>
								</div>

								<div className="  nd_options_display_table nd_options_float_right">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<Link to="/sign-in">
											<img
												alt=""
												width="15"
												height="15"
												className="nd_options_margin_left_20 nd_options_float_left"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/customizer/shortcodes/top-header/img/user-white.svg"
											/>
										</Link>
									</div>

									<div className="nd_options_display_table_cell nd_options_vertical_align_middle    ">
										<Link
											style={{ color: ' #fff' }}
											className="nd_options_margin_left_10"
											to="/sign-in"
										>
											LOGIN
										</Link>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				id="nd_options_navigation_2_container"
				className="nd_options_section nd_options_position_relative "
			>
				<div
					style={{
						backgroundColor: '#ffffff',
						borderBottom: ' 1px solid #f1f1f1',
					}}
					className="nd_options_section"
				>
					<div className="nd_options_container nd_options_clearfix nd_options_position_relative">
						<div className="nd_options_grid_12 nd_options_display_none_all_responsive">
							<div
								style={{ height: '10px' }}
								className="nd_options_section"
							></div>

							<Link to="/">
								<img
									style={{ top: '24px' }}
									alt=""
									className="nd_options_position_absolute nd_options_left_15"
									width="170"
									src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/logo-university.png"
								/>
							</Link>

							<div className="nd_options_navigation_2 nd_options_navigation_type nd_options_text_align_right nd_options_float_right nd_options_display_none_all_responsive">
								<div className="nd_options_display_table">
									<div className="nd_options_display_table_cell nd_options_vertical_align_middle">
										<div className="menu-main-menu-container">
											<ul id="menu-main-menu-1" className="menu">
												<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-204 current_page_item current-menu-ancestor current-menu-parent current_page_parent current_page_ancestor menu-item-has-children menu-item-864">
													<Link to="/" aria-current="page">
														HOME
													</Link>
													<SubMenu
														items={[
															{ to: '/home1', label: 'Home 1' },
															{ to: '/home2', label: 'Home 2' },
															{ to: '/home3', label: 'Home 3' },
														]}
													/>
												</li>
												<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-799">
													<Link to="/" aria-current="page">
														COURSES
													</Link>
													<SubMenu
														items={[
															{ to: '/home1', label: 'Search' },
															{
																to: '/home2',
																label: 'Single Course',
																childrens: [
																	{
																		to: '/',
																		label: 'Free Course',
																	},
																	{
																		to: '/',
																		label: 'Paid Course',
																	},
																	{
																		to: '/',
																		label: 'Completed Course',
																	},
																],
															},
															{ to: '/home3', label: 'Online Course' },
															{ to: '/home3', label: 'Online Course' },
														]}
													/>
												</li>
												<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-807">
													<Link to="/">TEACHERS</Link>
												</li>
												<li className="menu-item menu-item-type-custom menu-item-object-custom menu-item-has-children menu-item-1142">
													<Link to="#">SHOP</Link>
												</li>
												<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-803">
													<Link to="/">PAGES</Link>
												</li>
												<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-has-children menu-item-814">
													<Link to="/">BLOG</Link>
												</li>
												<li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-806">
													<a to="/">CONTACT</a>
												</li>
											</ul>
										</div>
									</div>

									<div className="nd_options_display_table_cell nd_options_vertical_align_middle">
										<Link
											className="nd_options_navigation_open_search_content nd_options_margin_left_20 nd_options_float_left"
											to="#"
										>
											<img
												alt=""
												className=" nd_options_float_left nd_options_opacity_05_hover nd_options_transition_all_08_ease"
												width="25"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/icon-search-grey.png"
											/>
										</Link>
									</div>
								</div>
							</div>

							<div
								style={{ height: '10px' }}
								className="nd_options_section"
							></div>
						</div>

						<div className="nd_options_section nd_options_text_align_center nd_options_display_none nd_options_display_block_responsive">
							<div className="nd_options_section nd_options_height_20"></div>

							<Link className="nd_options_display_inline_block" to="/">
								<img
									alt=""
									className="nd_options_float_left"
									width="170"
									src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/logo-university.png"
								/>
							</Link>

							<div className="nd_options_section nd_options_height_10"></div>

							<div className="nd_options_section">
								<Link
									className="nd_options_open_navigation_2_sidebar_content nd_options_open_navigation_2_sidebar_content"
									href="#"
								>
									<img
										alt=""
										className=""
										width="25"
										src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/icon-menu-grey.png"
									/>
								</Link>
							</div>

							<div className="nd_options_section nd_options_height_20"></div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
