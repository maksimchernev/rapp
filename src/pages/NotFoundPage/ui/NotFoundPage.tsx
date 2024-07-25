import { useTranslation } from "react-i18next";
import styles from "./NotFoundPage.module.scss";

const NotFoundPage = () => {
	const { t } = useTranslation();
	return <div className={styles.notFoundPage}>{t("Страница не найдена")}</div>;
};

export default NotFoundPage;
