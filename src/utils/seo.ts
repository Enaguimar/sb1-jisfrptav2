import { META_DEFAULTS } from './constants';

export const generateMetaTags = (
  title?: string,
  description: string = META_DEFAULTS.description
) => ({
  title: title ? `${title} - ${META_DEFAULTS.title}` : META_DEFAULTS.title,
  description,
});