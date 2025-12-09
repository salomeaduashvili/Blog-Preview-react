import "./Card.css";

export default function Card() {
  return (
    <main>
      <div>
        <img
          src="./images/illustration-article.svg"
          alt="illustration-article"
          className="main-img"
        />
      </div>

      <div className="content">
        <span>Learning</span>
        <p className="published">Published 21 Dec 2023</p>
        <h2>HTML & CSS foundations</h2>
        <p className="describtion">
          These languages are the backbone of every website, defining structure,
          content, and presentation.
        </p>
      </div>
      <div className="profile">
        <img src="./images/image-avatar.webp" alt="image-avatar" />
        <p className="profile-name">Greg Hooper</p>
      </div>
    </main>
  );
}
