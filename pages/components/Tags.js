import styles from "../../styles/components/Tags.module.scss";

function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

const Tag = ({ arg }) => {
  return (
    <strong
      className={styles.Tag}
      style={{
        backgroundColor: random_rgba(),
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
