import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { useState } from '@wordpress/element';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { title, content, imageUrl, imageAlt } = attributes;
  const blockProps = useBlockProps();
  const [isOpen, setIsOpen] = useState(false);

  const onSelectImage = (media) => {
    setAttributes({ 
      imageUrl: media.url,
      imageAlt: media.alt || media.title || ''
    });
  };

  const removeImage = () => {
    setAttributes({ 
      imageUrl: '',
      imageAlt: ''
    });
  };

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
            {isOpen ? '−' : '+'}
          </span>
        </div>

        {isOpen && (
          <div className="uis-accordion__content">
            <RichText
              tagName="div"
              className="uis-accordion__paragraph"
              value={content}
              onChange={(content) => setAttributes({ content })}
              placeholder={__('Add your content here...')}
              allowedFormats={[
                'core/bold',
                'core/italic',
                'core/underline',
                'core/strikethrough',
                'core/code',
                'core/link',
                'core/text-color',
                'core/background-color',
                'core/subscript',
                'core/superscript',
              ]}
            />
            
            {/* Image Upload Section */}
            <div className="uis-accordion__image-section">
              <MediaUpload
                onSelect={onSelectImage}
                allowedTypes={['image']}
                value={imageUrl}
                render={({ open }) => (
                  <>
                    {!imageUrl ? (
                      <Button 
                        onClick={open}
                        className="uis-accordion__upload-button"
                        variant="secondary"
                      >
                        {__('Add Image')}
                      </Button>
                    ) : (
                      <div className="uis-accordion__image-preview">
                        <img 
                          src={imageUrl} 
                          alt={imageAlt || 'Accordion image'} 
                          className="uis-accordion__image"
                        />
                        <div className="uis-accordion__image-controls">
                          <Button 
                            onClick={open}
                            className="uis-accordion__change-image-button"
                            variant="secondary"
                            size="small"
                          >
                            {__('Change Image')}
                          </Button>
                          <Button 
                            onClick={removeImage}
                            className="uis-accordion__remove-image-button"
                            variant="secondary"
                            size="small"
                            isDestructive
                          >
                            {__('Remove Image')}
                          </Button>
                        </div>
                      </div>
                    )}
                  </>
                )}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}