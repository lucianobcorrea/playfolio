export function selectStatusClass(status) {
    let className = 'game-status';

    if (status === 'ONGOING') {
      className = 'ongoing game-status';
    } else if (status === 'COMPLETE') {
      className = 'complete game-status';
    } else {
      className = 'finished game-status';
    }

    return className;
  }