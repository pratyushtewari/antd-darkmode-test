import { theme, Collapse, Checkbox, Select } from "antd";
import type { CheckboxChangeEvent } from "antd/es/checkbox";
import { Col, Row } from "antd";

const { Panel } = Collapse;
import { Button, Form, Input, Radio } from "antd";
import { useState } from "react";
type LayoutType = Parameters<typeof Form>[0]["layout"];
const text = `
A dog is a type of domesticated animal.
Known for its loyalty and faithfulness,
it can be found as a welcome guest in many households across the world.
`;

function CompanySearchContent() {
  const { token } = theme.useToken();
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState<LayoutType>("vertical");
  const [usa, setUsa] = useState<boolean>(true);
  const [canada, setCanada] = useState<boolean>(false);
  const [mexico, seMexico] = useState<boolean>(false);

  const onChanged = (e: CheckboxChangeEvent) => {
    setUsa(e.target.checked);
  };
  const onCanadaChanged = (e: CheckboxChangeEvent) => {
    setCanada(e.target.checked);
  };
  const onMexicoChanged = (e: CheckboxChangeEvent) => {
    seMexico(e.target.checked);
  };
  const handleCityChange = (e: CheckboxChangeEvent) => {
    seMexico(e.target.checked);
  };

  const onFormLayoutChange = ({ layout }: { layout: LayoutType }) => {
    setFormLayout(layout);
  };
  const formItemLayout = formLayout === "horizontal" ? { labelCol: { span: 4 }, wrapperCol: { span: 14 } } : null;

  const buttonItemLayout = formLayout === "horizontal" ? { wrapperCol: { span: 14, offset: 4 } } : null;
  const headerContent = (title: string, subtitle: string) => {
    return (
      <>
        <p>{title}</p>
        <p
          style={{
            color: token.colorTextDescription,
          }}
        >
          {subtitle}
        </p>
      </>
    );
  };
  const handleChange = (value: string) => {
    if (value == "1") {
      console.log(`selected ${value}`);
    }
  };
  return (
    <div
      style={{
        height: "100%",
        background: token.colorBgLayout,
        color: token.colorText,
        padding: token.size,
        maxWidth: 400,
      }}
    >
      <Collapse defaultActiveKey={["3"]}>
        <Panel header={headerContent("Profile Details", "Company name, listing status, phone, etc. ")} key="1">
          <Form
            {...formItemLayout}
            layout={formLayout}
            form={form}
            initialValues={{ layout: formLayout }}
            onValuesChange={onFormLayoutChange}
            style={{ maxWidth: formLayout === "inline" ? "none" : 600 }}
          >
            <Form.Item label="Form Layout" name="layout">
              <Radio.Group value={formLayout}>
                <Radio.Button value="horizontal">Horizontal</Radio.Button>
                <Radio.Button value="vertical">Vertical</Radio.Button>
                <Radio.Button value="inline">Inline</Radio.Button>
              </Radio.Group>
            </Form.Item>
            <Form.Item label="Field A">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item label="Field B">
              <Input placeholder="input placeholder" />
            </Form.Item>
            <Form.Item {...buttonItemLayout}>
              <Button type="primary">Submit</Button>
            </Form.Item>
          </Form>
        </Panel>

        <Panel header={headerContent("Rating", "BBS score or rating")} key="2">
          <p>{text}</p>
        </Panel>

        <Panel
          header={headerContent(
            "Location",
            "Countries, States (US) or Distance from zip codes (US and Canada) or Trading Terminal (US)"
          )}
          key="3"
        >
          <Row wrap={false}>
            <Col flex="100px">
              <Checkbox defaultChecked onChange={onChanged}>
                USA
              </Checkbox>
            </Col>
            <Col flex="auto">
              <Select
                placeholder="Select USA States"
                // defaultValue="lucy"
                style={{ width: "100%" }}
                onChange={handleChange}
                mode="multiple"
                disabled={!usa}
                allowClear
                options={[
                  {
                    label: "North East",
                    options: [
                      { label: "Connecticut", value: "Connecticut" },
                      { label: "Delaware", value: "Delaware" },
                      { label: "District of Columbia", value: "District of Columbia" },
                      { label: "Maine", value: "Maine" },
                      { label: "Maryland", value: "Maryland" },
                      { label: "Massachusetts", value: "Massachusetts" },
                      { label: "New Hampshire", value: "New Hampshire" },
                      { label: "New Jersey", value: "New Jersey" },
                      { label: "New York", value: "New York" },
                      { label: "Pennsylvania", value: "Pennsylvania" },
                      { label: "Rhode Island", value: "Rhode Island" },
                      { label: "Vermont", value: "Vermont" },
                      { label: "Virginia", value: "Virginia" },
                      { label: "West Virginia", value: "West Virginia" },
                    ],
                  },
                  {
                    label: "Souteast",
                    options: [
                      { label: "Alabama", value: "Alabama" },
                      { label: "Florida", value: "Florida" },
                      { label: "Georgia", value: "Georgia" },
                      { label: "North Carolina", value: "North Carolina" },
                      { label: "South Carolina", value: "South Carolina" },
                      { label: "Tennessee", value: "Tennessee" },
                    ],
                  },
                ]}
              />
            </Col>
          </Row>
          <br></br>
          <Row wrap={false}>
            <Col flex="100px">
              <Checkbox onChange={onCanadaChanged}>Canada</Checkbox>
            </Col>
            <Col flex="auto">
              <Select
                placeholder="Select Canada States"
                // defaultValue="lucy"
                style={{ width: "100%" }}
                onChange={handleChange}
                mode="multiple"
                disabled={!canada}
                options={[
                  { value: "Alberta", label: "Alberta" },
                  { value: "Newfoundland and Labrador", label: "Newfoundland and Labrador" },
                  { value: "Prince Edward Island", label: "Prince Edward Island" },
                  { value: "British Columbia", label: "British Columbia" },
                  { value: "Northwest Territories", label: "Northwest Territories" },
                  { value: "Quebec", label: "Quebec" },
                  { value: "Manitoba", label: "Manitoba" },
                  { value: "Nova Scotia", label: "Nova Scotia" },
                  { value: "Saskatchewan", label: "Saskatchewan" },
                  { value: "New Brunswick", label: "New Brunswick" },
                  { value: "Ontario", label: "Ontario" },
                  { value: "Yukon", label: "Yukon" },
                ]}
              />
            </Col>
          </Row>
          <br></br>
          <Row wrap={false}>
            <Col flex="100px">
              <Checkbox onChange={onMexicoChanged}>Mexico</Checkbox>
            </Col>
            <Col flex="auto">
              <Select
                placeholder="Select Mexico States"
                // defaultValue="lucy"
                style={{ width: "100%" }}
                onChange={handleChange}
                mode="multiple"
                disabled={!mexico}
                options={[
                  { value: "Aguascalientes", label: "Aguascalientes" },
                  { value: "Guanajuato", label: "Guanajuato" },
                  { value: "Quintana Roo", label: "Quintana Roo" },
                  { value: "Baja California", label: "Baja California" },
                  { value: "Guerrero", label: "Guerrero" },
                  { value: "San Luis Potosi", label: "San Luis Potosi" },
                  { value: "Baja California Sur", label: "Baja California Sur" },
                  { value: "Hidalgo", label: "Hidalgo" },
                  { value: "Sinaloa", label: "Sinaloa" },
                  { value: "Campeche", label: "Campeche" },
                  { value: "Jalisco", label: "Jalisco" },
                  { value: "Sonora", label: "Sonora" },
                  { value: "Chiapas", label: "Chiapas" },
                  { value: "Michoacan", label: "Michoacan" },
                  { value: "Tabasco", label: "Tabasco" },
                  { value: "Chihuahua", label: "Chihuahua" },
                  { value: "Morelos", label: "Morelos" },
                  { value: "Tamaulipas", label: "Tamaulipas" },
                  { value: "Ciudad de Mexico", label: "Ciudad de Mexico" },
                  { value: "Nayarit", label: "Nayarit" },
                  { value: "Tlaxcala", label: "Tlaxcala" },
                  { value: "Coahuila", label: "Coahuila" },
                  { value: "Nuevo Leon", label: "Nuevo Leon" },
                  { value: "Veracruz", label: "Veracruz" },
                  { value: "Colima", label: "Colima" },
                  { value: "Oaxaca", label: "Oaxaca" },
                  { value: "Yucatan", label: "Yucatan" },
                  { value: "Durango", label: "Durango" },
                  { value: "Puebla", label: "Puebla" },
                  { value: "Zacatecas", label: "Zacatecas" },
                  { value: "Estado de Mexico", label: "Estado de Mexico" },
                  { value: "Queretaro	", label: "Queretaro	" },
                ]}
              />
            </Col>
          </Row>
          <br></br>
          <Row wrap={false}>
            <Col flex="auto">
              <Form form={form} layout="vertical">
                <Form.Item label="Other Countries" name="requiredMarkValuesd">
                  <Select
                    placeholder="Select other countries"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    mode="multiple"
                    allowClear
                    options={[
                      {
                        label: "Central America",
                        options: [
                          { label: "Belize", value: "Belize" },
                          { label: "Costa Rica", value: "Costa Rica" },
                          { label: "El Salvador", value: "El Salvador" },
                          { label: "Guatemala", value: "Guatemala" },
                          { label: "Honduras", value: "Honduras" },
                          { label: "Nicaragua", value: "Nicaragua" },
                          { label: "Panama", value: "Panama" },
                        ],
                      },
                      {
                        label: "Caribbean",
                        options: [
                          { label: "American Samoa", value: "American Samoa" },
                          { label: "Anguilla", value: "Anguilla" },
                          { label: "Antigua and Barbuda", value: "Antigua and Barbuda" },
                          { label: "Aruba", value: "Aruba" },
                          { label: "Bahamas", value: "Bahamas" },
                          { label: "Barbados", value: "Barbados" },
                          { label: "Bermuda", value: "Bermuda" },
                          { label: "British Virgin Islands", value: "British Virgin Islands" },
                          { label: "Cayman Islands", value: "Cayman Islands" },
                          { label: "Curacao", value: "Curacao" },
                          { label: "Dominica", value: "Dominica" },
                          { label: "Dominican Republic", value: "Dominican Republic" },
                          { label: "Fiji Islands, Repub. of", value: "Fiji Islands, Repub. of" },
                          { label: "Haiti", value: "Haiti" },
                          { label: "Jamaica", value: "Jamaica" },
                          { label: "St. Lucia", value: "St. Lucia" },
                          { label: "Trinidad and Tobago", value: "Trinidad and Tobago" },
                        ],
                      },
                      {
                        label: "South America",
                        options: [
                          { label: "Argentina", value: "Argentina" },
                          { label: "Bolivia", value: "Bolivia" },
                          { label: "Brazil", value: "Brazil" },
                          { label: "Chile", value: "Chile" },
                          { label: "Colombia", value: "Colombia" },
                          { label: "Ecuador", value: "Ecuador" },
                          { label: "Guyana", value: "Guyana" },
                          { label: "Paraguay, Repub. of", value: "Paraguay, Repub. of" },
                          { label: "Peru", value: "Peru" },
                          { label: "Uruguay", value: "Uruguay" },
                          { label: "Venezuela", value: "Venezuela" },
                        ],
                      },
                      {
                        label: "Europe",
                        options: [
                          { label: "Austria", value: "Austria" },
                          { label: "Belgium", value: "Belgium" },
                          { label: "Bulgaria", value: "Bulgaria" },
                          { label: "Croatia", value: "Croatia" },
                          { label: "Cyprus", value: "Cyprus" },
                          { label: "Czech Republic", value: "Czech Republic" },
                          { label: "Denmark", value: "Denmark" },
                          { label: "England", value: "England" },
                          { label: "Estonia", value: "Estonia" },
                          { label: "Finland", value: "Finland" },
                          { label: "France", value: "France" },
                          { label: "Germany", value: "Germany" },
                          { label: "Greece", value: "Greece" },
                          { label: "Hungary", value: "Hungary" },
                          { label: "Iceland", value: "Iceland" },
                          { label: "Ireland", value: "Ireland" },
                          { label: "Italy", value: "Italy" },
                          { label: "Latvia", value: "Latvia" },
                          { label: "Lebanon", value: "Lebanon" },
                          { label: "Luxembourg", value: "Luxembourg" },
                          { label: "Macedonia, Repub. of.", value: "Macedonia, Repub. of." },
                          { label: "Monaco", value: "Monaco" },
                          { label: "Netherlands", value: "Netherlands" },
                          { label: "Northern Ireland", value: "Northern Ireland" },
                          { label: "Norway", value: "Norway" },
                          { label: "Poland", value: "Poland" },
                          { label: "Portugal", value: "Portugal" },
                          { label: "Romania", value: "Romania" },
                          { label: "Scotland", value: "Scotland" },
                          { label: "Spain", value: "Spain" },
                          { label: "Sweden", value: "Sweden" },
                          { label: "Switzerland", value: "Switzerland" },
                          { label: "Turkey", value: "Turkey" },
                          { label: "Ukraine", value: "Ukraine" },
                          { label: "Wales", value: "Wales" },
                        ],
                      },
                      {
                        label: "Central/South Asia and Middle East",
                        options: [
                          { label: "Bangladesh", value: "Bangladesh" },
                          { label: "India", value: "India" },
                          { label: "Israel", value: "Israel" },
                          { label: "Jordan", value: "Jordan" },
                          { label: "Kuwait", value: "Kuwait" },
                          { label: "Pakistan", value: "Pakistan" },
                          { label: "Russia", value: "Russia" },
                          { label: "Saudi Arabia, Kingdom of", value: "Saudi Arabia, Kingdom of" },
                          { label: "United Arab Emirates", value: "United Arab Emirates" },
                        ],
                      },
                      {
                        label: "Eastern Asia and Pacific",
                        options: [
                          { label: "Australia", value: "Australia" },
                          { label: "China", value: "China" },
                          { label: "Hong Kong", value: "Hong Kong" },
                          { label: "Indonesia", value: "Indonesia" },
                          { label: "Japan", value: "Japan" },
                          { label: "Korea, Repub. of", value: "Korea, Repub. of" },
                          { label: "Malaysia", value: "Malaysia" },
                          { label: "New Zealand", value: "New Zealand" },
                          { label: "Philippines", value: "Philippines" },
                          { label: "Singapore, Repub. of", value: "Singapore, Repub. of" },
                          { label: "Taiwan", value: "Taiwan" },
                          { label: "Thailand", value: "Thailand" },
                          { label: "Vietnam", value: "Vietnam" },
                        ],
                      },
                      {
                        label: "Africa",
                        options: [
                          { label: "Algeria", value: "Algeria" },
                          { label: "Burkina Faso", value: "Burkina Faso" },
                          { label: "Cameroon", value: "Cameroon" },
                          { label: "Cote D'Ivoire, Repub. of", value: "Cote D'Ivoire, Repub. of" },
                          { label: "Egypt", value: "Egypt" },
                          { label: "Equatorial Guinea, Repub. of", value: "Equatorial Guinea, Repub. of" },
                          { label: "Ethiopia", value: "Ethiopia" },
                          { label: "Ghana", value: "Ghana" },
                          { label: "Kenya", value: "Kenya" },
                          { label: "Madagascar, Repub. of", value: "Madagascar, Repub. of" },
                          { label: "Mauritius", value: "Mauritius" },
                          { label: "Morocco", value: "Morocco" },
                          { label: "Nigeria, Fed. Repub. of", value: "Nigeria, Fed. Repub. of" },
                          { label: "Qatar", value: "Qatar" },
                          { label: "Republic of Mali", value: "Republic of Mali" },
                          { label: "Senegal", value: "Senegal" },
                          { label: "South Africa, Repub. of", value: "South Africa, Repub. of" },
                          { label: "Tanzania", value: "Tanzania" },
                          { label: "Zambia", value: "Zambia" },
                        ],
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row wrap={false}>
            <Col flex="auto">
              <Form form={form} layout="vertical">
                <Form.Item label="Terminal Markets" name="requiredMarkValue">
                  <Select
                    placeholder="Select Terminal markets"
                    // defaultValue="lucy"
                    style={{ width: "100%" }}
                    onChange={handleChange}
                    mode="multiple"
                    allowClear
                    options={[
                      {
                        value: "Jefferson County Truck Growers Association/Alabama Farmers Market | Birmingham, AL",
                        label: "Jefferson County Truck Growers Association/Alabama Farmers Market | Birmingham, AL",
                      },
                      {
                        value: "Montgomery State Farmers Market | Montgomery, AL",
                        label: "Montgomery State Farmers Market | Montgomery, AL",
                      },
                      {
                        value: "Los Angeles Wholesale Produce Market | Los Angeles, CA",
                        label: "Los Angeles Wholesale Produce Market | Los Angeles, CA",
                      },
                      {
                        value: "Seventh Street City Market | Los Angeles, CA",
                        label: "Seventh Street City Market | Los Angeles, CA",
                      },
                      { value: "Oakland Produce Market | Oakland, CA", label: "Oakland Produce Market | Oakland, CA" },
                      { value: "The SF Market | San Francisco, CA", label: "The SF Market | San Francisco, CA" },
                      {
                        value: "Golden Gate Produce Terminal | So. San Francisco, CA",
                        label: "Golden Gate Produce Terminal | So. San Francisco, CA",
                      },
                      {
                        value: "State of Connecticut Regional Market | Hartford, CT",
                        label: "State of Connecticut Regional Market | Hartford, CT",
                      },
                      {
                        value: "Florida City State Farmers Market | Florida City, FL",
                        label: "Florida City State Farmers Market | Florida City, FL",
                      },
                      {
                        value: "Fort Myers State Farmers Market | Fort Myers, FL",
                        label: "Fort Myers State Farmers Market | Fort Myers, FL",
                      },
                      {
                        value: "Fort Pierce State Farmers Market | Fort Pierce, FL",
                        label: "Fort Pierce State Farmers Market | Fort Pierce, FL",
                      },
                      {
                        value: "Immokalee State Farmers Market | Immokalee, FL",
                        label: "Immokalee State Farmers Market | Immokalee, FL",
                      },
                      { value: "Miami Produce Center | Miami, FL", label: "Miami Produce Center | Miami, FL" },
                      {
                        value: "Plant City State Farmers Market | Plant City, FL",
                        label: "Plant City State Farmers Market | Plant City, FL",
                      },
                      {
                        value: "Edward L. Myrick State Farmers Market | Pompano Beach, FL",
                        label: "Edward L. Myrick State Farmers Market | Pompano Beach, FL",
                      },
                      {
                        value: "Tampa Wholesale Produce Market | Tampa, FL",
                        label: "Tampa Wholesale Produce Market | Tampa, FL",
                      },
                      {
                        value: "Cordele State Farmers Market | Cordele, GA",
                        label: "Cordele State Farmers Market | Cordele, GA",
                      },
                      {
                        value: "Atlanta State Farmers Market | Forest Park, GA",
                        label: "Atlanta State Farmers Market | Forest Park, GA",
                      },
                      {
                        value: "Savannah State Farmers Market | Savannah, GA",
                        label: "Savannah State Farmers Market | Savannah, GA",
                      },
                      {
                        value: "Thomasville State Farmers Market | Thomasville, GA",
                        label: "Thomasville State Farmers Market | Thomasville, GA",
                      },
                      {
                        value: "Chicago International Produce Market | Chicago, IL",
                        label: "Chicago International Produce Market | Chicago, IL",
                      },
                      {
                        value: "Louisville Produce Terminal | Louisville, KY",
                        label: "Louisville Produce Terminal | Louisville, KY",
                      },
                      {
                        value: "New England Produce Center | Chelsea, MA",
                        label: "New England Produce Center | Chelsea, MA",
                      },
                      {
                        value: "Maryland Wholesale Produce Market | Jessup, MD",
                        label: "Maryland Wholesale Produce Market | Jessup, MD",
                      },
                      { value: "Detroit Eastern Market | Detroit, MI", label: "Detroit Eastern Market | Detroit, MI" },
                      {
                        value: "Detroit Produce Terminal | Detroit, MI",
                        label: "Detroit Produce Terminal | Detroit, MI",
                      },
                      {
                        value: "St. Louis Produce Market | St. Louis, MO",
                        label: "St. Louis Produce Market | St. Louis, MO",
                      },
                      {
                        value: "Chihuahua Wholesale Produce Market | Chihuahua, MX",
                        label: "Chihuahua Wholesale Produce Market | Chihuahua, MX",
                      },
                      {
                        value: "Culiacan Wholesale Produce Market | Culiacan, MX",
                        label: "Culiacan Wholesale Produce Market | Culiacan, MX",
                      },
                      {
                        value: "Guadalajara Wholesale Produce Market | Guadalajara, MX",
                        label: "Guadalajara Wholesale Produce Market | Guadalajara, MX",
                      },
                      {
                        value: "Mexico City Wholesale Produce Market | Mexico City, MX",
                        label: "Mexico City Wholesale Produce Market | Mexico City, MX",
                      },
                      {
                        value: "Western North Carolina Farmers Market | Asheville, NC",
                        label: "Western North Carolina Farmers Market | Asheville, NC",
                      },
                      { value: "Raleigh Farmers Market | Raleigh, NC", label: "Raleigh Farmers Market | Raleigh, NC" },
                      {
                        value: "Vineland Co-op Produce Auction Assn., Inc. | Vineland, NJ",
                        label: "Vineland Co-op Produce Auction Assn., Inc. | Vineland, NJ",
                      },
                      {
                        value: "Hunts Point Terminal Produce Co-op Association, Inc. | Bronx, NY",
                        label: "Hunts Point Terminal Produce Co-op Association, Inc. | Bronx, NY",
                      },
                      {
                        value: "Brooklyn Terminal Market | Brooklyn, NY",
                        label: "Brooklyn Terminal Market | Brooklyn, NY",
                      },
                      {
                        value: "Niagara Frontier Food Terminal | Buffalo, NY",
                        label: "Niagara Frontier Food Terminal | Buffalo, NY",
                      },
                      {
                        value: "Capital District Regional Market | Menands, NY",
                        label: "Capital District Regional Market | Menands, NY",
                      },
                      {
                        value: "Genesee Valley Regional Market Authority | Rochester, NY",
                        label: "Genesee Valley Regional Market Authority | Rochester, NY",
                      },
                      {
                        value: "Central New York Regional Market Authority | Syracuse, NY",
                        label: "Central New York Regional Market Authority | Syracuse, NY",
                      },
                      {
                        value: "Cleveland Produce Terminal | Cleveland, OH",
                        label: "Cleveland Produce Terminal | Cleveland, OH",
                      },
                      {
                        value: "Produce Terminal Company | Columbus, OH",
                        label: "Produce Terminal Company | Columbus, OH",
                      },
                      { value: "Ontario Food Terminal | Toronto, ON", label: "Ontario Food Terminal | Toronto, ON" },
                      {
                        value: "Philadelphia Wholesale Produce Market | Philadelphia, PA",
                        label: "Philadelphia Wholesale Produce Market | Philadelphia, PA",
                      },
                      {
                        value: "South Carolina State Farmers Market | West Columbia, SC",
                        label: "South Carolina State Farmers Market | West Columbia, SC",
                      },
                      { value: "Houston Produce Center | Houston, TX", label: "Houston Produce Center | Houston, TX" },
                      {
                        value: "McAllen Produce Terminal Market | McAllen, TX",
                        label: "McAllen Produce Terminal Market | McAllen, TX",
                      },
                      {
                        value: "San Antonio Produce Terminal Market | San Antonio, TX",
                        label: "San Antonio Produce Terminal Market | San Antonio, TX",
                      },
                      {
                        value: "San Antonio Wholesale Produce Market | San Antonio, TX",
                        label: "San Antonio Wholesale Produce Market | San Antonio, TX",
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
          <Row wrap={false}>
            <Col flex="auto">
              <Form form={form} layout="vertical">
                <Form.Item label="US or Canada Cities" name="getCities">
                  <Select
                    placeholder="Search cities"
                    // defaultValue="lucy"
                    style={{ width: "100%" }}
                    onChange={handleCityChange}
                    mode="multiple"
                    allowClear
                    options={[
                      {
                        value: "Jefferson County Truck Growers Association/Alabama Farmers Market | Birmingham, AL",
                        label: "Jefferson County Truck Growers Association/Alabama Farmers Market | Birmingham, AL",
                      },
                      {
                        value: "Montgomery State Farmers Market | Montgomery, AL",
                        label: "Montgomery State Farmers Market | Montgomery, AL",
                      },
                      {
                        value: "Los Angeles Wholesale Produce Market | Los Angeles, CA",
                        label: "Los Angeles Wholesale Produce Market | Los Angeles, CA",
                      },
                      {
                        value: "Seventh Street City Market | Los Angeles, CA",
                        label: "Seventh Street City Market | Los Angeles, CA",
                      },
                      { value: "Oakland Produce Market | Oakland, CA", label: "Oakland Produce Market | Oakland, CA" },
                      { value: "The SF Market | San Francisco, CA", label: "The SF Market | San Francisco, CA" },
                      {
                        value: "Golden Gate Produce Terminal | So. San Francisco, CA",
                        label: "Golden Gate Produce Terminal | So. San Francisco, CA",
                      },
                      {
                        value: "State of Connecticut Regional Market | Hartford, CT",
                        label: "State of Connecticut Regional Market | Hartford, CT",
                      },
                      {
                        value: "Florida City State Farmers Market | Florida City, FL",
                        label: "Florida City State Farmers Market | Florida City, FL",
                      },
                      {
                        value: "Fort Myers State Farmers Market | Fort Myers, FL",
                        label: "Fort Myers State Farmers Market | Fort Myers, FL",
                      },
                      {
                        value: "Fort Pierce State Farmers Market | Fort Pierce, FL",
                        label: "Fort Pierce State Farmers Market | Fort Pierce, FL",
                      },
                      {
                        value: "Immokalee State Farmers Market | Immokalee, FL",
                        label: "Immokalee State Farmers Market | Immokalee, FL",
                      },
                      { value: "Miami Produce Center | Miami, FL", label: "Miami Produce Center | Miami, FL" },
                      {
                        value: "Plant City State Farmers Market | Plant City, FL",
                        label: "Plant City State Farmers Market | Plant City, FL",
                      },
                      {
                        value: "Edward L. Myrick State Farmers Market | Pompano Beach, FL",
                        label: "Edward L. Myrick State Farmers Market | Pompano Beach, FL",
                      },
                      {
                        value: "Tampa Wholesale Produce Market | Tampa, FL",
                        label: "Tampa Wholesale Produce Market | Tampa, FL",
                      },
                      {
                        value: "Cordele State Farmers Market | Cordele, GA",
                        label: "Cordele State Farmers Market | Cordele, GA",
                      },
                      {
                        value: "Atlanta State Farmers Market | Forest Park, GA",
                        label: "Atlanta State Farmers Market | Forest Park, GA",
                      },
                      {
                        value: "Savannah State Farmers Market | Savannah, GA",
                        label: "Savannah State Farmers Market | Savannah, GA",
                      },
                      {
                        value: "Thomasville State Farmers Market | Thomasville, GA",
                        label: "Thomasville State Farmers Market | Thomasville, GA",
                      },
                      {
                        value: "Chicago International Produce Market | Chicago, IL",
                        label: "Chicago International Produce Market | Chicago, IL",
                      },
                      {
                        value: "Louisville Produce Terminal | Louisville, KY",
                        label: "Louisville Produce Terminal | Louisville, KY",
                      },
                      {
                        value: "New England Produce Center | Chelsea, MA",
                        label: "New England Produce Center | Chelsea, MA",
                      },
                      {
                        value: "Maryland Wholesale Produce Market | Jessup, MD",
                        label: "Maryland Wholesale Produce Market | Jessup, MD",
                      },
                      { value: "Detroit Eastern Market | Detroit, MI", label: "Detroit Eastern Market | Detroit, MI" },
                      {
                        value: "Detroit Produce Terminal | Detroit, MI",
                        label: "Detroit Produce Terminal | Detroit, MI",
                      },
                      {
                        value: "St. Louis Produce Market | St. Louis, MO",
                        label: "St. Louis Produce Market | St. Louis, MO",
                      },
                      {
                        value: "Chihuahua Wholesale Produce Market | Chihuahua, MX",
                        label: "Chihuahua Wholesale Produce Market | Chihuahua, MX",
                      },
                      {
                        value: "Culiacan Wholesale Produce Market | Culiacan, MX",
                        label: "Culiacan Wholesale Produce Market | Culiacan, MX",
                      },
                      {
                        value: "Guadalajara Wholesale Produce Market | Guadalajara, MX",
                        label: "Guadalajara Wholesale Produce Market | Guadalajara, MX",
                      },
                      {
                        value: "Mexico City Wholesale Produce Market | Mexico City, MX",
                        label: "Mexico City Wholesale Produce Market | Mexico City, MX",
                      },
                      {
                        value: "Western North Carolina Farmers Market | Asheville, NC",
                        label: "Western North Carolina Farmers Market | Asheville, NC",
                      },
                      { value: "Raleigh Farmers Market | Raleigh, NC", label: "Raleigh Farmers Market | Raleigh, NC" },
                      {
                        value: "Vineland Co-op Produce Auction Assn., Inc. | Vineland, NJ",
                        label: "Vineland Co-op Produce Auction Assn., Inc. | Vineland, NJ",
                      },
                      {
                        value: "Hunts Point Terminal Produce Co-op Association, Inc. | Bronx, NY",
                        label: "Hunts Point Terminal Produce Co-op Association, Inc. | Bronx, NY",
                      },
                      {
                        value: "Brooklyn Terminal Market | Brooklyn, NY",
                        label: "Brooklyn Terminal Market | Brooklyn, NY",
                      },
                      {
                        value: "Niagara Frontier Food Terminal | Buffalo, NY",
                        label: "Niagara Frontier Food Terminal | Buffalo, NY",
                      },
                      {
                        value: "Capital District Regional Market | Menands, NY",
                        label: "Capital District Regional Market | Menands, NY",
                      },
                      {
                        value: "Genesee Valley Regional Market Authority | Rochester, NY",
                        label: "Genesee Valley Regional Market Authority | Rochester, NY",
                      },
                      {
                        value: "Central New York Regional Market Authority | Syracuse, NY",
                        label: "Central New York Regional Market Authority | Syracuse, NY",
                      },
                      {
                        value: "Cleveland Produce Terminal | Cleveland, OH",
                        label: "Cleveland Produce Terminal | Cleveland, OH",
                      },
                      {
                        value: "Produce Terminal Company | Columbus, OH",
                        label: "Produce Terminal Company | Columbus, OH",
                      },
                      { value: "Ontario Food Terminal | Toronto, ON", label: "Ontario Food Terminal | Toronto, ON" },
                      {
                        value: "Philadelphia Wholesale Produce Market | Philadelphia, PA",
                        label: "Philadelphia Wholesale Produce Market | Philadelphia, PA",
                      },
                      {
                        value: "South Carolina State Farmers Market | West Columbia, SC",
                        label: "South Carolina State Farmers Market | West Columbia, SC",
                      },
                      { value: "Houston Produce Center | Houston, TX", label: "Houston Produce Center | Houston, TX" },
                      {
                        value: "McAllen Produce Terminal Market | McAllen, TX",
                        label: "McAllen Produce Terminal Market | McAllen, TX",
                      },
                      {
                        value: "San Antonio Produce Terminal Market | San Antonio, TX",
                        label: "San Antonio Produce Terminal Market | San Antonio, TX",
                      },
                      {
                        value: "San Antonio Wholesale Produce Market | San Antonio, TX",
                        label: "San Antonio Wholesale Produce Market | San Antonio, TX",
                      },
                    ]}
                  />
                </Form.Item>
              </Form>
            </Col>
          </Row>
        </Panel>
      </Collapse>
    </div>
  );
}

export default CompanySearchContent;
