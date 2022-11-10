import React from 'react';
import { Card, Accordion } from 'react-bootstrap';
import useTitle from '../../Hook/useTitle';

const Blog = () => {
    useTitle('Blog');
    return (
        <div className='accordian-handel'>
            <Card className="text-center card-blog-section m-3">
                <Card.Header className='fs-3'>Question Answer Section</Card.Header>
                <Card.Body>

                    <Card.Text>
                        <Accordion defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Difference between SQL and NoSQL</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        SQL is the programming language used to interface with relational databases. Relational databases model data as records in rows and tables with logical links between them. NoSQL is a class of DBMs that are non-relational and generally do not use SQL.

                                        <Card.Text>SQL databases are efficient at processing queries and joining data across tables, making it easier to perform complex queries against structured data, including ad hoc requests. NoSQL databases lack consistency across products and typically require more work to query data, particular as query complexity increases</Card.Text>


                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header> What is JWT, and how does it work?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        SON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object. It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP).

                                        <Card.Text>Figure 1 shows that a JWT consists of three parts: a header, payload, and signature.

                                            JWTs are a good way of securely transmitting information between parties because they can be signed, which means you can be sure that the senders are who they say they are. Additionally, the structure of a JWT allows you to verify that the content hasn't been tampered with.
                                        </Card.Text>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header> What is the difference between javascript and NodeJS?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>


                                        JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node. js, on the other hand, is an interpreter or execution environment for the JavaScript programming language.

                                        <Card.Text>
                                            Node. js is sometimes misunderstood by developers as a backend framework that is exclusively used to construct servers. This is not the case; Node. js can be used on the frontend as well as the backend. Node. js is a cross-platform JavaScript runtime environment for servers and applications.
                                        </Card.Text>
                                    </Card.Text>




                                </Accordion.Body>
                            </Accordion.Item>


                            <Accordion.Item eventKey="3">
                                <Accordion.Header>How does the private route work?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>


                                        The private route component is similar to the public route, the only change is that redirect URL and authenticate condition. If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated

                                        <Card.Text>
                                            Protected routes are those routes that only grant access to authorized users. This means that users must first meet certain conditions before accessing that specific route. For instance, your application can require only logged-in users be able to visit the dashboard page.
                                        </Card.Text>
                                    </Card.Text>




                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>




                    </Card.Text>

                </Card.Body>
                <Card.Footer className="text-muted">.....</Card.Footer>
            </Card>

        </div>
    );
};

export default Blog;