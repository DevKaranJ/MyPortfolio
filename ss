/* desktop version query */

@media (min-width: 768px) {
  .bck {
    background: url(./resources/Header-llustration-desktop@2x.png);
    background-repeat: no-repeat;
    background-size: cover;
    padding-top: 204px;
    padding-left: 20px;
    padding-right: 20px;
    background-position: center;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .myrecentworkline {
    display: none;
  }

  .first-heading h1 {
    text-align: center;
    font-size: 48px;
    font-weight: 800;
    line-height: 60px;
    color: #172b4d;
    margin-top: 14px;
    margin-bottom: 10px;
    width: 595px;
    height: 136px;
  }

  .first-heading h1 span {
    color: #36b37e;
  }

  .content,
  .content p {
    font-size: 20px;
    font-weight: 400;
    line-height: 28px;
    color: #172b4d;
    margin: 0 auto;
    padding: 0 20px;
    width: 546px;
    height: 316px;
    margin-bottom: -40px;
  }

  .content {
    margin-top: 1.25rem;
    text-align: center;
  }

  .social {
    display: flex;
    justify-content: center;
    position: relative;
    top: -84px;
  }

  .social ul {
    display: flex;
    flex-direction: row;
    list-style: none;
    margin-top: 15px;
  }

  .social ul li {
    margin: 0 15px;
  }

  .scroll-button {
    display: flex;
  }
}

/* First page */

@media (min-width: 1024px) {
  .projects img {
    display: none;
  }
}

@media (min-width: 768px) {
  .about-me h2 {
    width: 447px;
    height: 48px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 700;
    font-size: 40px;
    line-height: 52px;
    color: #172b4d;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 100px;
    position: relative;
    margin-left: auto;
    margin-right: auto;
    
  }

  .about-me p {
    width: 920px;
    height: 96px;
    font-family: "Inter", sans-serif;
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 32px;
    color: #42526e;
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }

  .resume-button {
    border: none;
    border-radius: 8px;
    background-color: #36b37e;
    font-style: normal;
    font-weight: 500;
    font-size: 25px;
    margin-top: 50px;
    margin-bottom: 20px;
    line-height: 24px;
    display: flex;
    align-items: center;
    transition: box-shadow 0.3s ease;
  }

  /* resume button */

  /* resume ani end */

  .resume-button img {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
  }

  .project-card {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    height: 1000px;
    width: 950px;
    left: -22px;
    top: 35px;
    border-radius: 0;
    gap: 10px
  }
}
