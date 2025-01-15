import styles from './SingIn.module.scss';

export default function SingIn() {
  return (
    <form action="" className={styles.block}>
      <input type="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" id="" />
      <button type="submit">Log in</button>
    </form>
  );
}
