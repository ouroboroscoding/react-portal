/**
 * Portal
 *
 * Allows added a component anywhere, but still rendering it at the end of the
 * body so it's not part of the tree the parent component is in.
 *
 * @author Chris Nasr <chris@ouroboroscoding.com>
 * @copyright DevMedika Inc.
 * @created 2024-09-25
 */

// NPM modules
import PropTypes from 'prop-types';
import React from 'react';
import ReactDOM from 'react-dom';
import { v4 as uuid } from 'uuid';

// Types
export type PortalProps = {
	children: React.ReactNode,
	className?: string
}

/**
 * Portal
 *
 * Attaches children to the body directly
 *
 * @name Portal
 * @access public
 * @extends React.Component
 */
export default class Portal
	extends React.Component<{ children: React.ReactNode }> {

	// Local element
	el: HTMLDivElement;

	// Props Types
	static propTypes = {
		className: PropTypes.string
	}

	// Called to construct the object
	constructor(props: PortalProps) {

		// Call the parent constructor
		super(props);

		// Create a new element
		this.el = document.createElement('div');

		// Give it a unique ID
		this.el.id = uuid();

		// If we have a className
		if(props.className) {
			this.el.className = props.className;
		}
	}

	// Called after the component is mounted to the DOM
	componentDidMount() {
		document.body.appendChild(this.el);
	}

	// Called before the component is unmounted
	componentWillUnmount() {
		document.body.removeChild(this.el);
	}

	// Called to the render the new portal with the child content
	render() {
		return ReactDOM.createPortal(
			this.props.children,
			this.el,
		);
	}
}