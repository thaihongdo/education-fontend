import React from "react";
import { Link } from "react-router-dom";
import "./styles.css";
import ExampleImage from "../../../../assets/images/527x275(5).jpg";
import NextGrey from "../../../../assets/icons/icon-next-grey.svg";
export const TechnologyDetails = () => {
	return (
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
							src={NextGrey}
						/>{" "}
						<Link to="/cong-nghe">Công nghệ</Link>
						<img
							alt=""
							className="nd_options_margin_left_10 nd_options_margin_right_10"
							width="10"
							height="10"
							src={NextGrey}
						/>{" "}
						<span className="nd_learning_current_breadcrumb">
							Công nghệ chi tiết
						</span>
					</div>
				</div>
			</div>
			<div>
				<div className="container">
					<div className="wrapper">
						<div className="row">
							<div className="col-sm-9">
								<div className="box_module padding">
									<div className="box_title">
										<h1 className="title">
											<a
												href="https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html"
												title="Marketing 5P - Chiến lược các marketer cần cân nhắc"
											>
												Marketing 5P - Chiến lược các marketer cần cân nhắc
											</a>
										</h1>
									</div>
									<div className="box_content">
										<div className="layout_item_default">
											<div className="created_by clearfix">
												<div className="avatar">
													<img alt="Avatar" src={ExampleImage} />
												</div>
												<div className="info">
													<div className="time">Bài đăng, 07/04/2018</div>
													<div className="user">
														By <span>Nguyễn Văn Nam</span>
													</div>
												</div>
											</div>
											<div
												style={{
													padding: "10px 0",
													marginBottom: "20px",
													borderTop: "1px solid #EEE",
													borderBottom: "1px solid #EEE",
												}}
											>
												<div
													className="fb-like fb_iframe_widget"
													data-layout="button_count"
													data-action="like"
													data-size="small"
													data-show-faces="false"
													data-share="true"
													fb-xfbml-state="rendered"
													fb-iframe-plugin-query="action=like&app_id=373867603175905&container_width=863&href=https%3A%2F%2Fhbr.edu.vn%2Fcong-nghe%2Fmarketing-5p-chien-luoc-cac-marketer-can-can-nhac.html&layout=button_count&locale=en_US&sdk=joey&share=true&show_faces=false&size=small"
												>
													<span
														style={{
															verticalAlign: "bottom",
															width: "150px",
															height: "28px",
														}}
													>
														<iframe
															name="f3afc9347ef0afc"
															width="1000px"
															height="1000px"
															data-testid="fb:like Facebook Social Plugin"
															title="fb:like Facebook Social Plugin"
															frameBorder={0}
															allowTransparency="true"
															allowFullScreen="true"
															scrolling="no"
															allow="encrypted-media"
															src="https://www.facebook.com/v3.2/plugins/like.php?action=like&app_id=373867603175905&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df62a5acfcc614%26domain%3Dhbr.edu.vn%26origin%3Dhttps%253A%252F%252Fhbr.edu.vn%252Ff1974793713e9d%26relation%3Dparent.parent&container_width=863&href=https%3A%2F%2Fhbr.edu.vn%2Fcong-nghe%2Fmarketing-5p-chien-luoc-cac-marketer-can-can-nhac.html&layout=button_count&locale=en_US&sdk=joey&share=true&show_faces=false&size=small"
															style={{
																border: "none",
																visibility: "visible",
																width: "150px",
																height: "28px",
															}}
															className
														/>
													</span>
												</div>
											</div>
											<div className="layout_item_default_content">
												<div className="box_share" id="box_share">
													{/* <a href="https://www.facebook.com/sharer/sharer.php?u=https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a>
                        <a href="https://twitter.com/home?status=https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a>
                        <a href="https://plus.google.com/share?url=https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html" target="_blank"><i className="fa fa-google-plus" aria-hidden="true" /></a> */}
												</div>
												<p>
													<strong>
														<span style={{ fontSize: "18px" }}>
															Đã đến lúc doanh nghiệp cần cân nhắc thay thế
															chiến lược marketing 4P truyền thống thành chiến
															lược 5P, tập trung vào yếu tố gắn kết với nhu cầu
															của người tiêu dùng, theo Business Harvard Review
															(HBR).
														</span>
													</strong>
												</p>
												<p>
													<img
														alt=""
														src="/public/files/upload/default/images/marketingbiz.jpg"
														style={{ height: "480px", width: "728px" }}
													/>
												</p>
												<p>
													Khảo sát người tiêu dùng đầu năm 2018, Kantar Retail
													nhận thấy có 71% người tham gia khảo sát cho biết các
													chương trình khuyến mãi không làm họ gắn bó với thương
													hiệu. Thay vào đó, khách hàng có xu hướng mua hàng từ
													những thương hiệu có liên quan mật thiết đến nhu cầu
													của họ ở từng thời điểm nhất định.
												</p>
												<p>
													Theo nghiên cứu của công ty tư vấn kinh doanh
													Accenture, doanh nghiệp Mỹ đang lãng phí khoảng 1
													triệu tỷ USD doanh thu thường niên do không tạo được
													sự gắn kết với khách hàng. Nghiên cứu này đã chỉ ra
													rằng tương lai của marketing có liên quan mật thiết
													đến nhu cầu của khách hàng ở từng thời điểm. Các công
													ty cần xây dựng và củng cố mối quan hệ cộng sinh với
													khách hàng như những người trợ lý, người bạn thân
													thiết của họ.
												</p>
												<h3>Marketing 5P: Định nghĩa mới về sự gắn kết</h3>
												<p>
													Để doanh nghiệp thực sự làm bạn với khách hàng, bạn
													cần thay đổi cách hiểu về sự gắn kết. Và tháp nhu cầu
													của Abraham Maslow là một lý thuyết tham khảo phù hợp.
													Bên cạnh sơ đồ hóa nhu cầu tâm lý và động lực của con
													người, Tháp Maslow cũng mở ra một mô hình tư duy mới
													về chiến lược marketing.
												</p>
												<p>
													<img
														alt="truong doanh nhan hbr"
														src="/public/files/upload/default/images/Marketing-5P.jpg"
														style={{ height: "433px", width: "650px" }}
													/>
												</p>
												<p>
													Mô hình marketing 4P truyền thống đặt trọng tâm ở 4
													yếu tố: Product (sản phẩm), Price (giá cả), Place (địa
													điểm) và Promotion (hậu mãi). Vấn đề là khi áp dụng
													chiến lược 4P, doanh nghiệp thường hình dung khách
													hàng mục tiêu theo một hình mẫu tĩnh (ví dụ: nhóm
													khách hàng tân tiến muốn ủng hộ các siêu thị xanh hoặc
													các khách hàng chỉ quan tâm đến giảm giá).
												</p>
												<p>
													Trên thực tế, tâm lý của khách hàng không đơn giản như
													vậy, vì nhu cầu của mỗi người luôn thay đổi theo thời
													gian lẫn hoàn cảnh sống. Khách hàng ngày càng kỳ vọng
													vào các trải nghiệm mà doanh nghiệp tạo ra, cùng với
													các hoạt động marketing truyền thống.
												</p>
												<p>
													Theo HBR, giải pháp hiện tại nằm ở mô hình marketing
													5P, phát triển trên nền tảng của Tháp Maslow, gồm 5
													yếu tố: Purpose (mục đích), Pride (niềm tự hào),
													Partnership (đối tác), Protection (bảo vệ), và
													Personalization (cá nhân hóa).
												</p>
												<p>
													5 yếu tố này khi được kết hợp chặt chẽ, sẽ tạo nên gắn
													kết bền vững giữa doanh nghiệp và khách hàng. Cụ thể:
												</p>
												<ul>
													<li>
														<strong>Purpose (Mục đích):</strong>&nbsp;Khách hàng
														cảm thấy được công ty hỗ trợ giải quyết một vấn đề
														cá nhân, hoặc nâng cấp giá trị của bản thân.
													</li>
													<li>
														<strong>Pride (Niềm tự hào):&nbsp;</strong>Khách
														hàng cảm thấy hãnh diện và được truyền cảm hứng khi
														sử dụng sản phẩm, dịch vụ của công ty.
													</li>
													<li>
														<strong>Partnership (Đối tác):</strong>&nbsp;Khách
														hàng cảm thấy công ty gần gũi và hợp tác tốt với họ
													</li>
													<li>
														<strong>Protection (Bảo vệ):</strong>&nbsp;Khách
														hàng cảm thấy yên tâm khi hợp tác với công ty
													</li>
													<li>
														<strong>
															Personalization (Cá nhân hóa):&nbsp;
														</strong>
														Khách hàng cảm thấy trải nghiệm của bản thân với
														công ty liên tục được may đo theo nhu cầu và mối
														quan tâm của họ.
													</li>
												</ul>
												<p>
													Soul Cycle là một ví dụ tốt về cách ứng dụng marketing
													5P vào hoạt động kinh doanh. Với mục đích thúc đẩy lối
													sống khỏe mạnh, tích cực cho người tiêu dùng, Soul
													Cycle đã tạo ra một cộng đồng kết nối những người yêu
													thích đạp xe trong nhà lẫn tập thể hình thông qua dịch
													vụ phòng gym của họ.
												</p>
												<p>
													<img
														alt=""
														src="/public/files/upload/default/images/Marketing-5P-2.jpg"
														style={{ height: "450px", width: "750px" }}
													/>
												</p>
												<p>
													Bằng cách nhấn mạnh vào giá trị sống khỏe, Soul Cycle
													đã tạo nên được cảm giác tự hào cho khách hàng khi sử
													dụng dịch vụ tập thể hình cao cấp (thể hiện qua phân
													khúc giá và đội ngũ huấn luyện viên trẻ, khỏe của Soul
													Cycle). Khách hàng cũng cảm thấy đang yêu thương bản
													thân khi sử dụng phòng tập thể hình mới, sạch sẽ,
													phòng thay đồ cao cấp cùng danh sách phát nhạc riêng
													trên Spotify của SoulCycle. Tuy mức giá ở Soul Cycle
													cao hơn các phòng gym truyền thống, song người tiêu
													dùng vẫn chấp nhận vì họ được đội ngũ nhân viên
													SoulCycle tận tình hỗ trợ, tư vấn cách tập luyện hiệu
													quả nhất mỗi khi đến phòng tập.
												</p>
												<p>
													Tất cả những yếu tố trên đã biến SoulCycle trở thành
													người bạn truyền cảm hứng để khách hàng sống tốt hơn.
												</p>
												<h3>Những lưu ý khi chuyển đổi chiến lược marketing</h3>
												<p>
													Nếu bạn đang có ý định áp dụng chiến lược marketing 5P
													thì đây là 3 yếu tố cơ bản cần quan tâm:
												</p>
												<p>
													<strong>1. Bước ra khỏi vùng an toàn</strong>
												</p>
												<p>
													Nhiều công ty đã sử dụng mô hình marketing 4P truyền
													thống trong nhiều thập niên, và đã đạt được thành công
													vượt bậc. Quá khứ đầy tự hào này đặt ra cho họ thử
													thách bước ra khỏi vùng an toàn để thử nghiệm các cách
													tiếp cận mới, độc đáo hơn cho chiến lược marketing của
													công ty.
												</p>
												<p>
													Một ví dụ khác về chiến lược marketing 5P là CVS
													Pharmacy, thương hiệu nhà thuốc tây thuộc CVS Health.
												</p>
												<p>
													Đặt mục tiêu đi xa hơn mô hình bán lẻ thuần túy, CVS
													Pharmacy đã triển khai kế hoạch hỗ trợ khách hàng cải
													thiện sức khỏe. Cụ thể, công ty dược này đã đưa vào
													nhà thuốc các công nghệ như: hệ thống phân tích sức
													khỏe, thiết bị ghi nhớ và nhắc nhở khách hàng uống
													thuốc đúng giờ. CVS cũng hợp tác với IBM Waston trong
													lĩnh vực AI để dự đoán thời điểm người bệnh có thể cần
													đến những liệu trình chăm sóc đặc biệt hơn.
												</p>
												<p>
													Những sáng kiến này vừa làm khách hàng thấy được quan
													tâm, săn sóc khi mua thuốc, vừa giúp củng cố niềm tin
													của họ với dược sĩ. CVS đã trở thành thương hiệu được
													khách hàng nhắc đến trong suốt quá trình điều trị và
													hồi phục của bản thân.
												</p>
												<p>
													<strong>2. Thời điểm là tất cả</strong>
												</p>
												<p>
													Trong chiến lược marketing 5P, cá nhân hóa là yếu tố
													cốt lõi.
												</p>
												<p>
													Doanh nghiệp cần truyền tải thông điệp, tạo ra trải
													nghiệm hoặc gửi thông tin ưu đãi chính xác với thời
													điểm khách hàng đang quan tâm. Cấp độ cá nhân hóa hiện
													có rất ít công ty đạt được, trong đó có Hertz, hãng
													cung cấp dịch vụ xe hơi nổi tiếng.
												</p>
												<p>
													<img
														alt="hbr doanh nhan vn"
														src="/public/files/upload/default/images/Marketing-5P-3.jpg"
														style={{ height: "507px", width: "750px" }}
													/>
												</p>
												<p>
													Nền tảng của chiến dịch này là hệ thống phân tích, dự
													đoán quá trình ra quyết định của khách hàng. Vì Hertz
													cho rằng các ưu đãi chỉ tạo ra giá trị khi khách hàng
													sẵn sàng sử dụng chúng. Mỗi khách hàng không dùng ưu
													đãi là một cơ hội bị bỏ phí.
												</p>
												<p>
													<strong>
														3. Chuyển hướng từ sản phẩm sang platform
													</strong>
												</p>
												<p>
													Yếu tố thứ 3 để chiến lược marketing 5P hiệu quả chính
													là doanh nghiệp cần chuyển hướng tư duy tập trung vào
													sản phẩm sang xây dựng các platform.
												</p>
												<p>
													Thay vì chỉ sản xuất sản phẩm thể thao, Under Armour
													đã đặt mục tiêu xây dựng một hệ sinh thái kết nối
													những người yêu thích luyện tập thể hình. Năm 2015,
													công ty này đã đầu tư hơn 500 triệu USD để triển khai
													hai dịch vụ phân tích thông số thể hình cho người tiêu
													dùng và trở thành đơn vị theo dõi thông tin thể hình
													lớn nhất thế giới.
												</p>
												<p>
													Hai dịch vụ này của Under Armour (đặt tại Mỹ và châu
													Âu), đã tổng hợp và phân tích dữ liệu của 100 triệu
													người đăng ký. Dữ liệu thu được sẽ dùng để Under
													Armour kết nối khách hàng với các startup cung cấp
													dịch vụ có liên quan đến thể hình, như công ty phát
													triển và tích hợp các cảm biến, thiết bị phân tích
													sinh trắc học vào quần áo thể thao.
												</p>
												<p>
													Tương tự, nhà sản xuất xe hơi BMW đã hợp tác với nhiều
													doanh nghiệp khác để mở rộng hệ sinh thái hỗ trợ khách
													hàng định vị khi di chuyển trên đường, bất kể có sử
													dụng xe hơi của hãng hay không. Cụ thể, BMW đã liên
													kết khách hàng với một mạng lưới rộng lớn từ dịch vụ
													cho thuê, chia sẻ xe hơi, đến các giải pháp đỗ xe, tìm
													trạm sạc cho xe hơi điện lẫn ứng dụng định vị qua điện
													thoại.
												</p>
												<p>
													Hệ thống này giúp khách hàng tiếp tục gắn kết với
													thương hiệu sau khi mua sản phẩm, thay vì chỉ trả tiền
													một lần rồi thôi.
												</p>
												<h3>Kết</h3>
												<p>
													Ngày nay, công nghệ mở ra nhiều cách thức để người
													tiêu dùng có thể đánh giá liên tục các quyết định chi
													tiêu của mình. Họ sẽ chọn những thương hiệu liên quan
													nhiều nhất đến nhu cầu của bản thân, và sẵn sàng trả
													tiền nhiều hơn để có trải nghiệm tốt hơn. Vì vậy, các
													doanh nghiệp cần thoát khỏi lối tư duy giảm giá truyền
													thống để tạo ra được các kết nối hữu ích, liên tục với
													khách hàng.
												</p>
												<p>Doanh Nhân Sài Gòn</p>
												<p>&nbsp;</p>
												<div
													className="box_bxslider"
													id="box_bxslider"
													style={{ display: "block" }}
												>
													<div className="box_content">
														<div
															className="bx-wrapper"
															style={{ maxWidth: "100%" }}
														>
															<div
																className="bx-viewport"
																style={{
																	width: "100%",
																	overflow: "hidden",
																	position: "relative",
																	height: "224px",
																}}
															>
																<ul
																	className="bxslider"
																	style={{
																		width: "1215%",
																		position: "relative",
																		transitionDuration: "0s",
																		transform: "translate3d(-7065px, 0px, 0px)",
																	}}
																>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																		className="bx-clone"
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/bo-6-kinh-dien-ve-quan-tri-he-thong-sales-marketing-online?fbclid=IwAR3PPUle8o-gHM6JCcfDu1G2-y-9meUH2y7UrTFAAHH6tZRiSnh5LnGDMaA"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/bo-6-banner.jpg"
																				alt="Bộ 6 Kinh điển về Quản trị Hệ thống Sales & Marketing Online"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/xay-dung-va-van-hanh-he-thong-marketing-hien-dai?fbclid=IwAR1oG7soMPKBTIF8ixMTJGXGHD7Dt25TDTwoGRqMTqNbyE7yRIKdfxUOF3k"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/Tony-Dzung/mkt-banner.jpg"
																				alt="Xây dựng và Vận hành hệ thống Marketing hiện đại"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/brandmaster-xay-dung-thuong-hieu-ca-nhan-tren-mang-xa-hoi"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/28-05/1-banner.jpg"
																				alt="Khóa học Brandmaster - Xây dựng thương hiệu cá nhân trên mạng xã hội"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/kham-pha-chan-dung-khach-hang-muc-tieu"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/1-banner(19).jpg"
																				alt="Quy trình thấu hiểu khách hàng mục tiêu -Bí quyết thúc đẩy tăng trưởng doanh số"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/khoa-hoc-tuyen-dung-nhan-su-chuyen-nghiep"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/Tony-Dzung/tuyen-dung-ns-k13-banner(2).jpg"
																				alt="Tuyển dụng Nhân sự dành cho các cấp Lãnh đạo, quản lý"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/do-luong-va-toi-uu-trai-nghiem-khach-hang"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/banners/trai-nghiem-khach-hang-banner.jpg"
																				alt="Đo lường & tối ưu trải nghiệm khách hàng"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/cong-cu-phan-tich-hanh-vi-khach-hang"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/banners/online2-banner.jpg"
																				alt="Công cụ phân tích hành vi khách hàng"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/khoa-hoc-bac-thay-thau-hieu-khach-hang"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/1-banner(5).jpg"
																				alt="Khóa học Bậc thầy Thấu hiểu khách hàng"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/xay-dung-bo-may-quan-tri-dieu-hanh-chuyen-nghiep"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/ads-slideshow/chuoi-bo-may-quan-tri-2-banner.jpg"
																				alt="Xây dựng bộ máy quản trị điều hành chuyên nghiệp"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbrbooks.com/bo-5-cuon-sach-lanh-dao-nhan-su"
																			target="_self"
																		>
																			<img
																				src={ExampleImage}
																				alt="5 Cuốn sách nhân sự hàng đầu của trường Kinh doanh Harvard"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/bo-6-kinh-dien-ve-quan-tri-he-thong-sales-marketing-online?fbclid=IwAR3PPUle8o-gHM6JCcfDu1G2-y-9meUH2y7UrTFAAHH6tZRiSnh5LnGDMaA"
																			target="_self"
																		>
																			<img
																				src={ExampleImage}
																				alt="Bộ 6 Kinh điển về Quản trị Hệ thống Sales & Marketing Online"
																			/>
																		</a>
																	</li>
																	<li
																		style={{
																			float: "left",
																			listStyle: "none",
																			position: "relative",
																			width: "785px",
																		}}
																		className="bx-clone"
																	>
																		<a
																			className="item"
																			href="https://hbr.edu.vn/xay-dung-va-van-hanh-he-thong-marketing-hien-dai?fbclid=IwAR1oG7soMPKBTIF8ixMTJGXGHD7Dt25TDTwoGRqMTqNbyE7yRIKdfxUOF3k"
																			target="_self"
																		>
																			<img
																				src="/public/files/upload/default/images/Tony-Dzung/mkt-banner.jpg"
																				alt="Xây dựng và Vận hành hệ thống Marketing hiện đại"
																			/>
																		</a>
																	</li>
																</ul>
															</div>
															<div className="bx-controls bx-has-pager bx-has-controls-direction">
																<div className="bx-pager bx-default-pager">
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={0}
																			className="bx-pager-link"
																		>
																			1
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={1}
																			className="bx-pager-link"
																		>
																			2
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={2}
																			className="bx-pager-link"
																		>
																			3
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={3}
																			className="bx-pager-link"
																		>
																			4
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={4}
																			className="bx-pager-link"
																		>
																			5
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={5}
																			className="bx-pager-link"
																		>
																			6
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={6}
																			className="bx-pager-link"
																		>
																			7
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={7}
																			className="bx-pager-link"
																		>
																			8
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={8}
																			className="bx-pager-link active"
																		>
																			9
																		</a>
																	</div>
																	<div className="bx-pager-item">
																		<a
																			href
																			data-slide-index={9}
																			className="bx-pager-link"
																		>
																			10
																		</a>
																	</div>
																</div>
																<div className="bx-controls-direction">
																	<a className="bx-prev" href>
																		Prev
																	</a>
																	<a className="bx-next" href>
																		Next
																	</a>
																</div>
															</div>
														</div>
													</div>
												</div>{" "}
											</div>
										</div>
									</div>
								</div>
								<div className="box_comment padding">
									<div className="box_title clearfix">
										<div className="title">Bình luận bài viết</div>
										<div className="share">
											{/* <a href="https://www.facebook.com/sharer/sharer.php?u=https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html" target="_blank"><i className="fa fa-facebook" aria-hidden="true" /></a>
                    <a href="https://twitter.com/home?status=https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html" target="_blank"><i className="fa fa-twitter" aria-hidden="true" /></a>
                    <a href="https://plus.google.com/share?url=https://hbr.edu.vn/cong-nghe/marketing-5p-chien-luoc-cac-marketer-can-can-nhac.html" target="_blank"><i className="fa fa-google-plus" aria-hidden="true" /></a> */}
										</div>
									</div>
									<div className="box_content">
										<div
											className="fb-comments fb_iframe_widget fb_iframe_widget_fluid_desktop"
											data-href
											data-width="100%"
											data-numposts={5}
											order_by="reverse_time"
											fb-xfbml-state="rendered"
											fb-iframe-plugin-query="app_id=373867603175905&container_width=879&height=100&href=http%3A&locale=en_US&numposts=5&order_by=reverse_time&sdk=joey&title=Marketing%205P%20-%20Chi%E1%BA%BFn%20l%C6%B0%E1%BB%A3c%20c%C3%A1c%20marketer%20c%E1%BA%A7n%20c%C3%A2n%20nh%E1%BA%AFc&url=https%3A%2F%2Fhbr.edu.vn%2Fcong-nghe%2Fmarketing-5p-chien-luoc-cac-marketer-can-can-nhac.html&version=v3.2&width=&xid=https%253A%252F%252Fhbr.edu.vn%252Fcong-nghe%252Fmarketing-5p-chien-luoc-cac-marketer-can-can-nhac.html"
											style={{ width: "100%" }}
										>
											<span
												style={{
													verticalAlign: "top",
													width: "100%",
													height: "0px",
													overflow: "hidden",
												}}
											>
												<iframe
													name="f1a7eaeacae3dd4"
													width="1000px"
													height="100px"
													data-testid="fb:comments Facebook Social Plugin"
													title="fb:comments Facebook Social Plugin"
													frameBorder={0}
													allowTransparency="true"
													allowFullScreen="true"
													scrolling="no"
													allow="encrypted-media"
													src="https://www.facebook.com/v3.2/plugins/comments.php?app_id=373867603175905&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df36d52518961d64%26domain%3Dhbr.edu.vn%26origin%3Dhttps%253A%252F%252Fhbr.edu.vn%252Ff1974793713e9d%26relation%3Dparent.parent&container_width=879&height=100&href=http%3A&locale=en_US&numposts=5&order_by=reverse_time&sdk=joey&title=Marketing%205P%20-%20Chi%E1%BA%BFn%20l%C6%B0%E1%BB%A3c%20c%C3%A1c%20marketer%20c%E1%BA%A7n%20c%C3%A2n%20nh%E1%BA%AFc&url=https%3A%2F%2Fhbr.edu.vn%2Fcong-nghe%2Fmarketing-5p-chien-luoc-cac-marketer-can-can-nhac.html&version=v3.2&width=&xid=https%253A%252F%252Fhbr.edu.vn%252Fcong-nghe%252Fmarketing-5p-chien-luoc-cac-marketer-can-can-nhac.html"
													style={{
														border: "none",
														visibility: "visible",
														width: "0px",
														height: "0px",
													}}
												/>
											</span>
										</div>
									</div>
								</div>
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
												name="fb6ffb4b424678"
												width="1000px"
												height="1000px"
												data-testid="fb:page Facebook Social Plugin"
												title="fb:page Facebook Social Plugin"
												frameBorder={0}
												allowTransparency="true"
												allowFullScreen="true"
												scrolling="no"
												allow="encrypted-media"
												src="https://www.facebook.com/v3.2/plugins/page.php?adapt_container_width=true&app_id=373867603175905&channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df34b061b037f8ac%26domain%3Dhbr.edu.vn%26origin%3Dhttps%253A%252F%252Fhbr.edu.vn%252Ff1974793713e9d%26relation%3Dparent.parent&container_width=278&hide_cover=false&href=https%3A%2F%2Fwww.facebook.com%2Fhbr.edu.vn%2F&locale=en_US&sdk=joey&show_facepile=true&small_header=false"
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
		</div>
	);
};
