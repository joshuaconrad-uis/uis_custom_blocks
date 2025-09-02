import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('uis-custom-blocks/accordian', {
  title: __('UIS Accordion'),
  icon: 'editor-expand',
  category: 'common',
  attributes: {
    title: {
      type: 'string',
      default: '',
    },
    content: {
      type: 'string',
      default: '',
    },
  },
  edit,
  save,
});