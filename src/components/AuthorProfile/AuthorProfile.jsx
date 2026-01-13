import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import "./AuthorProfile.scss";

/**
 * Reusable component for displaying author avatar and username with link
 * @param {string} author - The author's username
 * @param {string} className - Additional CSS classes
 * @param {boolean} showAvatar - Whether to show the avatar image (default: true)
 */
function AuthorProfile({ author, className = "", showAvatar = true }) {
  if (!author) return null;

  return (
    <Link
      to={`/p/${author}`}
      className={`author-profile ${className}`}
      onClick={(e) => e.stopPropagation()}
    >
      {showAvatar && (
        <img
          className="author-avatar"
          src={`https://images.hive.blog/u/${author}/avatar`}
          alt={author}
        />
      )}
      <span className="author-name">{author}</span>
    </Link>
  );
}

AuthorProfile.propTypes = {
  author: PropTypes.string.isRequired,
  className: PropTypes.string,
  showAvatar: PropTypes.bool,
};

export default AuthorProfile;
