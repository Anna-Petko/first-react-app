import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {DISHES} from '../shared/dishes';



class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
        };
    }


    renderDish(dish) {
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

    renderComments(comments) {
        if (!comments) {
            return <div></div>;
        }
        return (
            <div>
                <h4>Comments</h4>
                <ul className="list-unstyled" >
                    {this.props.dish.comments.map((com) => 
                        <div key={com.id}>
                            <li>{com.comment}</li>
                            <li>{com.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(com.date)))}</li>
                        </div>)}
                </ul>
            </div>
        );
    }

    render() {
        if (!this.props.dish) {
            return <div></div>;
        }
        return (
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                <div className="col-12 col-md-5 m-1">
                    {this.renderComments(this.props.dish.comments)}
                </div>
            </div>
        );
    }
}


export default Dishdetail;






