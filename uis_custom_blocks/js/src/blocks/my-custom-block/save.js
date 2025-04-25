import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function Save({ attributes }) {
  const { content } = attributes;
  const blockProps = useBlockProps.save();

  return (
    <div {...blockProps}>
      <div className='content'>
         <RichText.Content 
        tagName="p"     // HTML element to render as
        value={content} // Content to display
      />
      </div>
    </div>
  );
}