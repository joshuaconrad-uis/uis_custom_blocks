import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

registerBlockType('uis-custom-blocks/uis-card-container', {
  title: __('UIS Text Card'),
  icon: 'format-aside',
  category: 'common',
  
  // Add support for alignment options
  supports: {
    align: true
  },
  
  // Edit function with modern useBlockProps
  edit: () => {
    const blockProps = useBlockProps({
      className: 'uis-card-container'
    });
    
    return (
      <div {...blockProps}>
        <InnerBlocks 
          allowedBlocks={['uis-custom-blocks/uis-card']} 
          template={[['uis-custom-blocks/uis-card'], ['uis-custom-blocks/uis-card']]}
          templateLock={false}
        />
      </div>
    );
  },
  
  // Save function with modern useBlockProps
  save: () => {
    const blockProps = useBlockProps.save({
      className: 'uis-card-container'
    });
    
    return (
      <div {...blockProps}>
        <InnerBlocks.Content />
      </div>
    );
  }
}); 