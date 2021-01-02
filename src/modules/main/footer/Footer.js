import React from 'react';
import {useTranslation} from 'react-i18next';
import {version} from '../../../../package.json';

const Footer = () => {
    const {t} = useTranslation();

    return (
        <footer className="main-footer">
            <div className="float-right d-none d-sm-block">
                <b>{t('footer.version')}</b>
                <b> </b>
                <span>{version}</span>
            </div>
            <strong>
                <span>Copyright © 2020-2021 </span>
                <a
                    href="https://adminlte.io"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Anushre Sarees Pvt. Ltd.
                </a>
                <span> Powered by AdminLTE.io</span>
            </strong>
            <span> </span>
            <span> </span>
        </footer>
    );
};

export default Footer;
