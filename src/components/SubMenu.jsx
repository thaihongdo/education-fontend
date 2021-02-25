import React from 'react';
import { Link } from 'react-router-dom';

export const SubMenu = (props) => {
	return (
		<ul className="sub-menu">
			{/* <li className="menu-item menu-item-type-post_type menu-item-object-page menu-item-home current-menu-item page_item page-item-204 current_page_item">
				<Link aria-current="page" to="/home1">
					Home 1
				</Link>
			</li> */}
			{props.items.map((item) => {
				return (
					<li
						className={`menu-item menu-item-type-post_type menu-item-object-page ${
							item.childrens ? 'menu-item-has-children' : ''
						}`}
					>
						<Link to={item.to}>{item.label}</Link>
						{item.childrens && (
							<ul className="sub-menu">
								{item.childrens.map((it) => (
									<li className=" menu-item menu-item-type-post_type menu-item-object-courses">
										<Link to={it.to}>{it.label}</Link>
									</li>
								))}
							</ul>
						)}
					</li>
				);
			})}
		</ul>
	);
};
