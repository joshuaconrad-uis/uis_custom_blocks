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


onChangeImageUrl = (newImageUrl) => {
    setAttributes({ imageUrl: newImageUrl });
}

onChangeTitle = (newTitle) => {
    setAttributes({ title: newTitle });
}

onChangeLinkUrl = (newLinkUrl) => {
    setAttributes({ linkUrl: newLinkUrl });
}






return (
    <div className="editor-styles-uis-image-card">
        <div {...blocksProps} >




        </div>
</div>
)



}


