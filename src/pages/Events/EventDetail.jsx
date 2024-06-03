import React from 'react';
import { Layout, Row, Col, Carousel, Button, Typography, List, Table } from 'antd';
import { LeftOutlined, RightOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import './ProductDetail.css'; // Import custom styles

const { Content } = Layout;
const { Title, Paragraph } = Typography;

const product = {
  id: '1',
  name: 'TechWave XR',
  description:
    'TechWave XR delivers an immersive augmented reality experience with advanced motion tracking, high-resolution displays, and built-in surround sound. Perfect for both entertainment and professional applications, it combines comfort with cutting-edge technology. Features include a wide field of view, ergonomic design for extended use, and seamless wireless connectivity.',
  price: 599.99,
  images: [
    'https://media.licdn.com/dms/image/D4E12AQFIAI60TfDNoQ/article-cover_image-shrink_720_1280/0/1699357029098?e=2147483647&v=beta&t=PJP_oRsI_1Xs07B_Jnz2dqgd7hjIh2eHupVw8TrRvz4',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIuRPOUbvKEzK854neml6HJZXwS0PmrzMnrunmTbAabuH2P-uGLNCAbQ4sVJNzt8F7DfY&usqp=CAU',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3jjAbpalRdDMGIHfFHi1xwdaOFadxuOQ9MKJXOZ9VXHsPTKyARvPX5rcNpmaYXDJEeAQ&usqp=CAU',
  ],
  video: 'https://youtu.be/TX9qSaGXFyg?feature=shared',
  features: [
    '8K resolution',
    '144 Hz refresh rate',
    'Advanced AR motion tracking',
    'Built-in surround sound',
    'Ergonomic design',
    'Wide field of view',
    'Wireless connectivity',
  ],
  specifications: {
    resolution: '7680x4320',
    refreshRate: '144 Hz',
    tracking: '6 DoF (Degrees of Freedom)',
    audio: 'Built-in surround sound',
    connectivity: 'Wi-Fi, Bluetooth',
    batteryLife: '8 hours',
    weight: '550 grams',
  },
  releaseDate: '2024-06-15',
  category: 'AR Headset',
  rating: 4.9,
  reviews: 340,
  stock: 200,
  preOrderLink: '/order',
};

const columns = [
  {
    title: 'Feature',
    dataIndex: 'feature',
    key: 'feature',
  },
  {
    title: 'Specification',
    dataIndex: 'specification',
    key: 'specification',
  },
];

const dataSource = Object.entries(product.specifications).map(([key, value]) => ({
  key,
  feature: key,
  specification: value,
}));

const ProductDetail = () => {
  return (
    <Layout>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]} justify="center">
          <Col xs={24} md={16}>
            <Carousel autoplay autoplaySpeed={5000}>
              {product.images.map((image, index) => (
                <div key={index}>
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="carousel-image"
                  />
                </div>
              ))}
            </Carousel>
          </Col>
          <Col xs={24} md={16} style={{ textAlign: 'center' }}>
            <Title level={2}>{product.name}</Title>
            <Paragraph>{product.description}</Paragraph>
            <Title level={4} style={{ color: 'green' }}>
              ${product.price}
            </Title>
            <Button
              type="primary"
              icon={<ShoppingCartOutlined />}
              size="large"
              href={product.preOrderLink}
            >
              Pre-Order Now
            </Button>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} md={12}>
            <Title level={3}>Features</Title>
            <List
              dataSource={product.features}
              renderItem={(item) => (
                <List.Item>
                  <Typography.Text>{item}</Typography.Text>
                </List.Item>
              )}
            />
          </Col>
          <Col xs={24} md={12}>
            <Title level={3}>Specifications</Title>
            <Table columns={columns} dataSource={dataSource} pagination={false} />
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px', textAlign: 'center' }}>
          <Col xs={24}>
            <Title level={3}>Watch Video</Title>
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/kzKpwZt2LtY?si=Hk_PzAV5-ljP3oy1"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </Col>
        </Row>
        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24}>
            <Title level={3}>Product Gallery</Title>
            <Row gutter={[16, 16]} justify="center">
              {product.images.map((image, index) => (
                <Col xs={24} sm={12} md={6} key={index}>
                  <img
                    src={image}
                    alt={`${product.name} view ${index + 1}`}
                    className="gallery-image"
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Content>
    </Layout>
  );
};

export default ProductDetail;
