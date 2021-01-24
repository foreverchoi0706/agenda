import React, { memo } from "react";

import "../styles/Modal.scss";

const Modal = ({ src, name, description, link, git, skills }) => {
  return (
    <div className="Modal">
      <div className="Modal-contents">
        <h2>{name}</h2>
        <hr />
        <div className="Modal-container">
          <div className="Modal-subject">
            <div className="Modal-detail">
              <img src={src} alt={name} />
              <strong>{description}</strong>
            </div>
            <nav>
              {name !== "For you" ? (
                <a href={link} target="blank">
                  👉사이트 바로가기👈
                </a>
              ) : (
                <a href={link} target="blank">
                  👉소개영상 바로가기👈
                </a>
              )}

              {git && (
                <a href={git} target="blank">
                  👉Github바로가기👈
                </a>
              )}
            </nav>
          </div>

          <div className="Modal-skills">
            {skills.map((skill, index) => (
              <span key={index}>{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Modal);
