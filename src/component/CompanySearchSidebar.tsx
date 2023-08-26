import { theme } from "antd";

function CompanySearchSidebar() {
  const { token } = theme.useToken();
  return (
    <div
      style={{
        height: "inherit",
        background: token.colorBgBase,
        color: token.colorText,
        borderColor: token.colorBorder,
        borderRightWidth: 1,
        borderStyle: "solid",
        padding: token.size
      }}
    >
      sdfd asdfasd fsad fas
    </div>
  );
}

export default CompanySearchSidebar;
