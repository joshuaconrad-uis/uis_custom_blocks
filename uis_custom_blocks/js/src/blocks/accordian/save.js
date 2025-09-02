import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { title, content, imageUrl, imageAlt } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <details className="uis-accordion">
        <summary className="uis-accordion__header">
          <RichText.Content
            tagName="h3"
            className="uis-accordion__title"
            value={title}
          />
          <span className="uis-accordion__toggle">+</span>
        </summary>
        <div className="uis-accordion__content">
          <div
            className="uis-accordion__paragraph"
            dangerouslySetInnerHTML={{ __html: content || '' }}
          />
          
          {/* Display Image if exists */}
          {imageUrl && (
            <div className="uis-accordion__image-section">
              <img 
                src={imageUrl} 
                alt={imageAlt || 'Accordion image'} 
                className="uis-accordion__image"
              />
            </div>
          )}
        </div>
      </details>
    </div>
  );
}