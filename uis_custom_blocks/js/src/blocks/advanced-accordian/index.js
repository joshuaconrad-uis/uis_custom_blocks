import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('uis-custom-blocks/advanced-accordian', {
  title: __('Accordion'),
  icon: 'editor-expand',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      default: '',
    },
    align: {
      type: 'string',
      default: 'wide',
    },
  },
  edit,
  save,
});
