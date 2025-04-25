import { useBlockProps, RichText, URLInputButton } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

import { TextControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { headerText, title, content, linkUrl } = attributes;
  const blockProps = useBlockProps();

  return (
    <div className="editor-styles-uis-card">
    <div {...blockProps}
     className="advanced-card">
      {/* <div className="advanced-card__header">
        <div className="advanced-card__header-text">
          {headerText}
        </div>
      </div> */}
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
