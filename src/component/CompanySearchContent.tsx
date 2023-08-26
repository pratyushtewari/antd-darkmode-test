import { theme } from "antd";

function CompanySearchContent() {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        width: "inherit",
        height: "100%",
        background: token.colorBgLayout,
        color: token.colorText,
      }}
    >
      sdfd asdfasd fsad fas
    </div>
  );
}

export default CompanySearchContent;
