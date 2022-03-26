import React, { useState } from 'react';

import styles from './Counter.module.css';

export function Counter() {
  const [incrementAmount, setIncrementAmount] = useState('2');



  return (
    <div>
      <div className={styles.row}>

      </div>
      <div className={styles.row}>
        <input
          className={styles.textbox}
          aria-label="Set increment amount"
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        
      </div>
    </div>
  );
}
