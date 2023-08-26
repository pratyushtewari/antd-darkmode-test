import { App, Layout, theme } from "antd";
import { ThemeProvider } from "antd-style";
import CompanySearchContent from "./component/CompanySearchContent";
import CompanySearchSidebar from "./component/CompanySearchSidebar";
import Navbar from "./component/Navbar";

const { Header, Content, Sider } = Layout;
function MyApp() {
  const { token } = theme.useToken();
  return (
    <ThemeProvider
      themeMode={"auto"}
      theme={(appearance) => {
        if (appearance === "light") {
          // Update in light mode only
          return {
            token: {
              colorBgLayout: "#F7F8F9",
              colorBgHeader: "#FFF",
              colorPrimary: "#0055a5", // BBOS BRAND COLOR
              colorInfo: "#0055a5",
            },
          };
        } else if (appearance === "dark") {
          // Update in dark mode only
          return {
            token: {
              // colorBgLayout: "red",
              // colorBgHeader: "#FFF",
              // colorPrimary: "yellow", // BBOS BRAND COLOR
              // // colorInfo: "#0055a5",
            },
          };
        }
      }}
    >
      <App
        style={{
          // important do not remove
          height: "100%",
        }}
      >
        <Layout
          style={{
            // important do not remove
            height: "100%",
          }}
        >
          <Header
            style={{
              padding: 0,
              height: 46,
              lineHeight: "46px",
              background: "initial",
              borderColor: token.colorBorder,
              borderWidth: 0,
              borderBottomWidth: 0,
            }}
          >
            <Navbar />
          </Header>
          <Layout>
            <Sider width={200}>
              <CompanySearchSidebar />
            </Sider>
            <Layout>
              <Content>
                <CompanySearchContent />
              </Content>
            </Layout>
          </Layout>
        </Layout>
      </App>
    </ThemeProvider>
  );
}

export default MyApp;
