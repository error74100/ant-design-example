import CommHeader from '../components/CommHeader';
import { PlusOutlined } from '@ant-design/icons';
import {
  Button,
  Cascader,
  Checkbox,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Slider,
  Switch,
  TreeSelect,
  Upload,
  Typography,
  Layout,
  Flex,
  Row,
  Col,
} from 'antd';

const { Title } = Typography;

const { Content } = Layout;

const contentStyle = {
  padding: '50px 20px',
};
const layoutStyle = {
  overflow: 'hidden',
  backgroundColor: '#fff',
};

const colStyle = {
  padding: '10px',
  backgroundColor: '#ddd',
};
const colStyle2 = {
  padding: '10px',
  backgroundColor: '#f2f2f2',
};

const { RangePicker } = DatePicker;
const { TextArea } = Input;
const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};

function General() {
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <CommHeader />

        <Content style={contentStyle}>
          <Title level={2}>Button</Title>

          <Flex gap="small" wrap>
            <Button type="primary">Primary Button</Button>
            <Button>Default Button</Button>
            <Button type="dashed">Dashed Button</Button>
          </Flex>
        </Content>

        <Content style={contentStyle}>
          <Title level={2}>Grid</Title>

          <Row>
            <Col span={24} style={colStyle}>
              col
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={12} style={colStyle}>
              col-12
            </Col>
            <Col span={12} style={colStyle2}>
              col-12
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={8} style={colStyle}>
              col-8
            </Col>
            <Col span={8} style={colStyle2}>
              col-8
            </Col>
            <Col span={8} style={colStyle}>
              col-8
            </Col>
          </Row>
          <br />
          <Row>
            <Col span={6} style={colStyle}>
              col-6
            </Col>
            <Col span={6} style={colStyle2}>
              col-6
            </Col>
            <Col span={6} style={colStyle}>
              col-6
            </Col>
            <Col span={6} style={colStyle2}>
              col-6
            </Col>
          </Row>
        </Content>

        <Content style={contentStyle}>
          <Title level={2}>Form</Title>

          <>
            <Form
              labelCol={{
                span: 4,
              }}
              wrapperCol={{
                span: 14,
              }}
              layout="horizontal"
              style={{
                maxWidth: 600,
              }}
            >
              <Form.Item
                label="Checkbox"
                name="disabled"
                valuePropName="checked"
              >
                <Checkbox>Checkbox</Checkbox>
              </Form.Item>
              <Form.Item label="Radio">
                <Radio.Group>
                  <Radio value="apple"> Apple </Radio>
                  <Radio value="pear"> Pear </Radio>
                </Radio.Group>
              </Form.Item>
              <Form.Item label="Input">
                <Input />
              </Form.Item>
              <Form.Item label="Select">
                <Select>
                  <Select.Option value="demo">Demo</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="TreeSelect">
                <TreeSelect
                  treeData={[
                    {
                      title: 'Light',
                      value: 'light',
                      children: [
                        {
                          title: 'Bamboo',
                          value: 'bamboo',
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="Cascader">
                <Cascader
                  options={[
                    {
                      value: 'zhejiang',
                      label: 'Zhejiang',
                      children: [
                        {
                          value: 'hangzhou',
                          label: 'Hangzhou',
                        },
                      ],
                    },
                  ]}
                />
              </Form.Item>
              <Form.Item label="DatePicker">
                <DatePicker />
              </Form.Item>
              <Form.Item label="RangePicker">
                <RangePicker />
              </Form.Item>
              <Form.Item label="InputNumber">
                <InputNumber />
              </Form.Item>
              <Form.Item label="TextArea">
                <TextArea rows={4} />
              </Form.Item>
              <Form.Item label="Switch" valuePropName="checked">
                <Switch />
              </Form.Item>
              <Form.Item
                label="Upload"
                valuePropName="fileList"
                getValueFromEvent={normFile}
              >
                <Upload action="/upload.do" listType="picture-card">
                  <button
                    style={{
                      border: 0,
                      background: 'none',
                    }}
                    type="button"
                  >
                    <PlusOutlined />
                    <div
                      style={{
                        marginTop: 8,
                      }}
                    >
                      Upload
                    </div>
                  </button>
                </Upload>
              </Form.Item>
              <Form.Item label="Button">
                <Button>Button</Button>
              </Form.Item>
              <Form.Item label="Slider">
                <Slider />
              </Form.Item>
              <Form.Item label="ColorPicker">
                <ColorPicker />
              </Form.Item>
            </Form>
          </>
        </Content>
      </Layout>
    </Flex>
  );
}
export default General;
