export const normalizeOutlookCss: string = `
    /* Outlook.css */
    /* Contents of this file must be placed between <style> tags with conditional comment in <head> of your newsletter in production */

    /* Remove space around the email design. */
    html,
    body {
        margin: 0 auto !important;
        padding: 0 !important;
        height: 100% !important;
        width: 100% !important;
    }

    body {
      /* Reset font styling. Useful when we links custom fonts to our newsletter */
      font-family: Helvetica, Arial, sans-serif;
    }

    a {
      /* Reset default links styling */
      color: #2837b8;
      text-decoration: underline;
    }

    h1, h2, h3, h4, h5, h6 {
      /* Reset default headings margin */
      margin: .5em 0;
    }

    img {
      /* Scaled images fix */
      -ms-interpolation-mode: bicubic;
    }

    table {
      /* Null tables spaces */
      border-collapse: collapse;
    }

    /* Stop Outlook from adding extra spacing to tables. */
    table,
    td {
        mso-table-lspace: 0pt !important;
        mso-table-rspace: 0pt !important;
    }

    /* Use a better rendering method when resizing images in Outlook IE. */
    img {
        -ms-interpolation-mode:bicubic;
    }

    /* Prevent Windows 10 Mail from underlining links. Styles for underlined links should be inline. */
    a {
        text-decoration: none;
    }

    /* Stop Outlook resizing small text. */
    * {
        -ms-text-size-adjust: 100%;
    }
`;
