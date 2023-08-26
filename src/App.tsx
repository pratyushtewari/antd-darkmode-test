import { Breadcrumb, Layout, theme } from "antd";
import { ThemeProvider } from "antd-style";
import Navbar from "./component/Navbar";
import CompanySearchSidebar from "./component/CompanySearchSidebar";
import CompanySearchContent from "./component/CompanySearchContent";

const { Header, Content, Sider } = Layout;
function MyApp() {
  const { token } = theme.useToken();
  return (
    <ThemeProvider
      themeMode={"auto"}
      theme={(appearance) => {
        if (appearance === "light") {
          return {
            token: {
              colorBgLayout: "#F7F8F9",
              colorBgHeader: "#FFF",
            },
          };
        }
        return {
          token: {
            colorPrimary: "#0055a5", // BBOS BRAND COLOR
            colorInfo: "#0055a5",
          },
        };
      }}
    >
      <Layout
        style={{
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
            borderWidth: 1,
          }}
        >
          <Navbar></Navbar>
        </Header>
        <Layout style={{ background: "initial" }}>
          <Sider
            width={200}
            style={{
              background: "unset",
            }}
          >
            <CompanySearchSidebar></CompanySearchSidebar>
          </Sider>
          <Layout style={{ background: "initial" }}>
            <Content>
              <CompanySearchContent></CompanySearchContent>
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </ThemeProvider>
  );
}

export default MyApp;
