import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { headerText, title, content, linkUrl } = attributes;
  const blockProps = useBlockProps.save({
    className: 'advanced-card-wrapper'
  });

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