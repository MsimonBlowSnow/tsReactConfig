import React, { memo } from "react";
import styles from "./index.module.less";
function Login() {
  return <div className={styles.login_container}></div>;
}

export default memo(Login);
