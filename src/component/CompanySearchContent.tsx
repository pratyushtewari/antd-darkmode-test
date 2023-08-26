import { theme } from "antd";

function CompanySearchContent() {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        height: "100%",
        background: token.colorBgLayout,
        color: token.colorText,
        padding: token.size,
      }}
    >
      sdfd asdfasd fsad fas
    </div>
  );
}

export default CompanySearchContent;
