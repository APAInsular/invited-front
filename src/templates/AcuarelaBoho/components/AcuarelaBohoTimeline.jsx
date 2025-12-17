import styles from '../styles/AcuarelaBohoTimeline.css';

const AcuarelaBohoTimeline = ({ events, text }) => {
    return (
        <div className={styles.timelineContainer}>
            <h2 className="section-title text-center mb-5">{text.title}</h2>
            <div className={styles.timeline}>
                {events.map((event, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.timelineDot}></div>
                        <div className={styles.timelineContent}>
                            <h5>{event.name}</h5>
                            <p>
                                {event.location.city}<br />
                                {event.location.country}<br />
                                🕒 {event.time.slice(0, 5)}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AcuarelaBohoTimeline;
