import React from "react";
import PropTypes from "prop-types";
import Friends from './friends.json'
import styles from './FriendList.module.css';

const FriendList = ({ friends }) => (
    <ul className="friendList">
    {Friends.map(({ avatar , name , isOnline , id }) => (
        <li className={styles.item}>
         <img className={styles.avatar} src={avatar} alt="User avatar" width="48" />
         <p className={styles.name}>
         <span
           className={`${styles.status} ${isOnline ? styles.online : styles.offline}`}>{name}</span></p>
       </li>

    ))} 
</ul>
  );
  
  FriendList.propTypes = {
    friends: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        avatar: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
      }),
    ).isRequired,
  };
  
  export default FriendList;