import styles from "./Login.module.scss";
import loginIllustration from "@/assets/landing-illustration.svg";
import { useLoginForm } from "@/hooks/useLoginForm";
import Logo from "@/assets/logo.svg";
import InputField from "@/components/InputField/InputField";
import PasswordInput from "@/components/PasswordInput/PasswordInput";
import Button from "@/components/Button/Button";

const Login = () => {
  const {
    email,
    setEmail,
    password,
    setPassword,
    showPassword,
    togglePasswordVisibility,
    handleSubmit,
  } = useLoginForm();

  return (
    <div className={styles.login}>
      <div className={styles["login__mobile-header"]}>
        <img
          src={Logo}
          alt="logo"
          width={176}
          height={36}
        />
      </div>
      <div className={styles["login__left-panel"]}>

        <img
          src={Logo}
          alt="logo"
          width={176}
          height={36}
        />
        <img
          src={loginIllustration}
          alt="login illustration"
          className={styles.login__illustration}
          width={600}
          height={337}
        />
      
      </div>

      <div className={styles["login__right-panel"]}>
        <form className={styles.login__form} onSubmit={handleSubmit} noValidate>
          <h1 className={styles.login__title}>Welcome!</h1>
          <p className={styles.login__subtitle}>Enter details to login.</p>

          <InputField
            type="email"
            placeholder="Email"
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            autoComplete="email"
            required
          />

          <PasswordInput
            placeholder="Password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            autoComplete="current-password"
            showPassword={showPassword}
            onToggleVisibility={togglePasswordVisibility}
            required
          />

          <a href="/forgot-password" className={styles["login__forgot-password"]}>
            Forgot Password?
          </a>

          <Button type="submit">Log In</Button>
        </form>
      </div>
    </div>
  );
};

export default Login;
