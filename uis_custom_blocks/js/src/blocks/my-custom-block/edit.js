import { useBlockProps, RichTex, Button } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * 
 * 1. It receives props containing:
 *    - attributes: The block's attributes defined in index.js (content in this case)
 *    - setAttributes: Function to update those attributes
 * 
 * 2. The useBlockProps hook adds necessary block editor props/styling
 * 
 * 3. Inside the render:
 *    - A RichText component provides WYSIWYG editing
 *    - It's configured as a paragraph element via tagName="p"
 *    - The content attribute provides the current value
 *    - onChange updates the content when user types/edits
 *    - placeholder shows default text when empty
 * 
 * 4. When content changes:
 *    - The onChange handler calls setAttributes({content: newValue})
 *    - This updates the block's stored content attribute
 *    - The component re-renders with the new content
 * 
 * The saved content is then handled by the save.js component for the frontend.
 */



//This is the edit component for the block
/**
 * Edit component for the My Custom Block.
 * 
 * This component renders the editable interface in the Gutenberg editor.
 * It uses WordPress's RichText component to provide rich text editing capabilities.
 * 
 * @param {Object} props - Component properties
 * @param {Object} props.attributes - Block attributes defined in index.js
 * @param {string} props.attributes.content - The editable content of the block
 * @param {Function} props.setAttributes - Function to update block attributes
 * @returns {JSX.Element} The edit interface for the block
 */
export default function Edit({ attributes, setAttributes }) {
  const { content } = attributes;
  const blockProps = useBlockProps();

  return (
    // For the edit function for most blocks, you will have to 
    // wrap the div in a specially named function for the editor as unlike the frontend, 
    //this div class .wp-block-uis-custom-blocks-my-custom-block, does not wrap the blocks
    
    <div {...blockProps}>
      <div className='editor-my-custom-block'>
        <div className='content'>
      <RichText
        tagName="p"
        value={content}
        onChange={(content) => setAttributes({ content })}
        placeholder={__('Write your content here...')}
      />
      <p>
        Hi there
      </p>

      <Button></Button>

      </div>

    </div>
    </div>
  );
}