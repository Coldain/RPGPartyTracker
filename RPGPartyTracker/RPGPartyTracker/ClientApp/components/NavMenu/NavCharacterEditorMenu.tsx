import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavCharacterEditorMenu extends React.Component<{}, {}> {
    public render() {
        return <div className='main-nav'>
                <div className='navbar navbar-inverse'>
                <div className='navbar-header'>
                    <button type='button' className='navbar-toggle' data-toggle='collapse' data-target='.navbar-collapse'>
                        <span className='sr-only'>Toggle navigation</span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                        <span className='icon-bar'></span>
                    </button>
                    <Link className='navbar-brand' to={ '/' }>RPGPartyTracker</Link>
                </div>
                <div className='clearfix'></div>
                <div className='navbar-collapse collapse'>
                    <ul className='nav navbar-nav'>
                        <li>
                            <NavLink to={'/'} activeClassName='active'>
                                <span className='glyphicon glyphicon-undo'></span> Back to Characters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-businessman'></span> Class
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-parents'></span> Race
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-nameplate'></span> Details
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-playing-dice'></span> Abilities
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-education'></span> Skills
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-flash'></span> Powers
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-person-running'></span> Feats
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-person'></span> Shop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-nameplate-alt'></span> Manage Character
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
