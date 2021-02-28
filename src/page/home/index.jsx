import React, { useEffect } from "react";
import "./styles.css";
import FirstBanner from "../../assets/images/1-banner.jpg";
import SecondBanner from "../../assets/images/1-banner(19).jpg";
import ThirdBanner from "../../assets/images/mkt-banner.jpg";
export const Home = () => {
	let slideIndex = 1;

	useEffect(() => {
		showSlides(slideIndex);
	}, []);

	function plusSlides(n) {
		showSlides((slideIndex += n));
		console.log("+");
	}

	function currentSlide(n) {
		showSlides((slideIndex = n));
	}

	function showSlides(n) {
		let i;
		let slides = document.getElementsByClassName("mySlides");
		console.log("slide", slides);
		const dots = document.getElementsByClassName("dot");
		if (n > slides.length) {
			slideIndex = 1;
		}
		if (n < 1) {
			slideIndex = slides.length;
		}
		for (i = 0; i < slides.length; i++) {
			slides[i].style.display = "none";
		}
		for (i = 0; i < dots.length; i++) {
			dots[i].className = dots[i].className.replace(" active", "");
		}
		if (slides.length > 0) {
			slides[slideIndex - 1].style.display = "block";
			dots[slideIndex - 1].className += " active";
		}
	}

	return (
		<div className="nd_options_container nd_options_padding_0_15 nd_options_box_sizing_border_box nd_options_clearfix">
			<div
				style={{ float: "left", width: "100%" }}
				id="post-204"
				className="post-204 page type-page status-publish hentry"
			>
				<div>
					<div className="slideshow-container">
						<div className="mySlides fade">
							<img src={FirstBanner} style={{ width: "100%" }} />
						</div>
						<div className="mySlides fade">
							<img src={SecondBanner} style={{ width: "100%" }} />
						</div>
						<div className="mySlides fade">
							<img src={ThirdBanner} style={{ width: "100%" }} />
						</div>
						<a className="prev" onClick={() => plusSlides(-1)}>
							&#10094;
						</a>
						<a className="next" onClick={() => plusSlides(1)}>
							&#10095;
						</a>
					</div>
					<br />
					<div style={{ textAlign: "center" }}>
						<span className="dot" onClick={() => currentSlide(1)}></span>
						<span className="dot" onClick={() => currentSlide(2)}></span>
						<span className="dot" onClick={() => currentSlide(3)}></span>
					</div>
				</div>
			</div>
			<div className="vc_row wpb_row vc_row-fluid vc_custom_1469629169190">
				<div className="wpb_column vc_column_container vc_col-sm-4">
					<div className="vc_column-inner vc_custom_1469629214371">
						<div className="wpb_wrapper">
							<div className="nd_options_section nd_options_position_relative ">
								<a
									rel=""
									href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"
								>
									<img
										alt=""
										className="nd_options_position_absolute nd_options_left_0"
										width="50"
										src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/service-color1.png"
									/>
								</a>
								<div className="nd_options_section nd_options_padding_left_70 nd_options_box_sizing_border_box">
									<a
										rel=""
										href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"
									>
										<h2>
											<strong>Giải thưởng quốc gia</strong>
										</h2>
									</a>
									<div className="nd_options_section nd_options_height_20"></div>
									<p className="">
										Phasellus enim libero, blandit vel sapien vitae, condimentum
										ultricies magna et. Quisque euismod orci ut et lobortis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wpb_column vc_column_container vc_col-sm-4">
					<div className="vc_column-inner vc_custom_1469629232888">
						<div className="wpb_wrapper">
							<div className="nd_options_section nd_options_position_relative ">
								<a
									rel=""
									href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"
								>
									<img
										alt=""
										className="nd_options_position_absolute nd_options_left_0"
										width="50"
										src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/service-color2.png"
									/>
								</a>
								<div className="nd_options_section nd_options_padding_left_70 nd_options_box_sizing_border_box">
									<a
										rel=""
										href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"
									>
										<h2>
											<strong>Giáo viên xuất xắc nhất</strong>
										</h2>
									</a>
									<div className="nd_options_section nd_options_height_20"></div>
									<p className="">
										Phasellus enim libero, blandit vel sapien vitae, condimentum
										ultricies magna et. Quisque euismod orci ut et lobortis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wpb_column vc_column_container vc_col-sm-4">
					<div className="vc_column-inner vc_custom_1469629252362">
						<div className="wpb_wrapper">
							<div className="nd_options_section nd_options_position_relative ">
								<a
									rel=""
									href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"
								>
									<img
										alt=""
										className="nd_options_position_absolute nd_options_left_0"
										width="50"
										src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/service-color3.png"
									/>
								</a>
								<div className="nd_options_section nd_options_padding_left_70 nd_options_box_sizing_border_box">
									<a
										rel=""
										href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/services/"
									>
										<h2>
											<strong>Các khóa học</strong>
										</h2>
									</a>
									<div className="nd_options_section nd_options_height_20"></div>
									<p className="">
										Phasellus enim libero, blandit vel sapien vitae, condimentum
										ultricies magna et. Quisque euismod orci ut et lobortis.
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="vc_row wpb_row vc_row-fluid vc_custom_1469629191724">
				<div className="wpb_column vc_column_container vc_col-sm-5">
					<div className="vc_column-inner vc_custom_1469629019670">
						<div className="wpb_wrapper">
							<div className=" nd_learning_section">
								<div className="nd_learning_section nd_learning_bg_white nd_learning_border_1_solid_grey">
									<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_bottom_1_solid_grey nd_learning_text_align_center">
										<h6
											style={{
												backgroundColor: "#90cbde",
											}}
											className="nd_options_second_font nd_learning_padding_5 nd_learning_border_radius_3 nd_learning_color_white_important nd_learning_display_inline_block"
										>
											7 khóa học
										</h6>
										<div className="nd_learning_section nd_learning_height_5"></div>
										<h1 className="">
											<strong>Tìm kiếm ngay</strong>
										</h1>
									</div>

									<div className="nd_learning_section nd_learning_padding_20_25 nd_learning_box_sizing_border_box">
										<form
											className=""
											action="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/"
											method="GET"
										>
											<input
												type="hidden"
												value="true"
												name="nd_learning_arrive_from_advsearch"
											/>

											<div
												id="nd_learning_search_components_tax_0"
												className=" nd_learning_width_100_percentage_all_iphone nd_learning_display_none nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box"
											>
												<select className="nd_learning_section" name="post_tag">
													<option value="">All Tags</option>
													<option value="biology">Biology</option>
													<option value="campus">Campus</option>
													<option value="className">className</option>
													<option value="courses">Courses</option>
													<option value="history">History</option>
													<option value="students">Students</option>
													<option value="university">University</option>
												</select>
											</div>

											<div
												id="nd_learning_search_components_tax_1"
												className=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box"
											>
												<select
													className="nd_learning_section"
													name="difficulty-level-course"
												>
													<option value="">Cấp độ</option>
													<option value="beginner">Beginner</option>
													<option value="expert">Expert</option>
													<option value="intermediate">Intermediate</option>
												</select>
											</div>

											<div
												id="nd_learning_search_components_tax_2"
												className=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box"
											>
												<select
													className="nd_learning_section"
													name="category-course"
												>
													<option value="">Môn học</option>
													<option value="art">Mỹ thuật</option>
													<option value="english">Tiếng Anh</option>
													<option value="geometry">Địa lý</option>
													<option value="history">Lịch Sử</option>
													<option value="mathematics">Toán Học</option>
												</select>
											</div>

											<div
												id="nd_learning_search_components_tax_3"
												className=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box"
											>
												<select
													className="nd_learning_section"
													name="location-course"
												>
													<option value="">Địa chỉ</option>
													<option value="headquarter">Trụ sở chính</option>
													<option value="school-branch">Trụ sở phụ</option>
												</select>
											</div>

											<div
												id="nd_learning_search_components_tax_4"
												className=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box"
											>
												<select
													className="nd_learning_section"
													name="typology-course"
												>
													<option value="">Phân loại</option>
													<option value="free">Miễn phí</option>
													<option value="premium">Trả phí</option>
												</select>
											</div>

											<div
												id="nd_learning_search_components_tax_5"
												className=" nd_learning_width_100_percentage_all_iphone  nd_learning_width_100_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box"
											>
												<select
													className="nd_learning_section"
													name="duration-course"
												>
													<option value="">Thời gian</option>
													<option value="1-day">1 Ngày</option>
													<option value="1-week">1 Tuần</option>
													<option value="2-days">2 Tuần</option>
													{/* <option value="8-hours">8 giờ</option> */}
												</select>
											</div>

											<div className="nd_learning_width_100_percentage nd_learning_float_left nd_learning_width_100_percentage_all_iphone nd_learning_padding_15 nd_learning_box_sizing_border_box">
												<input
													className="nd_learning_section"
													type="submit"
													value="Tìm kiếm"
												/>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="wpb_column vc_column_container vc_col-sm-7">
					<div className="vc_column-inner vc_custom_1469628682720">
						<div className="wpb_wrapper">
							<div className="nd_learning_section nd_learning_masonry_content  ">
								<div className=" nd_learning_width_50_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">
									<div className="nd_learning_section nd_learning_position_relative">
										<img
											alt=""
											className="nd_learning_section"
											src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course1-501-350x465.png"
										/>

										<div className="nd_learning_bg_greydark_alpha_5 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_30 nd_learning_box_sizing_border_box">
											<a
												style={{ backgroundColor: "#90cbde" }}
												className="nd_learning_position_absolute nd_learning_top_20 nd_learning_right_20 nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/"
											>
												Miễn phí
											</a>

											<div className="nd_learning_display_table nd_learning_width_100_percentage nd_learning_height_100_percentage nd_learning_text_align_center">
												<div className="nd_learning_display_table_cell nd_learning_vertical_align_middle">
													<h2 className="nd_learning_color_white_important">
														<a
															className="nd_learning_color_white_important nd_options_first_font"
															href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/"
														>
															<strong>Triết học</strong>
														</a>
													</h2>
													<div className="nd_learning_section nd_learning_height_10"></div>
													<div className="nd_learning_section ">
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-half-white.svg"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=" nd_learning_width_50_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">
									<div className="nd_learning_section nd_learning_position_relative">
										<img
											alt=""
											className="nd_learning_section"
											src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course8-350x465.jpg"
										/>

										<div className="nd_learning_bg_greydark_alpha_5 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_30 nd_learning_box_sizing_border_box">
											<a
												style={{ backgroundColor: "#90cbde" }}
												className="nd_learning_position_absolute nd_learning_top_20 nd_learning_right_20 nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/"
											>
												Miễn phí
											</a>

											<div className="nd_learning_display_table nd_learning_width_100_percentage nd_learning_height_100_percentage nd_learning_text_align_center">
												<div className="nd_learning_display_table_cell nd_learning_vertical_align_middle">
													<h2 className="nd_learning_color_white_important">
														<a
															className="nd_learning_color_white_important nd_options_first_font"
															href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/"
														>
															<strong>Mỹ thuật</strong>
														</a>
													</h2>
													<div className="nd_learning_section nd_learning_height_10"></div>
													<div className="nd_learning_section ">
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-full-white.svg"
														/>
														<img
															alt=""
															style={{ margin: "2px" }}
															width="15"
															height="15"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-star-half-white.svg"
														/>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div
				data-vc-full-width="true"
				data-vc-full-width-init="false"
				data-vc-parallax="1.5"
				data-vc-parallax-image="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/parallax2.jpg"
				className="vc_row wpb_row vc_row-fluid nd_options_vc_parallax_filter_2_2 vc_custom_1472477356923 vc_row-has-fill vc_general vc_parallax vc_parallax-content-moving"
			>
				<div className="wpb_column vc_column_container vc_col-sm-12">
					<div className="vc_column-inner ">
						<div className="wpb_wrapper">
							<h2
								style={{
									color: "#ffffff",
									fontSize: "50px",
									lineHeight: "50px",
									fontWeight: "bold",
								}}
								className=" nd_options_first_font "
							>
								Các khóa học
							</h2>
							<div style={{ height: "10px" }} className="nicdark_section"></div>
							<h3
								style={{
									color: "#ffffff",
									fontSize: "20px",
									lineHeight: "20px",
									fontWeight: "normal",
								}}
								className=" nd_options_first_font "
							></h3>
							<div className="vc_row wpb_row vc_inner vc_row-fluid vc_custom_1469544575976 vc_row-has-fill">
								<div className="wpb_column vc_column_container vc_col-sm-12">
									<div className="vc_column-inner vc_custom_1469544701778">
										<div className="wpb_wrapper">
											<div className="nd_learning_section nd_learning_masonry_content  ">
												<div className=" nd_learning_width_33_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">
													<div className="nd_learning_section">
														<div className="nd_learning_section nd_learning_border_1_solid_grey">
															<div className="nd_learning_section nd_learning_position_relative">
																<img
																	className="nd_learning_section"
																	alt=""
																	src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course1-501-740x416.png"
																/>

																<div className="nd_learning_bg_greydark_alpha_gradient_4 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_20 nd_learning_box_sizing_border_box">
																	<div className="nd_learning_position_absolute nd_learning_right_20 nd_learning_top_20">
																		<div className="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
																			<a
																				title="MAKE THE LOGIN FOR BOOKMARK"
																				href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
																				className="nd_learning_tooltip_jquery nd_learning_margin_right_20 nd_learning_cursor_pointer nd_learning_display_inline_block  nd_learning_text_decoration_none"
																			>
																				<img
																					alt=""
																					width="20"
																					height="20"
																					src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-heart-empty-white.svg"
																				/>
																			</a>
																		</div>

																		<div className="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
																			<a
																				title="MAKE THE LOGIN FOR COMPARE"
																				href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
																				className="nd_learning_tooltip_jquery nd_learning_cursor_pointer  nd_learning_display_inline_block nd_learning_text_decoration_none  "
																			>
																				<img
																					alt=""
																					width="20"
																					height="20"
																					src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-compare-empty-white.svg"
																				/>
																			</a>
																		</div>
																	</div>
																</div>
															</div>

															<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_white">
																<h3>
																	<a
																		className="nd_options_color_greydark nd_options_first_font"
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/"
																	>
																		Triết học
																	</a>
																</h3>
																<div className="nd_learning_section nd_learning_height_20"></div>
																<p>
																	<a
																		className=""
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/"
																	>
																		Lorem ipsum dolor sit amet, consectetur
																		adipiscing elit. Aenean egestas magna at
																		porttitor vehicula. Nullam augue augue.
																	</a>
																</p>
															</div>

															<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_top_1_solid_grey">
																<div className="nd_learning_width_50_percentage nd_learning_display_none_all_iphone nd_learning_float_left">
																	<div className="nd_learning_display_table nd_learning_float_left">
																		<img
																			alt=""
																			className="nd_learning_margin_right_10 nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_border_radius_100_percentage"
																			width="30"
																			src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/avatar-5.jpg"
																		/>
																		<p className="nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_font_size_15">
																			<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/kaylin-moore/">
																				Kaylin
																			</a>
																		</p>
																	</div>
																</div>

																<div className="nd_learning_width_50_percentage nd_learning_width_100_percentage_all_iphone nd_learning_float_left nd_learning_text_align_right">
																	<a
																		style={{ backgroundColor: "#90cbde" }}
																		className="nd_learning_width_100_percentage_all_iphone nd_learning_box_sizing_border_box nd_learning_text_align_center_all_iphone nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/philosophy/"
																	>
																		Đọc thêm
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className=" nd_learning_width_33_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">
													<div className="nd_learning_section">
														<div className="nd_learning_section nd_learning_border_1_solid_grey">
															<div className="nd_learning_section nd_learning_position_relative">
																<img
																	className="nd_learning_section"
																	alt=""
																	src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/06/course8-740x416.jpg"
																/>

																<div className="nd_learning_bg_greydark_alpha_gradient_4 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_20 nd_learning_box_sizing_border_box">
																	<div className="nd_learning_position_absolute nd_learning_right_20 nd_learning_top_20">
																		<div className="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
																			<a
																				title="MAKE THE LOGIN FOR BOOKMARK"
																				href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
																				className="nd_learning_tooltip_jquery nd_learning_margin_right_20 nd_learning_cursor_pointer nd_learning_display_inline_block  nd_learning_text_decoration_none"
																			>
																				<img
																					alt=""
																					width="20"
																					height="20"
																					src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-heart-empty-white.svg"
																				/>
																			</a>
																		</div>

																		<div className="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
																			<a
																				title="MAKE THE LOGIN FOR COMPARE"
																				href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
																				className="nd_learning_tooltip_jquery nd_learning_cursor_pointer  nd_learning_display_inline_block nd_learning_text_decoration_none  "
																			>
																				<img
																					alt=""
																					width="20"
																					height="20"
																					src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-compare-empty-white.svg"
																				/>
																			</a>
																		</div>
																	</div>
																</div>
															</div>

															<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_white">
																<h3>
																	<a
																		className="nd_options_color_greydark nd_options_first_font"
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/"
																	>
																		Mỹ thuật
																	</a>
																</h3>
																<div className="nd_learning_section nd_learning_height_20"></div>
																<p>
																	<a
																		className=""
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/"
																	>
																		Lorem ipsum dolor sit amet, consectetur
																		adipiscing elit. Aenean egestas magna at
																		porttitor vehicula. Nullam augue augue.
																	</a>
																</p>
															</div>

															<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_top_1_solid_grey">
																<div className="nd_learning_width_50_percentage nd_learning_display_none_all_iphone nd_learning_float_left">
																	<div className="nd_learning_display_table nd_learning_float_left">
																		<img
																			alt=""
																			className="nd_learning_margin_right_10 nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_border_radius_100_percentage"
																			width="30"
																			src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/avatar-2.jpg"
																		/>
																		<p className="nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_font_size_15">
																			<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/andy-jones/">
																				Andy
																			</a>
																		</p>
																	</div>
																</div>

																<div className="nd_learning_width_50_percentage nd_learning_width_100_percentage_all_iphone nd_learning_float_left nd_learning_text_align_right">
																	<a
																		style={{ backgroundColor: "#90cbde" }}
																		className="nd_learning_width_100_percentage_all_iphone nd_learning_box_sizing_border_box nd_learning_text_align_center_all_iphone nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/contemporary-art/"
																	>
																		Đọc thêm
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>

												<div className=" nd_learning_width_33_percentage nd_learning_float_left nd_learning_padding_15 nd_learning_box_sizing_border_box nd_learning_masonry_item nd_learning_width_100_percentage_responsive">
													<div className="nd_learning_section">
														<div className="nd_learning_section nd_learning_border_1_solid_grey">
															<div className="nd_learning_section nd_learning_position_relative">
																<img
																	className="nd_learning_section"
																	alt=""
																	src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/09/course3-2-740x416.jpg"
																/>

																<div className="nd_learning_bg_greydark_alpha_gradient_4 nd_learning_position_absolute nd_learning_left_0 nd_learning_height_100_percentage nd_learning_width_100_percentage nd_learning_padding_20 nd_learning_box_sizing_border_box">
																	<div className="nd_learning_position_absolute nd_learning_right_20 nd_learning_top_20">
																		<div className="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
																			<a
																				title="MAKE THE LOGIN FOR BOOKMARK"
																				href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
																				className="nd_learning_tooltip_jquery nd_learning_margin_right_20 nd_learning_cursor_pointer nd_learning_display_inline_block  nd_learning_text_decoration_none"
																			>
																				<img
																					alt=""
																					width="20"
																					height="20"
																					src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-heart-empty-white.svg"
																				/>
																			</a>
																		</div>

																		<div className="nd_learning_display_inline_block nd_learning_display_none_all_iphone">
																			<a
																				title="MAKE THE LOGIN FOR COMPARE"
																				href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/learning-account/"
																				className="nd_learning_tooltip_jquery nd_learning_cursor_pointer  nd_learning_display_inline_block nd_learning_text_decoration_none  "
																			>
																				<img
																					alt=""
																					width="20"
																					height="20"
																					src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-learning/assets/img/icons/icon-compare-empty-white.svg"
																				/>
																			</a>
																		</div>
																	</div>
																</div>
															</div>
															<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_white">
																<h3>
																	<a
																		className="nd_options_color_greydark nd_options_first_font"
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/geometry-course/"
																	>
																		Địa lý
																	</a>
																</h3>
																<div className="nd_learning_section nd_learning_height_20"></div>
																<p>
																	<a
																		className=""
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/geometry-course/"
																	>
																		Lorem ipsum dolor sit amet, consectetur
																		adipiscing elit. Aenean egestas magna at
																		porttitor vehicula. Nullam augue augue.
																	</a>
																</p>
															</div>

															<div className="nd_learning_section nd_learning_padding_20 nd_learning_box_sizing_border_box nd_learning_bg_grey nd_learning_border_top_1_solid_grey">
																<div className="nd_learning_width_50_percentage nd_learning_display_none_all_iphone nd_learning_float_left">
																	<div className="nd_learning_display_table nd_learning_float_left">
																		<img
																			alt=""
																			className="nd_learning_margin_right_10 nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_border_radius_100_percentage"
																			width="30"
																			src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/avatar-7.jpg"
																		/>
																		<p className="nd_learning_display_table_cell nd_learning_vertical_align_middle nd_learning_font_size_15">
																			<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/teachers/john-brown/">
																				John
																			</a>
																		</p>
																	</div>
																</div>

																<div className="nd_learning_width_50_percentage nd_learning_width_100_percentage_all_iphone nd_learning_float_left nd_learning_text_align_right">
																	<a
																		style={{ backgroundColor: "#90cbde" }}
																		className="nd_learning_width_100_percentage_all_iphone nd_learning_box_sizing_border_box nd_learning_text_align_center_all_iphone nd_learning_display_inline_block nd_learning_color_white_important nd_options_first_font nd_learning_padding_8 nd_learning_border_radius_3 nd_learning_font_size_13"
																		href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/courses/geometry-course/"
																	>
																		Đọc thêm
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="vc_row-full-width vc_clearfix"></div>
				<div className="vc_row wpb_row vc_row-fluid vc_custom_1467358718647">
					<div className="wpb_column vc_column_container vc_col-sm-12">
						<div className="vc_column-inner ">
							<div className="wpb_wrapper">
								{" "}
								<h2
									style={{
										color: "#727475",
										fontSize: "50px",
										lineHeight: "50px",
										fontWeight: "bold",
									}}
									className=" nd_options_first_font "
								>
									{/* Our Teachers */}
								</h2>{" "}
								<div
									style={{ height: "10px" }}
									className="nicdark_section"
								></div>{" "}
								<h3
									style={{
										color: "#a3a3a3",
										fontSize: "20px",
										lineHeight: "20px",
										fontWeight: "normal",
									}}
									className=" nd_options_first_font "
								>
									{/* Best Chef In Our School */}
								</h3>{" "}
								<div
									style={{ height: "30px" }}
									className="nicdark_section"
								></div>
							</div>
						</div>
					</div>
				</div>
				<div className="vc_row wpb_row vc_row-fluid">
					<div className="wpb_column vc_column_container vc_col-sm-12">
						<div className="vc_column-inner vc_custom_1469541557182">
							<div className="wpb_wrapper"></div>
						</div>
					</div>
				</div>
			</div>
			{/* <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} className=" nd_options_font_weight_bolder nd_options_counter  " data-to="15" data-speed="1000">15</h1>
        <div style="background-color:; height: 20px;" className="nicdark_section">
          </div>
           <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" className=" nd_options_second_font ">TEACHERS</p> 
          </div></div></div ><div className="wpb_column vc_column_container vc_col-sm-3"><div className="vc_column-inner vc_custom_1469542699216"><div className="wpb_wrapper">
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} className=" nd_options_font_weight_bolder nd_options_counter  " data-to="100" data-speed="1000">100</h1><div style="background-color:; height: 20px;" className="nicdark_section"></div> <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" className=" nd_options_second_font ">CUSTOMERS</p> </div></div></div><div className="wpb_column vc_column_container vc_col-sm-3"><div className="vc_column-inner vc_custom_1469542716372"><div className="wpb_wrapper">
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} className=" nd_options_font_weight_bolder nd_options_counter  " data-to="47" data-speed="1000">47</h1><div style="background-color:; height: 20px;" className="nicdark_section"></div> <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" className=" nd_options_second_font ">COURSES</p> </div></div></div><div className="wpb_column vc_column_container vc_col-sm-3"><div className="vc_column-inner vc_custom_1469542732403"><div className="wpb_wrapper">
        <h1 style={{ textAlign: 'center', color: '#ffffff', fontSize: '50px' }} className=" nd_options_font_weight_bolder nd_options_counter  " data-to="97" data-speed="1000">97</h1><div style="background-color:; height: 20px;" className="nicdark_section"></div> <p style="color:#ffffff; text-align:center; font-size:16px; line-height:30px; font-weight:normal;" className=" nd_options_second_font ">YEARS OF EXPERIENCE</p> </div></div></div></div ><div className="vc_row-full-width vc_clearfix"></div><div className="vc_row wpb_row vc_row-fluid vc_custom_1467358433878"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner "><div className="wpb_wrapper"> <h2 style="color:#727475; text-align:; font-size:50px; line-height:50px; font-weight:bold;" className=" nd_options_first_font ">Our Blog</h2> <div style="background-color:; height: 10px;" className="nicdark_section"></div> <h3 style="color:#a3a3a3; text-align:; font-size:20px; line-height:20px; font-weight:normal;" className=" nd_options_first_font ">Follow Our News</h3> </div></div></div></div><div className="vc_row wpb_row vc_row-fluid vc_custom_1467280961639"><div className="wpb_column vc_column_container vc_col-sm-12"><div className="vc_column-inner vc_custom_1469541591315"><div className="wpb_wrapper">
       */}
			<div className="vc_row-full-width vc_clearfix"></div>
			{/* <div className="vc_row wpb_row vc_row-fluid vc_custom_1467358433878">
				<div className="wpb_column vc_column_container vc_col-sm-12">
					<div className="vc_column-inner ">
						<div className="wpb_wrapper">
							<h2
								style={{
									color: "#727475",
									fontSize: "50px",
									lineHeight: "50px",
									fontWeight: "bold",
								}}
								className=" nd_options_first_font "
							>
								Our Blog
							</h2>
							<div style={{ height: "10px" }} className="nicdark_section"></div>
							<h3
								style={{
									color: "#a3a3a3",
									fontSize: "20px",
									lineHeight: "20px",
									fontWeight: "normal",
								}}
								className=" nd_options_first_font "
							>
								Follow Our News
							</h3>
						</div>
					</div>
				</div>
			</div> */}
			{/* <div className="vc_row wpb_row vc_row-fluid vc_custom_1467280961639">
				<div className="wpb_column vc_column_container vc_col-sm-12">
					<div className="vc_column-inner vc_custom_1469541591315">
						<div className="wpb_wrapper">
							<div className="nd_options_section nd_options_masonry_content  ">
								<div className=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
									<div className="nd_options_section nd_options_border_1_solid_grey">
										<div className="nd_options_section nd_options_position_relative">
											<div className="nd_options_section nd_options_position_relative">
												<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">
													<img
														alt=""
														className="nd_options_section"
														src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/course2.jpg"
													/>
												</a>
												<div className="nd_options_bg_greydark_alpha nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box"></div>
												<a
													className="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_border_1_solid_white nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
													href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/"
												>
													News
												</a>
											</div>
										</div>

										<div className="nd_options_section nd_options_padding_30 nd_options_box_sizing_border_box">
											<h5 className="nd_options_margin_0_important nd_options_padding_0 nd_options_second_font nd_options_color_grey">
												June 1
											</h5>
											<div className="nd_options_section nd_options_height_10"></div>
											<h2 className="nd_options_margin_0_important nd_options_padding_0 ">
												New Website
											</h2>
											<div className="nd_options_section nd_options_height_20"></div>
											<p className="nd_options_margin_0_important nd_options_padding_0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
												Aenean egestas magna at porttitor vehicula nullam augue.
											</p>
											<div className="nd_options_section nd_options_height_20"></div>
											<a
												style={{ backgroundColor: "#174873" }}
												className="nd_options_display_inline_block nd_options_line_height_16 nd_options_text_align_center nd_options_box_sizing_border_box  nd_options_color_white nd_options_first_font nd_options_padding_10_20 nd_options_border_radius_3 "
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/"
											>
												Đọc thêm
											</a>
										</div>

										<div className="nd_options_section nd_options_padding_20_30 nd_options_box_sizing_border_box nd_options_border_top_1_solid_grey">
											<div className="nd_options_width_50_percentage nd_options_width_100_percentage_all_iphone nd_options_float_left">
												<div className="nd_options_display_table nd_options_float_left">
													<img
														alt=""
														className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle nd_options_border_radius_100_percentage"
														width="25"
														height="25"
														src="http://2.gravatar.com/avatar/240d164d512e70622cfed37027775e77?s=96&d=mm&r=g"
													/>
													<p className="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
														<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">
															giulsi
														</a>
													</p>
												</div>
											</div>

											<div className="nd_options_width_50_percentage nd_options_display_none_all_iphone nd_options_float_left">
												<div className="nd_options_display_table nd_options_float_left">
													<img
														alt=""
														className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle "
														width="23"
														height="23"
														src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-grey.svg"
													/>
													<p className="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
														<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/new-website/">
															1 Comments
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
									<div
										style={{ backgroundColor: "#90cbde" }}
										className="nd_options_section nd_options_text_align_center nd_options_padding_50 nd_options_box_sizing_border_box"
									>
										<h2 className="nd_options_color_white nd_options_line_height_35">
											<a
												className="nd_options_color_white nd_options_first_font"
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/quote-post/"
											>
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.
											</a>
										</h2>

										<div className="nd_options_section nd_options_height_20"></div>

										<div className="nd_options_display_inline_block">
											<div className="nd_options_display_table nd_options_float_left">
												<img
													alt=""
													className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle"
													width="30"
													height="30"
													src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-quote-alpha.svg"
												/>
												<p className="nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle">
													John Doe
												</p>
											</div>
										</div>
									</div>
								</div>

								<div className=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
									<div className="nd_options_section nd_options_position_relative">
										<div className="nd_options_section nd_options_position_relative">
											<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-students/">
												<img
													alt=""
													className="nd_options_section"
													src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/blog3.jpg"
												/>
											</a>

											<a
												style={{ backgroundColor: "#174873" }}
												className="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-students/"
											>
												News
											</a>

											<div className="nd_options_bg_greydark_alpha_gradient_3 nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box">
												<div className="nd_options_position_absolute nd_options_bottom_30">
													<h2 className="nd_options_color_white">
														<a
															className="nd_options_color_white nd_options_first_font"
															href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-students/"
														>
															Our Students
														</a>
													</h2>
													<div className="nd_options_section nd_options_height_10"></div>
													<div className="nd_options_display_table nd_options_float_left">
														<img
															alt=""
															className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle"
															width="20"
															height="20"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-calendar-white.svg"
														/>
														<p className=" nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
															June 3
														</p>
														<img
															alt=""
															className="nd_options_margin_right_10 nd_options_margin_left_20 nd_options_display_table_cell nd_options_vertical_align_middle"
															width="20"
															height="20"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-white.svg"
														/>
														<p className="nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
															1 Comments
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
									<div className="nd_options_section nd_options_border_1_solid_grey">
										<div className="nd_options_section nd_options_position_relative">
											<div className="nd_options_section nd_options_position_relative">
												<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">
													<img
														alt=""
														className="nd_options_section"
														src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/blog2.jpg"
													/>
												</a>
												<div className="nd_options_bg_greydark_alpha nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box"></div>
												<a
													className="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_border_1_solid_white nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
													href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/"
												>
													News
												</a>
											</div>
										</div>

										<div className="nd_options_section nd_options_padding_30 nd_options_box_sizing_border_box">
											<h5 className="nd_options_margin_0_important nd_options_padding_0 nd_options_second_font nd_options_color_grey">
												June 4
											</h5>
											<div className="nd_options_section nd_options_height_10"></div>
											<h2 className="nd_options_margin_0_important nd_options_padding_0 ">
												Course Registration
											</h2>
											<div className="nd_options_section nd_options_height_20"></div>
											<p className="nd_options_margin_0_important nd_options_padding_0">
												Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
											</p>
											<div className="nd_options_section nd_options_height_20"></div>
											<a
												style={{ backgroundColor: "#174873" }}
												className="nd_options_display_inline_block nd_options_line_height_16 nd_options_text_align_center nd_options_box_sizing_border_box  nd_options_color_white nd_options_first_font nd_options_padding_10_20 nd_options_border_radius_3 "
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/"
											>
												Đọc thêm
											</a>
										</div>

										<div className="nd_options_section nd_options_padding_20_30 nd_options_box_sizing_border_box nd_options_border_top_1_solid_grey">
											<div className="nd_options_width_50_percentage nd_options_width_100_percentage_all_iphone nd_options_float_left">
												<div className="nd_options_display_table nd_options_float_left">
													<img
														alt=""
														className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle nd_options_border_radius_100_percentage"
														width="25"
														height="25"
														src="http://2.gravatar.com/avatar/240d164d512e70622cfed37027775e77?s=96&d=mm&r=g"
													/>
													<p className="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
														<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">
															giulsi
														</a>
													</p>
												</div>
											</div>

											<div className="nd_options_width_50_percentage nd_options_display_none_all_iphone nd_options_float_left">
												<div className="nd_options_display_table nd_options_float_left">
													<img
														alt=""
														className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle "
														width="23"
														height="23"
														src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-grey.svg"
													/>
													<p className="nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_15">
														<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/course-registration/">
															1 Comments
														</a>
													</p>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
									<div className="nd_options_section nd_options_position_relative">
										<div className="nd_options_section nd_options_position_relative">
											<a href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/">
												<img
													alt=""
													className="nd_options_section"
													src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/uploads/sites/3/2016/08/blog-vert-1.jpg"
												/>
											</a>

											<a
												style={{ backgroundColor: "#174873" }}
												className="nd_options_position_absolute nd_options_right_20 nd_options_top_20 nd_options_display_inline_block nd_options_color_white nd_options_first_font nd_options_padding_8 nd_options_border_radius_3 nd_options_font_size_13 nd_options_z_index_9 nd_options_text_transform_uppercase"
												href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/"
											>
												News
											</a>

											<div className="nd_options_bg_greydark_alpha_gradient_3 nd_options_position_absolute nd_options_left_0 nd_options_height_100_percentage nd_options_width_100_percentage nd_options_padding_30 nd_options_box_sizing_border_box">
												<div className="nd_options_position_absolute nd_options_bottom_30">
													<h2 className="nd_options_color_white">
														<a
															className="nd_options_color_white nd_options_first_font"
															href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/our-library/"
														>
															Our Library
														</a>
													</h2>
													<div className="nd_options_section nd_options_height_10"></div>
													<div className="nd_options_display_table nd_options_float_left">
														<img
															alt=""
															className="nd_options_margin_right_10 nd_options_display_table_cell nd_options_vertical_align_middle"
															width="20"
															height="20"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-calendar-white.svg"
														/>
														<p className=" nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
															June 5
														</p>
														<img
															alt=""
															className="nd_options_margin_right_10 nd_options_margin_left_20 nd_options_display_table_cell nd_options_vertical_align_middle"
															width="20"
															height="20"
															src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-comment-white.svg"
														/>
														<p className="nd_options_color_white nd_options_display_table_cell nd_options_vertical_align_middle nd_options_font_size_13">
															1 Comments
														</p>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>

								<div className=" nd_options_width_33_percentage nd_options_float_left nd_options_padding_15 nd_options_box_sizing_border_box nd_options_masonry_item nd_options_width_100_percentage_responsive">
									<div
										style={{ backgroundColor: "#174873" }}
										className="nd_options_section nd_options_text_align_center nd_options_padding_50 nd_options_box_sizing_border_box"
									>
										<div className="nd_options_display_inline_block">
											<img
												alt=""
												className="nd_options_margin_right_10"
												width="20"
												height="20"
												src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/img/icons/icon-link-white.svg"
											/>
											<h2 className="nd_options_color_white nd_options_line_height_35 nd_options_display_inline_block">
												<span className="nd_options_padding_botttom_5">
													<a
														className="nd_options_color_white nd_options_first_font"
														href="http://www.nicdarkthemes.com/themes/education/wp/demo/university/2016/06/06/check-new-events/"
													>
														Check New Events
													</a>
												</span>
											</h2>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div> */}
		</div>
	);
};
