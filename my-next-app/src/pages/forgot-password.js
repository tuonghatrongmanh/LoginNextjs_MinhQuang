import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/forgot-password.module.css';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Email:', email);
    };

    return (
        <div className={styles.container}>
            <img src="/logo.png" alt="Logo" className={styles.logo} />
            <form onSubmit={handleSubmit} className={styles.form}>
                <h1 className={styles.title}>Quên mật khẩu</h1>
                <label>
                    Nhập địa chỉ email của bạn
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </label>
                <button type="submit">Gửi</button>
                <p>Trở lại <Link href="/login"><a>Đăng nhập</a></Link></p>
            </form>
        </div>
    );
};

export default ForgotPassword;
