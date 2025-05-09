import { useBlockProps, RichText } from '@wordpress/block-editor';

/**
 * This block implements a custom Gutenberg block with rich text editing capabilities.
 * 
 * The block consists of two main components:
 * 
 * 1. Edit Component (edit.js):
 *    - Provides the editing interface in the Gutenberg editor
 *    - Uses RichText component for WYSIWYG editing
 *    - Manages content through attributes.content
 *    - Updates content via setAttributes when changes occur
 * 
 * 2. Save Component (save.js - this file):
 *    - Handles how content is saved and rendered on the frontend
 *    - Uses RichText.Content to display the saved content
 *    - Preserves formatting and styling from the editor
 * 
 * The block's configuration (index.js):
 *    - Registers the block type with WordPress
 *    - Defines block attributes (content)
 *    - Sets block title and category
 *    - Links edit and save components
 * 
 * Styling:
 *    - Editor styles (editor.scss) for admin interface
 *    - Frontend styles (style.scss) for public display
 */



// This is the save component for the block
/**
 * Save component for the My Custom Block.
 * 
 * This component renders the saved content for the block in the frontend.
 * It uses WordPress's RichText component to display the saved content. 
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.attributes - Block attributes defined in index.js
 * @param {string} props.attributes.content - The saved content of the block
 * @returns {JSX.Element} The saved content for the block
 */
export default function Save({ attributes }) {
  const { content } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className='content'>
         <RichText.Content  
        tagName="p"     // HTML element to render as
        value={content} // Content to display
      />
      </div>
    </div>
  );
}