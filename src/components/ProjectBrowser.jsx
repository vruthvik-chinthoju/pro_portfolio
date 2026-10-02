import "./css/ProjectBrowser.css";

export default function ProjectBrowser({ image, url, alt }) {
    const displayUrl = url
        ?.replace(/^https?:\/\//, "")
        .replace(/\/$/, "");

    return (
        <div className="browser-card">

            <div className="browser-header">

                <div className="browser-dots">
                    <span className="browser-dot red"></span>
                    <span className="browser-dot yellow"></span>
                    <span className="browser-dot green"></span>
                </div>

                <div className="browser-url">
                    <span className="browser-lock">🔒</span>
                    <span>{displayUrl}</span>
                </div>

                <div className="browser-more">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>

            </div>

            <div className="browser-screen">
                <img
                    src={image}
                    alt={alt}
                />
            </div>

        </div>
    );
}