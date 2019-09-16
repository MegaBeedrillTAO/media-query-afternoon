import React from 'react';
import '../Styles/NavBar.css';

class NavBar extends React.Component{
    
    constructor(){
        super();
        this.state = {
            menuClass: 'default'
        }
    }
    toggle = () =>{
        if (this.state.menuClass === 'default' || this.state.menuClass === 'menu-closed'){
            this.setState({menuClass: 'menu-open'});
        }
        else if (this.state.menuClass === 'menu-open'){
            this.setState({menuClass: 'menu-closed'});
        }
    }
    render(){
        return(
            <div>
                <nav>
                    <div>
                        <h1>Start Bootstrap</h1>
                    </div>
                    <div>
                        <ul>
                            <li className='desktop'>Services</li>
                            <li className='desktop'>Portfolio</li>
                            <li className='desktop'>About</li>
                            <li className='desktop'>Team</li>
                            <li className='desktop'>Contact</li>
                            <li className='mobile'>
                                <div className='menu-button'>
                                    <p>Menu</p>
                                    <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png' alt='hamburger button'/>
                                </div>
                            </li>
                        </ul>
                    </div>
                </nav>
                <section>

                </section>
            </div>    
        )
    }
}
export default NavBar;