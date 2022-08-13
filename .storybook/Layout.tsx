//	Package Imports
import React, { useContext } from 'react';
import { DocsContext } from '@storybook/addon-docs';

//	Component Imports
import ComponentUsage from './ComponentUsage';
import {
  Title,
  Subtitle,
  Heading,
  Description,
  ArgsTable,
  Primary,
  Stories,
  PRIMARY_STORY,
} from '@storybook/addon-docs';

//	Declare layout component
const Layout = () => {

	//	Get story title
	const { title } = useContext(DocsContext);

	//	Check if component
	const isComponent = title.split('/')[0] === 'Components';

	//	Return component jsx
	return (
		<>

			{/* Component Overview */}
			<div style={{ marginBottom: '48px' }}>
		
				{/* Title & Subtitle */}
				<Title />
				<Subtitle />

				{/* Description */}
				<Description />

			</div>

			{/* Component Usage */}
			{isComponent && <div style={{ marginBottom: '48px' }}>

				{/* Header */}
				<Heading>Usage</Heading>
				<Description>Import the component into your code</Description>

				{/* Usage */}
				<ComponentUsage />

			</div>}

			{/* Playground */}
			<div style={{ marginBottom: '48px' }}>

				{/* Header */}
				<Heading>Playground</Heading>
				<Description>Play around with the settings below to get the button exactly how you want it</Description>

				{/* Primary Story */}
				<Primary />

				{/* Args Table */}
				<ArgsTable story={PRIMARY_STORY} />

			</div>

			{/* Stories */}
			<Stories />
		
		</>
	);

};

//	Exports
export default Layout;
