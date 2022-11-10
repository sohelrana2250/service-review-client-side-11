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
                                <Accordion.Header> what is cors?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>
                                        CORS stands for Cross-Origin Resource Sharing . It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.

                                        <Card.Text>Cross-Origin Resource Sharing CORS is an HTTP-header based mechanism that allows a server to indicate any origins domain, scheme, or port other than its own from which a browser should permit loading resources.Run the server with npm nodemon . Navigate to http://localhost:6069/ingredients on your browser. You will be served with these ingredients text items. In this example, cross-origin is allowed because you're currently on the same domain, and you are executing this request from the same domain.</Card.Text>
                                    </Card.Text>
                                </Accordion.Body>
                            </Accordion.Item>

                            <Accordion.Item eventKey="2">
                                <Accordion.Header> Why are you using firebase? What other options do you have to implement authentication?</Accordion.Header>
                                <Accordion.Body>
                                    <Card.Text className='fs-5'>


                                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.

                                        <Card.Text>
                                            1. On this page.
                                            2.  Add and initialize the 3. Authentication SDK.
                                            3. Prototype and test with Firebase Local Emulator Suite.
                                            4.  Sign up new users.
                                            5.   Sign in existing users.
                                            6.   Set an authentication state observer and get user data.
                                            7. Next steps.

                                            Firebase Authentication aims to make building secure authentication systems easy, while improving the sign-in and onboarding experience for end users. It provides an end-to-end identity solution, supporting email and password accounts, phone auth, and Google, Twitter, Facebook, and GitHub login, and more.
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