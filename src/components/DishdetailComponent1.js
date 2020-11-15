import React, { Component } from 'react';
import { Card, CardImg, Media, CardText, CardBody, CardTitle } from 'reactstrap';

class Dishdetail extends Component {

    constructor(props) {
        super(props);
        this.state={

        }
    }

    renderDish = (dish) => {
        return (
            <div className="col-12 col-md-5 mt-1">
                <Card>
                    <CardImg width="100%" src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        )
    }

    render() {
        const dish = this.props.dish;
        if(dish != null) {
            return(
                <div className="row">
                    {this.renderDish(dish)}
                    <div className="col-12 col-md-5 mt-1">
                        <h4>Comments</h4>
                        {dish.comments.map((cm) => {
                            return(  
                                <ul className="list-unstyled" key={cm.id}>
                                    <li>{cm.comment}</li>
                                    <li>--{cm.author} , {cm.date}</li>
                                </ul>
                            )
                            })
                        }
                    </div>
                </div>
            )
        } else {
            return(
                <div></div>
            )
        }
    }
}

export default Dishdetail;