import React from "react";
import { createI18n, I18nProvider } from 'react-simple-i18n';

import en from './languages/en.json';
import jp from './languages/jp.json';
import { useGlobalContext } from "../provider";

const langData = {
	en: en,
	jp: jp,
}

const TranslationProvider = ({ children }: any) => {
	const [{ lang }] = useGlobalContext();

	return (
		<I18nProvider i18n={createI18n(langData, { lang: lang })}>
			{children}
		</I18nProvider>
	)
}

export { TranslationProvider };