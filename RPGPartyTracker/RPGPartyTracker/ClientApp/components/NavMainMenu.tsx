import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavMenu extends React.Component<{}, {}> {
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
                            <NavLink exact to={'/profile'} activeClassName='active'>
                                <span className='glyphicon glyphicon-user'></span> Profile
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={ '/characters' } activeClassName='active'>
                                <span className='glyphicon glyphicon-group'/> Characters
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/paties' } activeClassName='active'>
                                <span className='glyphicon glyphicon-user-structure' /> Parties
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/battles' } activeClassName='active'>
                                <span className='glyphicon glyphicon-skull' /> Battles
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/campaigns'} activeClassName='active'>
                                <span className='glyphicon glyphicon-book-open' /> Campaigns
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/events'} activeClassName='active'>
                                <span className='glyphicon glyphicon-calendar' /> Events / Meetings
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/community'} activeClassName='active'>
                                <span className='glyphicon glyphicon-group-chat' /> Community
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/timeline'} activeClassName='active'>
                                <span className='glyphicon glyphicon-history' /> Timeline
                            </NavLink>
                        </li>
                        <li>
                            <NavLink exact to={'/characters'} activeClassName='active'>
                                <span className='glyphicon glyphicon-log-out'></span> Log Out
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
