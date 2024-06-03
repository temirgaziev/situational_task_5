import React from 'react';
import { Layout, Row, Col, Typography, Card, Avatar } from 'antd';
import { TeamOutlined, RocketOutlined, HeartOutlined } from '@ant-design/icons';
import { motion } from 'framer-motion';
import './AboutUs.scss';

const { Title, Paragraph } = Typography;
const { Meta } = Card;
const { Content } = Layout;

const teamMembers = [
  {
    name: 'Patrak Brown',
    position: 'CEO',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjnBkRtfdwvYiUJ9xl7ANI50Fz91NfLtX3oL5reaZHAJSWOaw4yqnbYGc7lfhPEYeiEKQ&usqp=CAU',
  },
  {
    name: 'David Wilson',
    position: 'CTO',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSPL4mMkYopHvOZ71givs_hXUhsf0hZT1EHtaTPSKv9AScK567mqSl_fr0KOYnGPRkrbI&usqp=CAU',
  },
  {
    name: 'Emma Davis',
    position: 'COO',
    avatar:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxjdjZ43uMn_DqUpvQkOVmcwk1YFDcbmbe53g56JX_Gz8r_wXW6_Fc8fIaaCot69YO-Uc&usqp=CAU',
  },
];

const AboutUs = () => {
  return (
    <Layout className="about-us-layout">
      <Content className="about-us-content">
        <Row gutter={[32, 32]} className="about-us-section">
          <Col span={24}>
            <motion.div
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Title level={1} className="about-us-title">
                About TechWave Inc.
              </Title>
              <Paragraph className="about-us-text">
                TechWave Inc. is at the forefront of developing innovative technology solutions. Our
                latest product, TechWave XR, delivers an immersive augmented reality experience for
                users. Our mission is to revolutionize the tech industry by providing
                state-of-the-art devices that enhance everyday life.
              </Paragraph>
            </motion.div>
          </Col>
        </Row>
        <Row gutter={[32, 32]} className="about-us-section">
          <Col span={24} md={8}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="about-us-card">
                <RocketOutlined className="about-us-icon" />
                <Meta
                  title="Our Mission"
                  description="To revolutionize the technology industry with innovative and reliable products that enhance everyday life."
                />
              </Card>
            </motion.div>
          </Col>
          <Col span={24} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="about-us-card">
                <HeartOutlined className="about-us-icon" />
                <Meta
                  title="Our Vision"
                  description="To be a global leader in technology innovation, delivering exceptional value to our customers and stakeholders."
                />
              </Card>
            </motion.div>
          </Col>
          <Col span={24} md={8}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="about-us-card">
                <TeamOutlined className="about-us-icon" />
                <Meta
                  title="Our Values"
                  description="Innovation, integrity, and customer satisfaction are at the core of everything we do."
                />
              </Card>
            </motion.div>
          </Col>
        </Row>
        <Row gutter={[32, 32]} className="about-us-section">
          <Col span={24}>
            <Title level={2} className="about-us-subtitle">
              Meet Our Team
            </Title>
          </Col>
          {teamMembers.map((member, index) => (
            <Col key={index} span={24} sm={12} md={8}>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                <Card
                  className="about-us-team-card"
                  cover={<img alt={member.name} src={member.avatar} />}
                >
                  <Meta
                    avatar={<Avatar src={member.avatar} />}
                    title={member.name}
                    description={member.position}
                  />
                </Card>
              </motion.div>
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  );
};

export default AboutUs;
