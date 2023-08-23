import { App, Button, Card, ConfigProvider, theme } from "antd";
import MaterialSymbol from "./component/MaterialSymbol";
const { useToken } = theme;

function MyApp() {
  const { token } = useToken();
  return (
    <ConfigProvider
      theme={{
        token: {
          // Seed Token
          colorPrimary: "#0055A5",
          colorInfo: "#0055a5",
          fontSize: 16,
        },
        algorithm: theme.darkAlgorithm,
      }}
    >
      <App style={{ backgroundColor: token.colorBgLayout, height: 500 }}>
        <Card>
          <Button type="primary" icon={<MaterialSymbol name="psychiatry" />}>
            Face Icon button
          </Button>
        </Card>
        <h1 style={{ color: token.colorWarningText }}>
          The backgroundColor of this div which is set to{" "}
          <span>
            <pre>token.colorBgLayout</pre>
          </span>
          should be dark but it does not change. How to fix this?
        </h1>
      </App>
    </ConfigProvider>
  );
}

export default MyApp;
