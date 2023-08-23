import { App, Button, Card, ConfigProvider, Space, theme } from "antd";
import MaterialSymbol from "./component/MaterialSymbol";

// Sub page
const MyPage = () => {
  const { token } = theme.useToken();
  // const { dd as token  } = theme.useToken();
  return (
    <App>
      <div
        style={{
          color: token.colorText,
          background: token.colorBgLayout,
          border: "2px solid green",
        }}
      >
        <Card>
          <p>this is a card</p>
          <Button type="primary" icon={<MaterialSymbol name="psychiatry" />}>
            psychiatry
          </Button>
        </Card>
        <h1 style={{ color: token.colorWarningText }}>
          The backgroundColor of this div which is set to
          <span>
            <pre>token.colorBgLayout</pre>
          </span>
          should be dark in dark mode.
        </h1>
        <h1> Now lets override it using a nested ConfigProvider</h1>
      </div>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
        }}
      >
        <div
          style={{
            color: token.colorText,
            background: token.colorBgLayout,
            border: "2px solid red",
          }}
        >
          <Card>
            <p>this is a card</p>
            <Button type="primary" icon={<MaterialSymbol name="psychiatry" />}>
              psychiatry
            </Button>
          </Card>
          <h1 style={{ color: token.colorWarningText }}>
            The backgroundColor of this div which is set to
            <span>
              <pre>token.colorBgLayout</pre>
            </span>
            should be light and in light mode.
          </h1>
        </div>
      </ConfigProvider>
    </App>
  );
};

function MyApp() {
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
      <MyPage />
    </ConfigProvider>
  );
}

export default MyApp;
