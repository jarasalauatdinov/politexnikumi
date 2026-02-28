import { ChevronDown, CircleQuestionMark, Mail, MapPin, Phone } from 'lucide-react';
import './support.scss'
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { api } from '../../api/api';
import { Flex, Loader } from '@mantine/core';

const Support = () => {
    const [faqs, setFaqs] = useState([]);
    const [loading, setLoading] = useState(true);
    const { t, i18n } = useTranslation();
    const language = i18n.language || 'ru';

    async function getFaqs() {
        setLoading(true);
        try {
            const { data } = await api.get('/main/faqs');
            setFaqs(data.data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        getFaqs();
    }, [])

    return (
        <>
            <main>
                <div className='container'>
                    <div className="support">
                        <div className="support-heading">
                            <h1>{t("support-faq.support-faq-title")}</h1>
                            <p>{t("support-faq.support-faq-p")}</p>
                        </div>
                        <div className="support-main">
                            <div className="support-top">
                                <div className="support-top-headline">
                                    <h4>
                                        <CircleQuestionMark size={20} /> {t("support-faq.support-title")}
                                    </h4>
                                </div>
                                {loading ? (
                                    <Flex justify="center" align="center" h={200}>
                                        <Loader size={50} />
                                    </Flex>
                                ) : (
                                    <div className="support-bottom">
                                        {faqs.faqs?.map((el) => (
                                            <details name='support' key={el.id}>
                                                <summary>
                                                    <p>{el.question[language]}</p>
                                                    <ChevronDown size={16} />
                                                </summary>
                                                <div className="detail">
                                                    <p>{el.answer[language]}</p>
                                                </div>
                                            </details>
                                        ))}
                                    </div>
                                )}
                            </div>
                            <div className="support-contact-us">
                                <div className="support-contact-us-headline">
                                    <h3>
                                        {t("support-faq.faq-title")}
                                    </h3>
                                </div>
                                {loading ? (
                                    <Flex justify="center" align="center" h={200}>
                                        <Loader size={50} />
                                    </Flex>
                                ) : (

                                    <div className="support-contact-us-main">
                                        {faqs.contanct_info && (
                                            <div className="support-contact-main-top">
                                                <div className="support-map support-boxes">
                                                    <div className="support-box-icon">
                                                        <MapPin size={40} />
                                                    </div>
                                                    <div className="support-box-info">
                                                        <h4>Адрес</h4>
                                                        <p>{faqs.contanct_info.location}</p>
                                                    </div>
                                                </div>
                                                <div className="support-phone support-boxes">
                                                    <div className="support-box-icon">
                                                        <Phone size={40} />
                                                    </div>
                                                    <div className="support-box-info">
                                                        <h4>Телефон</h4>
                                                        <p>{faqs.contanct_info.phone}</p>
                                                    </div>
                                                </div>
                                                <div className="support-email support-boxes">
                                                    <div className="support-box-icon">
                                                        <Mail size={40} />
                                                    </div>
                                                    <div className="support-box-info">
                                                        <h4>Email</h4>
                                                        <p>2texnikumi@gmail.com</p>
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                        <div className="support-contact-main-btm">
                                            <div className="support-work-hour-headline">
                                                <h4>
                                                    {t("support-faq.work-hours")}
                                                </h4>
                                            </div>
                                            <div className="support-work-hour-btm">
                                                <div className="swork-hour-left">
                                                    <h5>
                                                        {t("Администрация")}
                                                    </h5>
                                                    <div className="swork-hour-ph">
                                                        <p>
                                                            Понедельник - Пятница: 8:00 - 17:00
                                                            Суббота - Воскресенье: Закрыто
                                                        </p>

                                                    </div>
                                                </div>
                                                <div className="swork-hour-right">
                                                    <h5>
                                                        Учебные часы
                                                    </h5>
                                                    <div className="swork-hour-ph">
                                                        <p>
                                                            Понедельник - Пятница: 8:00 - 15:30
                                                            Суббота - Воскресенье: Закрыто
                                                        </p>

                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}

export default Support;