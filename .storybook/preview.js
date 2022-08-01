import { LightTheme, DarkTheme } from '@/themes';
import Layout from './Layout';

export const parameters = {
  viewMode: 'docs',
  actions: { argTypesRegex: "^on[A-Z].*" },
  docs: {
    page: () => <Layout />
  },
  controls: {
    expanded: true,
    sort: 'requiredFirst',
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <div style={{ padding: '24px' }} className={LightTheme}>
      <link rel={'preconnect'} href={'https://fonts.googleapis.com'} />
      <link rel={'preconnect'} href={'https://fonts.gstatic.com'} crossOrigin={'anonymous'} />
      <link rel={'stylesheet'} href={'https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap'} />
      <Story />
    </div>
  ),
];