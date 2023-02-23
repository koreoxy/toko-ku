import styles from './styles.module.scss';
import DotLoader from 'react-spinners/DotLoader';
export default function DotLoaderSpinner({ loading }) {
  return (
    <div className={styles.loader}>
      <DotLoader color="#38E54D" loading={loading} />
    </div>
  );
}
