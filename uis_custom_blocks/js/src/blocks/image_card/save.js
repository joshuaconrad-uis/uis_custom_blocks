import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
  const { linkUrl, imageUrl, title } = attributes;
  const blockProps = useBlockProps.save();
  
  const cardContent = (
    <div className="uis-image-card-container">
      {imageUrl && (
        <div className="uis-image-card-image-wrapper">
          <img 
            src={imageUrl} 
            alt={title || ''} 
            className="uis-image-card-image"
          />
        </div>
      )}
      
      {title && (
        <div className="uis-image-card-content">
          <RichText.Content 
            tagName="h3" 
            value={title} 
            className="uis-image-card-title"
          />
        </div>
      )}
    </div>
  );
  
  // If we have a link URL, wrap the entire card in an anchor tag
  if (linkUrl) {
    return (
      <div {...blockProps}>
        <a 
          href={linkUrl} 
          className="uis-image-card-link"
          rel="noopener noreferrer"
        >
          {cardContent}
        </a>
      </div>
    );
  }
  
  // Otherwise just return the card content
  return (
    <div {...blockProps}>
      {cardContent}
    </div>
  );
}
