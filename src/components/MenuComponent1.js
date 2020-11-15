import React, { Component } from 'react';
/* import { Media } from 'reactstrap'; "old version of the file"*/ 
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish}); 
    }

    renderDish(dish) {
        if (dish != null) {
            return(
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle> {dish.name} </CardTitle>
                        <CardText> {dish.description} </CardText>
                    </CardBody>
                </Card>
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
            const comments = dish.comments;
            const menu1 = comments.map((comment) => {
                return (
                    <div key={comment.id} className="col-12 col-md-5 m-1">
                        <h4>Comments</h4>
                        <ul className="list-unstyled">
                            <li>{comment.comment}</li>
                            <li>{comment.author}, {comment.date}</li>     
                        </ul>                  
                    </div>
                );
            });
            return(
                <div className="row">
                    {menu1}
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

        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.onDishSelect(dish)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>                  
                </div>
            );
        });

        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    {this.renderDish(this.state.selectedDish)}
                </div>
                <div className="row">
                    {this.renderComments(this.state.selectedDish)}
                </div>
                
            </div>
        );
    }
}

export default Menu; 