import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import "./styles.css";
import ExampleImage from "../../../assets/images/527x275(5).jpg";
import { TechnologyDetails } from "../technology/technology-details/index";
export const Technology = () => {
	return (
		<Router>
			<div className="nicdark_site nicdark_bg_white nicdark_front_page ">
				<Switch>
					<Route path="/sign-in" exact>
						<TechnologyDetails />
					</Route>
				</Switch>
			</div>
			<div>
				<div className="nd_options_section nd_options_bg_grey nd_options_border_bottom_1_solid_grey">
					<div className="nd_options_container nd_options_clearfix">
						<div className="nd_options_section nd_options_padding_15 nd_options_box_sizing_border_box">
							<a href="/">Home</a>{" "}
							<img
								alt=""
								className="nd_options_margin_left_10 nd_options_margin_right_10"
								width="10"
								height="10"
								src="http://www.nicdarkthemes.com/themes/education/wp/demo/university/wp-content/plugins/nd-shortcodes/addons/breadcrumb/img/icon-next-grey.svg"
							/>{" "}
							<span className="nd_learning_current_breadcrumb">Công nghệ</span>
						</div>
					</div>
				</div>
				<div className="container">
					<div className="wrapper">
						<div className="row">
							<div className="col-sm-9">
								<div className="box_module padding">
									<div className="box_content">
										<div className="layout_category_default">
											<div className="item clearfix">
												<div className="image">
													<Link to="/cong-nghe/mot-robot-dang-tu-dat-200-000-don-hang-thang-doan-dung-90-nhu-cau-va-giam-80-ton-kho-ma-hoan-toan-khong-can-con-nguoi-can-thiep.html">
														<img
															src={ExampleImage}
															alt="Một “robot” đang tự đặt 200.000 đơn hàng/tháng, đoán đúng 90% nhu cầu và giảm 80% tồn kho mà hoàn toàn không cần con người can thiệp"
														/>
													</Link>
													{/* <a
														href="/cong-nghe/mot-robot-dang-tu-dat-200-000-don-hang-thang-doan-dung-90-nhu-cau-va-giam-80-ton-kho-ma-hoan-toan-khong-can-con-nguoi-can-thiep.html"
														title="Một “robot” đang tự đặt 200.000 đơn hàng/tháng, đoán đúng 90% nhu cầu và giảm 80% tồn kho mà hoàn toàn không cần con người can thiệp"
													> */}

													{/* </a> */}
												</div>
												<div className="info">
													<h2 className="title">
														<a
															href="/cong-nghe/cong-nghe-chi-tiet"
															title="Một “robot” đang tự đặt 200.000 đơn hàng/tháng, đoán đúng 90% nhu cầu và giảm 80% tồn kho mà hoàn toàn không cần con người can thiệp"
														>
															Một “robot” đang tự đặt 200.000 đơn hàng/tháng,
															đoán đúng 90% nhu cầu và giảm 80% tồn kho mà hoàn
															toàn không cần con người can thiệp
														</a>
													</h2>
													<div className="category">
														<a href="/%alias%" title="Công nghệ">
															Công nghệ
														</a>
														/ <span className="date">17.04.2018</span>
													</div>
													<div className="description hidden-xs">
														Công nghệ 4.0 sẽ chỉ ảnh hưởng tới những lao động
														phổ thông là một định kiến hoàn toàn sai lầm! Một
														công ty Thương mại điện tử tại Đức đang áp dụng trí
														tuệ nhân tạo...
													</div>
												</div>
											</div>
											<div className="item clearfix">
												<div className="image">
													<a
														href="/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html"
														title="Marketing 5P - Chiến lược các marketer cần cân nhắc"
													>
														<img
															src={ExampleImage}
															alt="Marketing 5P - Chiến lược các marketer cần cân nhắc"
														/>
													</a>
												</div>
												<div className="info">
													<h2 className="title">
														<a
															href="/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html"
															title="Marketing 5P - Chiến lược các marketer cần cân nhắc"
														>
															Marketing 5P - Chiến lược các marketer cần cân
															nhắc
														</a>
													</h2>
													<div className="category">
														<a href="/%alias%" title="Công nghệ">
															Công nghệ
														</a>
														/ <span className="date">07.04.2018</span>
													</div>
													<div className="description hidden-xs">
														Đã đến lúc doanh nghiệp cần cân nhắc thay thế chiến
														lược marketing 4P truyền thống thành chiến lược
														5P...
													</div>
												</div>
											</div>{" "}
										</div>
									</div>
								</div>{" "}
							</div>
							<div className="col-sm-3">
								<div className="box_page">
									<div
										className="fb-page fb_iframe_widget"
										data-href="https://www.facebook.com/hbr.edu.vn/"
										data-small-header="false"
										data-adapt-container-width="true"
										data-hide-cover="false"
										data-show-facepile="true"
										fb-xfbml-state="rendered"
										fb-iframe-plugin-query="adapt_container_width=true&app_id=373867603175905&container_width=278&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fhbr.edu.vn%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false"
									>
										<span
											style={{
												verticalAlign: "bottom",
												width: "278px",
												height: "130px",
											}}
										>
											<iframe
												name="f2172989a03826c"
												width="1000px"
												height="1000px"
												data-testid="fb:page Facebook Social Plugin"
												title="fb:page Facebook Social Plugin"
												frameBorder={0}
												allowTransparency="true"
												allowFullScreen="true"
												scrolling="no"
												allow="encrypted-media"
												src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&app_id=373867603175905&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df32a7ddec6e5ee%26domain%3Dhbr.edu.vn%26origin%3Dhttps%253A%252F%252Fhbr.edu.vn%252Ff3a596ab495ab7c%26relation%3Dparent.parent&container_width=278&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fhbr.edu.vn%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false"
												style={{
													border: "none",
													visibility: "visible",
													width: "278px",
													height: "130px",
												}}
												className
											/>
										</span>
									</div>
								</div>
								<div className="box_adsRight" id="box_adsRight">
									<a
										href="http://hbr.edu.vn/lanh-dao-quan-tri-nhan-tai"
										title="Lãnh đạo & Quản trị Nhân tài - Dave Ulrich"
										target="_self"
									>
										<img
											src={ExampleImage}
											alt="Lãnh đạo & Quản trị Nhân tài - Dave Ulrich"
										/>
									</a>
									<a
										href="https://hbr.edu.vn/xay-dung-chien-luoc-va-lua-chon-mo-hinh-kinh-doanh-t6"
										title="Chiến lược kinh doanh"
										target="_self"
									>
										<img src={ExampleImage} alt="Chiến lược kinh doanh" />
									</a>
								</div>{" "}
							</div>
						</div>
					</div>
				</div>
			</div>
		</Router>
	);
};
