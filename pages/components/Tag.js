import styles from "../../styles/components/Tag.module.scss";

export const Tag = ({ name, bg_color, color }) => {
  return (
    <strong
      className={styles.Tag}
      style={{
        backgroundColor: bg_color,
        color,
      }}
    >
      {name}
    </strong>
  );
};

export default Tag;