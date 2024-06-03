import React from 'react';
import { List, Typography, Divider, Space } from 'antd';
import { motion } from 'framer-motion';
import './News.scss';

const { Title, Paragraph } = Typography;

const newsItems = [
  {
    title: 'TechWave XR release date announced!',
    date: 'June 15, 2024',
    description:
      'We are excited to announce that the official launch date for the Innovatech VR Pro is June 15, 2024. Get ready to experience the future of virtual reality!',
    imageUrl: 'https://cdn.nwe.io/files/x/85/b8/dfd3ef6f946b62952e3afa536eec.jpg',
  },
  {
    title: 'New features of TechWave XR revealed',
    date: 'May 20, 2024',
    description:
      'Pre-order the Innovatech VR Pro now and be among the first to experience its groundbreaking features. Limited quantities available!',
    imageUrl:
      'https://media.licdn.com/dms/image/D4E22AQHMvFLEZw5i7A/feedshare-shrink_800/0/1710798357733?e=2147483647&v=beta&t=146ZqFQ7P7Leq2cAIRG09JsFDXdF7yUhdCsBVVJfC_o',
  },
  {
    title: 'TechWave partners with major VR studios',
    date: 'April 18, 2024',
    description:
      'TechWave has partnered with top VR studios to bring exclusive content to Innovatech VR Pro users. Stay tuned for more updates.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW09Kf8J8-PrjLNqb3SkLE44vZAKHNj3MEf-ftKUiKJxp4TFBsld3DKZ3TcVbczjboxc&usqp=CAU',
  },

  {
    title: 'TechWave hosts virtual reality conference',
    date: 'February 25, 2024',
    description:
      'Join us at the TechWave virtual reality conference to learn about the latest trends and advancements in VR technology.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW09Kf8J8-PrjLNqb3SkLE44vZAKHNj3MEf-ftKUiKJxp4TFBsld3DKZ3TcVbczjboxc&usqp=CAU',
  },

  {
    title: 'TechWave launches new website',
    date: 'December 20, 2023',
    description:
      'We are excited to announce the launch of our new website, designed to provide a better user experience and showcase our products.',
    imageUrl:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpW09Kf8J8-PrjLNqb3SkLE44vZAKHNj3MEf-ftKUiKJxp4TFBsld3DKZ3TcVbczjboxc&usqp=CAU',
  },
];

const News = () => {
  return (
    <div className="news-container">
      <Title level={2} className="news-title">
        Latest News
      </Title>
      <List
        itemLayout="vertical"
        size="large"
        dataSource={newsItems}
        renderItem={(item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <List.Item className="news-item">
              <div className="news-item-content">
                <img src={item.imageUrl} alt={item.title} className="news-item-image" />
                <div className="news-item-details">
                  <Title level={4} className="news-item-title">
                    {item.title}
                  </Title>
                  <Paragraph className="news-item-date">{item.date}</Paragraph>
                  <Paragraph className="news-item-description">{item.description}</Paragraph>
                </div>
              </div>
              <Divider />
            </List.Item>
          </motion.div>
        )}
      />
    </div>
  );
};

export default News;
