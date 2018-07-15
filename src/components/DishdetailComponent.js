import React, {Component} from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle} from 'reactstrap';
import {DISHES} from '../shared/dishes';



class DishDetail extends Component {
		constructor(props) {
		super(props); 

		this.state ={
			selectedDish: null,
		}
	}

	renderDish(dish) {
		this.setState({selectedDish:dish});
	}

    renderComments(dish) {
        return (
            dish.comments.map(comment => {
                return (
                    <div key = {comment.id}>
                        <p>{comment.comment}</p>
                        <p>{comment.author}</p>
                        <p>{comment.date}</p>
                    </div>
                ); 
            })
        ); 
    }

	render() {
        const dish = this.props.selectedDish;
        if (dish) {
            return (
                <div className="container">
                	<div className = "row">
                    	<div className="col-12 col-md-5 m-1">
                    		<Card>
                				 <CardImg width="100%" src={dish.image} alt={dish.name} />
                 				<CardBody>
                   				 	<CardTitle>{dish.name}</CardTitle>
                    				<CardText>{dish.description}</CardText>
                				</CardBody>
           					 </Card>
                   		 </div>
                        <div className = "col-12 col-md-5 m-1">
                            <Card>
                                <h4> Comment </h4>
                                {this.renderComments(dish)}
                            </Card>
                        </div>
                    </div>
                 </div> );
        } else {
        	return (<div></div>);
        }
    }
}


export default DishDetail;





