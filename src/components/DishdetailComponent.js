import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class DishDetail extends Component {

    constructor(props) {
        super(props); 

        this.state = {
            selectedDish: null
        }
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <div > 
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
    renderComments(dish) {
        if (dish != null) {
            const dishComment = dish.comments.map((comment) => {
                return (
                    <div key={comment.id}>
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li> -- {comment.author}, {comment.date}</li>     
                        </ul>                  
                    </div>
                );
            });
            return(
                
                <div className="row">
                    
                    {dishComment}
                </div>
            )
        }
        else {
            return(
                <div></div>
            )
        }
    }
    

    render() {

        return (
            <div className="row">
                <div className="col-12 col-md-5 m-3">
                    {this.renderDish(this.props.dish)} 
                </div>
                <div className="col-12 col-md-5 m-3">
                    {this.renderComments(this.props.dish)} 
                </div>
            </div>

        );
    }
}

export default DishDetail; 