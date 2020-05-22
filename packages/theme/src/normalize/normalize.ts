export const normalizedCss: string = `
    /* Normalize.css */
    /* Contents of this file must be inlined to your newsletter in production */

    h1 a,
    h2 a,
    h3 a,
    h4 a,
    h5 a,
    h6 a,
    li a,
    p a {
        /* Set sexy underline styling for links except images */
        text-decoration: none;
        color: #2837b8 !important;
        border-bottom: #d3d6f0 1px solid;
    }
    h1 {
        /* Mail.ru <h1> styling fix */
        font-size: 2em;
        line-height: initial;
        margin: 0.67em 0;
        padding: 0;
    }
    table {
        /* Null tables spaces */
        border-spacing: 0;
        border-collapse: collapse;
    }
    table td {
        padding: 0;
    }
    table th {
    padding: 0;
        ont-weight: normal;
    }
    img {
        /* Flexible images fix + prevent any borders for images */
        max-width: 100%;
        border: 0;
        outline: 0;
        /* Set image's ALT text styling */
        color: #2837b8;
        font-size: 14px;
    }
    ol,
    ul {
        /* We don't touch horizontal margins to prevent hiding bullets in Oultook */
        margin-top: 1em;
        margin-bottom: 2em;
    }
    ol li,
    ul li {
        line-height: 1.6em;
        margin: 0.5em 0;
    }
    p {
        line-height: 1.6em;
        margin: 1em 0;
    }
    span.code {
        /* Monospace emphasis for code examples */
        font-family: consolas, courier, monospace;
        color: grey;
    }
`;
