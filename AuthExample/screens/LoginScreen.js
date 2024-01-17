import AuthContent from "../components/Auth/AuthContent";
import { Alert } from "react-native";
import { login } from "../util/auth";
import { useState, useContext } from "react";
import LoadingOverlay from "../components/ui/LoadingOverlay";
import { AuthContext } from "../store/auth-context";

function LoginScreen() {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const authCtx = useContext(AuthContext);

  async function signInHandler({ email, password }) {
    setIsAuthenticating(true);
    try {
      const token = await login(email, password);
      authCtx.authenticate(token);
    } catch (error) {
      console.log(error);
      Alert.alert("로그인 오류", "비밀번호나 아이디가 옳지 않습니다.");
      setIsAuthenticating(false);
    }
  }

  return <AuthContent isLogin onAuthenticate={signInHandler} />;
}

export default LoginScreen;
