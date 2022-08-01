//	Package Imports
import React, { useContext } from 'react';
import { Source, DocsContext } from '@storybook/addon-docs';

//	Declare component usage component
const ComponentUsage = () => {

	//	Get story title
	const { title } = useContext(DocsContext);

	//	Get component name
	const componentName = title.split('/')[1];

	//	Generate import code to display
	const code = `
//	Component Imports
import { ${componentName} } from '@/components/${componentName}';
	`;

	//	Return code block with component import
	return <Source language='js' code={code} />;

};

//  Exports
export default ComponentUsage;
