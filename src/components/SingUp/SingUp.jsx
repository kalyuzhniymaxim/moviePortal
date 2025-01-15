import styles from '../SignIn/SingIn.module.scss';

export default function SingUp() {
  return (
    <form action="" className={styles.block}>
      <input type="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" id="" />
      <button type="submit">Sign Up</button>
    </form>
  );
}
