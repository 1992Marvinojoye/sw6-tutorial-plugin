import './component';
import './preview';

Shopware.Service('cmsService').registerCmsBlock({
    name: 'text-image-bow-tut-box',
    label: 'sw-cms.blocks.textImage.bowTutBox.label',
    category: 'text-image',
    component: 'sw-cms-block-text-image-bow-tut-box',
    previewComponent: 'sw-cms-preview-bow-tut-box',
    defaultConfig: {
        marginBottom: '20px',
        marginTop: '20px',
        marginLeft: '20px',
        marginRight: '20px',
        sizingMode: 'boxed'
    },
    slots: {
        subtitle: {
            type: 'text',
            default: {
                config: {
                    content: {
                        source: 'static',
                        value: 'Bild Untertitel'
                    }
                }
            }
        },
        image: {
            type: 'image',
            default: {
                data: {
                    media: {
                        url: '/administration/static/img/cms/preview_plant_large.jpg'
                    }
                }
            }
        }
    }
});
