/* eslint import/no-extraneous-dependencies:0 */

import Handlebars from 'handlebars';

Handlebars.registerHelper('translate', (value) => {
    if (!value) {
        return;
    }

    return t('dicomviewer', value);
});
