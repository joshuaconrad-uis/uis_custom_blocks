import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('uis-custom-blocks/image-card-container', {
  title: __('UIS Image Card'),
  icon: 'grid-view',
  category: 'common',
  
  // Add support for alignment options
  supports: {
    align: true
  },
  
  // Edit function with modern useBlockProps
  edit: () => {
    const blockProps = useBlockProps({
      className: 'uis-image-card-container'
    });
    
    return (
      <div {...blockProps}>
        <InnerBlocks 
          allowedBlocks={['uis-custom-blocks/uis-image-card']} 
          // Optional: Provide a starting template
          template={[
            ['uis-custom-blocks/uis-image-card'],
            ['uis-custom-blocks/uis-image-card']
          ]}
          // This is important - set to false to allow adding/removing blocks
          templateLock={false}
          // Add this to show the appender button
          renderAppender={() => <InnerBlocks.ButtonBlockAppender />}
        />
      </div>
    );
  },
  
  // Save function with modern useBlockProps
  save: () => {
    const blockProps = useBlockProps.save({
      className: 'uis-image-card-container'
    });
    
    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    );
  }
}); 