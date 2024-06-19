import { useState } from 'react';
import CommHeader from '../components/CommHeader';

import { Layout, Flex, Typography, Tabs, Progress, Slider } from 'antd';

const { Title } = Typography;
const { Content } = Layout;

const contentStyle = {
  padding: '50px 20px',
};
const layoutStyle = {
  overflow: 'hidden',
  backgroundColor: '#fff',
};

function Utill() {
  const [stepsCount, setStepsCount] = useState(5);
  const [stepsGap, setStepsGap] = useState(7);

  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <CommHeader />

        <Content style={contentStyle}>
          <Title level={2}>Tabs</Title>

          <Tabs
            defaultActiveKey="1"
            centered
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab Pane ${id}`,
              };
            })}
          />
        </Content>

        <Content style={contentStyle}>
          <Title level={2}>Progress</Title>

          <Flex gap="small" vertical>
            <Progress percent={30} />
            <Progress percent={50} status="active" />
            <Progress percent={70} status="exception" />
            <Progress percent={100} />
            <Progress percent={50} showInfo={false} />
          </Flex>

          <Title level={2}>Circular progress</Title>

          <Typography.Title level={5}>Custom count:</Typography.Title>
          <Slider
            min={2}
            max={10}
            value={stepsCount}
            onChange={setStepsCount}
          />
          <Typography.Title level={5}>Custom gap:</Typography.Title>
          <Slider
            step={4}
            min={0}
            max={40}
            value={stepsGap}
            onChange={setStepsGap}
          />
          <Flex
            wrap
            gap="middle"
            style={{
              marginTop: 16,
            }}
          >
            <Progress
              type="dashboard"
              steps={8}
              percent={50}
              trailColor="rgba(0, 0, 0, 0.06)"
              strokeWidth={20}
            />
            <Progress
              type="circle"
              percent={100}
              steps={{
                count: stepsCount,
                gap: stepsGap,
              }}
              trailColor="rgba(0, 0, 0, 0.06)"
              strokeWidth={20}
            />
          </Flex>
        </Content>
      </Layout>
    </Flex>
  );
}
export default Utill;
