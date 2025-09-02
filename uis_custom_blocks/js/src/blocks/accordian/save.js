import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { title, content } = attributes;
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
        </div>
      </details>
    </div>
  );
}