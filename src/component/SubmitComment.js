import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    Breadcrumb,
    BreadcrumbItem,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Input,
    Label,
    Col,
    Button,
} from 'reactstrap';
import { useState, useEffect } from 'react';

function SubmitComment() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [rating, setRating] = useState('');
    const [name, setName] = useState('');
    const [message, setMessage] = useState('');

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };
    const handleSubmit = () => {};
    return (
        <>
            <Button onClick={toggleModal}>Submit Comment</Button>
            <Modal isOpen={isModalOpen}>
                <ModalHeader onClick={toggleModal}>Submit Comment</ModalHeader>
                <ModalBody>
                    <Form onSubmit={handleSubmit}>
                        <FormGroup>
                            <Label htmlFor="rating">Rating</Label>
                            <Input
                                type="number"
                                id="rating"
                                name="rating"
                                value={rating}
                                onChange={(e) => setRating(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="name">Your Name</Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label htmlFor="message">Your Comment</Label>
                            <Input
                                type="textarea"
                                id="message"
                                name="message"
                                rows="12"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                            ></Input>
                        </FormGroup>
                        <FormGroup row>
                            <Col>
                                <Button type="submit" color="primary">
                                    Send Comment
                                </Button>
                            </Col>
                        </FormGroup>
                    </Form>
                </ModalBody>
            </Modal>
        </>
    );
}

export default SubmitComment;
