export const extra = `
    /* Extra.css */
    /* Contents of this file must be placed between <style> tags in <head> of your newsletter in production */

    @media screen and (max-width: 600px) {
      u + .body {
        /* iOS Gmail viewport fix */
        /* Make sure that your body element has .body class */
        width: 100vw !important;
      }
    }

    a[x-apple-data-detectors=true] {
      /* Set default text color inheritance for auto-detected iOS links like date, time, address, etc */
      color: inherit !important;
      text-decoration: inherit !important;
      border-bottom: none !important;
    }
    
    body {
      /* Set native platform font styling */
      font-family: -apple-system, BlinkMacSystemFont, Roboto, Helvetica, Arial, sans-serif;
      font-size: 16px;
      color: black;
    }
    
    .webkit {
      /* Webkit and Microsoft font-size fix */
      width: 100%;
      table-layout: fixed;
      -webkit-text-size-adjust: 100%;
      -ms-text-size-adjust: 100%;
    }
`;
