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
import PropTypes from 'prop-types';
import React from 'react';
export type PortalProps = {
    children: React.ReactNode;
    className?: string;
};
/**
 * Portal
 *
 * Attaches children to the body directly
 *
 * @name Portal
 * @access public
 * @extends React.Component
 */
export default class Portal extends React.Component<{
    children: React.ReactNode;
}> {
    el: HTMLDivElement;
    static propTypes: {
        className: PropTypes.Requireable<string>;
    };
    constructor(props: PortalProps);
    componentDidMount(): void;
    componentWillUnmount(): void;
    render(): React.ReactPortal;
}
