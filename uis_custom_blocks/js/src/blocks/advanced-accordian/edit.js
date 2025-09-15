import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';

export default function Edit({ attributes, setAttributes }) {
  const { title, align } = attributes;
  const blockProps = useBlockProps({
    className: align ? `align${align}` : 'alignwide',
  });
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
            allowedFormats={['core/bold', 'core/italic']}
          />
          <span className="uis-accordion__toggle">
            {isOpen ? '-' : '+'}
          </span>
        </div>

        {isOpen && (
          <div className="uis-accordion__content">
            <InnerBlocks
              allowedBlocks={[
                'core/paragraph',
                'core/heading',
                'core/list',
                'core/quote',
                'core/code',
                'core/table',
                'core/image',
                'core/video',
                'core/audio',
                'core/file',
                'core/buttons',
                'core/separator',
                'core/columns',
                'core/group',
                'core/cover',
                'core/media-text',
                'core/embed',
                'core/preformatted',
                'core/pullquote',
                'core/verse',
                'uis-custom-blocks/uis-image-card'
              ]}
              template={[
                ['core/paragraph', { placeholder: 'Add your content here...' }],
              ]}
              templateLock={false}
            />
          </div>
        )}
      </div>
    </div>
  );
}
