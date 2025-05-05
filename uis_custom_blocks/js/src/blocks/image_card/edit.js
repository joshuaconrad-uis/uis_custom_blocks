import { useBlockProps, RichText, MediaUpload } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';
import { Button } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { linkUrl, imageUrl, title } = attributes;
  const blockProps = useBlockProps();

  /**
   * Edit component for the UIS Image Card block.
   * 
   * @param {Object} props - Component properties
   * @param {Object} props.attributes - Block attributes
   * @param {string} props.attributes.linkUrl - URL to make the entire card clickable
  
*/

  const onSelectImage = (media) => {
    setAttributes({ imageUrl: media.url });
  };

  const onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
  };

  const onChangeLinkUrl = (newLinkUrl) => {
    setAttributes({ linkUrl: newLinkUrl });
  };

  return (
    <div className="editor-styles-uis-image-card">
      <div {...blockProps}>
        <div className="uis-image-card-container">
          <div className="uis-image-card-image-wrapper">
            <MediaUpload
              onSelect={onSelectImage}
              allowedTypes={['image']}
              value={imageUrl}
              render={({ open }) => (
                <>
                  {!imageUrl ? (
                    <Button 
                      onClick={open}
                      className="uis-image-card-upload-button"
                    >
                      {__('Upload Image', 'uis-custom-blocks')}
                    </Button>
                  ) : (
                    <div className="uis-image-card-image-preview">
                      <img src={imageUrl} alt={title || ''} />
                      <Button 
                        onClick={open}
                        className="uis-image-card-change-image-button"
                      >
                        {__('Change Image', 'uis-custom-blocks')}
                      </Button>
                    </div>
                  )}
                </>
              )}
            />
          </div>
          
          <div className="uis-image-card-content">
            <RichText
              tagName="h3"
              value={title}
              onChange={onChangeTitle}
              placeholder={__('Card Title', 'uis-custom-blocks')}
              className="uis-image-card-title"
            />
            
            <div className="uis-image-card-link-input">
              <label>{__('Link URL:', 'uis-custom-blocks')}</label>
              <input
                type="url"
                value={linkUrl || ''}
                onChange={(e) => onChangeLinkUrl(e.target.value)}
                placeholder={__('https://example.com', 'uis-custom-blocks')}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


