import Head from 'next/head'
import { Row, Col } from 'antd'

export default function Layout ({ children }) {
  return (
    <>
      <Head>
        <title>Nextjs 8g</title>
        <link rel='icon' href='/favicon.ico' />
        <link href='https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;1,200;1,300;1,400;1,500;1,600;1,700&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200&display=swap' rel='stylesheet' />
      </Head>
      <div>
        <Row>
          <Col xs={24} md={12}>
            <h1>Desde Layout</h1>
          </Col>
          <Col xs={24} md={12}>
            {children}
          </Col>
        </Row>
      </div>
    </>
  )
}
