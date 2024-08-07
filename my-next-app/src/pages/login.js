import React from 'react';
import Link from 'next/link';
import styles from '../styles/Login.module.css';

const Login = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>Logo</div>
      <div className={styles.loginBox}>
        <h2>Đăng nhập</h2>
        <p>Nhập thông tin tài khoản bên dưới</p>
        <form className={styles.loginForm}>
          <div className={styles.inputBox}>
            <input type="email" placeholder="E-mail" required />
            <span>Email bạn đã đăng ký với hệ thống</span>
          </div>
          <div className={styles.inputBox}>
            <input type="password" placeholder="Mật khẩu" required />
            <span>
              <Link href="/forgot-password">Bạn quên mật khẩu?</Link>
            </span>
          </div>
          <button className={styles.loginButton} type="submit">Đăng nhập</button>
        </form>
        <p>Bạn chưa có tài khoản? <Link href="/register" legacyBehavior><a>Đăng ký tại đây</a></Link></p>
      </div>
    </div>
  );
}

export default Login;
