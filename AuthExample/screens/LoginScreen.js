import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";
import { login } from "../util/auth";
import { useState } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);

  async function signInHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      await login(email, password);
    } catch (error) {
      console.log(error);
      Alert.alert("로그인 오류", "비밀번호나 아이디가 옳지 않습니다.");
    }
    setIsAuthenticating(false);
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
