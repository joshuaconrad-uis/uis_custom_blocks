import { useBlockProps, RichText } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';


export default function Edit({ attributes, setAttributes }) {
  const { content } = attributes;
  const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <RichText
        tagName="p"
        value={content}
        onChange={(content) => setAttributes({ content })}
        placeholder={__('Write your content here...')}
      />
    </div>
  );
}