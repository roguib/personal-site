import "./editor.css";
import React from "react";
import hljs from "highlight.js";

class Editor extends React.Component {
  constructor(props) {
    super(props);
    this.state = { code: "" };
  }

  componentDidMount() {
    this.updateCodeSyntaxHighlighting();
    this.typeCode();
  }

  componentDidUpdate() {
    this.updateCodeSyntaxHighlighting();
  }

  async typeCode() {
    // we'll read this from a json file or smth
    const code = `// It returns the location of an element in sorted array 
// arr[left..right], left <= elem <= right if is present,
// otherwise returns -1
const binarySearch = (arr, left, right, elem) => {
    if (right >= left) {
        let middle = left + Math.floor((right - left) / 2);

        if (arr[middle] == elem) {
          return middle;
        }
        if (arr[middle] > elem) {
          return binarySearch(arr, left, middle - 1, elem);
        }
        return binarySearch(arr, middle, right, elem);
    }
    return -1;
};
  
let arr = [5, 7, 14, 24, 53];
console.log(binarySearch(arr, 0, arr.length, 14));`;
    let splittedCode = code.split("");
    while (splittedCode.length > 0) {
      const char = splittedCode[0];
      splittedCode = splittedCode.slice(1);
      setTimeout(() => {
        this.setState({ code: this.state.code + char });
      }, 500);
      const date = new Date();
      await this.sleep(25);
    }
  }

  sleep(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("pre code").forEach((block) => {
      hljs.highlightBlock(block);
    });
  };

  render() {
    return (
      <div className="editor">
        <div className="header">
          <div className="window-btns">
            <div className="btn btn-close"></div>
            <div className="btn btn-minimize"></div>
            <div className="btn btn-maximize"></div>
          </div>
        </div>
        <div className="tabs">
          <div className="tab">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              aria-label="Icon for js language"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M208 88.001h-80v212.498c0 52.58-18.032 67.261-49.412 67.261-14.705 0-27.948-2.521-38.25-6.063L32 423.904C46.7 428.966 69.259 432 86.907 432 158.955 432 208 398.129 208 301.02V88.001zM382.463 80C305.02 80 256 123.998 256 182.154c0 50.083 37.751 81.44 92.641 101.665 39.7 14.158 55.392 26.808 55.392 47.539 0 22.756-18.139 37.425-52.448 37.425-31.863 0-60.789-10.64-80.394-21.255v-.021L256 410.727c18.639 10.638 53.441 21.255 91.167 21.255C437.854 431.98 480 383.43 480 326.284c0-48.55-26.958-79.9-85.278-102.163-43.139-17.191-61.27-26.795-61.27-48.542 0-17.2 15.688-32.869 48.043-32.869 31.846 0 53.744 10.707 66.505 17.291l19.125-64C447.125 87.22 420.188 80 382.463 80z"></path>
            </svg>

            <span>dicSearch.js</span>
          </div>
        </div>
        <div className="wrapper">
          <div className="side-btns">
            <div className="side-btns-wrapper">
              <svg
                className="side-btns-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M17.5 0h-9L7 1.5V6H2.5L1 7.5v15.07L2.5 24h12.07L16 22.57V18h4.7l1.3-1.43V4.5L17.5 0zm0 2.12l2.38 2.38H17.5V2.12zm-3 20.38h-12v-15H7v9.07L8.5 18h6v4.5zm6-6h-12v-15H16V6h4.5v10.5z"></path>
              </svg>

              <svg
                className="side-btns-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15.25 0a8.25 8.25 0 0 0-6.18 13.72L1 22.88l1.12 1 8.05-9.12A8.251 8.251 0 1 0 15.25.01V0zm0 15a6.75 6.75 0 1 1 0-13.5 6.75 6.75 0 0 1 0 13.5z"></path>
              </svg>

              <svg
                className="side-btns-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M21.007 8.222A3.738 3.738 0 0 0 15.045 5.2a3.737 3.737 0 0 0 1.156 6.583 2.988 2.988 0 0 1-2.668 1.67h-2.99a4.456 4.456 0 0 0-2.989 1.165V7.4a3.737 3.737 0 1 0-1.494 0v9.117a3.776 3.776 0 1 0 1.816.099 2.99 2.99 0 0 1 2.668-1.667h2.99a4.484 4.484 0 0 0 4.223-3.039 3.736 3.736 0 0 0 3.25-3.687zM4.565 3.738a2.242 2.242 0 1 1 4.484 0 2.242 2.242 0 0 1-4.484 0zm4.484 16.441a2.242 2.242 0 1 1-4.484 0 2.242 2.242 0 0 1 4.484 0zm8.221-9.715a2.242 2.242 0 1 1 0-4.485 2.242 2.242 0 0 1 0 4.485z"></path>
              </svg>

              <svg
                className="side-btns-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10.94 13.5l-1.32 1.32a3.73 3.73 0 0 0-7.24 0L1.06 13.5 0 14.56l1.72 1.72-.22.22V18H0v1.5h1.5v.08c.077.489.214.966.41 1.42L0 22.94 1.06 24l1.65-1.65A4.308 4.308 0 0 0 6 24a4.31 4.31 0 0 0 3.29-1.65L10.94 24 12 22.94 10.09 21c.198-.464.336-.951.41-1.45v-.1H12V18h-1.5v-1.5l-.22-.22L12 14.56l-1.06-1.06zM6 13.5a2.25 2.25 0 0 1 2.25 2.25h-4.5A2.25 2.25 0 0 1 6 13.5zm3 6a3.33 3.33 0 0 1-3 3 3.33 3.33 0 0 1-3-3v-2.25h6v2.25zm14.76-9.9v1.26L13.5 17.37V15.6l8.5-5.37L9 2v9.46a5.07 5.07 0 0 0-1.5-.72V.63L8.64 0l15.12 9.6z"></path>
              </svg>

              <svg
                className="side-btns-icon"
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 24 24"
                height="100%"
                width="100%"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.5 1.5L15 0h7.5L24 1.5V9l-1.5 1.5H15L13.5 9V1.5zm1.5 0V9h7.5V1.5H15zM0 15V6l1.5-1.5H9L10.5 6v7.5H18l1.5 1.5v7.5L18 24H1.5L0 22.5V15zm9-1.5V6H1.5v7.5H9zM9 15H1.5v7.5H9V15zm1.5 7.5H18V15h-7.5v7.5z"
                ></path>
              </svg>
            </div>
          </div>
            <pre className="code">
              <code class="language-javascript">{this.state.code}</code>
            </pre>
        </div>
      </div>
    );
  }
}
export default Editor;
