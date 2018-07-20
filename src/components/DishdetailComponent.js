import React  from 'react';
import {Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem} from 'reactstrap';
import {DISHES} from '../shared/dishes';
import {Link} from 'react-router-dom';





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



export default Dishdetail;






