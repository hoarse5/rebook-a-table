import React from "react";

function Footer() {
  return (
    <footer>
      <a id="footer"></a>
      <p>
        Visit us every day between 10am and 10pm at:
        <span> 2000 Malcolm Blvd New York, NY 10027</span>
      </p>
      <div className="social">
        <svg
          id="phone"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          ></path>
        </svg>
        <svg
          id="mail"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          ></path>
        </svg>

        <svg
          id="facebook"
          height="512px"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="_x38_0-facebook">
            <g>
              <g>
                <path
                  d="M375.301,181.236h-89.475v-59.813c0-16.51,13.359-29.908,29.828-29.908h29.824V16.75h-59.652   
                    c-49.42,0-89.475,40.162-89.475,89.718v74.768h-59.654V256h59.654v239.25h89.475V256h59.652L375.301,181.236z
                     M375.301,181.236"
                />
              </g>
            </g>
          </g>
          <g id="Layer_1" />
        </svg>

        <svg
          id="twitter"
          height="512px"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M4,440.5c55.6,5,105.7-9,151.3-43.2c-47.7-4.2-79.6-28-97.4-72.6c15.6,1.9,30.2,2.4,45.7-1.8   c-51.4-16-78.8-49.6-82.5-103.8c15.4,7.2,29.9,12.4,47,12.6c-30.5-22.9-46.1-52.6-45.5-90c0.3-17.2,4.9-33.4,14-48.7   C93.1,159.1,164,195.7,251.3,201.8c-0.5-3.8-0.8-6.8-1.2-9.9c-7.2-55.4,28.8-105.8,83.8-116.3c34.5-6.6,65,2.5,90.8,26.3   c4,3.6,7.4,4.4,12.4,3.1c20.1-5.1,39.2-12.5,57.7-22.5c-7.1,23.4-21.7,41-41.5,55.8c4.5-0.8,9.1-1.4,13.6-2.3   c4.7-1,9.4-2.1,14.1-3.4c4.5-1.2,8.9-2.6,13.3-4.1c4.5-1.5,9-3.2,14.3-4.1c-2.6,3.6-5.1,7.4-7.9,10.9c-11.6,14.7-25,27.6-39.7,39.1   c-1.5,1.2-2.8,3.8-2.7,5.6c0.8,35.5-4.2,70.1-15.7,103.7c-22.6,66.2-62,119.8-121.1,158.1c-29.2,18.9-61.1,31.3-95.2,38.5   c-33.8,7.1-67.8,8.4-101.9,4.4c-34.2-4-66.7-14.1-97.3-29.9c-8.1-4.1-15.9-8.7-23.8-13.1C3.6,441.3,3.8,440.9,4,440.5z" />
          </g>
        </svg>

        <svg
          id="instagram"
          height="512px"
          version="1.1"
          viewBox="0 0 512 512"
          width="512px"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g>
            <path d="M505,257c0,34.8-0.7,69.7,0.2,104.5c1.5,61.6-37.2,109.2-86.5,130.4c-19.8,8.5-40.6,13-62.1,13c-67.3,0.1-134.7,1-202-0.3   c-50.7-1-92.4-22.2-122.3-64c-15.7-22-23.2-47-23.2-74.1c0-71.7,0-143.3,0-215c0-58.5,28.5-99.4,79.1-126C110.2,14,134.1,9.1,159,9   c65.3,0,130.7-0.4,196,0.2c50.7,0.4,93,19.8,124.2,60.6c17.4,22.8,25.8,49,25.8,77.8C505,184,505,220.5,505,257z M46,257   c0,36.7,0,73.3,0,110c0,16.4,3.8,31.8,12.3,45.7c22.3,36.5,56,54.3,97.8,55c67.1,1,134.3,0.4,201.5,0.2c16.5,0,32.5-3.4,47.4-10.5   c40.6-19.4,63.3-50.3,63.1-96.7c-0.4-71-0.1-142-0.1-213c0-20.1-5.7-38.5-17.6-54.7c-23-31.1-54.8-46.4-92.8-46.8   c-67-0.8-134-0.3-201-0.2c-14.3,0-28.1,2.9-41.5,7.9c-36.8,13.7-71,48.4-69.4,99.5C46.9,188,46,222.5,46,257z" />
            <path d="M257.6,363c-64.5,0-116.5-51.4-116.6-115.4c-0.1-63,52.3-114.6,116.4-114.6c64.3-0.1,116.5,51.4,116.6,114.9   C374,311.3,321.9,362.9,257.6,363z M257.6,326c43.9,0,79.5-35.1,79.4-78.3c-0.1-42.8-35.7-77.8-79.4-77.8   c-43.9,0-79.7,34.9-79.7,78C178,291.1,213.7,326.1,257.6,326z" />
            <path d="M387.5,98c13.5,0,24.5,11.5,24.5,25.6c-0.1,14.1-11.2,25.5-24.7,25.4c-13.3-0.1-24.2-11.5-24.2-25.3   C363,109.6,374,98,387.5,98z" />
          </g>
        </svg>
      </div>
      <p>
        Copyright &copy; {new Date().getFullYear()} Morchella Esculenta. All
        Rights Reserved
      </p>
    </footer>
  );
}

export default Footer;
