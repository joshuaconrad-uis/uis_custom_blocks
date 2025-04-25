import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

console.log('Attempting to register block:', 'custom_gutenberg/my-custom-block');

registerBlockType('uis-custom-blocks/my-custom-block', 
  
  {
  title: __('My Custom Block'),
  icon: 'smiley',
  category: 'common',  // Make sure this matches the category in PHP
  attributes: {
    content: {
      type: 'string', 
      default: '',
    },
  },
  edit,
  save,
});

console.log('Block registration complete for: custom-gutenberg/my-custom-block'); 