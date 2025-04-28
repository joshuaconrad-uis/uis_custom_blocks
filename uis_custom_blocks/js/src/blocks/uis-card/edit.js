import { useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { headerText, title, content, linkUrl } = attributes;
  const blockProps = useBlockProps();


  /**
   * Edit component for the UIS Card block.
   * 
   * @param {Object} props - Component properties
   * @param {Object} props.attributes - Block attributes
   * @param {string} props.attributes.headerText - Text displayed in the card header
   * @param {string} props.attributes.title - Card title content
   * @param {string} props.attributes.content - Main card content
   * @param {string} props.attributes.linkUrl - URL to make the entire card clickable
   * @param {Function} props.setAttributes - Function to update block attributes
   * 
   * @returns {JSX.Element} The editable card component in the block editor
   */



  
  return (
    <div className="editor-styles-uis-card">
    <div {...blockProps}
     className="advanced-card">
      <div className="advanced-card__title-container">
        <RichText
          tagName="h2"
          className="advanced-card__title"
          value={title}
          onChange={(title) => setAttributes({ title })}
          placeholder={__('Card Title')}
          
        />
      </div>
      
      <div className="advanced-card__content">
        <RichText
          tagName="div"
          className="advanced-card__paragraph"
          value={content}
          onChange={(content) => setAttributes({ content })}
          placeholder={__('Card content goes here...')}/>
      </div>
      <div className="advanced-card__link-control">
        <TextControl
          label={__('Card Link URL')}
          value={linkUrl}
          onChange={(linkUrl) => setAttributes({ linkUrl })}
          placeholder={__('https://example.com')}
        />
      </div>
    </div>
    </div>
  );
}
