import * as React from 'react';
import { NavLink, Link } from 'react-router-dom';

export class NavCampaignMenu extends React.Component<{}, {}> {
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
                            <NavLink exact to={ '/' } activeClassName='active'>
                                <span className='glyphicon glyphicon-home'></span> Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/counter' } activeClassName='active'>
                                <span className='glyphicon glyphicon-book'></span> New Campaign
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={ '/fetchdata' } activeClassName='active'>
                                <span className='glyphicon glyphicon-log-book'></span> Campaign 1
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-log-book'></span> Campaign 2
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to={'/fetchdata'} activeClassName='active'>
                                <span className='glyphicon glyphicon-log-book'></span> Campaign 3
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </div>;
    }
}
