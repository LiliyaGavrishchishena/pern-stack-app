// import React, { Component } from 'react';

// export default class Modal extends Component {
//   render() {
//     return (
//       <div className={styles.overlay}>
//         <div className={styles.dialog}>Modal</div>
//       </div>
//     );
//   }
// }

import React, { Component } from 'react';

export default class Modal extends Component {
  listenKeyboard(event) {
    if (event.key === 'Escape' || event.keyCode === 27) {
      this.props.onClose();
    }
  }

  render() {
    return (
      <div className={styles.overlay}>
        // <div className={styles.dialog}>Modal</div>
        //{' '}
      </div>
    );
  }
}
