import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { headerText, title, content, linkUrl } = attributes;
  const blockProps = useBlockProps.save({
    className: 'advanced-card-wrapper'
  });


  /**
   * Save component for the UIS Card block.
   *
   * @param {Object} props - Component properties
   * @param {Object} props.attributes - Block attributes
   * @param {string} props.attributes.headerText - Text displayed in the card header
   * @param {string} props.attributes.title - Card title content
   * @param {string} props.attributes.content - Main card content
   * @param {string} props.attributes.linkUrl - Optional URL to make the entire card clickable
   * 
   * @returns {JSX.Element} The rendered card component, optionally wrapped in a link
   */


  
  // Create the card content
  const cardContent = (
    <div className="advanced-card">
      <div className="advanced-card__header">
        <div className="advanced-card__header-text">
          {headerText}
        </div>
      </div>
      
      <div className="advanced-card__title-container">
        <RichText.Content
          tagName="h2"
          className="advanced-card__title"
          value={title}
        />
      </div>
      
      <div className="advanced-card__content">
        <RichText.Content
          tagName="div"
          className="advanced-card__paragraph"
          value={content}
        />
      </div>
    </div>
  );

  // If there's a link URL, wrap the card in an anchor tag
  if (linkUrl) {
    return (
      <div {...blockProps}>
        <a href={linkUrl} className="advanced-card-link">
          {cardContent}
        </a>
      </div>
    );
  }

  // Otherwise, just return the card
  return <div {...blockProps}>{cardContent}</div>;
}