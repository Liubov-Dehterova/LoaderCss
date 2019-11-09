import React, { useState, useEffect } from 'react';
import Form from '../Form';
import './style.css';
import Button from '../Button';

const Item = ({
	item = {
		textName: 'noname',
		text: 'lorem ipsum'
	},
	removeFromList,
	updateFromList,
}) => {
	const [isShowForm, handleShowForm] = useState(false);

	useEffect(() => {
		handleShowForm(false);
	}, [item]);

	return (
		<li className="news__list">
			{
				isShowForm ? (
					<Form
						type="edit"
						item={item}
						addFromProps={updateFromList}
					/>
				) : (
					<>
						<header className="item__head">
							<div className="item__action">
								<Button 
									modifier="item"
									clickButton = {() => handleShowForm(!isShowForm)}
								>
									edit
								</Button>
								<Button 
									modifier="item"
									clickButton = {() => removeFromList(item.id)}
								>
									delete
								</Button>
							</div>
							<h3 className="news__list__titel">{item.textName}</h3>
						</header>
						<p className="news__list__description">{item.text}</p>
					</>
				)
			}
		</li>
	);
}

export default Item;

