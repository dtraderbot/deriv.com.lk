import React from 'react';
import { translate } from '@i18n';
import Dialog from './Dialog';
import GoogleDriveIntegration from '../react-components/Integrations/GoogleDriveIntegration';
import * as style from '../style';

const IntegrationsContent = () => (
    <div id='integrations-dialog' className='dialog-content' style={style.content}>
        <GoogleDriveIntegration />
    </div>
);

export default class IntegrationsDialog extends Dialog {
    constructor() {
        const closeDialog = () => {
            this.close();
        };
        super(
            'integrations-dialog',
            translate('Google Drive Integration'),
            <IntegrationsContent closeDialog={closeDialog} />,
            {
                width: 500,
                height: 'auto',
            }
        );
        this.registerCloseOnOtherDialog();
    }
}
