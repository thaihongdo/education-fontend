import React from "react";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { SigninService } from "../../service";
import { LabelError } from "../../components";
import { ButtonInfoStyled } from "./styles";
import { authenticator } from "../../utils";

export const Login = (props) => {
  console.log(props);
  const history = useHistory();
  const { register, handleSubmit, errors } = useForm();
  const onLogin = (data) => {
    authenticator.setAuthenticate();
    window.location.href = "/";
    // SigninService.signin(data)
    // 	.then((res) => {
    // 		if (res?.success) {
    // 			// toast.success(res.message);
    // 			console.log("ok", res?.success);
    // 		} else {
    // 			toast.error(res?.message || "Error occurred");
    // 		}
    // 	})
    // 	.catch((err) => {
    // 		toast.error(err?.message || err);
    // 	});
  };

  return (
    <div className="nd_learning_width_50_percentage nd_learning_float_left nd_learning_box_sizing_border_box nd_learning_padding_15 nd_learning_width_100_percentage_responsive">
      <div className="nd_learning_section nd_learning_border_radius_3 nd_learning_border_1_solid_grey nd_learning_padding_20 nd_learning_box_sizing_border_box">
        <h6 className="nd_options_second_font nd_learning_bg_green nd_learning_padding_5 nd_learning_border_radius_3 nd_learning_color_white_important nd_learning_display_inline_block">
          Bạn đã là thành viên của SME
        </h6>
        <div className="nd_learning_section nd_learning_height_5"></div>
        <h2>
          <strong>Đăng nhập</strong>
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
            {errors.email && <LabelError label="Email không được để trống" />}
          </p>
          <p className="login-password">
            <label htmlFor="nd_learning_login_form_password">Mật khẩu</label>
            <input
              type="password"
              name="password"
              id="nd_learning_login_form_password"
              className="input"
              size="20"
              ref={register({ required: true })}
            />
            {errors.password && (
              <LabelError label="Mật khẩu không được để trống" />
            )}
          </p>
          <p className="login-remember">
            <label>
              <input
                name="rememberme"
                type="checkbox"
                id="nd_learning_login_form_remember"
                value="forever"
              />{" "}
              Remember Me
            </label>
          </p>
          <p className="login-submit">
            <ButtonInfoStyled type="submit">Log In</ButtonInfoStyled>
          </p>
        </form>
      </div>
    </div>
  );
};
