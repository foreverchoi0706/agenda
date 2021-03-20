import styles from "../../styles/components/Tags.module.scss";

const Tag = ({ arg }) => {
  return (
    <strong
      className={styles.Tag}
      style={{
        backgroundColor: `#${(0x1000000 + Math.random() * 0xffffff).toString(16).substr(1, 6)}`,
        opacity: 0.8,
      }}
    >
      {arg}
    </strong>
  );
};

const Tags = ({ args }) => {
  return (
    <div className={styles.Tags}>
      {args && args.map((arg, index) => <Tag key={index} arg={arg} />)}
    </div>
  );
};

export default Tags;
