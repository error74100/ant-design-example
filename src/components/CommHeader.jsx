import { Button } from 'antd';
import { useNavigate } from 'react-router-dom';

import { Layout } from 'antd';

const { Header } = Layout;

const headerStyle = {
  textAlign: 'center',
  height: 64,
  paddingInline: 48,
  lineHeight: '64px',
  backgroundColor: '#f2f2f2',
};

const buttonStyle = {
  margin: '0 5px',
};

function CommHeader() {
  const nav = useNavigate();

  return (
    <>
      <Header style={headerStyle}>
        <Button
          style={buttonStyle}
          type="primary"
          onClick={() => {
            nav('/');
          }}
        >
          Home
        </Button>
        <Button
          style={buttonStyle}
          onClick={() => {
            nav('/general');
          }}
        >
          General
        </Button>
        <Button
          style={buttonStyle}
          onClick={() => {
            nav('/utill');
          }}
        >
          Utill
        </Button>
      </Header>
    </>
  );
}
export default CommHeader;
