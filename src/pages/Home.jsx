import CommHeader from '../components/CommHeader';
import { Flex, Layout } from 'antd';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  padding: '50px 0',
};
const layoutStyle = {
  overflow: 'hidden',
  backgroundColor: '#fff',
};

function Home() {
  return (
    <Flex gap="middle" wrap>
      <Layout style={layoutStyle}>
        <CommHeader />
        <Content style={contentStyle}>- React + Ant Design Example.</Content>
      </Layout>
    </Flex>
  );
}
export default Home;
