import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';


/**
 * Registers a custom Gutenberg block type for My Custom Block.
 * 
 * This file handles the block registration with WordPress by:
 * 1. Defining the block name and namespace ('uis-custom-blocks/my-custom-block')
 * 2. Setting block properties like title and category
 * 3. Configuring block attributes for storing content
 * 4. Connecting edit and save components
 * 
 * Block Configuration:
 * - Title: Displayed name in the block inserter
 * - Category: Groups block with similar blocks
 * - Attributes: Schema for storing block data
 *   - content: Stores the rich text content
 * - Edit: Component for the editor interface
 * - Save: Component for frontend rendering
 * 
 * Note: The block attributes defined here must match
 * the schema defined in the PHP module file.
 */

registerBlockType('uis-custom-blocks/my-custom-block', 
  
  {
  title: __('My Custom Block'),
  icon: 'smiley', // Link to WordPress icons site: https://developer.wordpress.org/resource/dashicons/#star-half
  category: 'common',  // Make sure this matches the category in PHP
  attributes: {           //These are the attributes you need to define in the uis_custom_blocks.module file
    content: {
      type: 'string',  
      default: '',
    },
  },
  edit,
  save,
});

