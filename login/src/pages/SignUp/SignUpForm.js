import React, { Component } from "react";
import api from "../../api";
import classnames from "classnames";

export default class SignUpForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      passwordConfirmation: "",
      errors: {},
    };
  }

  onSubmit = (e) => {
    const { username, email, password, passwordConfirmation } = this.state;
    e.preventDefault();
    //console.log(this.state);

    api
      .register({
        username: username,
        email: email,
        password: password,
        passwordConfirmation: passwordConfirmation,
      })
      .then((res) => {
        console.log(res.data);
        //对is-valid判断
        this.setState({
          errors: res.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };
  changeHandle = (e) => {
    const { value, name } = e.target;
    this.setState({
      [name]: value,
    });
  };
  render() {
    const { username, email, password, passwordConfirmation, errors } =
      this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>join our community</h1>
          <div className="form-group">
            <label className="control-label">UserName</label>
            <input
              type="text"
              // 验证控制 is-invalid 动态class-classnames第三方库
              className={classnames("form-control", {
                "is-invalid": errors.username,
              })}
              name="username"
              value={username}
              onChange={this.changeHandle}
            />
            {errors.username ? (
              <span style={{ color: "red", fontSize: "10px" }}>
                {errors.username}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label className="control-label">Email</label>
            <input
              type="text"
              className={classnames("form-control", {
                "is-invalid": errors.email,
              })}
              name="email"
              value={email}
              onChange={this.changeHandle}
            />
            {errors.email ? (
              <span style={{ color: "red", fontSize: "10px" }}>
                {errors.email}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label className="control-label">Password</label>
            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.password,
              })}
              name="password"
              value={password}
              onChange={this.changeHandle}
            />
            {errors.password ? (
              <span style={{ color: "red", fontSize: "10px" }}>
                {errors.password}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <label className="control-label">passwordConfirmation</label>
            <input
              type="password"
              className={classnames("form-control", {
                "is-invalid": errors.passwordConfirmation,
              })}
              name="passwordConfirmation"
              value={passwordConfirmation}
              onChange={this.changeHandle}
            />
            {errors.passwordConfirmation ? (
              <span style={{ color: "red", fontSize: "10px" }}>
                {errors.passwordConfirmation}
              </span>
            ) : (
              ""
            )}
          </div>
          <div className="form-group">
            <button className="btn btn-primary bth-lg">注册</button>
          </div>
        </form>
      </div>
    );
  }
}
