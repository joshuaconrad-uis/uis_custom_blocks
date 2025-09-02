import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';
import edit from './edit.js';
import save from './save.js';

registerBlockType('uis-custom-blocks/uis-image-card', {

    title: __('UIS Image Card'),
    icon: 'dashicons-cover-image',
    category: 'common',
    attributes: {
        linkUrl: {
            type: 'string',
            default: '',
        },
        imageUrl: {
            type: 'string',
            default: '',
        },
        title: {
            type: 'string',
            default: '',
        },
    },
    edit,
    save,   
});