import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport';
import * as NextImage from 'next/image';
import { RouterContext } from 'next/dist/shared/lib/router-context';

// Fixes issues with storybook and next/image
const OriginalNextImage = NextImage.default;
Object.defineProperty(NextImage, 'default', {
  configurable: true,
  value: (props) => (
    <OriginalNextImage
      {...props}
      unoptimized
      // this is new!
      blurDataURL={IMAGE_PLACEHOLDER}
    />
  ),
});

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  nextRouter: {
    Provider: RouterContext.Provider,
    path: '/',
    asPath: '/',
    locales: ['en', 'ar'],
  },
  chromatic: {
    delay: 300, // msw mock api calls fix that didn't get displayed
  },
}

export const globalTypes = {
  locale: {
    name: 'Locale',
    description: 'Internationalization locale',
    defaultValue: 'en',
    toolbar: {
      icon: 'globe',
      items: [
        { value: 'en', right: '🇺🇸', title: 'English' },
        { value: 'ar', right: '🇸🇦', title: 'عربي' },
      ],
    },
  },
};