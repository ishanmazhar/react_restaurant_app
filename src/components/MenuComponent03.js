import React, { Component } from 'react';
/* import { Media } from 'reactstrap'; "old version of the file"*/ 
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Menu extends Component {

    constructor(props) {
        super(props);
        console.log("MenuComponent's Constructor invoked!");

    }

    componentDidMount() {
        console.log("MenuComponent's ComponentDidMount invoked!");
    }
    render() {
        
        const menu = this.props.dishes.map((dish) => {
            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick = {() => this.props.onClick(dish.id)}>
                        <CardImg width="100%" src={dish.image} alt={dish.name} />
                        <CardImgOverlay body className="ml-5">
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>       
                </div>
            );
        });
        console.log("MenuComponent's Render invoked!");
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
            </div>
        );
    }
}

export default Menu; 