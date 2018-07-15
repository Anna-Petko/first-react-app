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
                   	</div>
                 </div> );
        } else {
        	return (<div></div>);
        }
    }
}


export default DishDetail;





