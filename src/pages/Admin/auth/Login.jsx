import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Card,
  Container,
  Stack,
  TextInput,
  PasswordInput,
  Text,
  Loader,
} from "@mantine/core";
import { notifications } from "@mantine/notifications";
import { Check, X } from "tabler-icons-react";
import { AuthContext } from "../../../context/auth-context";

const Login = () => {
  const [phone, setPhone] = useState("998901234567");
  const [password, setPassword] = useState("password");
  const [loading, setLoading] = useState(false);
  const theme = localStorage.getItem("theme") || "light";

  const { login } = useContext(AuthContext);
  const nav = useNavigate();

  const isDark = theme === "dark";

  const handleSubmit = async () => {
    setLoading(true);
    try {
      const success = await login({ phone, password });
      notifications.show({
        title: success ? "Success" : "Error",
        message: success
          ? "Login successful"
          : "Login failed! Please check your credentials.",
        color: success ? "teal" : "red",
        icon: success ? <Check /> : <X />,
      });
      if (success) nav("/admin/app");
    } catch (error) {
      console.error(error);
      notifications.show({
        title: "Error",
        message: "Unexpected error occurred",
        color: "red",
        icon: <X />,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container
      fluid
      h="100vh"
      style={{
        backgroundImage: `url(${isDark ? "/img/black-bg.jpg" : "/img/white-bg.jpg"})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        transition: "0.3s ease",
      }}
    >
      <Card
        w={320}
        p={20}
        shadow="lg"
        style={{
          background: isDark ? "rgba(0,0,0,0.6)" : "rgba(255,255,255,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          transition: "0.3s ease",
        }}
      >
        <Stack>
          <Text ta="center" fw={600} size="xl" c={isDark ? "white" : "black"}>
            Login
          </Text>
          <TextInput
            type="number"
            label="Phone"
            placeholder="Your phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
          <PasswordInput
            label="Password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button fullWidth onClick={handleSubmit} disabled={loading}>
            {loading ? <Loader size="xs" /> : "Login"}
          </Button>
          <Link
            to="/"
            style={{
              color: isDark ? "white" : "black",
              textAlign: "center",
            }}
          >
            Back Home
          </Link>
        </Stack>
      </Card>
    </Container>
  );
};

export default Login;
