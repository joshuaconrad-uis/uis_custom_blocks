import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import CKEditor5 from '../../components/CKEditor5.js';


export default function Edit({ attributes, setAttributes }) {
  const { title, content } = attributes;
  const blockProps = useBlockProps();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div {...blockProps}>
      <div className={`uis-accordion ${isOpen ? 'is-open' : 'is-closed'}`}>
        <div 
          className="uis-accordion__header"
          onClick={() => setIsOpen(!isOpen)}
        >
          <RichText
            tagName="h3"
            className="uis-accordion__title"
            value={title}
            onChange={(title) => setAttributes({ title })}
            placeholder={__('Accordion Title')}
          />
          <span className="uis-accordion__toggle">
            {isOpen ? '−' : '+'}
          </span>
        </div>

        {isOpen && (
          <div className="uis-accordion__content">
            <CKEditor5
              value={content}
              onChange={(html) => setAttributes({ content: html })}
              placeholder={__('Add your content here...')}
              className="uis-accordion__ckeditor"
            />
          </div>
        )}
      </div>
    </div>
  );
}