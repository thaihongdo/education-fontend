import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { RegisterService } from "../../service";
import { LabelError } from "../../components";
import { ButtonInfoStyled } from "./styles";

export const Register = () => {
	const { register, handleSubmit, errors } = useForm();
	const onSignUp = (data) => {
		RegisterService.register(data)
			.then((res) => {
				if (res?.success) {
					// toast.success(res.message);
				} else {
					toast.error(res?.message || "Error occurred");
				}
			})
			.catch((err) => {
				toast.error(err?.message || err);
			});
	};

	return (
		<div className="nd_learning_width_50_percentage nd_learning_float_left nd_learning_box_sizing_border_box nd_learning_padding_15 nd_learning_width_100_percentage_responsive">
			<div className=" nd_learning_section nd_learning_bg_white nd_learning_border_radius_3 nd_learning_border_1_solid_grey nd_learning_padding_20 nd_learning_box_sizing_border_box">
				<h6 className="nd_options_second_font nd_learning_bg_green nd_learning_padding_5 nd_learning_border_radius_3 nd_learning_color_white_important nd_learning_display_inline_block">
					Bạn chưa có tài khoản?
				</h6>
				<div className="nd_learning_section nd_learning_height_5"></div>
				<h2>
					<strong>Đăng ký </strong>
				</h2>

				<form onSubmit={handleSubmit(onSignUp)}>
					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							Email *
						</label>
						<input
							type="text"
							className=" nd_learning_section"
							name="email"
							ref={register({ required: true })}
						/>
						{errors.email && <LabelError label="Email không được để trống" />}
					</p>
					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							Mật khẩu *
						</label>
						<input
							type="password"
							className=" nd_learning_section"
							name="password"
							ref={register({ required: true })}
						/>
						{errors.password && (
							<LabelError label="Mật khẩu không được để trống" />
						)}
					</p>

					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							First Name *
						</label>
						<input
							type="text"
							className="nd_learning_section"
							name="first_name"
							ref={register({ required: true })}
						/>
						{errors.first_name && (
							<LabelError label="First name không được để trống" />
						)}
					</p>
					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							Last Name *
						</label>
						<input
							type="text"
							className="nd_learning_section"
							name="last_name"
							ref={register({ required: true })}
						/>
						{errors.last_name && (
							<LabelError label="Last name không được để trống" />
						)}
					</p>
					<p>
						<label className="nd_learning_section nd_learning_margin_top_20">
							Số điện thoại
						</label>
						<input
							type="text"
							name="phone"
							className="nd_learning_section"
							ref={register}
						/>
					</p>
					<ButtonInfoStyled type="submit">Registration</ButtonInfoStyled>
				</form>
			</div>
		</div>
	);
};
