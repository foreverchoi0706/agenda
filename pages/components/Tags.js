import styles from "../../styles/components/Tags.module.scss";

const Tag = ({ arg }) => {
  return (
    <strong
      className={styles.Tag}
      style={{
        backgroundColor: "#" + (((1 << 24) * Math.random()) | 0).toString(16),
        opacity : 0.8,
      }}
    >
      {arg}
    </strong>
  );
};

const Tags = ({ args }) => {
  return (
    <div className={styles.Tags}>
      {args.map((arg) => (
        <Tag arg={arg} />
      ))}
    </div>
  );
};

export default Tags;
