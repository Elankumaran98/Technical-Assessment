import styles from "./styles.module.css";

const Profile = () => {
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  return (
    <div className={styles.main_container}>
      <nav className={styles.navbar}>
        <h1>Profile</h1>
        <button className={styles.white_btn} onClick={handleLogout}>
          Logout
        </button>
      </nav>
    </div>
  );
};

export default Profile;
