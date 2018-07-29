import React, {Component}  from 'react';
import {Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, 
        Button, Modal, ModalHeader, ModalBody, Form, FormGroup,Label, Input, Row, Col} from 'reactstrap';
import {Link} from 'react-router-dom';
import {Control, LocalForm, Errors} from 'react-redux-form';

const required = (val) => val && val.length;
const minLength = (len) => (val) => val && (val.length >= len);
const maxLength = (len) => (val) => !val || (val.length <= len);


    function RenderDish({dish}) {
        if (dish)
            return(
                <Card>
                    <CardImg  src={dish.image} alt={dish.name} />
                    <CardBody>
                      <CardTitle>{dish.name}</CardTitle>
                      <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
                
            );
        else
            return(
                <div></div>
         );
    }

    function RenderComments({comments}) {
        if (!comments) {
            return <div></div>;
    }
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled" >
                    {comments.map((comment) => 
                        <div key={comment.id}>
                            <li>{comment.comment}</li>
                            <li>{comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date)))}</li>
                        </div>)}
                </ul>
                <CommentForm />
            </div>

        );
    }

    const  Dishdetail =(props) => {
        if (!props.dish) {
            return <div></div>;
        }
        return (
            <div className = "row">
                <Breadcrumb>
                    <BreadcrumbItem><Link to="/home">Home</Link></BreadcrumbItem>
                    <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
                    <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                 </Breadcrumb>
                <div className="col-12">
                    <h3>{props.dish.name}</h3>
                    <hr />
                </div>   
                <div className="col-12 col-md-5 m-1">
                    <RenderDish dish = {props.dish} />
                 </div>
                <div className="col-12 col-md-5 m-1">
                    <RenderComments comments ={props.comments} />
                </div>
            </div>
            
        );
    }




     class CommentForm extends Component {
        
        constructor(props) {
            super(props);
            this.state = {
                modal: false
            }

       this.toggle = this.toggle.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);

    }

    toggle() {
    this.setState({
      modal: !this.state.modal
    });
  }

    handleSubmit(values) {
        console.log("Current state is: " + JSON.stringify(values));
        alert("Current state is: " + JSON.stringify(values));
    }

        render() {
            return(
                <div className = "container">
                    <div className="row">
                        <div className = "col-12">
                            <Button type = "submit" value = "submit" outline color = "secondary"
                                onClick = {this.toggle}>
                                <span className="fa fa-pencil"></span> 
                                    Submit Comment
                            </Button>
                            <Modal isOpen = {this.state.modal} toggle = {this.toggle}>
                                <ModalHeader toggle={this.toggleModal}>
                                    Submit Comment
                                </ModalHeader>
                                <ModalBody> 
                                    <div className = "col-12">
                                        <LocalForm isOpen = {this.state.modal} toggle={this.toggle}
                                                    onSubmit = {(values) => this.handleSubmit(values)}>
                                            <Row className = "form-group">
                                                <Label htmlFor = "rating" md = {12}>Rating</Label>
                                                <Col md ={12}>
                                                <Control.select model = ".rating" id = "raing" name = "rating"
                                                        className = "form-control">
                                                    <option>1</option>
                                                    <option>2</option>
                                                    <option>3</option>
                                                    <option>4</option>
                                                    <option>5</option>
                                                </Control.select>
                                                </Col>
                                            </Row>
                                            <Row className = "form-group">
                                                <Label htmlFor = "author" md = {12}>Your Name</Label>
                                                <Col md={12}>
                                                <Control.text model = ".author" id = "author" name = "author"
                                                        placeholder = "Your Name"  className = "form-control"
                                                        validators = {{
                                                            required, minLength: minLength(3), maxLength: maxLength(15)
                                                        }} />
                                                <Errors
                                                className = "text-danger"
                                                model = ".author"
                                                show = "touched"
                                                messages = {{
                                                    required: 'Required',
                                                    minLength: 'Must be greater than 2 characters',
                                                    maxLength: 'Must be less or equal 15 characters'

                                                }}
                                                 />
                                                </Col>
                                            </Row>
                                            <Row className = "form-group">
                                                <Label htmlFor = "comment" md = {12}>Comment</Label>
                                                <Col md={12}>
                                                <Control.text model = ".comment" id = "comment" name = "comment"
                                                    className = "form-control" />
                                                </Col>
                                            </Row>
                                            <Row className = "form-group">
                                                <Col md = {{size: 10}}>
                                                    <Button type = "submit" color = "primary">
                                                        Submit
                                                    </Button>
                                                </Col>
                                            </Row>
                                        </LocalForm>
                                    </div>
                                </ModalBody>
                            </Modal>
                        </div>
                    </div>
                </div>
            );

        }

    }

export default Dishdetail;






