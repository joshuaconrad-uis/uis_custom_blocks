import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('uis-custom-blocks/uis-card', 
  
  {
  title: __('UIScard'),
  icon: 'format-aside', // WordPress dashicon for a card/document
  category: 'common',  // Make sure this matches the category in PHP
  attributes: {
    headerText: {
      type: 'string',
      default: 'UNIVERSITY OF ILLINOIS SPRINGFIELD',
    }, 
    title: {
      type: 'string',
      default: '',
    },
    content: {
      type: 'string', 
      default: '',
    },
    linkUrl:{
      type: 'string',
      default: '' 
    }
  },
  edit,
  save,
});
