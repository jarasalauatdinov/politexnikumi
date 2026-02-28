import { Flex, Image, Loader, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { useNavigate, useOutletContext, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { api } from "../../../api/api";
import "../News.scss";
import { useTranslation } from "react-i18next";

const ReadNews = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const { darkMode } = useOutletContext();
    const { t, i18n } = useTranslation();
    const language = i18n.language || "ru";

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const goBack = () => navigate(-1);

    useEffect(() => {
        const getData = async () => {
            setLoading(true);
            try {
                const res = await api.get(`/news/${id}`);
                setData(res.data.data);
            } catch (err) {
                console.error(err);
            } finally {
                setLoading(false);
            }
        };
        getData();
    }, [id]);

    if (loading) {
        return (
            <Flex justify="center" align="center" style={{ height: "200px" }}>
                <Loader variant="dots" size="lg" />
            </Flex>
        );
    }

    if (!data) return null;

    return (
        <main className={`read-news-dark${darkMode ? " dark" : ""}`}>
            <section>
                <div className="container">
                    <div className="read-news">
                        <div className="back-btn">
                            <button onClick={goBack} className="back-btn">
                                <ArrowLeft size={14} /> {t("news-page.back-btn")}
                            </button>
                        </div>
                        <h1>{data.title?.[language]}</h1>

                        <div className="news-main">
                            <div className="news-main-img"
                                style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    flexWrap: "wrap",
                                    gap: "15px",
                                    marginTop: "20px",
                                }}
                            >
                                <div className="extra-images">
                                    {data.cover_images?.map((img) => (
                                        <div key={img.id} className="extra-img">
                                            <Image src={img.path} alt="extra" radius="md" />
                                        </div>
                                    ))}
                                </div>

                            </div>
                            <p>{data.content?.[language]}</p>
                            <Text className="data-author">
                                {new Date(data.created_at).toLocaleDateString(language, {
                                    year: "numeric",
                                    month: "2-digit",
                                    day: "2-digit",
                                })}
                                {" - "}
                                {data.author?.full_name?.[language]}
                            </Text>


                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default ReadNews;
