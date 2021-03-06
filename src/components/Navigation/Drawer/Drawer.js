import React, {Component} from "react";
import classes from './Drawer.module.css';
import Backdrop from "../../UI/Backdrop/Backdrop";

const links = [
    1, 2, 3
]
class Drawer extends Component {
    renderLinks(){
        return links.map((link, idx) => {
            return (
                <li key={idx}>
                    Link {link}
                </li>
            )
        })
    }
    render() {
        const cls = [classes.Drawer]
        if(!this.props.isOpen){
            cls.push(classes.close)
        }
        return(
            <React.Fragment>
                <nav className={cls.join(' ')}>
                    <ul>
                        {this.renderLinks()}
                    </ul>
                </nav>
                { this.props.isOpen ? <Backdrop onClick={this.props.onCLose}/> : null }
            </React.Fragment>
        )
    }
}
export default Drawer;